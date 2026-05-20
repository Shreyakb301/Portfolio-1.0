"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { StarSprite, GameBotSprite } from "./pixel-sprites"

export function HeroLanding() {
    return (
        <section className="hero spike-b scan-dots">
            <div className="container hero-grid">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="hero-eyebrow">
                            &gt; CS Student @ Purdue · Class of 2026
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="hero-name"
                    >
                        Hi, I&apos;m <br />
                        <span className="inline-block">
                            Shreya <br className="sm:hidden" /> Komarabattini.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="hero-tagline"
                    >
                        Interactive developer + data storyteller
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="hero-tagline-2"
                    >
                        I build web tools and dig into datasets<br />
                        to find things worth knowing.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="hero-btns"
                    >
                        <Link href="/work" className="btn hero-btn">
                            See my work
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn hero-btn">
                            View Resume ↗
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
                    className="hero-deco"
                >
                    <div className="hero-card-shell" aria-hidden="true">
                        <div className="hero-card-grid" />
                        <div className="hero-card-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <StarSprite className="hero-plus static opacity-90" />
                        <GameBotSprite className="hero-bot static opacity-95" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
