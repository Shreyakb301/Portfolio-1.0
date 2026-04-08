import Link from "next/link";
import { ProjectShowcase } from "@/components/project-showcase";

export default function WorkPage() {
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
              <Link href="/work" className="nav-link active">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
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
        <section className="page-header spike-b">
          <div className="about-wrap page-header-inner">
            <div className="page-eyebrow">Projects & Research</div>
            <h1 className="page-title">
              Work<span className="page-title-muted">.</span>
            </h1>
          </div>
        </section>

        <div className="section-spacer" style={{ background: "var(--background)" }} />

        <ProjectShowcase />
      </main>

      <footer className="spike-sm-t">
        <div className="about-wrap site-footer">
          <span className="foot-copy">Shreya Komarabattini</span>
          <Link href="/" className="foot-logo">
            SKB_
          </Link>
        </div>
      </footer>
    </div>
  );
}
