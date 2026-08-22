# Portfolio Agent Instructions

## Responsive compatibility gate

Before committing code that will be pushed, verify every changed page at all of these viewport sizes:

- 1920 × 1080
- 800 × 600
- 1440 × 900
- 440 × 956
- 1280 × 800
- 3440 × 1440
- 1280 × 720

Run `npm run test:responsive` before every push. The Playwright suite automatically discovers all static App Router pages and tests them at every viewport above. If Chromium is unavailable locally, install it once with `npx playwright install chromium`.

For route-specific work, test the changed route. For shared layout, navigation, typography, or global-style changes, test `/`, `/work`, and `/about` in addition to the changed route.

At every viewport, confirm:

- The document has no unintended horizontal overflow.
- Fixed or sticky navigation does not cover page content.
- Text remains readable without clipping or overlap.
- Buttons and links remain visible and usable.
- Images, video, charts, and cards fit their containers.
- The browser console has no new errors caused by the change.

Do not push when a responsive regression is still present. In the handoff, list the viewport sizes tested and note any pre-existing issues separately.

## Git workflow

- Keep commit messages to three words or fewer.
- Preserve unrelated user changes in the working tree.
