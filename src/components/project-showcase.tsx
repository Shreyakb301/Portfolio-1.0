"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { HeartSprite, CoinSprite } from "./pixel-sprites"

export function ProjectShowcase() {
    const projects = [
        {
            year: "2026",
            title: "Protoplay",
            description: "Interactive platform that teaches engineering concepts through gamified simulations, architecture challenges, and algorithm puzzles by learning and building, not memorising.",
            image: "/protoplay-hp.png",
            video: "/prototype-demo.mp4",
            link: "https://protoplay.vercel.app/",
            github: "https://github.com/Shreyakb301/System-Design.git",
            tags: ["Next.js", "TypeScript", "Tailwind"],
            status: "Work in Progress"
        },
        {
            year: "2025",
            title: "HealthyCal",
            description: "Full-stack nutrition tracker — React frontend, Node/Express API, MongoDB storage. Helps users stay aware of how different foods contribute to daily energy and nutrient goals.",
            image: "/healthycal-hp.png",
            video: "/healthycal-demo.mp4",
            link: "https://healthy-cal.vercel.app",
            github: "https://github.com/Shreyakb301/HealthyCal.git",
            tags: ["React", "Node.js", "MongoDB", "Vite"]
        },
        {
            year: "2023",
            title: "FW Crime Analysis",
            description: "Classified 150,000+ crime records using Python, identified violent vs. non-violent patterns, mapped geographic hotspots, and surfaced temporal trends for data-driven municipal insights.",
            image: "/crime-hp.jpeg",
            link: "https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023",
            tags: ["Python", "Pandas", "Kaggle", "Data Viz"]
        },
        {
            year: "2025",
            title: "Categorical Data Visualization Study",
            description: "Investigated how users interpret bar, line, and stacked bar charts. Designed user studies to evaluate visualization clarity, and formulated evidence-based guidelines for better data comprehension. Presented at Purdue's Annual Research Symposium.",
            image: "/research-poster.png",
            link: "/PosterSample.pdf",
            tags: ["Research", "User Study", "Data Viz"]
        }
    ]

    return (
        <section id="work" className="container mx-auto py-16 md:py-32 px-4 md:px-12 bg-background relative border-t border-primary/20">
            <HeartSprite className="animate-heart-bounce opacity-30 hidden sm:block" style={{ top: '3.2rem', right: '2rem' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-12 md:mb-16 flex flex-col items-start"
            >
                <span className="font-heading text-xl md:text-2xl text-primary mb-2 flex items-center">
                    <span className="text-muted-foreground mr-3">//</span>
                    <span>Selected Work</span>
                    <span className="inline-flex items-center ml-4">
                        <CoinSprite className="animate-coin-spin opacity-40 static" />
                    </span>
                </span>
            </motion.div>

            <div className="flex flex-col border-x border-t lg:border border-primary/20">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0
                    const hasVideo = 'video' in project && project.video
                    const isGraphResearch = project.title === "Categorical Data Visualization Study"

                    return (
                        <div key={project.title} className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch border-b border-primary/20 last:border-b-0 bg-background hover:bg-secondary/30 transition-colors duration-200`}>

                            {/* Sprites specific to rows */}
                            {/* Cleanup: Specific project sprites now handled inside the image container */}

                            {/* Image/Video Side */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full lg:w-[50%] relative min-h-[240px] md:min-h-[300px] flex items-center justify-center bg-transparent p-4 md:p-12 ${isEven ? 'lg:border-r border-primary/20' : 'lg:border-l border-primary/20'} border-b lg:border-b-0`}
                            >
                                <Link
                                    href={project.link}
                                    target={project.link !== "#" ? "_blank" : undefined}
                                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                                    className="block relative w-full h-full"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className={`relative w-full aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-300 ease-out overflow-hidden ${isGraphResearch ? '' : 'border-2 border-primary/30 group-hover:border-primary transition-colors'}`}>
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
                                className="w-full lg:w-[50%] p-6 md:p-12 lg:p-16 flex flex-col justify-center relative min-h-[400px] sm:min-h-0"
                            >
                                {/* Removed WatcherSprite in favor of specific project accents */}

                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="font-sans text-xs text-primary/40 tracking-widest">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="font-sans text-xs text-primary/70">{project.year}</span>
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-foreground leading-[1.8]">
                                        {project.title}
                                    </h3>
                                    {'status' in project && (
                                        <Badge variant="secondary" className="font-space text-[10px] bg-primary/10 text-primary border-none py-1 px-2 uppercase tracking-widest animate-pulse">
                                            {project.status as string}
                                        </Badge>
                                    )}
                                </div>

                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-[40ch] md:max-w-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="font-sans text-[11px] md:text-sm text-primary border border-primary/40 px-3 py-1.5 tracking-wider uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 flex flex-wrap gap-4">
                                    {project.link !== "#" && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block font-sans text-sm text-background bg-primary border-2 border-primary px-5 py-3 tracking-widest uppercase hover:bg-transparent hover:text-primary transition-colors"
                                        >
                                            View Project
                                        </Link>
                                    )}
                                    {'github' in project && project.github && (
                                        <Link
                                            href={project.github as string}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 font-sans text-sm text-primary border-2 border-primary px-5 py-3 tracking-widest uppercase hover:bg-primary hover:text-background transition-colors"
                                        >
                                            <Github className="w-3 h-3 md:w-3.5 md:h-3.5" /> Code
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
