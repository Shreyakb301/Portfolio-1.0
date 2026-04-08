export function Skills({ showLabel = true }: { showLabel?: boolean }) {
    const skills = {
        "Programming Languages": ["Python", "Java", "C", "JavaScript"],
        "Web Technologies": ["HTML", "CSS", "React.js"],
        "Backend & Data": ["Node.js", "Express", "MongoDB"],
        "Tools & Platforms": ["Git", "Jupyter Notebook", "JavaFX", "SceneBuilder"],
        "Testing": ["Cypress", "Jest", "Supertest"],
    }

    return (
        <section className={showLabel ? "py-12" : ""}>
            {showLabel && <div className="sec-label">Skills</div>}
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-col">
                        <div className="skill-col-label">{category}</div>
                        <ul className="skill-list">
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
