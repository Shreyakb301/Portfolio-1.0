export function Education({ showLabel = true }: { showLabel?: boolean }) {
    return (
        <section className={showLabel ? "py-12" : ""}>
            {showLabel && <div className="sec-label">Education</div>}
            <div className="edu-card">
                <div className="edu-year">2026</div>
                <div>
                    <div className="edu-title">Bachelor of Science in <br className="hidden md:block" />Computer Science</div>
                    <div className="edu-sub">Purdue University</div>
                </div>
                <div className="edu-badge">2026</div>
            </div>
        </section>
    )
}
