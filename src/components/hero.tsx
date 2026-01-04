import { Mail, Github, Linkedin, Phone } from "lucide-react"

import Link from "next/link"

export function Hero() {
    return (
        <section className="flex flex-col items-start gap-4 py-10 md:py-20">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Shreya Komarabattini
            </h1>
            <p className="text-xl text-muted-foreground">
                Computer Science Student at Purdue University
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <Link href="mailto:shreyakbinbox@gmail.com" className="flex items-center hover:underline">
                    <Mail className="mr-2 h-4 w-4" />
                    shreyakbinbox@gmail.com
                </Link>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    260-410-1390
                </span>
                <span className="hidden sm:inline">|</span>
                <Link href="https://github.com/Shreyakb301" target="_blank" className="flex items-center hover:underline">
                    <Github className="mr-2 h-4 w-4" />
                    github.com/Shreyakb301
                </Link>
                <span className="hidden sm:inline">|</span>
                <Link href="https://linkedin.com/in/shreya-komarabattini" target="_blank" className="flex items-center hover:underline">
                    <Linkedin className="mr-2 h-4 w-4" />
                    linkedin.com/in/shreya-komarabattini
                </Link>
            </div>
        </section>
    )
}
