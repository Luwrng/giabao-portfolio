interface ArrowProps {
    right?: boolean;
}

export function Arrow({ right = false }: ArrowProps) {
    return (
        <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d={right ? "M4 12h16m-6-6 6 6-6 6" : "M5 19 19 5M8 5h11v11"} />
        </svg>
    );
}
