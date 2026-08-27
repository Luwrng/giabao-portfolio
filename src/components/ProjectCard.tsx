import { projectContent } from '../data/content'
import type { Project } from '../data/projects'

import { Arrow } from './Arrow'
import { Card } from './Card'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="project-card">
            <div className="project-top">
                <span>{project.number}</span>

                <span className="project-type">
                    {project.type} · {project.role} · {project.period}
                </span>

                <span className="project-arrow">
                    <Arrow />
                </span>
            </div>

            <div className="project-art">
                <div className="fake-window">
                    <div className="window-header">
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="window-content">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>

            <div className="project-copy">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {projectContent.githubLabel}
                    </a>



                </div>
            </div>
        </Card >
    )
}