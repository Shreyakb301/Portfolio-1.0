import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Github } from "lucide-react"

export function Projects() {
    const projects = [
        {
            title: "Stock-Room - Collectibles Community Platform",
            tech: ["React", "Node.js", "MongoDB", "Cypress", "Google Cloud"],
            link: "https://github.com/johnme09/Stock-Room",
            description: [
                "Built a full-stack web platform enabling users to create collection-based communities for physical and digital collectibles.",
                "Implemented secure authentication and authorization for account creation, login, and personalized collection tracking.",
                "Developed community pages for item listing, ownership tracking, and missing-item identification.",
                "Built forum-style discussion components with moderation support for focused community interactions.",
                "Integrated a responsive React frontend with a Node.js backend and MongoDB database.",
                "Applied end-to-end testing using Cypress and deployed the application on Google Cloud."
            ]
        },
        {
            title: "Healthycal - Mindful Eating Web Application",
            tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Cypress", "Jest"],
            link: "#", // Pending
            description: [
                "Built a full-stack web application for tracking meals, nutrition data, and daily wellness tips.",
                "Developed a RESTful backend using Node.js and Express with MongoDB for user and meal data storage.",
                "Implemented JWT-based authentication and authorization for secure user access and protected routes.",
                "Enabled full CRUD functionality for meal logs tied to individual user accounts.",
                "Wrote end-to-end tests with Cypress and unit/API tests using Jest and Supertest.",
                "Structured the application with clear separation of frontend, backend, and testing layers."
            ]
        }
    ]

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="leading-normal">{project.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="outline" className="text-xs">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            {project.link !== "#" && (
                                <Button asChild variant="outline" size="sm">
                                    <Link href={project.link} target="_blank">
                                        <Github className="mr-2 h-4 w-4" />
                                        View on GitHub
                                    </Link>
                                </Button>
                            )}
                            {project.link === "#" && (
                                <Button variant="outline" size="sm" disabled>
                                    Link Pending
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
