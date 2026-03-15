import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-foreground/5">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
                {/* Logo — vertically centered, same baseline as nav */}
                <Link href="/" className="flex items-center h-full">
                    <span className="font-serif italic text-2xl text-foreground leading-none">
                        Shreya Komarabattini
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-7 text-base font-medium">
                        <Link
                            href="/#work"
                            className="relative text-foreground/70 hover:text-foreground transition-colors duration-200 group"
                        >
                            Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link
                            href="/about"
                            className="relative text-foreground/70 hover:text-foreground transition-colors duration-200 group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-foreground/70 hover:text-foreground transition-colors duration-200 group"
                        >
                            Resume
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                        </a>
                    </nav>

                    {/* Social Icon Buttons — larger hit area */}
                    <div className="flex items-center gap-1">
                        <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors duration-200">
                            <Link href="https://github.com/Shreyakb301" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-[18px] w-[18px]" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors duration-200">
                            <Link href="https://www.linkedin.com/in/shreya-komarabattini" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-[18px] w-[18px]" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors duration-200">
                            <Link href="mailto:shreyakbinbox@gmail.com">
                                <span className="sr-only">Email</span>
                                <Mail className="h-[18px] w-[18px]" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
