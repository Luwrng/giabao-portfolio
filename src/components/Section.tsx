import type { ReactNode } from "react";
export function Section({
  id,
  eyebrow,
  title,
  accent,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <div>
            <h2 id={`${id}-title`}>
              {title}
              {accent && (
                <>
                  <br />
                  <em>{accent}</em>
                </>
              )}
            </h2>
            {description && (
              <p className="section-description">{description}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
