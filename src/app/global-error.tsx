"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    trackEvent("global_error", {
      error_type: error.name || "global_error",
      error_digest: error.digest || "not_available",
    })
  }, [error])

  const retry = () => {
    trackEvent("global_error_retry")
    reset()
  }

  return (
    <html lang="en">
      <body>
        <main
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            <p>Something went wrong</p>
            <h1>This page hit an unexpected problem.</h1>
            <p>You can safely try loading the site again.</p>
            <button type="button" onClick={retry}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
