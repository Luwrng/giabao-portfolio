import { useEffect, useState } from "react";

import { navigationContent, navigationLinks } from "../data/content.ts";
import { Button } from "./Button";

const links = navigationLinks;

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("top");

    useEffect(() => {
        // Keep the navigation highlight aligned with the section currently in view.
        const sections = links
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5],
            },
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => setIsMenuOpen((open) => !open);

    return (
        <header className="navbar">
            {/* Logo */}
            <a
                className="brand"
                href="#top"
                onClick={closeMenu}
                aria-label="Gia Bao home"
            >
                <span className="brand-mark">{navigationContent.brandMark}</span>
                <span>{navigationContent.brand}</span>
            </a>

            {/* Navigation */}
            <nav
                id="main-navigation"
                className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
                aria-label="Main navigation"
            >
                {links.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={activeSection === id ? "active" : ""}
                        onClick={closeMenu}
                    >
                        {label}
                    </a>
                ))}
            </nav>

            {/* Actions */}
            <div className="nav-actions">
                <Button href="#contact">{navigationContent.talkAction}</Button>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={toggleMenu}
                >
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
