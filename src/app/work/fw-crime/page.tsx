import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fort Wayne Crime Data Analysis — Shreya Komarabattini",
  description:
    "A Python and geospatial analysis of more than 150,000 Fort Wayne crime records, with temporal trends, classification, and responsible-data caveats.",
};

const metrics = [
  { value: "150K+", label: "records explored" },
  { value: "12", label: "months compared" },
  { value: "2", label: "high-level classes" },
  { value: "Python", label: "analysis workflow" },
];

const decisions = [
  {
    number: "01",
    title: "Make the records consistent",
    copy: "Clean dates, locations, and offense labels before grouping. The analysis treats missing or inconsistent fields as data-quality questions rather than silently filling them in.",
  },
  {
    number: "02",
    title: "Compare time and place",
    copy: "Aggregate incidents by month to reveal temporal changes, then use mapped density to examine where records cluster without claiming that a hotspot explains why an event occurred.",
  },
  {
    number: "03",
    title: "Communicate the boundary",
    copy: "Police records describe reported and recorded incidents. They do not measure every crime, personal risk, causation, or the character of a neighborhood.",
  },
];

export default function FortWayneCrimeCaseStudyPage() {
  return (
    <div className="ticket-case-page">
      <header className="retro-nav">
        <div className="about-wrap retro-nav-inner">
          <Link href="/" className="nav-logo">SKB_</Link>

          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/work" className="nav-link active">Work</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
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
        <section className="ticket-case-hero" aria-label="Fort Wayne crime analysis project cover">
          <div className="ticket-case-hero-panel">
            <Image
              src="/crime-hp.jpeg"
              alt="Line chart of monthly incidents in the 2023 Fort Wayne project dataset"
              width={989}
              height={490}
              priority
              sizes="100vw"
            />
          </div>
        </section>

        <section className="ticket-case-intro ticket-case-copy">
          <div className="ticket-case-kicker">Data analysis · Public safety · Fort Wayne, Indiana</div>
          <h1>Turning 150,000+ incident records into a readable view of time and place.</h1>

          <div className="ticket-case-meta">
            <div>
              <span>Overview</span>
              <strong>A reproducible exploration of offense categories, monthly patterns, and geographic concentrations.</strong>
            </div>
            <div>
              <span>Question</span>
              <strong>What patterns become visible after incident records are cleaned, classified, and mapped?</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>Python · Pandas · Matplotlib · Geospatial visualization</strong>
            </div>
          </div>

          <div className="ticket-case-actions">
            <a
              href="https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023"
              target="_blank"
              rel="noopener noreferrer"
              className="ticket-case-button primary"
            >
              View analysis on Kaggle ↗
            </a>
            <a
              href="https://www.cityoffortwayne.in.gov/699/Crime-Stats"
              target="_blank"
              rel="noopener noreferrer"
              className="ticket-case-button"
            >
              View FWPD crime statistics ↗
            </a>
          </div>
        </section>

        <section className="ticket-case-brief">
          <div className="ticket-case-copy ticket-case-brief-grid">
            <div>
              <div className="ticket-case-kicker">The problem</div>
              <h2>Raw activity records are detailed, but difficult to compare at city scale.</h2>
            </div>
            <p>
              Individual records answer what was logged at a particular time and place. The project turns those rows
              into broader views: monthly volume, violent and non-violent groupings, and mapped concentrations that
              support exploration without reducing the city to a single crime-rate number.
            </p>
          </div>
        </section>

        <section className="ticket-case-flow" aria-label="Crime data analysis workflow">
          <div><span>01</span><strong>Clean records</strong></div>
          <div><span>02</span><strong>Classify offenses</strong></div>
          <div><span>03</span><strong>Compare months</strong></div>
          <div><span>04</span><strong>Map patterns</strong></div>
        </section>

        <section className="ticket-case-section ticket-case-copy">
          <div className="ticket-case-kicker">Temporal analysis</div>
          <h2>The 2023 dataset changes through the year rather than following one steady baseline.</h2>
          <p>
            Monthly aggregation makes the project easier to inspect than a table of individual events. The chart shows
            higher recorded volume around late spring and midsummer and lower volume near the beginning and end of the
            year. These are descriptive patterns inside the analyzed dataset—not proof of seasonality or causation.
          </p>
        </section>

        <figure className="ticket-case-figure ticket-case-figure-wide">
          <Image
            src="/crime-hp.jpeg"
            alt="Monthly incident counts plotted across 2023"
            width={989}
            height={490}
            sizes="100vw"
          />
        </figure>

        <div className="ticket-case-metrics" aria-label="Fort Wayne crime analysis project metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <section className="ticket-case-section ticket-case-copy">
          <div className="ticket-case-kicker">Research context</div>
          <h2>Local, state, and federal sources answer different questions.</h2>
          <p>
            Fort Wayne publishes recurring police crime-statistics reports for local monitoring. Indiana participates
            in statewide NIBRS reporting, which captures incident-level details under a standardized framework. The FBI
            Crime Data Explorer provides the wider UCR context, but comparisons still depend on agency participation,
            reporting practices, definitions, and coverage.
          </p>
          <div className="ticket-case-actions">
            <a href="https://www.cityoffortwayne.in.gov/699/Crime-Stats" target="_blank" rel="noopener noreferrer" className="ticket-case-button">
              Fort Wayne crime stats ↗
            </a>
            <a href="https://www.in.gov/isp/nibrs/statewide-crime-statistics/" target="_blank" rel="noopener noreferrer" className="ticket-case-button">
              Indiana NIBRS ↗
            </a>
            <a href="https://cde.ucr.cjis.gov/" target="_blank" rel="noopener noreferrer" className="ticket-case-button">
              FBI Crime Data Explorer ↗
            </a>
          </div>
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
            <h2>A portfolio analysis that makes patterns visible without overstating what the records prove.</h2>
            <p>
              The finished workflow connects cleaning, classification, aggregation, and mapping. It demonstrates how
              public-safety records can support transparent exploration while keeping reporting limitations visible to
              the reader.
            </p>
            <div className="ticket-case-actions">
              <a
                href="https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-case-button primary"
              >
                Explore the notebook ↗
              </a>
            </div>
          </div>
        </section>

        <nav className="ticket-case-project-nav" aria-label="Previous and next project">
          <Link href="/work/it-ticket"><span>←</span> IT Ticket Routing</Link>
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
