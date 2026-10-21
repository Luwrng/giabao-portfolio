import { Section } from "../components/Section";
import { useContent } from "../language";
export function Skills() {
  const { t } = useContent();
  return (
    <Section id="skills" {...t.skills}>
      <div className="skills-grid">
        {t.skills.groups.map((group, i) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-heading">
              <span className="mono">0{i + 1}</span>
              <h3>{group.title}</h3>
              <span className="skill-plus" aria-hidden="true">
                +
              </span>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
