import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
    const experiences = [
        {
            title: "Undergraduate Researcher",
            company: "Do We Really Know How to Use Graphs Effectively",
            advisor: "Advisor: Dr. Beomjin Kim",
            date: "09/2024 – 02/2025",
            description: [
                "Investigated effective visualization of categorical data, analyzing how users interpret bar, line, and stacked bar charts.",
                "Designed user studies to evaluate visualization clarity and reduce misinterpretation by non-expert audiences.",
                "Formulated evidence-based guidelines for selecting appropriate chart types to improve data comprehension.",
                "Presented findings at the 28th Annual Student Research and Creative Endeavors Symposium.",
            ]
        },
        {
            title: "Research: Fort Wayne Crimes",
            company: "Purdue University",
            date: "2023",
            description: [
                "Analyzed 150,000+ crime records using Python to classify incidents as violent or non-violent.",
                "Identified crime trends and patterns through data aggregation and visualization techniques.",
                "Collaborated with a graduate-level research team to produce data-driven reports and insights."
            ]
        },
        {
            title: "Systems Software Assistant",
            company: "Purdue University",
            date: "08/2023 - Present",
            description: [
                "Re-imaged, configured, and maintained 100+ lab computers, ensuring consistent OS, software installations, and security updates.",
                "Resolved 1,500+ hardware and software tickets, maintaining 99% lab uptime and minimizing disruptions for students and faculty.",
                "Performed routine diagnostics, printer maintenance, and troubleshooting of technical equipment.",
                "Collaborated with IT staff while independently managing lab systems, providing front-line technical support, and planning and promoting lab events."
            ]
        },
        {
            title: "Teaching Assistant - Senior Capstone Project",
            company: "Purdue University",
            date: "",
            description: [
                "Assisted in evaluating capstone project reports and presentations, leveraging Python scripts to support data processing and review pipelines."
            ]
        },
        {
            title: "Summer Camp Assistant",
            company: "Purdue University",
            date: "2025",
            description: [
                "Represented the Computer Science department during a high-school summer camp program.",
                "Assisted students with technical activities and project development.",
                "Conducted research on prompt engineering and evaluated student capstone posters using AI-based tools."
            ]
        },
        {
            title: "Leadership Involvement",
            company: "Purdue University",
            date: "",
            description: [
                "Active member of the Student Government Organization, organizing and supporting campus events.",
                "Presented research findings at the Love Data 2025 workshop at Purdue University, discussing data visualization practices and effective interpretation of categorical data."
            ]
        }
    ]

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-6" />
                        <Card className="border-none shadow-none bg-transparent">
                            <CardHeader className="p-0 mb-2">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                                    <CardTitle className="text-lg font-semibold">{exp.title}</CardTitle>
                                    {exp.date && <Badge variant="secondary" className="w-fit">{exp.date}</Badge>}
                                </div>
                                <div className="text-muted-foreground font-medium">
                                    {exp.company}
                                    {exp.advisor && <span className="block text-sm font-normal mt-1">{exp.advisor}</span>}
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
