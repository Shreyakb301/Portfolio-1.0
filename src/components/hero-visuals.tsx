"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"

// Matches the first .hero-card-bars chrome dot, so the cells read as part of
// the same window rather than something dropped into it.
const OLIVE = "#3a4b1a"

function usePrefersReducedMotion() {
    return useSyncExternalStore(
        (onChange) => {
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
            mq.addEventListener("change", onChange)
            return () => mq.removeEventListener("change", onChange)
        },
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => false,
    )
}

// A glider: the smallest pattern that travels. Seeding with real Life patterns
// instead of random noise keeps the population tiny without going extinct —
// random sparse fields collapse to nothing within a few generations.
const GLIDER = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
]

function stamp(grid: number[][], pat: number[][], ox: number, oy: number) {
    const h = pat.length
    const w = pat[0].length
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (!pat[y][x]) continue
            const ty = oy + y
            const tx = ox + x
            if (ty < 0 || tx < 0 || ty >= grid.length || tx >= grid[0].length) continue
            grid[ty][tx] = 1
        }
    }
}

function freshGrid(cols: number, rows: number) {
    const grid: number[][] = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))
    stamp(grid, GLIDER, 0, 0)
    return grid
}

// ── Conway's Life on the card's own grid ──
// Cell size matches the background grid so live cells land in the squares that
// were already drawn. One glider travels diagonally forever, wrapping at every
// edge, so it crosses the whole card with no reset.
export function LifeGrid({
    cell = 34,
    interval = 700,
}: {
    cell?: number
    interval?: number
}) {
    const ref = useRef<HTMLCanvasElement>(null)
    const gridRef = useRef<number[][]>([])
    const reduced = usePrefersReducedMotion()

    useEffect(() => {
        const cv = ref.current
        if (!cv) return
        const ctx = cv.getContext("2d")
        if (!ctx) return

        let cols = 0, rows = 0

        const resize = () => {
            const r = cv.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            cv.width = r.width * dpr
            cv.height = r.height * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            cols = Math.floor(r.width / cell)
            rows = Math.floor(r.height / cell)
            // Below the 860px breakpoint .hero-deco is display:none, so the
            // canvas measures 0x0 and there is no grid to seed.
            if (cols < 1 || rows < 1) {
                gridRef.current = []
                return
            }
            gridRef.current = freshGrid(cols, rows)
            draw()
        }

        // Proportional so the fill ratio holds at any cell size.
        const inset = Math.max(1, Math.round(cell * 0.06))

        const draw = () => {
            if (cols < 1 || rows < 1) return
            const r = cv.getBoundingClientRect()
            ctx.clearRect(0, 0, r.width, r.height)
            const g = gridRef.current
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    if (!g[y][x]) continue
                    // Solid: tinting by absolute position makes a travelling
                    // glider flicker colour as it moves.
                    ctx.fillStyle = OLIVE
                    ctx.fillRect(x * cell + inset, y * cell + inset, cell - inset * 2, cell - inset * 2)
                }
            }
        }

        const tick = () => {
            if (cols < 1 || rows < 1) return
            const g = gridRef.current
            const next = g.map((row, y) =>
                row.map((v, x) => {
                    let n = 0
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            if (!dx && !dy) continue
                            // The grid is a torus: the glider leaves one edge and
                            // re-enters the opposite one. Clipping the edges instead
                            // makes it decay on contact, which forces a visible
                            // teleport back to the origin every few seconds.
                            n += g[(y + dy + rows) % rows][(x + dx + cols) % cols]
                        }
                    }
                    return v ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0
                })
            )

            // A lone glider on a torus holds at 5 cells indefinitely. Any other
            // count means the grid is too small for it to clear its own tail, so
            // restart rather than let debris build up.
            let alive = 0
            for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) alive += next[y][x]

            gridRef.current = alive === 5 ? next : freshGrid(cols, rows)
            draw()
        }

        resize()
        window.addEventListener("resize", resize)
        const id = reduced ? null : setInterval(tick, interval)

        return () => {
            window.removeEventListener("resize", resize)
            if (id) clearInterval(id)
        }
    }, [cell, interval, reduced])

    return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
}

// ── Fun fact readout ──
// Types a line into the card like a terminal, over the drifting glider. Remount
// with a new `key` to replay. Under reduced motion the text lands at once.
export function FactReadout({ text, label }: { text: string; label: string }) {
    const [shown, setShown] = useState(0)
    const reduced = usePrefersReducedMotion()

    useEffect(() => {
        if (reduced) return

        const id = setInterval(() => {
            setShown((n) => {
                if (n >= text.length) {
                    clearInterval(id)
                    return n
                }
                return n + 1
            })
        }, 22)
        return () => clearInterval(id)
    }, [text, reduced])

    return (
        <div className="hero-fact">
            {/* The visible copy is hidden from assistive tech: announcing it as
                it types would fire the live region on every character. The full
                line is announced once, below. */}
            <div className="hero-fact-body" aria-hidden="true">
                {!reduced && <span className="hero-scan" />}
                <span className="hero-fact-label">{label}</span>
                <p className="hero-fact-text">
                    {text.slice(0, reduced ? text.length : shown)}
                    <span className="hero-fact-caret" />
                </p>
            </div>
            <span className="sr-only" role="status" aria-live="polite">
                {text}
            </span>
        </div>
    )
}
