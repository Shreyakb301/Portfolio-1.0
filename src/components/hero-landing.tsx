import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroLanding() {
    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center px-4 md:px-6">
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                    Building Digital <span className="text-primary">Masterpieces</span>
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    I&apos;m Shreya Komarabattini, a computer science student and developer crafting modern, high-performance web experiences.
                </p>
                <div className="space-x-4">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="#work">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/about">
                            About Me
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
