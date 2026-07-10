"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { HeartSprite, CoinSprite, PeekingSprite } from "./pixel-sprites"
import { cn } from "@/lib/utils"

const MOODLE_URL = "https://moodle-game.onrender.com"
const IT_TICKET_URL = "https://it-ticket-automation-system.onrender.com"
const RENDER_WAKE_URLS = [MOODLE_URL, IT_TICKET_URL]

type ProjectShowcaseProps = {
    className?: string
}

export function ProjectShowcase({ className }: ProjectShowcaseProps) {
    useEffect(() => {
        const controller = new AbortController()
        const timeout = window.setTimeout(() => controller.abort(), 8000)

        Promise.allSettled(
            RENDER_WAKE_URLS.map((url) =>
                fetch(url, {
                    mode: "no-cors",
                    cache: "no-store",
                    signal: controller.signal,
                })
            )
        ).finally(() => {
            // Render may still be waking up; the request itself is enough to start it.
            window.clearTimeout(timeout)
        })

        return () => {
            window.clearTimeout(timeout)
            controller.abort()
        }
    }, [])

    const projects = [
        {
            year: "2026",
            title: "Moodle",
            description: "Online drawing and guessing game you can play with friends. One person draws a secret word while the others try to guess it in the chat. You can make a room, invite others with a code, play against computer players, and even draw using hand gestures with your camera.",
            image: "",
            video: "/moodle-demo.mp4",
            link: MOODLE_URL,
            tags: ["React", "Socket.IO", "PostgreSQL", "MediaPipe"],
        },
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
            year: "2025–26",
            title: "Traffic Sign Recognition",
            description: "Senior Capstone team project focused on developing a mobile application that detects and classifies traffic signs in real time using a trained deep learning model. The app enhances driver safety by delivering fast and accurate traffic sign recognition through a live camera feed.",
            image: "",
            video: "/traffic-sign-demo.mp4",
            link: "/traffic-sign-demo.mp4",
            github: "https://github.com/rishigxsh/Traffic-Sign-Recognition-App.git",
            tags: ["Python", "Deep Learning", "Computer Vision", "Mobile"]
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
            year: "2026",
            title: "MEMETIME",
            description: "An interactive museum tracing internet culture from 1996 to today. Visitors descend through 12 immersive environments, one per era: gallery vitrines, a meme genealogy lab built with React Flow, a viral spread simulator, a popularity landscape, and a pixel-art culture skyline. Every scene owns its own lighting, atmosphere, and motion language.",
            image: "",
            video: "/meme-time.mp4",
            link: "https://meme-time.vercel.app/",
            github: "https://github.com/Shreyakb301/meme-time",
            tags: ["Next.js", "Three.js", "React Flow", "GSAP", "Framer Motion", "TypeScript"],
        },
        {
            year: "2025",
            title: "IT Ticket Routing Automation",
            description: "End-to-end ML web app that reads free-text Helpdesk tickets and routes them to the right IT support group, predicting support group, issue type, and priority across 8 IT groups. Combines a trained NLP pipeline, a FastAPI backend, and a React dashboard with confidence scores and analytics.",
            image: "/it-ticket-hp.png",
            link: IT_TICKET_URL,
            github: "https://github.com/Shreyakb301/IT-Text-Classification",
            tags: ["Python", "FastAPI", "React", "scikit-learn", "XGBoost", "Docker"],
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
            link: "/resesarch_poster.pdf",
            tags: ["Research", "User Study", "Data Viz"],
            borderless: true
        }
    ]

    return (
        <section id="work" className={cn("work-sec spike-b spike-t", className)}>
            <div className="container relative">
                <HeartSprite className="animate-heart-bounce hidden opacity-40 sm:block" style={{ top: '0.75rem', right: '0.5rem' }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="sec-label">
                        Selected Work
                        <span className="inline-flex items-center">
                            <CoinSprite className="animate-coin-spin opacity-50 static" />
                        </span>
                    </div>
                    <div className="spike-strip" />
                </motion.div>

            <div className="projects-list">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0
                    const hasVideo = 'video' in project && project.video
                    const isBorderless = 'borderless' in project && project.borderless
                    const shouldFillMedia = project.title === "MEMETIME" || project.title === "Moodle"

                    return (
                        <div key={project.title} className={`proj-row ${isEven ? "" : "flip"}`}>

                            {/* Image/Video Side */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`proj-media ${isBorderless ? "proj-media-borderless" : ""}`}
                            >
                                <Link
                                    href={project.link}
                                    target={project.link !== "#" ? "_blank" : undefined}
                                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                                    className="block h-full w-full"
                                >
                                    <div className={`proj-media-frame ${isBorderless ? "proj-media-frame-borderless" : ""}`}>
                                        <div className="relative h-full w-full">
                                            {index === 0 && (
                                                <PeekingSprite className="animate-ghost-peek absolute -top-8 right-6 z-10 hidden sm:block" />
                                            )}
                                            {hasVideo ? (
                                                <video
                                                    src={project.video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className={`h-full w-full ${shouldFillMedia ? "object-fill" : "object-contain"}`}
                                                />
                                            ) : (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className={shouldFillMedia ? "object-fill" : "object-contain"}
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
                                className="proj-body"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="proj-num">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="proj-year">{project.year}</span>
                                </div>

                                <div className="proj-title-row">
                                    <h3 className="proj-title">
                                        {project.title}
                                    </h3>
                                    {'status' in project && (
                                        <span className="proj-badge badge-wip">
                                            {project.status as string}
                                        </span>
                                    )}
                                </div>

                                <p className="proj-desc">
                                    {project.description}
                                </p>

                                <div className="proj-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="proj-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="proj-links">
                                    {project.link !== "#" && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="proj-link"
                                        >
                                            View Project
                                        </Link>
                                    )}
                                    {'github' in project && project.github && (
                                        <Link
                                            href={project.github as string}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="proj-link ghost"
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
            </div>
        </section>
    )
}
