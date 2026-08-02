import Link from "next/link";

const timelineItems = [
  {
    date: "08/2023 – 05/2026",
    title: "IT Lab Consultant",
    org: "Purdue University",
    bullets: [
      "Re-imaged, configured, and maintained 100+ lab computers, ensuring consistent OS, software installations, and security updates.",
      "Resolved 1,500+ hardware and software tickets, maintaining 99% lab uptime and minimizing disruptions for students and faculty.",
      "Performed routine diagnostics, printer maintenance, and troubleshooting of technical equipment.",
      "Collaborated with IT staff while independently managing lab systems and planning lab events.",
    ],
  },
  {
    date: "2025",
    title: "CS Summer Camp Assistant",
    org: "Purdue University",
    bullets: [
      "Represented the Computer Science department during a high-school summer camp program.",
      "Assisted students with technical activities and project development.",
      "Conducted research on prompt engineering and evaluated student capstone posters using AI-based tools.",
    ],
  },
  {
    date: "09/2024 – 02/2025",
    title: "Undergraduate Researcher",
    org: "Do We Really Know How to Use Graphs Effectively", 
    Advisor: "Dr. Beomjin Kim",
    bullets: [
      "Investigated effective visualization of categorical data, analyzing how users interpret bar, line, and stacked bar charts.",
      "Designed user studies to evaluate visualization clarity and reduce misinterpretation by non-expert audiences.",
      "Formulated evidence-based guidelines for selecting appropriate chart types to improve data comprehension.",
      "Presented findings at the 28th Annual Student Research and Creative Endeavors Symposium.",
    ],
    link: { url: "/resesarch_poster.pdf", label: "View Research Poster →" },
  },
  {
    date: "2023",
    title: "Research: Fort Wayne Crimes",
    org: "Purdue University",
    bullets: [
      "Analyzed 150,000+ crime records using Python to classify incidents as violent or non-violent.",
      "Identified crime trends and patterns through data aggregation and visualization techniques.",
      "Collaborated with a graduate-level research team to produce data-driven reports and insights.",
    ],
    link: { url: "https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023", label: "View Analysis on Kaggle →" },
  },
  {
    date: "2025",
    title: "Teaching Assistant — Senior Capstone Project",
    org: "Purdue University",
    bullets: [
      "Assisted in evaluating capstone project reports and presentations.",
      "Leveraged Python scripts to support data processing and review pipelines.",
    ],
  },
  {
    date: "2023",
    title: "Leadership Involvement",
    org: "Purdue University",
    bullets: [
      "Active member of the Student Government Organization, organizing and supporting campus events.",
      "Presented research findings at the Love Data 2025 workshop at Purdue University, discussing data visualization practices.",
    ],
  },
];

const skillColumns = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    label: "Web Tech",
    items: ["HTML", "CSS", "React.js", "Next.js/Vite"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "SQL"],
  },
  {
    label: "AI / ML / NLP",
    items: ["Machine Learning", "NLP", "LLMs", "Prompt Engineering", "Model Evaluation"],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Jupyter Notebook",
      "Vercel",
      "Render",
      "MongoDB Atlas",
    ],
  },
  {
    label: "Testing",
    items: ["Cypress", "Jest", "Supertest"],
  },
  {
    label: "Core Concepts",
    items: ["Data Structures & Algorithms", "OOP", "System Design", "API Design"],
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="retro-nav">
        <div className="about-wrap retro-nav-inner">
          <Link href="/" className="nav-logo">
            SKB_
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="nav-link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
                Resume ↗
              </a>
            </li>
          </ul>

          <div className="about-nav-social">
            <a href="https://github.com/Shreyakb301" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shreya-komarabattini" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:shreyakbinbox@gmail.com">Email</a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="about-sec spike-b spike-t">
          <div className="about-wrap">
            <div className="sec-label">Bio & Experience</div>
            <div className="spike-strip" />

            <div className="about-grid">
              <div>
                <div
                  className="about-profile-photo"
                  role="img"
                  aria-label="Shreya Komarabattini"
                />
                <p className="about-p">
                  I&apos;m a recent Computer Science graduate from Purdue University May 2026, with hands-on experience building software, working with data, and exploring areas like NLP and AI through projects and research .
                </p>
                <p className="about-p">
                  I&apos;ve worked across backend systems, interactive web applications, and data-driven projects, along with work on how models process and interpret language.
                </p>
                <p className="about-p">
                  Interested in problems where clarity is hard, building systems that are not just functional, but genuinely understandable to the people using them. This shows up in interface design, data visualization research, and NLP-related work.
                </p>
                <p className="about-p">
                  Currently seeking internship or new grad roles to apply skills, continue learning, and contribute to meaningful systems.
                </p>
                <div className="about-skills-divider" aria-hidden="true" />

                <div className="about-skills-box">
                  <div className="about-skills-heading">Skills</div>
                  {skillColumns.map((column) => (
                    <div key={column.label} className="about-skills-row">
                      <div className="about-skills-label">{column.label}</div>
                      <div className="about-skills-items">{column.items.join(" · ")}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tl">
                <div className="edu-card about-timeline-education">
                  <div className="edu-year">2026</div>
                  <div>
                    <div className="edu-title">B.S. Computer Science</div>
                    <div className="edu-sub">Purdue University · Fort Wayne, Indiana</div>
                  </div>
                  <div className="edu-badge">Graduated May 2026</div>
                </div>

                {timelineItems.map((item, index) => (
                  <div key={`${item.title}-${index}`} className="tl-item">
                    <div className="tl-dot-col">
                      <div className="tl-dot" />
                      {index < timelineItems.length - 1 && <div className="tl-line" />}
                    </div>

                    <div className="tl-body">
                      <div className="tl-date">{item.date}</div>
                      <div className="tl-role">{item.title}</div>
                      <div className="tl-org">{item.org}</div>
                      <ul className="tl-bullets">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      {item.link && (
                        <a href={item.link.url} className="tl-link" target="_blank" rel="noopener noreferrer">
                          {item.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-spacer" style={{ background: "var(--background-2)" }} />

        <section className="reading-sec spike-b spike-t">
          <div className="about-wrap">
            <div className="sec-label">Additional Reading</div>
            <div className="spike-strip" />
            <p className="reading-copy">Dive into my technical notes, research reflections, and deep-dive articles.</p>
            <a
              href="https://www.notion.so/Write-ups-61fec7c005ac835dbf47019ccaec1688"
              className="notion-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Collection →
            </a>
          </div>
        </section>

        <div className="section-spacer" style={{ background: "var(--background)" }} />

        <section className="cta-strip spike-t">
          <div className="about-wrap text-center">
            <div className="sec-label mx-auto mb-8 max-w-[360px] justify-center">Get in Touch</div>
            <div className="spike-strip" />
            <h2 className="cta-heading">Want to work together?</h2>
            <div className="mb-8">
              <a href="mailto:shreyakbinbox@gmail.com" className="btn">
                Say Hello
              </a>
            </div>
            <div className="cta-links">
              <a href="https://github.com/Shreyakb301" className="c-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shreya-komarabattini"
                className="c-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://calendly.com/shreyakbinbox/30min" className="c-link" target="_blank" rel="noopener noreferrer">
                Schedule
              </a>
            </div>
          </div>
        </section>

        <div className="section-spacer" style={{ background: "var(--background)" }} />
      </main>

      <footer className="spike-sm-t bg-background">
        <div className="about-wrap site-footer site-footer-centered">
          <span className="foot-copy">Shreya Komarabattini</span>
        </div>
      </footer>
    </div>
  );
}
