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
                <div className="container mx-auto max-w-4xl pt-20 pb-6 lg:pt-32 lg:pb-10 px-4 md:px-6">
                    {/* Page Header */}
                    <div className="space-y-4 mb-4 relative">
                        <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-relaxed">
                            About<span className="animate-blink text-primary">_</span>
                        </h1>
                        <p className="text-sm md:text-xl text-muted-foreground font-sans leading-snug max-w-xl">
                            Computer Science Student, Researcher, and Developer.
                        </p>
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-2 pt-4">
                            <Link
                                href="https://github.com/Shreyakb301"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-serif text-[8px] md:text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-200 cursor-none"
                            >
                                <Github className="h-3.5 w-3.5" />
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/shreya-komarabattini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-serif text-[8px] md:text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-200 cursor-none"
                            >
                                <Linkedin className="h-3.5 w-3.5" />
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    <Separator className="my-8 opacity-40" />

                    <div className="grid gap-8 md:gap-10 pb-8">
                        {/* Bio — capped at ~70ch for readability */}
                        <p className="text-sm md:text-lg text-foreground/70 leading-relaxed max-w-[68ch]">
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
