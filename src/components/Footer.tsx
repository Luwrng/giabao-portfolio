import { useContent } from "../language";
export function Footer() {
  const { t } = useContent();
  return (
    <footer className="footer shell">
      <span>
        © {new Date().getFullYear()} {t.footer.rights}
      </span>
      <span>{t.footer.note}</span>
      <a href="#top">{t.footer.top} ↑</a>
    </footer>
  );
}
