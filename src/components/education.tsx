import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
    return (
        <section className="py-12">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-12 text-foreground uppercase border-b border-primary/20 pb-4 inline-block">Education</h2>
            <Card className="rounded-none border-2 border-primary/20 bg-background shadow-none">
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <CardTitle className="font-heading text-xs md:text-sm tracking-widest uppercase text-primary leading-relaxed">Bachelor of Science in <br className="hidden md:block"/>Computer Science</CardTitle>
                        <span className="font-sans text-xs tracking-widest px-2.5 py-1.5 bg-primary/10 text-primary uppercase">2026</span>
                    </div>
                    <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase pt-4">Purdue University</p>
                </CardHeader>
            </Card>
        </section>
    )
}
