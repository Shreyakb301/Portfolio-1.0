import Link from "next/link"

export function SiteHeader() {
    return (
        <header className="retro-nav">
            <div className="about-wrap retro-nav-inner">
                <Link href="/" className="nav-logo">
                    <span>
                        SKB<span className="animate-blink">_</span>
                    </span>
                </Link>

                <ul className="nav-links">
                    <li>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/work" className="nav-link">
                            Work
                        </Link>
                    </li>
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link nav-resume"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                <div className="about-nav-social">
                    <Link href="https://github.com/Shreyakb301" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/shreya-komarabattini" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                        LinkedIn
                    </Link>
                    <Link href="mailto:shreyakbinbox@gmail.com" className="nav-social-link">
                        Email
                    </Link>
                </div>
            </div>
        </header>
    )
}
