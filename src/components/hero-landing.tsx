"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroLanding() {
    return (
        <section className="pp-hero">
            <div className="pp-hero-inner">
                <div className="pp-hero-copy">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="pp-badge"
                    >
                        <Sparkles aria-hidden="true" />
                        Interactive engineering practice
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                        className="pp-kicker"
                    >
                        Learn by doing
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
                        className="pp-title"
                    >
                        Practice systems and algorithms visually.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
                        className="pp-subtitle"
                    >
                        Three tracks. Live demos. Challenge modes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.32 }}
                        className="pp-actions"
                    >
                        <Link href="/work" className="pp-primary-btn">
                            Start with a challenge
                            <ArrowRight aria-hidden="true" />
                        </Link>
                        <Link href="/work" className="pp-secondary-btn">
                            Browse the learning tracks
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
                    className="pp-visual"
                    aria-hidden="true"
                >
                    <Image
                        src="/protoplay-hero-art-transparent.png"
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 900px) 100vw, 62vw"
                        className="pp-visual-img"
                    />
                </motion.div>

            </div>
        </section>
    )
}
