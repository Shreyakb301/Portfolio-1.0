import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
    return (
        <section className="py-8">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Education</h2>
            <Card className="shadow-sm">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl font-bold">Bachelor of Science in Computer Science</CardTitle>
                        <span className="text-lg text-muted-foreground">2026</span>
                    </div>
                    <p className="text-xl text-muted-foreground">Purdue University</p>
                </CardHeader>
            </Card>
        </section>
    )
}
