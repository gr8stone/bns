import { Btn, Lede, PageHero } from "../components/page/kit";
import { NOT_FOUND_CONTENT } from "../data/content/notFound";

export function NotFoundPage() {
  const c = NOT_FOUND_CONTENT;
  return (
    <main className="w-full min-h-[80svh] bg-white text-text-base pb-24">
      <PageHero
        eyebrow={c.eyebrow}
        lead={c.heading}
        accent={c.headingAccent}
        aside={
          <div className="space-y-6">
            <Lede>{c.description}</Lede>
            <div className="flex flex-wrap gap-3">
              <Btn to={c.ctaHref}>{c.ctaLabel}</Btn>
              <Btn to={c.secondaryCtaHref} variant="secondary" arrow={false}>
                {c.secondaryCtaLabel}
              </Btn>
            </div>
          </div>
        }
      />
    </main>
  );
}
