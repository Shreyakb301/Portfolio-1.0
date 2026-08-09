"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { RobotSprite } from "./pixel-sprites"
import { LifeGrid, FactReadout } from "./hero-visuals"

const CONWAY_FACT =
    "The shape drifting in this window is a Conway glider. Five cells that fly off one edge and come back on the other."

export function HeroLanding() {
    // null = card shows only the glider. Counts up so another click can replay
    // the same Conway fact and its typing animation.
    const [factStep, setFactStep] = useState<number | null>(null)

    return (
        <section className="hero spike-b">
            <div className="container hero-grid">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="available-badge"
                    >
                        <span className="available-dot" />
                        Open to work
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                        className="hero-eyebrow"
                    >
                        Purdue Computer Science Graduate · May 2026
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
                        className="hero-name"
                    >
                        Shreya Komarabattini
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
                        className="hero-tagline"
                    >
                        Full-stack software engineer building real-time and AI-enabled products.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="hero-tagline-2"
                    >
                        I develop reliable web applications across frontend, backend, and applied machine learning, with an emphasis on clear, human-centered experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.32 }}
                        className="hero-btns"
                    >
                        <Link href="/work" className="btn hero-btn">
                            View selected work
                            <ArrowRight aria-hidden="true" />
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn hero-btn">
                            Download résumé
                            <Download aria-hidden="true" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
                    className="hero-deco"
                >
                    <div className="hero-card-shell">
                        <div className="hero-card-bars" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="hero-card-grid">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                                style={{ position: "absolute", inset: 0 }}
                                aria-hidden="true"
                            >
                                <LifeGrid cell={17} interval={450} />
                            </motion.div>

                            {factStep !== null && (
                                <motion.div
                                    key={factStep}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, ease: "easeOut" }}
                                    style={{ position: "absolute", inset: 0 }}
                                >
                                    <FactReadout
                                        text={CONWAY_FACT}
                                        label="Conway glider"
                                    />
                                </motion.div>
                            )}

                            {/* Covers the whole card so the grid itself is the
                                control. A real button, so it's keyboard
                                reachable — which is why .hero-deco is no longer
                                aria-hidden. */}
                            <button
                                type="button"
                                className="hero-card-hit"
                                onClick={() => setFactStep((s) => (s === null ? 0 : s + 1))}
                                aria-label={factStep === null ? "Show the Conway glider fact" : "Replay the Conway glider fact"}
                            />
                        </div>
                    </div>
                    <span aria-hidden="true">
                        <RobotSprite className="hero-bot" />
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
