import portrait from "../assets/HomePic.jpg";
import { useContent } from "../language";
import { personalInfo } from "../data/content";
import { Arrow } from "../components/Arrow";
export function Hero() {
  const { t, language } = useContent();
  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <div className="hero-status">
          <span className="status-dot" />
          {t.hero.status}
        </div>
        <h1 id="hero-title">
          {t.hero.line1}
          <br />
          <em>{t.hero.line2}</em>
        </h1>
        <p className="hero-lede">{t.hero.description}</p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            {t.hero.primary}
            <Arrow />
          </a>
          <a
            className="button button-secondary"
            href={personalInfo.cv[language]}
            download
          >
            {t.hero.secondary}
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <span className="portrait-index" aria-hidden="true">
          01 / GB
        </span>
        <div className="portrait-frame">
          <img
            src={portrait}
            alt={
              language === "vi"
                ? "Gia Bảo cầm máy ảnh"
                : "Gia Bao holding a camera"
            }
            fetchPriority="high"
            width="1152"
            height="2048"
          />
          <div className="portrait-caption">
            <span>GIA BAO</span>
            <span>HCMC, VN ↗</span>
          </div>
        </div>
        <div className="portrait-note">
          <span className="note-symbol" aria-hidden="true">
            ✳
          </span>
          <span>{t.hero.caption}</span>
        </div>
        <div className="build-stamp">
          <span>{t.hero.note}</span>
          <div aria-hidden="true">
            <span>UI</span>
            <i /> <span>API</span>
            <i />
            <span>DB</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <p>{t.hero.footer}</p>
        <a href="#about">
          {t.hero.scroll}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
