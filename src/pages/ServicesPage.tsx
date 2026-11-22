import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Btn, Lede, MediaFrame, MonoLabel, PageHero, Reveal, Section, SectionHead } from "../components/page/kit";
import { MaskLine, ScrollHighlight } from "../components/story/primitives";
import { PROGRAMMES_PAGE_CONTENT } from "../data/content/programmes";
import { SERVICES } from "../data/services";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const { hero, media, ethos, list, studioNote } = PROGRAMMES_PAGE_CONTENT;

export function ServicesPage() {
  return (
    <main className="w-full bg-white text-text-base">
      <PageHero
        eyebrow={hero.eyebrow}
        lead={hero.titleLead}
        accent={hero.titleAccent}
        aside={
          <div className="space-y-3">
            <MonoLabel accent>{hero.scopeLabel}</MonoLabel>
            <Lede>{hero.scopeText}</Lede>
          </div>
        }
      />

      <div className={CONTAINER}>
        <MediaFrame src={media.imageSrc} alt={media.imageAlt} captionLeft={media.captionLeft} captionRight={media.captionRight} />
      </div>

      {/* 01 — Why */}
      <Section chapter="01" label={ethos.label} ruled={false} className="md:py-36">
        <ScrollHighlight
          text={ethos.revealText}
          highlightWords={ethos.highlightWords}
          className="mt-10 md:mt-14 max-w-5xl font-display text-[clamp(28px,4.4vw,64px)] font-medium leading-[1.06] tracking-[-0.04em]"
        />
        <Reveal className="mt-12 md:mt-16 max-w-3xl">
          <p className="font-sans text-base sm:text-lg leading-relaxed text-text-base/80">{ethos.body}</p>
        </Reveal>
      </Section>

      {/* 02 — The three */}
      <Section chapter="02" label={list.label} tone="warm">
        <SectionHead lead={list.headlineLead} accent={list.headlineAccent} />
        <div className="mt-14 md:mt-20 border-t border-black/[0.08]">
          {SERVICES.map((prog) => (
            <article
              key={prog.slug}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-16 border-b border-black/[0.08]"
            >
              <div className="lg:col-span-7 flex flex-col">
                <Reveal y={12}>
                  <span className="font-mono text-xs text-accent font-semibold tabular-nums">
                    {prog.number} / 0{SERVICES.length}
                  </span>
                </Reveal>
                <h3 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.05em] leading-[0.96]">
                  <MaskLine>
                    <Link to={ROUTES.programme(prog.slug)} className="group-hover:text-accent transition-colors duration-200">
                      {prog.title}
                    </Link>
                  </MaskLine>
                </h3>
                <Reveal delay={0.1}>
                  <p className="mt-5 font-sans text-base sm:text-lg text-text-base/80 leading-relaxed max-w-xl">
                    {prog.heroHeadline}
                  </p>
                  <div className="mt-8">
                    <MonoLabel>{list.deliverablesLabel}</MonoLabel>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {prog.deliverables.map((d) => (
                        <li key={d.name} className="px-3 py-1.5 border border-black/10 bg-white font-sans text-xs sm:text-sm">
                          {d.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={ROUTES.programme(prog.slug)}
                    className="mt-8 inline-flex items-center gap-2 pb-1 border-b border-text-base hover:text-accent hover:border-accent transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
                  >
                    {list.exploreLinkPrefix} {prog.title}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </Reveal>
              </div>
              <Reveal delay={0.15} className="lg:col-span-5">
                <Link to={ROUTES.programme(prog.slug)} className="block aspect-[4/3] overflow-hidden bg-ink" tabIndex={-1}>
                  <img
                    src={prog.image}
                    alt={prog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 sm:p-10 bg-white border border-black/[0.08]">
          <div className="max-w-2xl">
            <MonoLabel accent>{studioNote.eyebrow}</MonoLabel>
            <p className="mt-3 font-sans text-base sm:text-lg leading-relaxed">{studioNote.body}</p>
          </div>
          <Btn to={ROUTES.studio}>{studioNote.ctaLabel}</Btn>
        </Reveal>
      </Section>
    </main>
  );
}
