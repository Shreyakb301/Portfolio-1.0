"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { CloudSprite, CloudSprite2, StarSprite, CrawlerSprite } from "./pixel-sprites"

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

            {/* Sprites */}
            <CloudSprite className="animate-cloud-drift opacity-20" style={{top: '14px', left: 0}} />
            <CloudSprite2 className="animate-cloud2-drift opacity-15" style={{top: '50px', left: 0}} />
            <StarSprite className="animate-star-twinkle opacity-25" style={{top: '40%', right: '100px'}} />
            <CrawlerSprite className="animate-crawler-move animate-crawler-step opacity-30" style={{bottom: '12px'}} />

            <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
                <div className="flex flex-col items-start gap-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="font-serif text-xs md:text-sm tracking-[0.2em] font-semibold text-foreground/80 uppercase">
                            &gt; CS Student @ Purdue · Class of 2026
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.6] tracking-tight text-foreground"
                    >
                        Hi, I'm <br />
                        <span className="text-primary ml-4 md:ml-12 inline-block">Shreya <br className="sm:hidden" /> Komarabattini.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="max-w-xl leading-relaxed text-muted-foreground sm:text-lg mt-4 font-sans"
                    >
                        Full-stack developer and data nerd.<br/>
                        I build web tools and dig into datasets<br/>
                        to find things worth knowing.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-wrap items-center gap-4 mt-6"
                    >
                        <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary h-12 px-8 text-xs font-serif shadow-none uppercase tracking-widest cursor-none transition-colors">
                            <Link href="#work">
                                See my work <ArrowRight className="ml-2 h-4 w-4 hidden" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="ghost" className="rounded-none bg-transparent text-muted-foreground border-2 border-muted-foreground hover:border-primary hover:text-primary h-12 px-8 text-xs font-serif shadow-none uppercase tracking-widest cursor-none transition-colors">
                            <Link href="mailto:shreyakbinbox@gmail.com">
                                Get in touch
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
