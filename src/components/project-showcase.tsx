"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function ProjectShowcase() {
    const projects = [
        {
            year: "2026",
            title: "Protoplay",
            description: "Built an interactive web platform that teaches engineering concepts through gamified simulations, architecture challenges, and algorithm puzzles, emphasizing learning by building rather than memorization.",
            image: "/protoplay-hp.png",
            link: "https://protoplay.vercel.app/",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"]
        },
        {
            year: "2025",
            title: "HealthyCal",
            description: "A web platform designed to help users track calories and monitor their nutrition intake. It helps people stay aware of how different foods contribute to daily energy and nutrient goals, encouraging balanced and mindful eating.",
            image: "/healthycal-hp.png",
            link: "https://healthy-cal.vercel.app",
            tags: ["React", "Vite", "Node.js", "MongoDB"]
        },
        {
            year: "2023",
            title: "Fort Wayne Crimes",
            description: "Conducted a comprehensive analysis of crime data in Fort Wayne using Python and Kaggle. Identified key patterns in incident types, geographic hotspots, and temporal trends to provide data-driven insights into municipal safety.",
            image: "/crime-hp.jpeg",
            link: "https://www.kaggle.com/code/shreyakb/fort-wayne-crimes",
            tags: ["Python", "Data Analysis", "Kaggle", "Visualization"]
        },
        {
            year: "2025",
            title: "Do We Really Know How to Use Graphs Effectively",
            description: "Investigated effective visualization of categorical data, analyzing how users interpret different chart types. Designed user studies to evaluate clarity and formulated guidelines to improve data comprehension.",
            image: "/research-poster.png",
            link: "/PosterSample.pdf",
            tags: ["Data Visualization", "User Study", "Research"]
        }
    ]

    return (
        <section id="work" className="container mx-auto py-24 md:py-32 px-6 md:px-12 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 md:mb-32 flex flex-col items-start"
            >
                <span className="text-sm font-semibold tracking-widest uppercase text-foreground/60 mb-4">Selected Work</span>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
                    Featured <span className="italic text-foreground/70">Projects</span>
                </h2>
            </motion.div>

            <div className="flex flex-col gap-32 md:gap-48">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0

                    return (
                        <div key={project.title} className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:w-[60%] group relative drop-shadow-sm"
                            >
                                <Link
                                    href={project.link}
                                    target={project.link !== "#" ? "_blank" : undefined}
                                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                                    className="block relative w-full h-full"
                                >
                                    <div className={`aspect-[16/10] overflow-hidden relative w-full bg-secondary/40 border border-border/60 rounded-[2rem] flex items-center justify-center ${project.image === '/research-poster.png' ? 'px-6 py-12' : 'p-6 sm:p-10 lg:p-14'}`}>
                                        <div className="relative w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain drop-shadow-md"
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 60vw"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-foreground/5 transition-colors duration-500 pointer-events-none rounded-[2rem]" />
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="w-full lg:w-[40%] flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-foreground/50 text-sm font-medium tracking-wide">{project.year}</span>
                                    <div className="h-px w-12 bg-foreground/20" />
                                </div>

                                <Link
                                    href={project.link}
                                    target={project.link !== "#" ? "_blank" : undefined}
                                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                                    className="group/link inline-flex items-center gap-3 w-fit mb-6"
                                >
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
                                        {project.title}
                                    </h3>
                                    {project.link !== "#" && (
                                        <ArrowUpRight className="h-8 w-8 text-foreground/40 group-hover/link:text-foreground group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-all duration-300" />
                                    )}
                                </Link>

                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-sans">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium px-4 py-1.5 rounded-full border-none shadow-none text-sm transition-colors">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
