import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CONTAINER } from "../../lib/layout";
import { MonoLabel, PageHero } from "./kit";

export interface DocSection {
  id: string;
  title: string;
  body: ReactNode;
}

/**
 * Long-form document layout (white paper, terms, privacy, cookies):
 * numbered sections, sticky table of contents with scroll-spy on desktop.
 */
export function DocLayout({
  eyebrow,
  title,
  accent,
  meta,
  intro,
  tocLabel,
  sections,
  summary,
  after,
  links,
}: {
  /** Skimmable key points shown before the full text. */
  summary?: ReactNode;
  eyebrow: string;
  title: string;
  accent?: string;
  meta?: string;
  intro?: ReactNode;
  tocLabel: string;
  sections: DocSection[];
  after?: ReactNode;
  links?: { to: string; label: string }[];
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="w-full bg-white text-text-base pb-24 md:pb-32">
      <PageHero
        eyebrow={eyebrow}
        lead={title}
        accent={accent}
        compact
        aside={
          (intro || meta) && (
            <div className="space-y-4">
              {intro}
              {meta && <MonoLabel>{meta}</MonoLabel>}
            </div>
          )
        }
      />

      <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-black/[0.08] pt-12 md:pt-16`}>
        <nav aria-label={tocLabel} className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28">
            <MonoLabel accent>{tocLabel}</MonoLabel>
            <ol className="mt-4 space-y-1 border-l border-black/[0.08]">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block -ml-px pl-4 py-1.5 border-l font-sans text-sm leading-snug transition-colors duration-200 ${
                      active === s.id ? "border-accent text-text-base" : "border-transparent text-text-muted hover:text-text-base"
                    }`}
                  >
                    <span className="font-mono text-[11px] tabular-nums mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="lg:col-span-8 lg:col-start-5 max-w-[720px]">
          {summary && <div className="mb-16">{summary}</div>}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 pb-12 mb-12 border-b border-black/[0.08] last:border-0">
              <span className="font-mono text-xs text-accent font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] leading-tight">{s.title}</h2>
              <div className="mt-5 space-y-4 font-sans text-base sm:text-[17px] leading-[1.75] text-text-base/85">{s.body}</div>
            </section>
          ))}
          {after}
          {links && links.length > 0 && (
            <p className="mt-12 pt-8 border-t border-black/[0.08] flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </p>
          )}
        </article>
      </div>
    </main>
  );
}

/** Renders paragraph strings as <p> elements. */
export function Paras({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </>
  );
}
