import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

export const metadata: Metadata = {
  title: "ProtoPlay | Shreya Komarabattini",
  description:
    "An interactive learning platform for practicing system design, data structures, and programming-language concepts visually.",
};

function ProtoImage(props: ComponentProps<typeof Image>) {
  return <Image {...props} unoptimized />;
}

const tracks = [
  {
    number: "01",
    title: "System design",
    copy: "Build architectures from real components and see latency, reliability, throughput, and cost respond in real time.",
  },
  {
    number: "02",
    title: "Data structures",
    copy: "Turn pointers, graphs, trees, arrays, and hashing into visual drills that can be manipulated instead of memorized.",
  },
  {
    number: "03",
    title: "Programming languages",
    copy: "Explore how syntax, typing, abstraction, and runtime safety change readability, writability, reliability, and cost.",
  },
];

export default function ProtoPlayCaseStudyPage() {
  return (
    <div className="proto-case-page">
      <header className="retro-nav">
        <div className="about-wrap retro-nav-inner">
          <Link href="/" className="nav-logo">
            SKB_
          </Link>

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
        <section className="proto-case-hero" aria-label="ProtoPlay project cover">
          <ProtoImage
            src="/protoplay-hp.png"
            alt="ProtoPlay landing page introducing interactive engineering simulations"
            width={2552}
            height={1424}
            priority
            sizes="100vw"
          />
        </section>

        <section className="proto-case-intro proto-case-copy">
          <div className="proto-case-kicker">Interactive learning · Product design</div>
          <h1>Practice systems and algorithms visually.</h1>

          <div className="proto-case-meta">
            <div>
              <span>Overview</span>
              <strong>Visual lessons and challenges that turn abstract computer-science concepts into direct interaction.</strong>
            </div>
            <div><span>Learning tracks</span><strong>System design · Data structures · Programming languages</strong></div>
            <div><span>Tools</span><strong>Next.js · TypeScript · Tailwind</strong></div>
          </div>

          <div className="proto-case-actions">
            <a href="https://protoplay.vercel.app/" target="_blank" rel="noopener noreferrer" className="proto-case-button primary">
              Explore ProtoPlay ↗
            </a>
            <a href="https://github.com/Shreyakb301/System-Design.git" target="_blank" rel="noopener noreferrer" className="proto-case-button">
              View code ↗
            </a>
          </div>
        </section>

        <section className="proto-case-section proto-case-copy">
          <div className="proto-case-kicker">The brief</div>
          <h2>Make “learn by doing” work for concepts that usually live in diagrams and textbooks.</h2>
          <p>
            Computer science education often explains the finished answer without letting learners feel how the system
            changes. ProtoPlay reframes each topic as a small environment: a clear goal, a focused control set, visible
            feedback, and enough context to understand why the result changed.
          </p>
        </section>

        <figure className="proto-case-figure proto-case-figure-wide">
          <ProtoImage
            src="/protoplay-case-study/overview.png"
            alt="ProtoPlay homepage introducing visual systems and algorithm practice"
            width={1280}
            height={720}
            sizes="100vw"
          />
        </figure>

        <section className="proto-case-section proto-case-copy">
          <div className="proto-case-kicker">Learning model</div>
          <h2>Three tracks, one consistent way to learn.</h2>
          <p>
            The homepage gives each track its own identity while the lesson pages keep navigation, explanations, and
            interactive modules predictable. Learners can browse in order or jump directly to the topic they need.
          </p>
        </section>

        <div className="proto-case-tracks">
          {tracks.map((track) => (
            <article key={track.number}>
              <span>{track.number}</span>
              <h3>{track.title}</h3>
              <p>{track.copy}</p>
            </article>
          ))}
        </div>

        <section className="proto-case-section proto-case-copy">
          <div className="proto-case-kicker">System design studio</div>
          <h2>Architecture becomes a live tradeoff, not a static diagram.</h2>
          <p>
            The System Architect Challenge starts with a client, an application server, and a database. Learners add
            infrastructure from a component palette while live metrics reveal how every choice affects performance,
            reliability, throughput, and budget.
          </p>
        </section>

        <figure className="proto-case-figure proto-case-figure-full proto-case-figure-dark">
          <ProtoImage
            src="/protoplay-case-study/system-challenge.png"
            alt="ProtoPlay system architecture challenge with component palette and live system metrics"
            width={1280}
            height={720}
            sizes="100vw"
          />
        </figure>

        <section className="proto-case-section proto-case-copy">
          <div className="proto-case-kicker">Challenge design</div>
          <h2>One learning pattern, adapted to different kinds of problems.</h2>
          <p>
            The Linked List Connector turns pointer logic into a spatial puzzle, while the language-design simulator
            makes tradeoffs between readability, writability, reliability, and cost visible. Both keep the mission,
            controls, and feedback in the same field of view.
          </p>
        </section>

        <div className="proto-case-pair">
          <figure className="proto-case-figure">
            <ProtoImage
              src="/protoplay-case-study/data-challenge.png"
              alt="ProtoPlay linked-list challenge with draggable nodes"
              width={1280}
              height={720}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          <figure className="proto-case-figure">
            <ProtoImage
              src="/protoplay-case-study/language-lab.png"
              alt="ProtoPlay programming-language tradeoff simulator"
              width={1280}
              height={720}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
        </div>

        <section className="proto-case-outro proto-case-copy">
          <div className="proto-case-kicker">Current outcome</div>
          <h2>A cohesive learning world with room to keep growing.</h2>
          <p>
            ProtoPlay now connects three computer-science tracks through a shared visual language and a repeatable
            lesson pattern. The foundation supports more topics, richer challenge states, progress tracking, and
            future learner testing without changing the core promise: understand it by interacting with it.
          </p>
          <div className="proto-case-actions">
            <a href="https://protoplay.vercel.app/" target="_blank" rel="noopener noreferrer" className="proto-case-button primary">
              Try ProtoPlay ↗
            </a>
          </div>
        </section>

        <nav className="proto-case-project-nav" aria-label="Previous and next project">
          <Link href="/work/moodle"><span>←</span> Moodle</Link>
          <Link href="/work">All work <span>→</span></Link>
        </nav>
      </main>

      <footer className="proto-case-footer">
        <div className="about-wrap site-footer site-footer-centered">
          <span className="foot-copy">Shreya Komarabattini</span>
        </div>
      </footer>
    </div>
  );
}
