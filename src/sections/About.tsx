import { Section } from '../components/Section'
import { aboutContent } from '../data/content.ts'

export function About() {
    return (
        <Section
            id="about"
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
        >
            <div className="about-grid">
                <p className="about-lede">{aboutContent.lead}</p>
                <div className="about-body">
                    {aboutContent.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </Section>
    );
}
