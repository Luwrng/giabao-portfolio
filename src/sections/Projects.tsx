import { Arrow } from '../components/Arrow'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { projectContent } from '../data/content'
import { projects } from '../data/projects'

export function Projects() {
    return (
        <Section
            id="projects"
            eyebrow="Projects"
            title=""
        >
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                    />
                ))}
            </div>

            <a
                className="text-link"
                href="https://github.com/Luwrng"
                target="_blank"
                rel="noreferrer"
            >
                {projectContent.allProjectsLabel}
                <Arrow right />
            </a>
        </Section>
    )
}