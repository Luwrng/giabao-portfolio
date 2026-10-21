import { Section } from "../components/Section";
import { useContent } from "../language";
export function Experience() {
  const { t } = useContent();
  return (
    <Section id="experience" {...t.experience}>
      <div className="experience-list">
        {t.experience.items.map((item) => (
          <article className="experience-row" key={item.company}>
            <div className="experience-date">
              <span className="timeline-dot" />
              <span>{item.period}</span>
              <small>{item.type}</small>
            </div>
            <div className="experience-copy">
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="education">
        <p className="eyebrow">{t.experience.education}</p>
        <div>
          <h3>FPT University</h3>
          <p>{t.experience.degree}</p>
        </div>
        <span className="mono">2021 — 2025</span>
        <span className="education-mark" aria-hidden="true">
          ↗
        </span>
      </div>
    </Section>
  );
}
