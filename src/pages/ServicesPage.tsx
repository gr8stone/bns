import { Btn, MediaFrame, MonoLabel, PageHero, Reveal, Section } from "../components/page/kit";
import { ProgrammeCard } from "../components/page/ProgrammeCard";
import { ScrollHighlight } from "../components/story/primitives";
import { HOME_CONTENT } from "../data/content/home";
import { PROGRAMMES_PAGE_CONTENT } from "../data/content/programmes";
import { SERVICES } from "../data/services";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const { hero, media, ethos, studioNote } = PROGRAMMES_PAGE_CONTENT;
const tagFor = (slug: string) => HOME_CONTENT.services.items.find((i) => i.slug === slug)?.tag ?? "";

export function ServicesPage() {
  return (
    <main className="w-full bg-white text-text-base">
      <PageHero eyebrow={hero.eyebrow} lead={hero.titleLead} accent={hero.titleAccent} aside={<p className="font-display text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug">{hero.scopeText}</p>} />

      {/* What visitors came for: the three programmes, first. */}
      <div className={`${CONTAINER} pb-20 md:pb-28`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => (
            <ProgrammeCard
              key={s.slug}
              index={i}
              data={{
                slug: s.slug,
                number: s.number,
                tag: tagFor(s.slug),
                title: s.title,
                line: s.heroHeadline,
                chips: s.deliverables.map((d) => d.name),
                image: s.image,
              }}
            />
          ))}
        </div>
      </div>

      <Section chapter="01" label={ethos.label} tone="warm">
        <ScrollHighlight
          text={ethos.revealText}
          highlightWords={ethos.highlightWords}
          className="mt-10 md:mt-14 max-w-5xl font-display text-[clamp(36px,6vw,92px)] font-medium leading-[1.02] tracking-[-0.05em]"
        />
        <div className="mt-14 md:mt-20">
          <MediaFrame src={media.imageSrc} alt={media.imageAlt} captionLeft={media.captionLeft} captionRight={media.captionRight} />
        </div>
      </Section>

      <Section ruled={false}>
        <Reveal className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 sm:p-10 bg-paper-warm">
          <div className="max-w-2xl">
            <MonoLabel accent>{studioNote.eyebrow}</MonoLabel>
            <p className="mt-3 font-display text-xl sm:text-2xl font-medium tracking-[-0.02em]">{studioNote.body}</p>
          </div>
          <Btn to={ROUTES.studio}>{studioNote.ctaLabel}</Btn>
        </Reveal>
      </Section>
    </main>
  );
}
