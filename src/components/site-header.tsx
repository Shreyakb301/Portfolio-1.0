"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Playground" },
]

export function SiteHeader() {
    const pathname = usePathname()

    const isActive = (href: string) =>
        href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

    return (
        <header className="retro-nav">
            <div className="about-wrap retro-nav-inner">
                <Link href="/" className="nav-logo" aria-label="Shreya Komarabattini, home">
                    SKB_
                </Link>

                <nav aria-label="Primary navigation">
                  <ul className="nav-links">
                    {primaryLinks.map(({ href, label }) => {
                        const active = isActive(href)

                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`nav-link${active ? " active" : ""}`}
                                    aria-current={active ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
                            Resume ↗
                        </a>
                    </li>
                  </ul>
                </nav>

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
    )
}
