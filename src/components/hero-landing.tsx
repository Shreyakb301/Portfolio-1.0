"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { RobotSprite, StarSprite, WavingCharacterSprite } from "./pixel-sprites"

export function HeroLanding() {
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
                        I build software, data tools, and interactive systems that make complex ideas easier to understand.
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
                    aria-hidden="true"
                >
                    <div className="hero-card-shell">
                        <div className="hero-card-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="hero-card-grid" style={{ overflow: 'hidden' }}>
                            <motion.div
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1], delay: 0.7 }}
                                style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
                            >
                                <WavingCharacterSprite />
                            </motion.div>
                        </div>
                    </div>
                    <StarSprite className="hero-plus" />
                    <RobotSprite className="hero-bot" />
                </motion.div>
            </div>
        </section>
    )
}
