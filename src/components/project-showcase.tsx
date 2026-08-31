"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Github } from "lucide-react"
import { HeartSprite, CoinSprite, PeekingSprite } from "./pixel-sprites"
import { cn } from "@/lib/utils"

const MOODLE_URL = "https://moodl3.com/"
const IT_TICKET_URL = "https://it-ticket-automation-system.onrender.com"
const RENDER_WAKE_URLS = [MOODLE_URL, IT_TICKET_URL]
const WORK_PAGE_COVERS: Record<string, string> = {
    Moodle: "/moodle-work-cover.png",
    HealthyCal: "/healthycal-work-cover.png",
    "Traffic Sign Recognition": "/traffic-sign-work-cover.png",
    Protoplay: "/protoplay-work-cover.png",
    MEMETIME: "/memetime-work-cover.png",
    "The Map of Everything": "/map-of-everything-preview.png",
    "IT Ticket Routing Automation": "/it-ticket-work-cover.png",
}

const WORK_GRID_ORDER = [
    "Moodle",
    "Protoplay",
    "Traffic Sign Recognition",
    "HealthyCal",
    "LoadCheck",
    "Likewise",
    "IT Ticket Routing Automation",
    "Fort Wayne, Indiana Crime Analysis",
    "Categorical Data Visualization Study",
    "The Map of Everything",
    "MEMETIME",
]

const LAB_TITLES = new Set(["LoadCheck", "Likewise", "The Map of Everything", "MEMETIME"])
const HIDDEN_CASE_STUDIES = new Set([
    "Traffic Sign Recognition",
    "HealthyCal",
    "IT Ticket Routing Automation",
])

const PLAYGROUND_EXPLANATIONS: Record<string, string> = {
    Moodle: "Online drawing games can be awkward to organize without a full group. Moodle makes it easy to start a room, invite friends, and fill empty seats with bots.",
    Protoplay: "System design is often taught as static theory. Protoplay turns abstract architecture and algorithm concepts into hands-on challenges.",
    LoadCheck: "Slow websites lose users, but it is often hard to know what to fix first. LoadCheck gives teams a clear, prioritized action plan to improve the experience.",
    Likewise: "Finding something to watch is easier when recommendations understand both your taste and the people you trust. Likewise turns those signals into more personal picks.",
    MEMETIME: "Internet culture is scattered across platforms and timelines. MEMETIME brings its evolution together as one interactive museum.",
    "The Map of Everything": "A fun little experiment I made when Fable 5 first came out.",
    "Fort Wayne, Indiana Crime Analysis": "Raw crime records are too large and messy to interpret directly. This analysis surfaces meaningful patterns while separating evidence from assumption.",
    "Categorical Data Visualization Study": "People can misread categorical charts when the format does not fit the data. This study tests which chart choices communicate most clearly.",
}

type ProjectShowcaseProps = {
    className?: string
    layout?: "list" | "grid"
}

function formatVideoTime(seconds: number) {
    if (!Number.isFinite(seconds)) return "0:00"
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

function PreviewVideo({ src, title }: { src: string; title: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const togglePlayback = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            void video.play()
        } else {
            video.pause()
        }
    }

    const seekBy = (seconds: number) => {
        const video = videoRef.current
        if (!video) return
        video.currentTime = Math.min(Math.max(video.currentTime + seconds, 0), video.duration || 0)
    }

    return (
        <div className="work-preview-player">
            <video
                ref={videoRef}
                key={src}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="work-preview-video"
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <div className="work-preview-controls" aria-label={`${title} video controls`}>
                <button type="button" onClick={() => seekBy(-10)} aria-label="Go back 10 seconds">
                    −10s
                </button>
                <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause video" : "Play video"}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button type="button" onClick={() => seekBy(10)} aria-label="Go forward 10 seconds">
                    +10s
                </button>
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={Math.min(currentTime, duration || 0)}
                    onChange={(event) => {
                        const nextTime = Number(event.currentTarget.value)
                        if (videoRef.current) videoRef.current.currentTime = nextTime
                        setCurrentTime(nextTime)
                    }}
                    aria-label="Video timeline"
                />
                <span>{formatVideoTime(currentTime)} / {formatVideoTime(duration)}</span>
            </div>
        </div>
    )
}

export function ProjectShowcase({ className, layout = "list" }: ProjectShowcaseProps) {
    const [previewProject, setPreviewProject] = useState<{
        title: string
        src: string
        type: "video" | "image"
    } | null>(null)

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

    useEffect(() => {
        if (!previewProject) return

        const root = document.documentElement
        const scrollY = window.scrollY
        const previousOverflow = document.body.style.overflow
        const previousRootOverflow = root.style.overflow
        const previousPosition = document.body.style.position
        const previousTop = document.body.style.top
        const previousWidth = document.body.style.width
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setPreviewProject(null)
        }

        root.style.overflow = "hidden"
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.top = `-${scrollY}px`
        document.body.style.width = "100%"
        window.addEventListener("keydown", closeOnEscape)

        return () => {
            root.style.overflow = previousRootOverflow
            document.body.style.overflow = previousOverflow
            document.body.style.position = previousPosition
            document.body.style.top = previousTop
            document.body.style.width = previousWidth
            window.removeEventListener("keydown", closeOnEscape)
            window.scrollTo(0, scrollY)
        }
    }, [previewProject])

    const projects = [
        {
            year: "2026",
            title: "Moodle",
            caption: "A social drawing and guessing game with rooms, bots, and gesture controls.",
            description: "Online drawing and guessing game you can play with friends. One person draws a secret word while the others try to guess it in the chat. You can make a room, invite others with a code, play against computer players, and even draw using hand gestures with your camera.",
            image: "",
            video: "/moodle-demo.mp4",
            link: MOODLE_URL,
            tags: ["React", "Socket.IO", "PostgreSQL", "MediaPipe"],
        },
        {
            year: "2026",
            title: "Protoplay",
            caption: "Gamified engineering and system design learning through interactive challenges.",
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
            caption: "Real-time mobile traffic sign detection powered by deep learning.",
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
            caption: "A full-stack nutrition and daily goal tracker.",
            description: "Full-stack nutrition tracker with a React frontend, Node/Express API, and MongoDB storage. Helps users stay aware of how different foods contribute to daily energy and nutrient goals.",
            image: "/healthycal-hp.png",
            video: "/healthycal-demo.mp4",
            link: "https://healthy-cal.vercel.app",
            github: "https://github.com/Shreyakb301/HealthyCal.git",
            tags: ["React", "Node.js", "MongoDB", "Vite"]
        },
        {
            year: "2026",
            title: "MEMETIME",
            caption: "An interactive museum tracing internet culture from 1996 to today.",
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
            caption: "NLP-powered classification and routing for IT support tickets.",
            description: "End-to-end ML web app that reads free-text Helpdesk tickets and routes them to the right IT support group, predicting support group, issue type, and priority across 8 IT groups. Combines a trained NLP pipeline, a FastAPI backend, and a React dashboard with confidence scores and analytics.",
            image: "/it-ticket-hp.png",
            link: IT_TICKET_URL,
            github: "https://github.com/Shreyakb301/IT-Text-Classification",
            tags: ["Python", "FastAPI", "React", "scikit-learn", "XGBoost", "Docker"],
        },
        {
            year: "2023",
            title: "Fort Wayne, Indiana Crime Analysis",
            caption: "Tracing when, where, and how likely crime incidents cluster across the city.",
            description: "Filtered 154,478 police activity rows into 30,336 likely crime incidents, then used Python to surface category, timing, reporting, and corridor-level patterns without overstating what the records prove.",
            image: "/crime-hp.jpeg",
            link: "https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023",
            tags: ["Python", "Pandas", "Kaggle", "Data Viz"]
        },
        {
            year: "2025",
            title: "Categorical Data Visualization Study",
            caption: "A user study exploring clearer categorical data visualization.",
            description: "Investigated how users interpret bar, line, and stacked bar charts. Designed user studies to evaluate visualization clarity, and formulated evidence-based guidelines for better data comprehension. Presented at Purdue's Annual Research Symposium.",
            image: "/research-poster.png",
            link: "/resesarch_poster.pdf",
            tags: ["Research", "User Study", "Data Viz"],
            borderless: true
        }
    ]

    if (layout === "grid") {
        const gridOnlyProjects = [
            {
                year: "2026",
                title: "LoadCheck",
                caption: "A plain-language website performance analyzer that finds the fixes worth prioritizing.",
                description: "Analyzes public websites with Lighthouse, identifies the biggest performance bottlenecks, and turns technical results into clear, ranked recommendations.",
                image: "",
                video: "/loadcheck-demo.mp4",
                link: "https://load-check-omega.vercel.app/",
                tags: ["Next.js", "Lighthouse", "Web Performance", "Vercel"],
            },
            {
                year: "2026",
                title: "The Map of Everything",
                caption: "A living audiovisual visualization of reality, built as an immersive canvas experiment.",
                description: "An immersive, full-screen canvas experiment that turns reality into a living audiovisual journey.",
                image: "/map-of-everything-preview.png",
                video: "/map-of-everything-demo.mp4",
                link: "https://the-map-of-everything.vercel.app/",
                tags: ["Claude", "Motion Design", "Visual Systems"],
            },
            {
                year: "2026",
                title: "Likewise",
                caption: "A social movie and TV discovery experience built around taste, trust, and better recommendations.",
                description: "A movie and TV discovery prototype that learns what you enjoy, maps your taste, and uses trusted friends' preferences to help you decide what to watch next.",
                image: "/likewise-logo.svg",
                link: "https://design-likewise.vercel.app/",
                tags: ["Product Design", "React", "TypeScript"],
            },
        ]

        const gridProjects = [...projects, ...gridOnlyProjects]
            .sort((first, second) => {
            const firstRank = WORK_GRID_ORDER.indexOf(first.title)
            const secondRank = WORK_GRID_ORDER.indexOf(second.title)
            const firstFallback = WORK_GRID_ORDER.length
            const secondFallback = WORK_GRID_ORDER.length

            return (firstRank === -1 ? firstFallback : firstRank) -
                (secondRank === -1 ? secondFallback : secondRank)
            })

        const labProjects = gridProjects.filter((project) => LAB_TITLES.has(project.title))
        const caseStudyProjects = gridProjects.filter(
            (project) => !LAB_TITLES.has(project.title) && !HIDDEN_CASE_STUDIES.has(project.title)
        )

        const renderWorkCard = (project: (typeof gridProjects)[number], index: number) => {
            const workPageCover = WORK_PAGE_COVERS[project.title]
            const caseStudyLinks: Record<string, string> = {
                Moodle: "/work/moodle",
                Protoplay: "/work/protoplay",
                "IT Ticket Routing Automation": "/work/it-ticket",
                "Fort Wayne, Indiana Crime Analysis": "/work/fw-crime",
                "Categorical Data Visualization Study": "/work/visualization-study",
            }
            const workPageLink = caseStudyLinks[project.title] ?? project.link
            const opensInNewTab = !caseStudyLinks[project.title]
            const projectVideo =
                "video" in project && typeof project.video === "string" ? project.video : undefined
            const video = !workPageCover ? projectVideo : undefined
            const image = workPageCover ?? ("image" in project ? project.image : undefined)
            const previewMedia = projectVideo
                ? { src: projectVideo, type: "video" as const }
                : image
                  ? { src: image, type: "image" as const }
                  : null
            const containMedia =
                project.title === "Categorical Data Visualization Study" ||
                project.title === "IT Ticket Routing Automation"
            const isLab = LAB_TITLES.has(project.title)
            const projectLabel = isLab ? "Live" : opensInNewTab ? "Visit project" : "View case study"

            return (
                <motion.article
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                        duration: 0.45,
                        delay: (index % 2) * 0.06,
                        ease: "easeOut",
                        layout: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                    }}
                    className="work-card"
                >
                    <Link
                        href={workPageLink}
                        target={opensInNewTab ? "_blank" : undefined}
                        rel={opensInNewTab ? "noopener noreferrer" : undefined}
                        className="work-card-link"
                        style={isLab ? { height: "auto" } : undefined}
                        aria-label={`View ${project.title}`}
                    >
                        <div className="work-card-media">
                            {video ? (
                                <video
                                    src={video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-hidden="true"
                                    className={containMedia ? "work-card-media-contain" : undefined}
                                />
                            ) : image ? (
                                <Image
                                    src={image}
                                    alt=""
                                    fill
                                    priority={index < 3}
                                    sizes={
                                        isLab
                                            ? "56px"
                                            : "(max-width: 640px) calc(100vw - 2rem), (max-width: 1000px) calc(50vw - 2rem), 660px"
                                    }
                                    className={containMedia ? "work-card-media-contain" : undefined}
                                />
                            ) : null}
                        </div>

                        <div className="work-card-caption">
                            <h2>{project.title}</h2>
                            <p>{PLAYGROUND_EXPLANATIONS[project.title] ?? project.caption}</p>
                            <ul className="work-card-tags" aria-label={`${project.title} technologies`}>
                                {project.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                            <span className="work-card-project-link">
                                <span aria-hidden="true">↗</span> {projectLabel}
                            </span>
                        </div>
                    </Link>

                    {isLab && previewMedia && (
                        <button
                            type="button"
                            className="work-card-preview"
                            onClick={() => setPreviewProject({ title: project.title, ...previewMedia })}
                            aria-haspopup="dialog"
                            aria-label={`Preview ${project.title}`}
                        >
                            Preview
                        </button>
                    )}
                </motion.article>
            )
        }

        return (
            <>
                <section id="labs" className={cn("work-gallery-section work-playground-section", className)} aria-labelledby="labs-title">
                    <div className="about-wrap">
                        <div className="work-gallery-heading">
                            <p>{"// Experimental playground"}</p>
                            <h1 id="labs-title">Labs</h1>
                        </div>

                        <div className="work-straight-list work-project-grid">
                            {labProjects.map(renderWorkCard)}
                        </div>
                    </div>
                </section>

                <section id="case-studies" className="work-gallery-section work-case-studies-section" aria-labelledby="case-studies-title">
                    <div className="about-wrap">
                        <div className="work-gallery-heading">
                            <p>{"// Selected work"}</p>
                            <h2 id="case-studies-title">Case Studies</h2>
                        </div>

                        <div className="work-straight-list work-case-studies-grid">
                            {caseStudyProjects.map(renderWorkCard)}
                        </div>
                    </div>
                </section>

                {typeof document !== "undefined" && createPortal(
                    <AnimatePresence>
                        {previewProject && (
                            <motion.div
                                className="work-preview-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onMouseDown={() => setPreviewProject(null)}
                            >
                                <motion.div
                                    className="work-preview-dialog"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="work-preview-title"
                                    initial={{ opacity: 0, y: 12, scale: 0.985 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.99 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    onMouseDown={(event) => event.stopPropagation()}
                                >
                                    <div className="work-preview-heading">
                                        <div>
                                            <h2 id="work-preview-title">{previewProject.title}</h2>
                                        </div>
                                        <button
                                            type="button"
                                            className="work-preview-close"
                                            onClick={() => setPreviewProject(null)}
                                            aria-label="Close preview"
                                            autoFocus
                                        >
                                            ×
                                        </button>
                                    </div>
                                    {previewProject.type === "video" ? (
                                        <PreviewVideo
                                            src={previewProject.src}
                                            title={previewProject.title}
                                        />
                                    ) : (
                                        <Image
                                            src={previewProject.src}
                                            alt={`${previewProject.title} preview`}
                                            width={1600}
                                            height={900}
                                            sizes="(max-width: 1040px) 100vw, 1380px"
                                            className="work-preview-image"
                                        />
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}

            </>
        )
    }

    return (
        <section id="work" className={cn("work-sec spike-b spike-t", className)}>
            <div className="container relative">
                <HeartSprite className="animate-heart-bounce hidden sm:block" style={{ top: '0.75rem', right: '0.5rem' }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="sec-label">
                        Selected Work
                        <span className="inline-flex items-center">
                            <CoinSprite className="animate-coin-spin static" />
                        </span>
                    </div>
                    <div className="spike-strip" />
                </motion.div>

            <div className="projects-list">
                {projects.filter((project) => project.title !== "MEMETIME").map((project, index) => {
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
                                            Live Demo <span aria-hidden="true">↗</span>
                                        </Link>
                                    )}
                                    {'github' in project && project.github && (
                                        <Link
                                            href={project.github as string}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="proj-link ghost"
                                        >
                                            <Github aria-hidden="true" /> <span>Code</span>
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
