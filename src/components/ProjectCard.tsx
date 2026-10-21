import type { Project } from "../data/projects";
import { useContent } from "../language";
import { Arrow } from "./Arrow";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const { t, language } = useContent();
  return (
    <article
      className={`project-card ${project.id === "bridge" ? "featured-project" : ""}`}
    >
      <button
        className="project-art-button"
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`${t.projects.details}: ${project.title}`}
      >
        <ProjectVisual id={project.id} large={project.id === "bridge"} />
        <span className="art-open">
          <Arrow />
        </span>
      </button>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.role[language]}</span>
          <time>{project.period}</time>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description[language]}</p>
        {project.result && (
          <p className="project-result">
            <span aria-hidden="true">↗</span>
            {project.result[language]}
          </p>
        )}
        <ul className="tags">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <button
          type="button"
          className="project-detail-button"
          onClick={() => onOpen(project)}
        >
          {t.projects.details}
          <Arrow />
        </button>
      </div>
    </article>
  );
}
