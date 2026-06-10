import Link from "next/link"
import { ArrowRight, BookOpen, Braces, GitBranch, Gauge } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="pp-nav">
            <div className="pp-nav-inner">
                <Link href="/" className="pp-brand" aria-label="ProtoPlay home">
                    <span className="pp-brand-mark">⌬</span>
                    <span>ProtoPlay</span>
                </Link>

                <nav className="pp-pill-nav" aria-label="Primary">
                    <Link href="/" className="pp-pill active">
                        <Gauge aria-hidden="true" />
                        Overview
                    </Link>
                    <Link href="/work" className="pp-pill">
                        <GitBranch aria-hidden="true" />
                        System Design
                    </Link>
                    <Link href="/work" className="pp-pill">
                        <Braces aria-hidden="true" />
                        Data Structures
                    </Link>
                    <Link href="/about" className="pp-pill">
                        <BookOpen aria-hidden="true" />
                        Programming Languages
                    </Link>
                </nav>

                <div className="pp-nav-actions">
                    <Link href="/work" className="pp-track-link">
                        Tracks
                    </Link>
                    <Link href="/work" className="pp-start-link">
                        Start challenge
                        <ArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
