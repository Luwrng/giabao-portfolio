import type { Project } from '../data/projects'

import { Card } from './Card'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="project-card">
            <div className="project-art">
                <img src={project.image} alt={`${project.title} project screenshot`} />
            </div>

            <div className="project-copy">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </Card>
    )
}