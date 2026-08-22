import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

export const metadata: Metadata = {
  title: "IT Ticket Routing Automation | Shreya Komarabattini",
  description:
    "An NLP-powered system that classifies helpdesk tickets and recommends the right IT support group, issue type, and priority.",
};

function TicketImage(props: ComponentProps<typeof Image>) {
  return <Image {...props} unoptimized />;
}

const metrics = [
  { value: "30,000", label: "helpdesk tickets" },
  { value: "8", label: "IT support groups" },
  { value: "81.35%", label: "best benchmark accuracy" },
  { value: "DistilBERT", label: "best-performing model" },
];

const decisions = [
  {
    number: "01",
    title: "Prepare the signal",
    copy: "Normalize free-text requests, preserve the details that distinguish categories, and turn the original helpdesk records into a consistent training set.",
  },
  {
    number: "02",
    title: "Benchmark the models",
    copy: "Compare classical and transformer-based NLP approaches against the same routing task instead of choosing a model from intuition alone.",
  },
  {
    number: "03",
    title: "Keep people in control",
    copy: "Return confidence alongside each recommendation so uncertain tickets can be reviewed instead of silently routed to the wrong team.",
  },
];

export default function ItTicketCaseStudyPage() {
  return (
    <div className="ticket-case-page">
      <header className="retro-nav">
        <div className="about-wrap retro-nav-inner">
          <Link href="/" className="nav-logo">SKB_</Link>

          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/work" className="nav-link active">Playground</Link></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">Resume ↗</a></li>
          </ul>

          <div className="about-nav-social">
            <a href="https://github.com/Shreyakb301" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shreya-komarabattini" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:shreyakbinbox@gmail.com">Email</a>
          </div>
        </div>
      </header>

      <main>
        <section className="ticket-case-hero" aria-label="IT Ticket Routing Automation project cover">
          <div className="ticket-case-hero-panel">
            <TicketImage
              src="/it-ticket-case-study/hero.png"
              alt="IT Ticket Routing Automation product introduction and prediction flow"
              width={1466}
              height={793}
              priority
              sizes="100vw"
            />
          </div>
        </section>

        <section className="ticket-case-intro ticket-case-copy">
          <div className="ticket-case-kicker">Machine learning product · Helpdesk operations</div>
          <h1>Routing every ticket to the team that can solve it.</h1>

          <div className="ticket-case-meta">
            <div>
              <span>Overview</span>
              <strong>An NLP system that reads free-text helpdesk requests and recommends a support group, issue type, and priority.</strong>
            </div>
            <div>
              <span>Model</span>
              <strong>DistilBERT selected through comparative benchmarking</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>Python · FastAPI · React · Docker</strong>
            </div>
          </div>

          <div className="ticket-case-actions">
            <a href="https://it-ticket-automation-system.onrender.com" target="_blank" rel="noopener noreferrer" className="ticket-case-button primary">
              View live system ↗
            </a>
            <a href="https://github.com/Shreyakb301/IT-Text-Classification" target="_blank" rel="noopener noreferrer" className="ticket-case-button">
              View code ↗
            </a>
          </div>
        </section>

        <section className="ticket-case-brief">
          <div className="ticket-case-copy ticket-case-brief-grid">
            <div>
              <div className="ticket-case-kicker">The problem</div>
              <h2>A support queue is only useful when the right team sees the ticket.</h2>
            </div>
            <p>
              Helpdesk requests arrive as inconsistent, human-written descriptions. Manual triage adds delay, and a
              wrong route creates another handoff. The project treats routing as a multi-output classification problem
              while making model confidence visible for review.
            </p>
          </div>
        </section>

        <section className="ticket-case-flow" aria-label="Ticket routing prediction flow">
          <div><span>01</span><strong>Incoming ticket</strong></div>
          <div><span>02</span><strong>NLP prediction</strong></div>
          <div><span>03</span><strong>Support group</strong></div>
          <div><span>04</span><strong>Confidence check</strong></div>
        </section>

        <section className="ticket-case-section ticket-case-copy">
          <div className="ticket-case-kicker">Real-time triage</div>
          <h2>One input, three recommendations, and a confidence signal.</h2>
          <p>
            The workspace keeps submission and model output side by side. A user can rewrite the prompt, route the
            ticket, inspect the prediction, and understand how much trust to place in the recommendation without
            leaving the page.
          </p>
        </section>

        <figure className="ticket-case-figure ticket-case-figure-wide">
          <TicketImage
            src="/it-ticket-case-study/workspace.png"
            alt="Ticket submission, model prediction, benchmark metrics, and analytics dashboard"
            width={1466}
            height={793}
            sizes="100vw"
          />
        </figure>

        <div className="ticket-case-metrics" aria-label="IT ticket model metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <section className="ticket-case-section ticket-case-copy">
          <div className="ticket-case-kicker">Dataset intelligence</div>
          <h2>Analytics make the training data part of the product story.</h2>
          <p>
            Category volume reveals where the dataset is dense or imbalanced, while priority distribution shows the
            operational mix the model must learn. Keeping these views near the prediction tool makes model performance
            easier to interpret in context.
          </p>
        </section>

        <div className="ticket-case-pair">
          <figure className="ticket-case-figure">
            <TicketImage
              src="/it-ticket-case-study/categories.png"
              alt="Bar chart showing helpdesk tickets by model category"
              width={1156}
              height={920}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          <figure className="ticket-case-figure">
            <TicketImage
              src="/it-ticket-case-study/priority.png"
              alt="Pie chart showing helpdesk priority distribution"
              width={1156}
              height={920}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
        </div>

        <section className="ticket-case-section ticket-case-copy">
          <div className="ticket-case-kicker">Model strategy</div>
          <h2>The hard part was building trust around the prediction.</h2>
          <p>
            Accuracy is only one part of an operational ML product. The system also needs reliable data preparation,
            comparable evaluation, fast serving, and a clear path for low-confidence cases.
          </p>
        </section>

        <div className="ticket-case-decisions">
          {decisions.map((decision) => (
            <article key={decision.number}>
              <span>{decision.number}</span>
              <h3>{decision.title}</h3>
              <p>{decision.copy}</p>
            </article>
          ))}
        </div>

        <section className="ticket-case-outcome">
          <div className="ticket-case-copy">
            <div className="ticket-case-kicker">Outcome</div>
            <h2>From raw helpdesk text to a reviewable routing recommendation.</h2>
            <p>
              The finished workflow connects dataset analysis, model comparison, API inference, and a human-readable
              dashboard. It turns an NLP experiment into a deployable tool that can shorten triage while keeping the
              final routing decision understandable.
            </p>
            <div className="ticket-case-actions">
              <a href="https://it-ticket-automation-system.onrender.com" target="_blank" rel="noopener noreferrer" className="ticket-case-button primary">
                Try the system ↗
              </a>
            </div>
          </div>
        </section>

        <nav className="ticket-case-project-nav" aria-label="Previous and next project">
          <Link href="/work/protoplay"><span>←</span> ProtoPlay</Link>
          <Link href="/work">All work <span>→</span></Link>
        </nav>
      </main>

      <footer className="ticket-case-footer">
        <div className="about-wrap site-footer site-footer-centered">
          <span className="foot-copy">Shreya Komarabattini</span>
        </div>
      </footer>
    </div>
  );
}
