"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { RobotSprite } from "./pixel-sprites"
import { LifeGrid, FactReadout } from "./hero-visuals"

const CONWAY_MESSAGE =
    "This is a Conway glider: five cells following simple rules to create a moving pattern."

export function HeroLanding() {
    const [showConwayMessage, setShowConwayMessage] = useState(false)

    return (
        <section className="hero spike-b md:mx-auto md:w-[90.909%] md:[zoom:1.1]">
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
                        Computer Science @ Purdue 26
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
                        Full-stack + AI software engineer turning complex systems into clear, useful products.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="hero-tagline-2"
                    >
                        I build across frontend, backend, and applied machine learning, from real-time multiplayer experiences to NLP automation and data-driven tools.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.38 }}
                        className="hero-btns"
                    >
                        <Link href="/work#case-studies" className="btn hero-btn">
                            Explore case studies
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

                            {showConwayMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.28, ease: "easeOut" }}
                                    style={{ position: "absolute", inset: 0 }}
                                >
                                    <FactReadout
                                        text={CONWAY_MESSAGE}
                                        label="Conway's Game of Life"
                                    />
                                </motion.div>
                            )}

                            {/* Covers the whole card so the grid itself is the
                                control. A real button, so it's keyboard
                                reachable, which is why .hero-deco is no longer
                                aria-hidden. */}
                            <button
                                type="button"
                                className="hero-card-hit"
                                onClick={() => setShowConwayMessage((visible) => !visible)}
                                aria-label={showConwayMessage ? "Return to animated Conway visual" : "Learn about Conway's Game of Life"}
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
