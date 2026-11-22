import { DocLayout, Paras } from "../components/page/DocLayout";
import { Btn, Lede, MonoLabel } from "../components/page/kit";
import { WHITEPAPER_CONTENT } from "../data/content/whitepaper";
import { ROUTES } from "../lib/routes";

export function WhitepaperPage() {
  const { hero, sections, inquiry, tocLabel, links } = WHITEPAPER_CONTENT;

  return (
    <DocLayout
      eyebrow={hero.eyebrow}
      title={hero.title}
      accent={hero.titleAccent}
      intro={
        <div className="space-y-5">
          <Lede>{hero.intro}</Lede>
          <Btn to={ROUTES.contact}>{hero.ctaLabel}</Btn>
        </div>
      }
      tocLabel={tocLabel}
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
