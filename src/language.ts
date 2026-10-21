import { createContext, useContext } from "react";
import { content } from "./data/content";
import type { Language } from "./data/content";

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "vi", setLanguage: () => {} });

export function useContent() {
  const context = useContext(LanguageContext);
  return { ...context, t: content[context.language] };
}
