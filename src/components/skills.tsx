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
        <section className="py-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Skills</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skills).map(([category, items]) => (
                    <Card key={category} className="shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <Badge key={item} variant="secondary">
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
