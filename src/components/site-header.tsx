import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-primary/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-12">
                {/* Logo */}
                <Link href="/" className="flex items-center h-full cursor-none">
                    <span className="font-serif text-[10px] text-primary tracking-widest uppercase leading-none">
                        SKB<span className="animate-blink">_</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2 md:gap-6">
                    {/* Nav Links */}
                    <nav className="hidden sm:flex items-center gap-4 md:gap-10">
                        <Link
                            href="/about"
                            className="font-serif text-[8px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors duration-200 cursor-none"
                        >
                            About
                        </Link>
                        <Link
                            href="/#work"
                            className="font-serif text-[8px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors duration-200 cursor-none"
                        >
                            Work
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-serif text-[8px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors duration-200 cursor-none"
                        >
                            Resume
                        </a>
                    </nav>

                    {/* Social Icon Buttons */}
                    <div className="flex items-center gap-0 md:gap-1">
                        <Button asChild variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 text-muted-foreground hover:text-primary hover:bg-transparent transition-colors duration-200 cursor-none rounded-none">
                            <Link href="https://github.com/Shreyakb301" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 text-muted-foreground hover:text-primary hover:bg-transparent transition-colors duration-200 cursor-none rounded-none">
                            <Link href="https://www.linkedin.com/in/shreya-komarabattini" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 text-muted-foreground hover:text-primary hover:bg-transparent transition-colors duration-200 cursor-none rounded-none">
                            <Link href="mailto:shreyakbinbox@gmail.com">
                                <span className="sr-only">Email</span>
                                <Mail className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
