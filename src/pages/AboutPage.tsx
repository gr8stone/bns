import { Lede, MediaFrame, MonoLabel, PageHero, Reveal, Section, SectionHead } from "../components/page/kit";
import { ScrollHighlight } from "../components/story/primitives";
import { ABOUT_CONTENT } from "../data/content/about";
import { CONTAINER } from "../lib/layout";

const { hero, media, philosophy, principles, leadership } = ABOUT_CONTENT;

export function AboutPage() {
  return (
    <main className="w-full bg-white text-text-base">
      <PageHero
        eyebrow={hero.eyebrow}
        lead={hero.titleLead}
        accent={hero.titleHighlight}
        aside={
          <div className="space-y-3">
            <MonoLabel accent>{hero.missionLabel}</MonoLabel>
            <Lede>{hero.missionBody}</Lede>
          </div>
        }
      />

      <div className={CONTAINER}>
        <MediaFrame
          src={media.imageSrc}
          alt={media.imageAlt}
          captionLeft={media.captionLeft}
          captionRight={media.captionRight}
          objectPosition="object-top"
        />
      </div>

      {/* 01 — Belief */}
      <Section chapter="01" label={philosophy.label} ruled={false} className="md:py-36">
        <ScrollHighlight
          text={philosophy.statement}
          highlightWords={philosophy.highlightWords}
          className="mt-10 md:mt-14 max-w-5xl font-display text-[clamp(28px,4.4vw,64px)] font-medium leading-[1.06] tracking-[-0.04em]"
        />
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
          <Reveal>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-text-base/80">{philosophy.paragraphOne}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-text-base/80">{philosophy.paragraphTwo}</p>
          </Reveal>
        </div>
        <Reveal className="mt-14 pt-8 border-t border-black/[0.08] max-w-5xl">
          <p className="font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] leading-snug">
            {philosophy.closingLead} <span className="text-accent">{philosophy.closingHighlight}</span>
          </p>
        </Reveal>
      </Section>

      {/* 02 — Principles */}
      <Section chapter="02" label={principles.label} tone="warm">
        <SectionHead lead={principles.headlineLead} accent={principles.headlineAccent} />
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.08] border border-black/[0.08]">
          {principles.items.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.1} className="bg-paper-warm p-8 sm:p-10 h-full">
              <span className="font-mono text-xs text-accent font-semibold tabular-nums">{item.number}</span>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-4 font-sans text-sm sm:text-base text-text-muted leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 — Team */}
      <Section chapter="03" label={leadership.label} ruled={false}>
        <SectionHead lead={leadership.headlineLead} accent={leadership.headlineAccent} />
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-14">
          {leadership.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-warm">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={`w-full h-full object-cover ${member.objectPosition || "object-top"} grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-[filter,transform] duration-700 ease-out`}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl sm:text-2xl font-medium tracking-[-0.03em]">{member.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{member.role}</p>
                <p className="mt-3 font-sans text-sm text-text-muted leading-relaxed">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
