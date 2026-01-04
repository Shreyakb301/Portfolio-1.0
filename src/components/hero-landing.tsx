"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroLanding() {
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [showCursor, setShowCursor] = useState(true)

    const fullText1 = "Building Digital "
    const fullText2 = "Masterpieces"

    useEffect(() => {
        let currentIndex = 0
        const timeouts: NodeJS.Timeout[] = []

        // Type first part
        const typeText1 = () => {
            if (currentIndex <= fullText1.length) {
                setText1(fullText1.slice(0, currentIndex))
                currentIndex++
                const timeout = setTimeout(typeText1, 50)
                timeouts.push(timeout)
            } else {
                // Start typing second part
                currentIndex = 0
                typeText2()
            }
        }

        // Type second part
        const typeText2 = () => {
            if (currentIndex <= fullText2.length) {
                setText2(fullText2.slice(0, currentIndex))
                currentIndex++
                const timeout = setTimeout(typeText2, 50)
                timeouts.push(timeout)
            } else {
                // Done typing, hide cursor after a delay
                const timeout = setTimeout(() => setShowCursor(false), 1000)
                timeouts.push(timeout)
            }
        }

        // Start typing
        const startTimeout = setTimeout(typeText1, 200)
        timeouts.push(startTimeout)

        return () => timeouts.forEach(clearTimeout)
    }, [])

    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center px-4 md:px-6">

                <div className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter min-h-[1.5em]">
                    <span>{text1}</span>
                    <span className="text-primary">{text2}</span>
                    <motion.span
                        animate={{ opacity: showCursor ? 1 : 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, repeat: showCursor ? Infinity : 0, repeatType: "reverse" }}
                        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                    className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                >
                    I&apos;m Shreya Komarabattini, a computer science student and developer crafting modern, high-performance web experiences.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
                    className="space-x-4"
                >
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="#work">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/about">
                            About Me
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
