import { footerContent } from "../data/content.ts";

interface FooterProps {
    copyright?: string;
}

export function Footer({ copyright = footerContent.copyright }: FooterProps) {
    return (
        <footer>
            <span>{copyright}</span>
            <span>{footerContent.note}</span>
            <a href="#top">{footerContent.backToTop}</a>
        </footer>
    );
}
