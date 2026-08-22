export type AnalyticsValue = string | number | boolean

export type AnalyticsParameters = Record<
  string,
  AnalyticsValue | null | undefined
>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const EVENT_NAME_LIMIT = 40
const TEXT_VALUE_LIMIT = 100
const ANALYTICS_HOSTS = new Set(["shreyakb.com", "www.shreyakb.com"])

export function analyticsEnabled() {
  return (
    typeof window !== "undefined" &&
    ANALYTICS_HOSTS.has(window.location.hostname.toLowerCase())
  )
}

export function analyticsText(
  value: string | null | undefined,
  fallback = "unknown",
) {
  const normalized = value
    ?.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[email]")
    .replace(/\s+/g, " ")
    .trim()
  return (normalized || fallback).slice(0, TEXT_VALUE_LIMIT)
}

function eventName(value: string) {
  const normalized = value
    .trim()
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^[^a-zA-Z]+/, "")
    .slice(0, EVENT_NAME_LIMIT)

  return normalized || "portfolio_event"
}

function pageContext(pathname: string): AnalyticsParameters {
  if (pathname === "/") return { page_type: "home" }
  if (pathname === "/about") return { page_type: "about" }
  if (pathname === "/work") return { page_type: "work_index" }

  const projectMatch = pathname.match(/^\/work\/([^/]+)/)
  if (projectMatch) {
    return {
      page_type: "case_study",
      project_id: projectMatch[1].replace(/-/g, "_"),
    }
  }

  return { page_type: "other" }
}

export function trackEvent(
  name: string,
  parameters: AnalyticsParameters = {},
) {
  if (!analyticsEnabled()) return

  const pathname =
    typeof parameters.page_path === "string"
      ? parameters.page_path
      : window.location.pathname

  const combinedParameters: AnalyticsParameters = {
    page_path: pathname,
    ...pageContext(pathname),
  }
  const cleanParameters: Record<string, AnalyticsValue> = {}

  for (const [key, value] of Object.entries(parameters)) {
    if (value !== undefined && value !== null && value !== "") {
      combinedParameters[key] = value
    }
  }

  for (const [key, value] of Object.entries(combinedParameters)) {
    if (value !== undefined && value !== null && value !== "") {
      cleanParameters[key] = value
    }
  }

  const command = ["event", eventName(name), cleanParameters]

  if (typeof window.gtag === "function") {
    window.gtag(...command)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    // gtag.js queues its command arguments object until the tag finishes loading.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }
  window.gtag(...command)
}
