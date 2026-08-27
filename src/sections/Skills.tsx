import { Section } from '../components/Section'
import { SkillCard } from '../components/SkillCard'
import { skillsContent } from '../data/content.ts'

export function Skills() {
    return (
        <Section id="skills" eyebrow={skillsContent.eyebrow} title={skillsContent.title}>
            <div className="skills-grid">
                {skillsContent.cards.map((skill) => <SkillCard key={skill.number} {...skill} />)}
            </div>
        </Section>
    );
}
