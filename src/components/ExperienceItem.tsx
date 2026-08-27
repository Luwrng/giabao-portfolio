import { Arrow } from './Arrow'

interface ExperienceItemProps {
    year: string;
    position: string;
    company: string;
    description: string;
}

export function ExperienceItem({ year, position, company, description }: ExperienceItemProps) {
    return (
        <div className="experience-row">
            <span>{year}</span>
            <div>
                <h3>
                    {position}
                    <small>{company}</small>
                </h3>
                <p>{description}</p>
            </div>
            <span className="experience-arrow">
                <Arrow />
            </span>
        </div>
    );
}
