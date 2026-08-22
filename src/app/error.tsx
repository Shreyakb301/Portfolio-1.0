"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    trackEvent("route_error", {
      error_type: error.name || "route_error",
      error_digest: error.digest || "not_available",
    })
  }, [error])

  const retry = () => {
    trackEvent("error_retry")
    reset()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-foreground">
      <div className="max-w-[520px]">
        <p className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">
          Something went wrong
        </p>
        <h1 className="mb-6 text-4xl">This page hit an unexpected problem.</h1>
        <p className="mb-8 text-muted-foreground">
          You can safely try loading this section again.
        </p>
        <button
          type="button"
          className="btn"
          data-analytics-ignore
          onClick={retry}
        >
          Try again
        </button>
      </div>
    </main>
  )
}
