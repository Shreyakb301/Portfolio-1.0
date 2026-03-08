"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroLanding() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-foreground/5 rounded-full blur-3xl mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 -left-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl mix-blend-multiply"
                />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
                <div className="flex flex-col items-start gap-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="font-sans text-sm md:text-base tracking-[0.2em] font-semibold text-foreground/60 uppercase">
                            Developer &amp; Student
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="font-serif text-[4.5rem] sm:text-8xl md:text-[8rem] lg:text-[9.5rem] leading-[0.85] tracking-tight text-foreground"
                    >
                        Building <br />
                        <span className="italic text-foreground/60 ml-4 md:ml-12 inline-block">Digital</span> <br />
                        Masterpieces
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="max-w-xl leading-relaxed text-muted-foreground sm:text-xl md:text-2xl mt-4 font-sans"
                    >
                        Crafting modern, high-performance web experiences with care and intention.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-wrap items-center gap-4 mt-6"
                    >
                        <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-medium shadow-none">
                            <Link href="/about">
                                About Me <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
