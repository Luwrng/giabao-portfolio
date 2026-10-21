import { useState } from "react";
import { useContent } from "../language";
import { personalInfo } from "../data/content";
import { Arrow } from "../components/Arrow";
export function Contact() {
  const { t, language } = useContent();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <div className="contact-grid">
          <div>
            <h2 id="contact-title">
              {t.contact.title}
              <br />
              <em>{t.contact.accent}</em>
            </h2>
            <p className="contact-description">{t.contact.description}</p>
          </div>
          <a
            className="contact-orbit"
            href={`mailto:${personalInfo.email}`}
            aria-label={t.contact.email}
          >
            <Arrow />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <a className="contact-email" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
            <button className="copy-button" type="button" onClick={copyEmail}>
              {copyState === "copied"
                ? "✓ " + t.contact.copied
                : t.contact.copy}
              <span aria-hidden="true"> ⧉</span>
            </button>
            <span role="status" className="copy-status">
              {copyState === "error"
                ? t.contact.copyFailed
                : copyState === "copied"
                  ? t.contact.copied
                  : ""}
            </span>
          </div>
          <div className="contact-links">
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href={personalInfo.cv[language]}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.resume} ↗
            </a>
            <p>{t.contact.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
