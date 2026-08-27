import { ExperienceItem } from '../components/ExperienceItem'
import { Section } from '../components/Section'
import { educationContent, experienceContent } from '../data/content.ts'

export function Experience() {
    return (
        <Section id="experience" eyebrow={experienceContent.eyebrow} title={experienceContent.title}>
            <div className="experience-list">
                {experienceContent.items.map((item) => <ExperienceItem key={item.year} {...item} />)}
                <ExperienceItem year={educationContent.period} position={educationContent.major} company={educationContent.school} description={educationContent.description} />
            </div>
        </Section>
    );
}
