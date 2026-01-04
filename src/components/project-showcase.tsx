import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { ArrowUpRight } from "lucide-react"

export function ProjectShowcase() {
    const projects = [
        {
            title: "Stock-Room",
            description: "A premium community platform for collectibles. Track value, manage collections, and engage in forums.",
            image: "/stock-room-mockup.png",
            link: "https://github.com/johnme09/Stock-Room",
            tags: ["React", "Node.js", "MongoDB", "Dark Mode"]
        },
        {
            title: "Healthycal",
            description: "Mindful eating application for tracking nutrition and wellness. Clean, vibrant, and user-centric.",
            image: "/healthycal_mockup.png",
            link: "#",
            tags: ["React", "Vite", "Chart.js", "Wellness"]
        }
    ]

    return (
        <section id="work" className="container mx-auto py-8 md:py-12 lg:py-24 px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-10">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold tracking-tighter">
                    Featured Projects
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    A showcase of recent work focusing on modern UI/UX and full-stack development.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2 lg:gap-8">
                {projects.map((project) => (
                    <Card key={project.title} className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                        <div className="aspect-[16/9] overflow-hidden relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                                {project.link !== "#" && (
                                    <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
