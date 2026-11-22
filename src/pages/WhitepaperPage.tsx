import { DocLayout, Paras } from "../components/page/DocLayout";
import { Btn, Lede, MonoLabel, Reveal } from "../components/page/kit";
import { WHITEPAPER_CONTENT } from "../data/content/whitepaper";
import { ROUTES } from "../lib/routes";

export function WhitepaperPage() {
  const { hero, summary, sections, inquiry, tocLabel, links } = WHITEPAPER_CONTENT;

  return (
    <DocLayout
      eyebrow={hero.eyebrow}
      title={hero.title}
      accent={hero.titleAccent}
      intro={<Lede>{hero.intro}</Lede>}
      cta={<Btn to={ROUTES.contact}>{hero.ctaLabel}</Btn>}
      tocLabel={tocLabel}
      summary={
        <div>
          <MonoLabel accent>{summary.label}</MonoLabel>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08]">
            {summary.points.map((p, i) => (
              <Reveal key={p.figure} delay={i * 0.08} className="bg-white p-6 sm:p-8">
                <span className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.05em] text-accent">{p.figure}</span>
                <p className="mt-2 font-sans text-base leading-snug">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      }
      sections={sections.map((s) => ({ id: s.id, title: s.title, body: <Paras items={s.body} /> }))}
      links={links}
      after={
        <aside className="p-8 sm:p-10 bg-paper-warm border border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <MonoLabel accent>{inquiry.eyebrow}</MonoLabel>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.03em]">{inquiry.title}</h3>
            <p className="mt-2 font-sans text-sm text-text-muted leading-relaxed max-w-md">{inquiry.body}</p>
          </div>
          <Btn to={ROUTES.contact}>{inquiry.ctaLabel}</Btn>
        </aside>
      }
    />
  );
}
