import type { ReactNode } from 'react'

interface SectionProps {
    id: string;
    eyebrow: string;
    title: string;
    children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
    return (
        <section className="section" id={id}>
            <div className="section-heading">
                <span className="eyebrow">{eyebrow}</span>
                <h2>{title}</h2>
            </div>
            {children}
        </section>
    );
}
