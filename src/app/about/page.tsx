import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <div className="container mx-auto max-w-4xl pt-24 pb-6 lg:pt-32 lg:pb-10 px-4 md:px-6">
                    {/* Page Header */}
                    <div className="space-y-2 mb-2">
                        <h1 className="text-5xl md:text-7xl tracking-tight font-bold text-foreground leading-none">
                            About
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-snug max-w-xl">
                            Computer Science Student, Researcher, and Developer.
                        </p>
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                            <Link
                                href="https://github.com/Shreyakb301"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-foreground/50 hover:text-foreground transition-colors duration-200"
                            >
                                <Github className="h-3.5 w-3.5" />
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/shreya-komarabattini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-foreground/50 hover:text-foreground transition-colors duration-200"
                            >
                                <Linkedin className="h-3.5 w-3.5" />
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    <Separator className="my-8 opacity-40" />

                    <div className="grid gap-10 pb-8">
                        {/* Bio — capped at ~70ch for readability */}
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-[68ch]">
                            I am a passionate Computer Science student at Purdue University, with a strong foundation in full-stack development, data visualization, and systems administration. My work bridges the gap between complex technical problems and intuitive user experiences.
                        </p>
                        <Experience />
                        <Skills />
                        <Education />
                    </div>
                </div>
            </main>
        </div>
    )
}
