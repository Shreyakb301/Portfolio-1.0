import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Graph Visualization for Non-Experts — Shreya Komarabattini",
  description:
    "A research case study exploring how chart choice, scale, orientation, and data volume affect categorical-data interpretation.",
};

const findings = [
  { number: "01", title: "Chart form creates meaning", copy: "A line connecting categorical values can imply order, continuity, or progression—even when none exists." },
  { number: "02", title: "Totals and proportions answer different questions", copy: "A stacked chart preserves magnitude; a 100% stacked chart makes composition easier to compare. Important work may require both." },
  { number: "03", title: "Category count changes the answer", copy: "A grouped bar works well with a few categories, but becomes visually overwhelming as the number of bars grows." },
  { number: "04", title: "Layout is analytical, not cosmetic", copy: "Axis direction, category order, color range, labels, and scale can decide whether a pattern is readable or misleading." },
];

export default function VisualizationStudyPage() {
  return (
    <div className="viz-case-page">
      <header className="retro-nav viz-case-nav">
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
        <section className="viz-case-hero">
          <div className="viz-case-hero-copy">
            <p className="viz-case-kicker">Research study · Data visualization · 2025</p>
            <h1>Do we really know how to use graphs <em>effectively?</em></h1>
            <p className="viz-case-deck">A study of how familiar charts can clarify, distort, or conceal categorical relationships for non-expert readers.</p>
            <div className="viz-case-actions">
              <a href="/resesarch_poster.pdf" target="_blank" rel="noopener noreferrer">View research poster ↗</a>
              <a href="https://app.notion.com/p/326ec7c005ac80c2bd8cd23bb09e6d05" target="_blank" rel="noopener noreferrer">Read research notes ↗</a>
            </div>
          </div>
          <aside className="viz-case-hero-guide" aria-label="How to approach a visualization">
            <div className="viz-guide-toolbar"><span>START_HERE</span><span>Reader guide</span></div>
            <p className="viz-guide-intro">Before showing a chart, give the reader four pieces of context.</p>
            <ol>
              <li><span>01</span><div><strong>The problem</strong><p>What decision or comparison are we trying to make?</p></div></li>
              <li><span>02</span><div><strong>The data</strong><p>What does each category and value represent?</p></div></li>
              <li><span>03</span><div><strong>The reading task</strong><p>Do we need exact values, totals, proportions, or a trend?</p></div></li>
              <li><span>04</span><div><strong>The chart choice</strong><p>Use the form that makes that task easiest to understand.</p></div></li>
            </ol>
            <div className="viz-guide-verdict"><span>Context first</span><strong>Graph second.</strong></div>
          </aside>
        </section>

        <section className="viz-case-overview viz-case-shell">
          <div>
            <p className="viz-case-kicker">01 / Research problem</p>
            <h2>A graph can be technically correct and still lead a reader toward the wrong conclusion.</h2>
          </div>
          <div className="viz-case-overview-copy">
            <p>Data visualization shapes decisions, but non-experts are often given charts chosen by habit rather than by the question being asked. Categorical data makes this especially visible: the same values can appear as a line, grouped bars, stacked totals, or normalized proportions—and each form changes what the eye notices first.</p>
            <dl>
            <div><dt>Advisor</dt><dd>Dr. Beomjin Kim</dd></div>
            <div><dt>Institution</dt><dd>Purdue University</dd></div>
              <div><dt>Scope</dt><dd>Categorical vs. categorical data</dd></div>
            </dl>
          </div>
        </section>

        <section className="viz-case-data">
          <div className="viz-case-shell">
            <div className="viz-data-head">
              <p className="viz-case-kicker">02 / What the poster studies</p>
              <h2>One dataset. Three chart decisions.</h2>
              <p>The poster compares patient counts across disease types and gender categories. Both variables are categorical. It tests how chart form, axis orientation, and scale change what a non-expert notices.</p>
            </div>
            <div className="viz-data-definition" aria-label="Definitions for the poster dataset">
              <article><span>Categories</span><strong>Disease type</strong><p>11 categories, including cardiovascular, digestive, endocrine, oncology, and respiratory conditions.</p></article>
              <article><span>Groups</span><strong>Gender</strong><p>Three groups—female, male, and other—compared within every disease type.</p></article>
              <article><span>Measure</span><strong>Patient count</strong><p>The number of patients represented by each disease-and-gender combination.</p></article>
            </div>
            <div className="viz-data-path">
              <p><span>01</span><strong>Chart form</strong><small>Line or bar?</small></p>
              <i aria-hidden="true">→</i>
              <p><span>02</span><strong>Orientation</strong><small>Which categories belong on each axis?</small></p>
              <i aria-hidden="true">→</i>
              <p><span>03</span><strong>Comparison</strong><small>Totals or proportions?</small></p>
            </div>
          </div>
        </section>

        <section className="viz-case-question">
          <div className="viz-case-shell">
            <p className="viz-case-kicker light">The central question</p>
            <h2>How do chart type and visual attributes influence what a non-expert can accurately compare?</h2>
            <div className="viz-case-question-tags"><span>Interpretation</span><span>Comparison</span><span>Decision-making</span><span>Readability</span></div>
          </div>
        </section>

        <section className="viz-case-method viz-case-shell">
          <div className="viz-case-method-copy">
            <p className="viz-case-kicker">03 / Method</p>
            <h2>Hold the data steady. Change the representation.</h2>
            <p>The team held the disease-and-gender data steady, then redrew it as line, grouped bar, stacked bar, and 100% stacked bar charts. Each comparison asked what became easier to see, what disappeared, and what a non-domain expert might misread.</p>
          </div>
          <ol className="viz-case-method-steps">
            <li><span>01</span><div><strong>Define the relationship</strong><p>Compare patient counts across disease types and the three gender categories.</p></div></li>
            <li><span>02</span><div><strong>Build competing views</strong><p>Represent the same question with different chart forms, orientations, and normalization choices.</p></div></li>
            <li><span>03</span><div><strong>Compare the reading task</strong><p>Evaluate clarity for individual values, totals, proportions, trends, extremes, and dense category sets.</p></div></li>
            <li><span>04</span><div><strong>Turn observations into rules</strong><p>Document when each form is effective, insufficient, or likely to mislead a general audience.</p></div></li>
          </ol>
        </section>

        <section className="viz-case-false-trend">
          <div className="viz-case-shell">
            <div className="viz-case-false-copy">
              <p className="viz-case-kicker light">04 / Decision one · Chart form</p>
              <h2>First explain the task: compare discrete disease categories.</h2>
              <p>Disease types do not form a continuous sequence. A line connects them anyway, which can make the peaks and dips look like a progression. Grouped bars remove that invented journey and give each patient count a common baseline.</p>
              <aside><strong>Choice:</strong> Use grouped bars because the reader needs direct category-to-category comparisons. Reserve lines for ordered data where movement or trend is meaningful.</aside>
            </div>
            <div className="viz-false-chart line-version" aria-label="Decorative line chart connecting unrelated categories">
              <div className="viz-chart-label"><span>Before</span><strong>Line chart</strong></div>
              <div className="viz-false-line"><i /><i /><i /><i /><i /><i /></div>
              <p>A connected line suggests movement or progression.</p>
            </div>
            <div className="viz-false-chart bar-version" aria-label="Decorative grouped bar chart for categorical comparison">
              <div className="viz-chart-label"><span>After</span><strong>Grouped bars</strong></div>
              <div className="viz-true-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <p>Separate baselines support direct comparison.</p>
            </div>
          </div>
        </section>

        <section className="viz-case-orientation viz-case-shell">
          <div className="viz-orientation-copy">
            <p className="viz-case-kicker">05 / Decision two · Orientation</p>
            <h2>Then arrange the chart around the larger set of categories.</h2>
            <p>The poster tests two grouped-bar arrangements. Grouping many disease bars beneath only three gender labels creates dense clusters. Giving each disease type its own position creates smaller, repeatable three-bar groups and makes the labels easier to scan.</p>
            <aside><strong>Choice:</strong> Place disease type—the larger category set—along the primary reading axis, then compare the three gender bars within each disease.</aside>
          </div>
          <div className="viz-orientation-figures">
            <figure><div className="viz-orientation-bars crowded" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div><figcaption><span>Harder to scan</span> Many disease bars packed into three gender groups.</figcaption></figure>
            <figure><div className="viz-orientation-bars readable" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div><figcaption><span>Easier to scan</span> Three gender bars repeated for each disease type.</figcaption></figure>
          </div>
        </section>

        <section className="viz-case-two-truths viz-case-shell">
          <p className="viz-case-kicker">06 / Decision three · Comparison</p>
          <h2>One chart showed the totals.<br />The other showed the proportions.</h2>
          <div className="viz-two-truths-grid">
            <article>
              <div className="viz-mini-stacks raw"><i /><i /><i /><i /><i /><i /></div>
              <span>Stacked bar</span><h3>How much is there?</h3><p>Preserves total magnitude, but makes internal segments difficult to compare because most do not share a baseline.</p>
            </article>
            <div className="viz-case-plus">+</div>
            <article>
              <div className="viz-mini-stacks normalized"><i /><i /><i /><i /><i /><i /></div>
              <span>100% stacked</span><h3>What share is each part?</h3><p>Clarifies category proportions, but removes the size of each total and cannot tell the complete story alone.</p>
            </article>
          </div>
          <p className="viz-case-combination"><strong>Finding:</strong> When both magnitude and composition matter, present the views together. One is context for the other.</p>
        </section>

        <section className="viz-case-findings">
          <div className="viz-case-shell">
            <p className="viz-case-kicker light">07 / Poster findings</p>
            <div className="viz-case-finding-list">
              {findings.map((finding) => (
                <article key={finding.number}><span>{finding.number}</span><h3>{finding.title}</h3><p>{finding.copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="viz-case-poster">
          <div className="viz-case-shell">
            <div className="viz-case-poster-head"><div><p className="viz-case-kicker light">08 / Research artifact</p><h2>Presented as a Purdue Fort Wayne research poster.</h2></div><a href="/resesarch_poster.pdf" target="_blank" rel="noopener noreferrer">Open full PDF ↗</a></div>
            <figure className="viz-case-slide"><Image src="/research-poster.png" alt="Research poster titled Do We Really Know How To Use Graphs Effectively?" width={1596} height={1236} sizes="(max-width: 800px) 100vw, 920px" /><figcaption>Do We Really Know How To Use Graphs Effectively? · Department of Computer Science · Purdue University Fort Wayne</figcaption></figure>
          </div>
        </section>

        <section className="viz-case-reflection viz-case-shell">
          <div><p className="viz-case-kicker">09 / Reflection &amp; limitations</p><h2>A useful framework, with more testing still ahead.</h2></div>
          <div>
            <p>The project produced systematic guidelines through comparative visual analysis. It did not establish one chart as universally superior, and the poster does not report a controlled participant sample or quantified comprehension results.</p>
            <p>Future work can validate the guidelines with formal user studies, test accessibility and color perception, expand beyond categorical data, and measure how domain knowledge changes interpretation.</p>
          </div>
        </section>

        <section className="viz-case-outcome">
          <div className="viz-case-shell">
            <p className="viz-case-kicker light">The takeaway</p>
            <h2>Choose the graph for the question—not because the software made it easy.</h2>
            <p>Good visualization is not decoration after analysis. The chart type, scale, axis, order, and companion views are part of the analytical argument itself.</p>
            <div className="viz-case-actions inverse"><a href="/resesarch_poster.pdf" target="_blank" rel="noopener noreferrer">View the poster ↗</a><Link href="/work">Back to all work →</Link></div>
          </div>
        </section>

        <nav className="viz-case-project-nav" aria-label="Previous and next project"><Link href="/work/fw-crime">← Fort Wayne Crime Analysis</Link><Link href="/work">All work →</Link></nav>
      </main>
      <footer className="viz-case-footer"><span>Shreya Komarabattini</span><span>Research case study · 2025</span></footer>
    </div>
  );
}
