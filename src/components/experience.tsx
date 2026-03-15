import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Experience() {
    const experiences: {
        title: string
        company: string
        advisor?: string
        date: string
        description: string[]
        link?: { url: string; label: string }
    }[] = [
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
                ],
                link: { url: "/PosterSample.pdf", label: "View Research Poster" },
            },
            {
                title: "Research: Fort Wayne Crimes",
                company: "Purdue University",
                date: "2023",
                description: [
                    "Analyzed 150,000+ crime records using Python to classify incidents as violent or non-violent.",
                    "Identified crime trends and patterns through data aggregation and visualization techniques.",
                    "Collaborated with a graduate-level research team to produce data-driven reports and insights.",
                ],
                link: { url: "https://www.kaggle.com/code/shreyakb/fort-wayne-crimes", label: "View Analysis on Kaggle" },
            },
            {
                title: "Systems Software Assistant",
                company: "Purdue University",
                date: "08/2023 – Present",
                description: [
                    "Re-imaged, configured, and maintained 100+ lab computers, ensuring consistent OS, software installations, and security updates.",
                    "Resolved 1,500+ hardware and software tickets, maintaining 99% lab uptime and minimizing disruptions for students and faculty.",
                    "Performed routine diagnostics, printer maintenance, and troubleshooting of technical equipment.",
                    "Collaborated with IT staff while independently managing lab systems, providing front-line technical support, and planning and promoting lab events.",
                ],
            },
            {
                title: "Teaching Assistant – Senior Capstone Project",
                company: "Purdue University",
                date: "",
                description: [
                    "Assisted in evaluating capstone project reports and presentations, leveraging Python scripts to support data processing and review pipelines.",
                ],
            },
            {
                title: "Summer Camp Assistant",
                company: "Purdue University",
                date: "2025",
                description: [
                    "Represented the Computer Science department during a high-school summer camp program.",
                    "Assisted students with technical activities and project development.",
                    "Conducted research on prompt engineering and evaluated student capstone posters using AI-based tools.",
                ],
            },
            {
                title: "Leadership Involvement",
                company: "Purdue University",
                date: "",
                description: [
                    "Active member of the Student Government Organization, organizing and supporting campus events.",
                    "Presented research findings at the Love Data 2025 workshop at Purdue University, discussing data visualization practices and effective interpretation of categorical data.",
                ],
            },
        ]

    return (
        <section>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground">Experience</h2>

            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-foreground/10" />

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8">
                            {/* Timeline dot — centered on the title row (top-[10px] aligns with first line of text) */}
                            <div className="absolute left-[-4.5px] top-[10px] w-[9px] h-[9px] rounded-full bg-foreground/30 ring-2 ring-background" />

                            <div className="flex flex-col gap-1">
                                {/* Title + Date row */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                                    <h3 className="text-xl font-semibold text-foreground leading-snug">{exp.title}</h3>
                                    {exp.date && (
                                        <Badge
                                            variant="secondary"
                                            className="self-start shrink-0 text-xs font-medium px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/60 border-none shadow-none"
                                        >
                                            {exp.date}
                                        </Badge>
                                    )}
                                </div>

                                {/* Company + Advisor */}
                                <p className="text-base font-medium text-[#637A70]">
                                    {exp.company}
                                    {exp.advisor && (
                                        <span className="block text-sm font-normal text-foreground/50 mt-0.5">{exp.advisor}</span>
                                    )}
                                </p>

                                {/* Description */}
                                <ul className="mt-2 space-y-1.5 pl-4 list-disc marker:text-foreground/25">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-[68ch]">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                {/* Link */}
                                {exp.link && (
                                    <a
                                        href={exp.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors duration-200 w-fit group"
                                    >
                                        <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                        {exp.link.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
