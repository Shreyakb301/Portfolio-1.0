"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useReportWebVitals } from "next/web-vitals"
import {
  analyticsEnabled,
  analyticsText,
  trackEvent,
  type AnalyticsParameters,
} from "@/lib/analytics"

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input[type='button'], input[type='submit']"
const TIME_MILESTONES_SECONDS = [10, 30, 60, 120, 300]
const SCROLL_MILESTONES = [25, 50, 75, 90, 100]
const MAX_ERRORS_PER_PAGE = 10

type WebVitalsReporter = Parameters<typeof useReportWebVitals>[0]

const reportWebVitals: WebVitalsReporter = (metric) => {
  trackEvent("web_vital", {
    metric_name: metric.name.toLowerCase(),
    metric_rating: metric.rating,
    metric_value: Math.round(
      metric.name === "CLS" ? metric.value * 1000 : metric.value,
    ),
  })
}

function sectionName(element: Element | null) {
  const section = element?.closest<HTMLElement>(
    "[data-analytics-section], section",
  )
  if (!section) return "global"

  const heading = section.querySelector<HTMLElement>("h1, h2, h3")
  return analyticsText(
    section.dataset.analyticsSection ||
      section.getAttribute("aria-label") ||
      heading?.textContent ||
      section.id,
    "unnamed_section",
  )
}

function surfaceName(element: Element) {
  const explicit = element.closest<HTMLElement>("[data-analytics-surface]")
    ?.dataset.analyticsSurface

  if (explicit) return analyticsText(explicit)
  if (element.closest("header")) return "header"
  if (element.closest("footer")) return "footer"
  if (element.closest("nav")) return "navigation"
  return sectionName(element)
}

function elementLabel(element: HTMLElement) {
  return analyticsText(
    element.dataset.analyticsLabel ||
      element.getAttribute("aria-label") ||
      element.getAttribute("title") ||
      element.textContent,
    "unlabeled_control",
  )
}

function linkDetails(anchor: HTMLAnchorElement): AnalyticsParameters {
  const rawHref = anchor.getAttribute("href") || ""

  if (rawHref.startsWith("mailto:")) {
    return {
      destination: "email",
      destination_type: "email",
      outbound: true,
    }
  }

  if (rawHref.startsWith("tel:")) {
    return {
      destination: "phone",
      destination_type: "phone",
      outbound: true,
    }
  }

  try {
    const url = new URL(rawHref, window.location.href)
    const outbound = url.origin !== window.location.origin
    const file = /\.(pdf|docx?|zip|csv|mp4|mov)$/i.test(url.pathname)

    return {
      destination: outbound
        ? `${url.hostname}${url.pathname}`
        : url.pathname || "/",
      destination_type: file
        ? "file"
        : outbound
          ? "external"
          : "internal",
      link_domain: url.hostname,
      outbound,
    }
  } catch {
    return {
      destination: "invalid_or_dynamic_link",
      destination_type: "unknown",
    }
  }
}

function resourcePath(element: Element) {
  let source = ""

  if (element instanceof HTMLImageElement) source = element.currentSrc || element.src
  if (element instanceof HTMLScriptElement) source = element.src
  if (element instanceof HTMLLinkElement) source = element.href
  if (element instanceof HTMLVideoElement) source = element.currentSrc || element.src
  if (element instanceof HTMLAudioElement) source = element.currentSrc || element.src
  if (element instanceof HTMLSourceElement) source = element.src

  try {
    const url = new URL(source, window.location.href)
    return analyticsText(url.pathname, "unknown_resource")
  } catch {
    return "unknown_resource"
  }
}

function isResourceElement(element: Element) {
  return (
    element instanceof HTMLImageElement ||
    element instanceof HTMLScriptElement ||
    element instanceof HTMLLinkElement ||
    element instanceof HTMLVideoElement ||
    element instanceof HTMLAudioElement ||
    element instanceof HTMLSourceElement
  )
}

function isMeaningfullyVisible(element: Element) {
  const rect = element.getBoundingClientRect()
  if (rect.height <= 0) return false

  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
  )

  return visibleHeight >= Math.min(140, rect.height * 0.2)
}

function observeSections(pathname: string) {
  if (!("IntersectionObserver" in window)) return () => undefined

  const sections = Array.from(
    new Set(
      document.querySelectorAll<HTMLElement>(
        "main section, [data-analytics-section]",
      ),
    ),
  )
  const seen = new Set<Element>()
  const pending = new Map<Element, number>()

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (seen.has(entry.target)) continue

      const visibleEnough = entry.isIntersecting && isMeaningfullyVisible(entry.target)

      if (visibleEnough && !pending.has(entry.target)) {
        const timer = window.setTimeout(() => {
          const section = entry.target as HTMLElement
          pending.delete(section)
          if (!isMeaningfullyVisible(section)) return

          seen.add(section)
          observer.unobserve(section)
          trackEvent("section_view", {
            page_path: pathname,
            section_name: sectionName(section),
            section_order: sections.indexOf(section) + 1,
          })
        }, 800)

        pending.set(entry.target, timer)
      } else if (!visibleEnough) {
        const timer = pending.get(entry.target)
        if (timer) window.clearTimeout(timer)
        pending.delete(entry.target)
      }
    }
  }, { threshold: [0, 0.2, 0.5] })

  sections.forEach((section) => observer.observe(section))

  return () => {
    pending.forEach((timer) => window.clearTimeout(timer))
    observer.disconnect()
  }
}

function observeVideos(pathname: string) {
  if (!("IntersectionObserver" in window)) return () => undefined

  const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("main video"))
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.5) continue

        const video = entry.target as HTMLVideoElement
        observer.unobserve(video)
        trackEvent("media_view", {
          page_path: pathname,
          media_type: "video",
          media_source: resourcePath(video),
          section_name: sectionName(video),
        })
      }
    },
    { threshold: 0.5 },
  )

  videos.forEach((video) => observer.observe(video))
  return () => observer.disconnect()
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useReportWebVitals(reportWebVitals)

  useEffect(() => {
    if (!pathname || !analyticsEnabled()) return

    trackEvent("page_explored", {
      page_path: pathname,
      page_title: analyticsText(document.title),
    })

    const notFoundTimer = window.setTimeout(() => {
      const isNotFound =
        document.title.startsWith("404") ||
        document.body.textContent?.includes("This page could not be found")

      if (isNotFound) {
        trackEvent("page_not_found", {
          page_path: pathname,
          page_title: analyticsText(document.title),
        })
      }
    }, 250)

    const stopObservingSections = observeSections(pathname)
    const stopObservingVideos = observeVideos(pathname)

    const clickHandler = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const interactive = target.closest<HTMLElement>(INTERACTIVE_SELECTOR)
      if (!interactive || interactive.closest("[data-analytics-ignore]")) return

      const explicitEvent = interactive.dataset.analyticsEvent
      const parameters: AnalyticsParameters = {
        page_path: pathname,
        element_type:
          interactive instanceof HTMLAnchorElement ? "link" : "button",
        element_label: elementLabel(interactive),
        section_name: sectionName(interactive),
        surface: surfaceName(interactive),
        project_id: interactive.dataset.analyticsProject,
      }

      if (interactive instanceof HTMLAnchorElement) {
        Object.assign(parameters, linkDetails(interactive))
      }

      trackEvent(explicitEvent || "ui_click", parameters)
    }

    const reportedErrors = new Set<string>()
    let reportedErrorCount = 0
    const reportOnce = (signature: string, parameters: AnalyticsParameters) => {
      if (
        reportedErrors.has(signature) ||
        reportedErrorCount >= MAX_ERRORS_PER_PAGE
      ) {
        return
      }

      reportedErrors.add(signature)
      reportedErrorCount += 1
      trackEvent("client_error", { page_path: pathname, ...parameters })
    }

    const errorHandler = (event: Event | ErrorEvent) => {
      if (event instanceof ErrorEvent) {
        const errorName =
          event.error instanceof Error ? event.error.name : "javascript_error"
        const sourceFile = resourcePathFromString(event.filename)
        reportOnce(`${errorName}:${sourceFile}:${event.lineno}`, {
          error_type: errorName,
          error_source: sourceFile,
          line_number: event.lineno || 0,
          column_number: event.colno || 0,
        })
        return
      }

      const failedElement = event.target
      if (!(failedElement instanceof Element) || !isResourceElement(failedElement)) {
        return
      }

      const path = resourcePath(failedElement)
      reportOnce(`resource:${failedElement.tagName}:${path}`, {
        error_type: "resource_error",
        resource_type: failedElement.tagName.toLowerCase(),
        resource_path: path,
      })
    }

    const rejectionHandler = (event: PromiseRejectionEvent) => {
      const errorName =
        event.reason instanceof Error
          ? event.reason.name
          : typeof event.reason === "string"
            ? "rejected_string"
            : "unhandled_rejection"

      reportOnce(`rejection:${errorName}`, {
        error_type: errorName,
      })
    }

    document.addEventListener("click", clickHandler, true)
    window.addEventListener("error", errorHandler, true)
    window.addEventListener("unhandledrejection", rejectionHandler)

    let activeMilliseconds = 0
    let visibleSince =
      document.visibilityState === "visible" ? performance.now() : null
    let totalStartedAt = performance.now()
    const sentTimeMilestones = new Set<number>()
    let pageTimeSent = false

    const activeTime = () =>
      activeMilliseconds +
      (visibleSince === null ? 0 : performance.now() - visibleSince)

    const pauseActiveTime = () => {
      if (visibleSince === null) return
      activeMilliseconds += performance.now() - visibleSince
      visibleSince = null
    }

    const resumeActiveTime = () => {
      if (visibleSince !== null) return
      visibleSince = performance.now()
    }

    const visibilityHandler = () => {
      if (document.visibilityState === "visible") resumeActiveTime()
      else pauseActiveTime()
    }

    const timeMilestoneTimer = window.setInterval(() => {
      const activeSeconds = Math.floor(activeTime() / 1000)

      for (const milestone of TIME_MILESTONES_SECONDS) {
        if (activeSeconds < milestone || sentTimeMilestones.has(milestone)) continue
        sentTimeMilestones.add(milestone)
        trackEvent("engagement_milestone", {
          page_path: pathname,
          active_time_seconds: milestone,
        })
      }
    }, 1000)

    const sendPageTime = (exitReason: string) => {
      if (pageTimeSent) return
      pauseActiveTime()
      pageTimeSent = true
      trackEvent("page_time", {
        page_path: pathname,
        active_time_seconds: Math.round(activeMilliseconds / 1000),
        total_time_seconds: Math.round((performance.now() - totalStartedAt) / 1000),
        exit_reason: exitReason,
      })
    }

    const pageHideHandler = () => sendPageTime("page_hide")
    const pageShowHandler = (event: PageTransitionEvent) => {
      if (!event.persisted) return

      pageTimeSent = false
      activeMilliseconds = 0
      totalStartedAt = performance.now()
      visibleSince =
        document.visibilityState === "visible" ? performance.now() : null
    }

    document.addEventListener("visibilitychange", visibilityHandler)
    window.addEventListener("pagehide", pageHideHandler)
    window.addEventListener("pageshow", pageShowHandler)

    const sentScrollMilestones = new Set<number>()
    let scrollFrame: number | null = null

    const measureScroll = () => {
      scrollFrame = null
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const depth =
        scrollableHeight <= 0
          ? 0
          : Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100))

      for (const milestone of SCROLL_MILESTONES) {
        if (depth < milestone || sentScrollMilestones.has(milestone)) continue
        sentScrollMilestones.add(milestone)
        trackEvent("scroll_depth", {
          page_path: pathname,
          percent_scrolled: milestone,
        })
      }
    }

    const scheduleScrollMeasurement = () => {
      if (scrollFrame !== null) return
      scrollFrame = window.requestAnimationFrame(measureScroll)
    }

    window.addEventListener("scroll", scheduleScrollMeasurement, { passive: true })
    window.addEventListener("resize", scheduleScrollMeasurement)
    scheduleScrollMeasurement()

    return () => {
      window.clearTimeout(notFoundTimer)
      window.clearInterval(timeMilestoneTimer)
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame)
      stopObservingSections()
      stopObservingVideos()
      document.removeEventListener("click", clickHandler, true)
      window.removeEventListener("error", errorHandler, true)
      window.removeEventListener("unhandledrejection", rejectionHandler)
      document.removeEventListener("visibilitychange", visibilityHandler)
      window.removeEventListener("pagehide", pageHideHandler)
      window.removeEventListener("pageshow", pageShowHandler)
      window.removeEventListener("scroll", scheduleScrollMeasurement)
      window.removeEventListener("resize", scheduleScrollMeasurement)
      sendPageTime("route_change")
    }
  }, [pathname])

  return null
}

function resourcePathFromString(source: string) {
  if (!source) return "unknown_source"

  try {
    return analyticsText(new URL(source, window.location.href).pathname, "unknown_source")
  } catch {
    return "unknown_source"
  }
}
