import { expect, test } from "@playwright/test";
import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const VIEWPORTS = [
  { width: 1920, height: 1080 },
  { width: 800, height: 600 },
  { width: 1440, height: 900 },
  { width: 440, height: 956 },
  { width: 1280, height: 800 },
  { width: 3440, height: 1440 },
  { width: 1280, height: 720 },
] as const;

const APP_DIRECTORY = join(process.cwd(), "src", "app");

function discoverStaticRoutes(directory = APP_DIRECTORY): string[] {
  const routes: string[] = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("[") || entry.name.startsWith("@")) continue;
      routes.push(...discoverStaticRoutes(entryPath));
      continue;
    }

    if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue;

    const segments = relative(APP_DIRECTORY, directory)
      .split(sep)
      .filter(Boolean)
      .filter((segment) => !(segment.startsWith("(") && segment.endsWith(")")));

    routes.push(segments.length === 0 ? "/" : `/${segments.join("/")}`);
  }

  return routes.sort();
}

const ROUTES = discoverStaticRoutes();

test.describe("responsive compatibility", () => {
  for (const viewport of VIEWPORTS) {
    test(`${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ reducedMotion: "reduce" });

      const browserErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") browserErrors.push(message.text());
      });
      page.on("pageerror", (error) => browserErrors.push(error.message));

      for (const route of ROUTES) {
        browserErrors.length = 0;

        const response = await page.goto(route, { waitUntil: "domcontentloaded" });
        expect(response, `${route} did not return a document response`).not.toBeNull();
        expect(response?.status(), `${route} returned an error response`).toBeLessThan(400);

        await page.evaluate(() => document.fonts.ready);

        const audit = await page.evaluate(() => {
          const root = document.documentElement;
          const viewportWidth = root.clientWidth;

          const isVisible = (element: Element) => {
            const style = getComputedStyle(element);
            const bounds = element.getBoundingClientRect();
            return (
              style.display !== "none" &&
              style.visibility !== "hidden" &&
              bounds.width > 0 &&
              bounds.height > 0
            );
          };

          const summarize = (element: Element) => {
            const bounds = element.getBoundingClientRect();
            return {
              tag: element.tagName.toLowerCase(),
              text: (element.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 80),
              left: Math.round(bounds.left),
              right: Math.round(bounds.right),
            };
          };

          const boundedElements = Array.from(
            document.querySelectorAll(
              "a, button, input, select, textarea, [role='button'], h1, h2, h3, img, video, canvas",
            ),
          ).filter(isVisible);

          const outOfBounds = boundedElements
            .filter((element) => {
              if (element.closest("[data-responsive-scroll]")) return false;
              const bounds = element.getBoundingClientRect();
              return bounds.left < -2 || bounds.right > viewportWidth + 2;
            })
            .map(summarize);

          const clippedText = Array.from(
            document.querySelectorAll("h1, h2, h3, p, li, a, button, dt, dd, figcaption"),
          )
            .filter(isVisible)
            .filter((element) => {
              const htmlElement = element as HTMLElement;
              if (htmlElement.closest("[data-responsive-scroll]")) return false;
              const overflow = getComputedStyle(htmlElement).overflowX;
              const clipsContent = overflow === "hidden" || overflow === "clip";
              return (
                clipsContent &&
                htmlElement.clientWidth > 0 &&
                htmlElement.scrollWidth > htmlElement.clientWidth + 2
              );
            })
            .map(summarize);

          const header = Array.from(document.querySelectorAll("header"))
            .filter(isVisible)
            .find((element) => {
              const position = getComputedStyle(element).position;
              return position === "fixed" || position === "sticky";
            });
          const firstHeading = Array.from(document.querySelectorAll("main h1, main h2")).find(isVisible);
          const headerOverlap = Boolean(
            header &&
              firstHeading &&
              firstHeading.getBoundingClientRect().top < header.getBoundingClientRect().bottom - 2,
          );

          return {
            horizontalOverflow: root.scrollWidth > root.clientWidth + 1,
            outOfBounds,
            clippedText,
            headerOverlap,
            mainHeight: Math.round(document.querySelector("main")?.getBoundingClientRect().height ?? 0),
          };
        });

        const label = `${route} at ${viewport.width}x${viewport.height}`;
        expect(audit.horizontalOverflow, `${label} has horizontal document overflow`).toBe(false);
        expect(audit.outOfBounds, `${label} has content outside the viewport`).toEqual([]);
        expect(audit.clippedText, `${label} has clipped text`).toEqual([]);
        expect(audit.headerOverlap, `${label} has fixed navigation covering its first heading`).toBe(false);
        expect(audit.mainHeight, `${label} rendered an empty main region`).toBeGreaterThan(100);
        expect(browserErrors, `${label} emitted browser errors`).toEqual([]);
      }
    });
  }
});
