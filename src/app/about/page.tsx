import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <div className="container mx-auto max-w-4xl py-6 lg:py-10 px-4 md:px-6">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                        <div className="flex-1 space-y-4">
                            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold">
                                About
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Computer Science Student, Researcher, and Developer.
                            </p>
                        </div>
                    </div>
                    <Separator className="my-10" />
                    <div className="grid gap-10 pb-8">
                        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                            <p>
                                I am a passionate Computer Science student at Purdue University, with a strong foundation in full-stack development, data visualization, and systems administration. My work bridges the gap between complex technical problems and intuitive user experiences.
                            </p>
                        </div>
                        <Experience />
                        <Skills />
                        <Education />
                    </div>
                </div>
            </main>
        </div>
    )
}
