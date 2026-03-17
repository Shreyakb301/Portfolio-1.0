"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { HeartSprite, CoinSprite, WatcherSprite } from "./pixel-sprites"

export function ProjectShowcase() {
    const projects = [
        {
            year: "2026",
            title: "Protoplay",
            description: "Interactive platform that teaches engineering concepts through gamified simulations, architecture challenges, and algorithm puzzles — learning by building, not memorising.",
            image: "/protoplay-hp.png",
            video: "/prototype-demo.mp4",
            link: "https://protoplay.vercel.app/",
            tags: ["Next.js", "TypeScript", "Tailwind"]
        },
        {
            year: "2025",
            title: "HealthyCal",
            description: "Full-stack nutrition tracker — React frontend, Node/Express API, MongoDB storage. Helps users stay aware of how different foods contribute to daily energy and nutrient goals.",
            image: "/healthycal-hp.png",
            video: "/healthycal-demo.mp4",
            link: "https://healthy-cal.vercel.app",
            tags: ["React", "Node.js", "MongoDB", "Vite"]
        },
        {
            year: "2023",
            title: "FW Crime Analysis",
            description: "Classified 150,000+ crime records using Python, identified violent vs. non-violent patterns, mapped geographic hotspots, and surfaced temporal trends for data-driven municipal insights.",
            image: "/crime-hp.jpeg",
            link: "https://www.kaggle.com/code/shreyakb/fort-wayne-crimes",
            tags: ["Python", "Pandas", "Kaggle", "Data Viz"]
        },
        {
            year: "2025",
            title: "Graph Research",
            description: "Investigated how users interpret bar, line, and stacked bar charts. Designed user studies to evaluate visualization clarity, and formulated evidence-based guidelines for better data comprehension. Presented at Purdue's Annual Research Symposium.",
            image: "/research-poster.png",
            link: "/PosterSample.pdf",
            tags: ["Research", "User Study", "Data Viz"]
        }
    ]

    return (
        <section id="work" className="container mx-auto py-16 md:py-32 px-4 md:px-12 bg-background relative border-t border-primary/20">
            <HeartSprite className="animate-heart-bounce opacity-30 hidden sm:block" style={{top: '3.2rem', right: '2rem'}} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 md:mb-32 flex flex-col items-start"
            >
                <span className="font-serif text-xs font-semibold tracking-widest text-primary mb-4 flex items-center gap-3">
                    <span className="text-muted-foreground">//</span> SELECTED WORK
                </span>
            </motion.div>

            <div className="flex flex-col border-x border-t lg:border border-primary/20">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0
                    const hasVideo = 'video' in project && project.video

                    return (
                        <div key={project.title} className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch border-b border-primary/20 last:border-b-0 bg-background hover:bg-secondary/30 transition-colors duration-200`}>
                            
                            {/* Sprites specific to rows */}
                            {index === 0 && (
                                <div className="absolute -top-4 right-8 z-20 pointer-events-none hidden sm:block">
                                    <CoinSprite className="animate-coin-spin opacity-40" />
                                </div>
                            )}

                            {/* Image/Video Side */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full lg:w-[50%] relative min-h-[240px] md:min-h-[300px] flex items-center justify-center bg-secondary/10 p-4 md:p-12 ${isEven ? 'lg:border-r border-primary/20' : 'lg:border-l border-primary/20'} border-b lg:border-b-0`}
                            >
                                <Link
                                    href={project.link}
                                    target={project.link !== "#" ? "_blank" : undefined}
                                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                                    className="block relative w-full h-full cursor-none"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="relative w-full aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-300 ease-out overflow-hidden">
                                            {hasVideo ? (
                                                <video
                                                    src={project.video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                                />
                                            ) : (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                                    priority={index === 0}
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="w-full lg:w-[50%] p-6 md:p-12 lg:p-16 flex flex-col justify-center relative"
                            >
                                {index === 1 && (
                                    <WatcherSprite className="animate-watcher-bob opacity-35 hidden sm:block" style={{top: '-18px', left: '50%'}} />
                                )}

                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="font-serif text-xs text-primary/40 tracking-[0.2em]">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="font-serif text-xs text-primary/70">{project.year}</span>
                                </div>

                                <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-foreground mb-6 leading-[1.8]">
                                    {project.title}
                                </h3>

                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="font-serif text-[10px] text-primary border border-primary/40 px-3 py-1.5 tracking-wider uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link !== "#" && (
                                    <div className="mt-auto pt-4">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block font-serif text-[10px] text-background bg-primary border-2 border-primary px-5 py-3 tracking-wider uppercase hover:bg-transparent hover:text-primary transition-colors cursor-none"
                                        >
                                            View Project
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
