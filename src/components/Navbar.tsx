import { useEffect, useState } from "react";
import { useContent } from "../language";
import { Arrow } from "./Arrow";
const ids = ["about", "projects", "experience", "skills", "contact"];
export function Navbar() {
  const { t, language, setLanguage } = useContent();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "";
        ids.forEach((id) => {
          if (
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) < 180
          )
            current = id;
        });
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 30
        )
          current = "contact";
        setActive(current);
      });
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("keydown", escape);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Gia Bao home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            gb<span>.</span>
          </span>
          <span className="brand-name">
            GIA BAO<span>DEVELOPER / VIETNAM</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label={
            language === "vi" ? "Điều hướng chính" : "Main navigation"
          }
        >
          {ids.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="language-toggle"
            type="button"
            aria-label={t.language}
            onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
          >
            <span className={language === "vi" ? "selected" : ""}>VI</span>
            <span aria-hidden="true">/</span>
            <span className={language === "en" ? "selected" : ""}>EN</span>
          </button>
          <a className="nav-contact" href="#contact">
            {t.talk}
            <Arrow />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
