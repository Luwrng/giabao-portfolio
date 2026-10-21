import { Section } from "../components/Section";
import { Arrow } from "../components/Arrow";
import { useContent } from "../language";
export function About() {
  const { t } = useContent();
  return (
    <Section id="about" {...t.about}>
      <div className="about-grid">
        <div className="about-intro">
          <p className="about-lead">{t.about.lead}</p>
          <a className="inline-link" href="#experience">
            {t.about.link}
            <Arrow right />
          </a>
        </div>
        <div className="about-body">
          {t.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="about-facts">
            {t.about.facts.map((f) => (
              <li key={f}>
                <span aria-hidden="true">↗</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
