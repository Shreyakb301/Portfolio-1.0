import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
    const skills = {
        "Programming Languages": ["Python", "Java", "C", "JavaScript"],
        "Web Technologies": ["HTML", "CSS", "React.js"],
        "Backend & Data": ["Node.js", "Express", "MongoDB"],
        "Tools & Platforms": ["Git", "Jupyter Notebook", "JavaFX", "SceneBuilder"],
        "Testing": ["Cypress", "Jest", "Supertest"],
    }

    return (
        <section className="py-12">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-12 text-foreground uppercase border-b border-primary/20 pb-4 inline-block">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skills).map(([category, items]) => (
                    <Card key={category} className="rounded-none border-2 border-primary/20 bg-background shadow-none">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-serif text-xs md:text-sm tracking-widest uppercase text-primary leading-relaxed">{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2.5 mt-2">
                                {items.map((item) => (
                                    <Badge key={item} variant="secondary" className="font-sans text-[10px] md:text-[11px] tracking-widest px-2.5 py-1.5 rounded-none bg-primary/10 text-primary border-none shadow-none uppercase transition-colors hover:bg-primary hover:text-primary-foreground">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
