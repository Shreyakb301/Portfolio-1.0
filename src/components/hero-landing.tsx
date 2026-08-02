"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { RobotSprite } from "./pixel-sprites"
import { LifeGrid, FactReadout } from "./hero-visuals"

// Every line here is drawn from the project write-ups on /work, so nothing in
// the hero claims something that isn't already on the site. Swap in personal
// ones freely — the readout just types whatever strings are in this array.
const FACTS = [
    "The shape drifting in this window is a Conway glider. Five cells that fly off one edge and come back on the other.",
    "Classified 150,000+ crime records to map violent vs. non-violent hotspots across Fort Wayne.",
    "MEMETIME walks you down through 12 environments, one per era of internet culture since 1996.",
    "In Moodle you can draw with hand gestures through your webcam instead of a mouse.",
    "Built an NLP pipeline that reads free-text helpdesk tickets and routes them across 8 IT groups.",
    "Presented categorical data visualization research at Purdue's Annual Research Symposium.",
]

export function HeroLanding() {
    // null = card shows only the glider. Counts up so each click remounts the
    // readout and replays the typing.
    const [factStep, setFactStep] = useState<number | null>(null)
    const factIndex = factStep === null ? 0 : factStep % FACTS.length

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
                        Software Engineer building full-stack &amp; NLP applications.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="hero-tagline-2"
                    >
                        My work spans full-stack apps, data visualization research, machine learning, and human-centered interfaces.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.32 }}
                        className="hero-btns"
                    >
                        <Link href="/work" className="btn hero-btn">
                            View work
                            <ArrowRight aria-hidden="true" />
                        </Link>
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
                                        text={FACTS[factIndex]}
                                        label={`fact ${String(factIndex + 1).padStart(2, "0")} / ${String(FACTS.length).padStart(2, "0")}`}
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
                                aria-label={factStep === null ? "Show a fact about this page" : "Show the next fact"}
                            />

                            {factStep === null && (
                                <span className="hero-card-hint" aria-hidden="true">
                                    click the grid
                                </span>
                            )}
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
