import { useEffect, useRef, useState } from "react";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectVisual } from "../components/ProjectVisual";
import { Arrow } from "../components/Arrow";
import { useContent } from "../language";
import { personalInfo } from "../data/content";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { t, language } = useContent();
  useEffect(() => {
    const node = dialog.current;
    if (!project || !node) return;
    node.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = oldOverflow;
    };
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <button
            type="button"
            className="dialog-close"
            onClick={onClose}
            aria-label={t.close}
          >
            ×
          </button>
          <p className="eyebrow">
            {project.role[language]} / {project.period}
          </p>
          <h2 id="dialog-title">{project.title}</h2>
          <p className="dialog-description">{project.description[language]}</p>
          <ProjectVisual id={project.id} />
          <h3>{t.projects.contributions}</h3>
          <ul className="contribution-list">
            {project.contributions.map((point, i) => (
              <li key={point.en}>
                <span>0{i + 1}</span>
                <p>{point[language]}</p>
              </li>
            ))}
          </ul>
          {project.result && (
            <div className="dialog-result">
              <span className="eyebrow">{t.projects.result}</span>
              <p>{project.result[language]}</p>
            </div>
          )}
          <h3>{t.projects.tech}</h3>
          <ul className="tags">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="dialog-links">
            {project.githubUrl && (
              <a
                className="button"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.projects.source}
                <Arrow />
              </a>
            )}
            {project.liveUrl && (
              <a
                className="button button-secondary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.projects.demo}
                <Arrow />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
export function Projects() {
  const { t } = useContent();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(
    (p) => filter === "all" || p.type === filter,
  );
  return (
    <Section id="projects" {...t.projects} className="projects-section">
      <div className="projects-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label={t.projects.overview}
        >
          {["all", "fullstack", "frontend"].map((value, i) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              className={filter === value ? "selected" : ""}
              onClick={() => setFilter(value)}
            >
              {t.projects.filters[i]}
              <span>
                {value === "all"
                  ? projects.length
                  : projects.filter((p) => p.type === value).length}
              </span>
            </button>
          ))}
        </div>
        <span className="project-count mono">2023 — 2026</span>
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelected}
          />
        ))}
      </div>
      <a
        className="inline-link all-projects"
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
      >
        {t.projects.repo}
        <Arrow />
      </a>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
