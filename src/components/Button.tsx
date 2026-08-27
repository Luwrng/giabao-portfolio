import type { ReactNode } from 'react'
import { Arrow } from './Arrow'

interface ButtonProps {
    children: ReactNode;
    href: string;
    secondary?: boolean;
}

export function Button({ children, href, secondary = false }: ButtonProps) {
    return (
        <a className={`button ${secondary ? "button-secondary" : ""}`} href={href}>
            {children}
            <Arrow />
        </a>
    );
}
