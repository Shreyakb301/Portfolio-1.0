import { ExternalLink } from "lucide-react"

export function Experience({ showLabel = true }: { showLabel?: boolean }) {
    const experiences: {
        title: string
        company: string
        advisor?: string
        date: string
        description: string[]
        link?: { url: string; label: string }
    }[] = [
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
                link: { url: "https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023", label: "View Analysis on Kaggle" },
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
            {showLabel && <div className="sec-label">Experience</div>}

            <div className="tl">
                <div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="tl-item">
                            <div className="tl-dot-col">
                                <div className="tl-dot" />
                                <div className="tl-line" />
                            </div>

                            <div className="tl-body">
                                {exp.date && <div className="tl-date">{exp.date}</div>}
                                <div className="tl-role">{exp.title}</div>
                                <div className="tl-org">
                                    {exp.company}
                                    {exp.advisor && (
                                        <span className="mt-1 block font-dm text-sm text-[color:var(--foreground-2)]">{exp.advisor}</span>
                                    )}
                                </div>

                                <ul className="tl-bullets">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>

                                {exp.link && (
                                    <a
                                        href={exp.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="subpage-link group mt-6 inline-flex items-center gap-2"
                                    >
                                        <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
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
