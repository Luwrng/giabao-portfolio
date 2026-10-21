import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { content } from "./data/content";
import type { Language } from "./data/content";
import { LanguageContext } from "./language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("portfolio-language") === "en" ? "en" : "vi";
    } catch {
      return "vi";
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = "Gia Bao | Fresher Fullstack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content[language].hero.description);
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage may be unavailable. */
    }
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
