import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
                <div className="flex">
                    <Link href="/" className="flex items-center">
                        <span className="font-serif italic text-2xl md:text-3xl text-foreground">
                            Shreya Komarabattini
                        </span>
                    </Link>
                </div>

                <div className="flex items-center space-x-8">
                    <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
                        <Link href="/#work" className="group relative transition-colors text-foreground">
                            Projects
                            <span className="absolute -bottom-1.5 left-1/2 w-1 h-1 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2"></span>
                        </Link>
                        <Link href="/about" className="group relative transition-colors text-foreground">
                            About
                            <span className="absolute -bottom-1.5 left-1/2 w-1 h-1 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2"></span>
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative transition-colors text-foreground">
                            Resume
                            <span className="absolute -bottom-1.5 left-1/2 w-1 h-1 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1/2"></span>
                        </a>
                    </nav>
                    <div className="flex items-center">
                        <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                            <Link href="mailto:shreyakbinbox@gmail.com" target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">Contact</span>
                                <Mail className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
