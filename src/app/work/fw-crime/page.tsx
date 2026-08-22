import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Fort Wayne Crime Patterns, 2023 | Shreya Komarabattini",
  description:
    "A playful data case study that filters 154,478 police activity records into 30,336 likely crime incidents and explores patterns across Fort Wayne.",
};

const categories = [
  { label: "Property", value: 46.7, className: "property" },
  { label: "Violent", value: 23.5, className: "violent" },
  { label: "Vehicle-related", value: 11.4, className: "vehicle" },
  { label: "Public-order", value: 10.4, className: "public" },
  { label: "Drug / alcohol", value: 8, className: "drug" },
];

const timeWindows = [
  { time: "1–6 PM", label: "Vehicle-related peak", color: "yellow" },
  { time: "7–10 PM", label: "Violent crime peak", color: "pink" },
  { time: "10 PM–2 AM", label: "Drug / alcohol peak", color: "blue" },
  { time: "Afternoon", label: "Strongest property window", color: "green" },
];

const corridors = ["Coldwater Rd", "Lima Rd", "W Jefferson Blvd", "E Main St", "E Washington Blvd"];

export default function FortWayneCrimeCaseStudyPage() {
  return (
    <div className="fw-case-page">
      <header className="retro-nav fw-case-nav">
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
        <section className="fw-case-hero">
          <div className="fw-case-hero-copy">
            <p className="fw-case-eyebrow"><span>Case file 23-150K</span> Fort Wayne, Indiana</p>
            <h1>Crime is<br /><em>patterned,</em><br />not random.</h1>
            <p className="fw-case-deck">
              A careful look at where, when, and how likely crime incidents appeared across Fort Wayne in 2023.
            </p>
            <div className="fw-case-actions">
              <a href="https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023" target="_blank" rel="noopener noreferrer">Open the notebook ↗</a>
              <a href="https://app.notion.com/p/325ec7c005ac8031b78bf99048b4c015" target="_blank" rel="noopener noreferrer">Read the report ↗</a>
            </div>
          </div>

          <div className="fw-case-hero-board" aria-label="Key project findings">
            <div className="fw-case-pin pin-one" />
            <div className="fw-case-pin pin-two" />
            <p className="fw-case-board-label">Evidence board / 2023</p>
            <div className="fw-case-board-stat big"><strong>30,336</strong><span>likely crime incidents</span></div>
            <div className="fw-case-board-note note-a">Only <strong>1 in 5</strong> raw entries made the crime-focused cut.</div>
            <div className="fw-case-board-note note-b"><strong>46.7%</strong><br />property crime</div>
            <div className="fw-case-board-stamp">Validity<br />over volume</div>
            <svg className="fw-case-thread" viewBox="0 0 500 420" aria-hidden="true">
              <path d="M92 104 C180 72 174 232 302 218 S396 312 420 342" />
              <path d="M166 314 C238 298 288 246 366 106" />
            </svg>
          </div>
        </section>

        <section className="fw-case-intro fw-case-shell">
          <div>
            <p className="fw-case-section-tag">01 / The assignment</p>
            <h2>The raw file was a police activity log, not a crime database.</h2>
          </div>
          <div className="fw-case-intro-copy">
            <p>
              Traffic stops, alarms, welfare checks, EMS calls, follow-ups, and citizen assists lived beside offense records. Summarizing everything would tell the wrong story, so the first task was deciding what belonged in a defensible crime-focused dataset.
            </p>
            <dl>
              <div><dt>Role</dt><dd>Data analysis &amp; visualization</dd></div>
              <div><dt>Tools</dt><dd>Python, Pandas, Matplotlib</dd></div>
              <div><dt>Focus</dt><dd>Time, category &amp; location patterns</dd></div>
            </dl>
          </div>
        </section>

        <section className="fw-case-filter">
          <div className="fw-case-shell">
            <p className="fw-case-section-tag light">02 / Build the evidence</p>
            <h2>154,478 rows entered.<br />30,336 incidents remained.</h2>
            <div className="fw-case-funnel" aria-label="Dataset filtering process">
              <article><span>Source log</span><strong>154,478</strong><small>all 2023 police activity rows</small></article>
              <b aria-hidden="true">→</b>
              <article><span>City filter</span><strong>152,095</strong><small>98.46% tagged Fort Wayne</small></article>
              <b aria-hidden="true">→</b>
              <article className="selected"><span>Crime filter</span><strong>30,336</strong><small>19.95% of the original log</small></article>
            </div>
            <p className="fw-case-filter-note">The conservative filter favored clear crime patterns, such as theft, assault, vandalism, OWI, and weapons, and excluded service calls.</p>
          </div>
        </section>

        <section className="fw-case-categories fw-case-shell">
          <div className="fw-case-category-copy">
            <p className="fw-case-section-tag">03 / What happened</p>
            <h2>Property crime takes up nearly half the board.</h2>
            <p>
              Hit-and-run looks like the largest single offense at first glance. Combine theft-related labels, however, and property loss and damage become the dominant volume story.
            </p>
            <aside><strong>Key distinction</strong> High-volume crime is not the same thing as high-risk crime.</aside>
          </div>
          <div className="fw-case-bars" aria-label="Crime categories by share">
            {categories.map((category) => (
              <div className={`fw-case-bar ${category.className}`} key={category.label}>
                <div><span>{category.label}</span><strong>{category.value}%</strong></div>
                <i style={{ "--bar-size": `${category.value}%` } as CSSProperties} />
              </div>
            ))}
          </div>
        </section>

        <section className="fw-case-timing">
          <div className="fw-case-shell">
            <p className="fw-case-section-tag">04 / When it happens</p>
            <div className="fw-case-timing-head">
              <h2>Summer gets louder.<br />Weekends do too.</h2>
              <p>July averaged <strong>93.55 incidents per day</strong>, the highest month. Friday through Sunday accounted for <strong>44.8%</strong> of all likely crime incidents.</p>
            </div>
            <div className="fw-case-time-cards">
              {timeWindows.map((window) => (
                <article className={window.color} key={window.label}>
                  <span>{window.time}</span><p>{window.label}</p>
                </article>
              ))}
            </div>
            <div className="fw-case-midnight-note"><span>!</span><p><strong>Midnight is a mirage.</strong> It appears as the most common hour largely because of a data-entry artifact, not a real behavioral peak.</p></div>
          </div>
        </section>

        <section className="fw-case-map fw-case-shell">
          <div className="fw-case-map-visual" aria-label="Stylized map showing concentrated crime corridors">
            <div className="fw-map-road road-a" /><div className="fw-map-road road-b" /><div className="fw-map-road road-c" />
            <span className="hotspot h1" /><span className="hotspot h2" /><span className="hotspot h3" /><span className="hotspot h4" /><span className="hotspot h5" />
            <p>Fort Wayne<br /><strong>hotspot sketch</strong></p>
          </div>
          <div className="fw-case-map-copy">
            <p className="fw-case-section-tag">05 / Where it clusters</p>
            <h2>Commercial corridors create opportunity and volume.</h2>
            <p>The top 10 areas produced <strong>28.1%</strong> of all likely crime incidents, while the top 10 corridors accounted for <strong>15.4%</strong>.</p>
            <ol>
              {corridors.map((corridor, index) => <li key={corridor}><span>{String(index + 1).padStart(2, "0")}</span>{corridor}</li>)}
            </ol>
            <p className="fw-case-map-caveat">High-volume areas were not automatically high-violence areas. Some lower-volume corridors had twice the city-average violent share.</p>
          </div>
        </section>

        <section className="fw-case-reporting">
          <div className="fw-case-shell">
            <p className="fw-case-section-tag light">06 / Read the clock carefully</p>
            <h2>Reporting lag changes what “time of crime” really means.</h2>
            <div className="fw-case-report-cards">
              <article><strong>62.4%</strong><span>Property crime reported within 1 hour</span><small>6.9% arrived 7+ days later</small></article>
              <article><strong>93.6%</strong><span>Violent crime reported within 1 hour</span><small>Timing is substantially more reliable</small></article>
              <article><strong>99.5%</strong><span>Drug / alcohol incidents immediate</span><small>The most time-precise category</small></article>
            </div>
          </div>
        </section>

        <section className="fw-case-chart fw-case-shell">
          <div className="fw-case-chart-copy">
            <p className="fw-case-section-tag">07 / The starting point</p>
            <h2>Plot first. Question the plot second.</h2>
            <p>This early view charted every activity record in the source log. It helped reveal the annual rhythm but also exposed why a crime-specific filter was essential before interpreting the pattern.</p>
          </div>
          <figure>
            <Image src="/crime-hp.jpeg" alt="Early line chart showing all police activity records by month in 2023" width={989} height={490} sizes="(max-width: 800px) 100vw, 60vw" />
            <figcaption>Early exploration · all activity records, before the conservative crime filter</figcaption>
          </figure>
        </section>

        <section className="fw-case-anomaly">
          <div className="fw-case-shell">
            <div className="fw-case-anomaly-date"><span>JAN</span><strong>01</strong><small>135 incidents</small></div>
            <div><p className="fw-case-section-tag light">Anomaly detected</p><h2>New Year&apos;s Day was the largest spike.</h2><p>It included 45 violent incidents and 24 shots-fired records. Other multi-category surges appeared on June 24, July 14 during the Three Rivers Festival, September 29, and November 5.</p></div>
          </div>
        </section>

        <section className="fw-case-limitations fw-case-shell">
          <p className="fw-case-section-tag">08 / Handle with care</p>
          <h2>This analysis describes records, not every crime, cause, or neighborhood.</h2>
          <div>
            <p>No latitude/longitude or population context</p>
            <p>Broad occurrence windows reduce precision</p>
            <p>Some offense labels remain ambiguous</p>
            <p>Incident logs are not confirmed-crime tables</p>
          </div>
        </section>

        <section className="fw-case-outcome">
          <div className="fw-case-shell">
            <p className="fw-case-section-tag light">Case closed / for now</p>
            <h2>Property crime follows opportunity.<br />Violent crime follows specific places and times.</h2>
            <p>The useful result is not one citywide number. It is a more honest map of routine activity, reporting behavior, seasonal pressure, and localized risk.</p>
            <div className="fw-case-actions inverse">
              <a href="https://www.kaggle.com/code/shreyakb/crime-data-analysis-fort-wayne-2023" target="_blank" rel="noopener noreferrer">Explore the notebook ↗</a>
              <Link href="/work">Back to all work →</Link>
            </div>
          </div>
        </section>

        <nav className="fw-case-project-nav" aria-label="Previous and next project">
          <Link href="/work/it-ticket">← IT Ticket Routing</Link>
          <Link href="/work">All work →</Link>
        </nav>
      </main>

      <footer className="fw-case-footer"><span>Shreya Komarabattini</span><span>Data case study · 2023</span></footer>
    </div>
  );
}
