import { BadgeCheck, Infinity as InfinityIcon, Plus, Scale, X } from "lucide-react";
import { useState } from "react";
import { Lede, MediaFrame, MonoLabel, PageHero, Reveal, Section, SectionHead } from "../components/page/kit";
import { ScrollHighlight } from "../components/story/primitives";
import { ABOUT_CONTENT } from "../data/content/about";
import { CONTAINER } from "../lib/layout";

const { hero, media, philosophy, principles, leadership } = ABOUT_CONTENT;
const ICONS = { scale: Scale, check: BadgeCheck, infinity: InfinityIcon } as const;

type Member = (typeof leadership.members)[number];

/** Photo card: name + role up front; the bio slides over the photo on hover or tap. */
function MemberCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${member.name}: ${open ? "hide" : "show"} bio`}
        className="relative block w-full aspect-[4/5] overflow-hidden bg-paper-warm text-left"
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className={`w-full h-full object-cover ${member.objectPosition || "object-top"} grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-[filter,transform] duration-700 ease-out`}
        />
        <span
          className={`absolute inset-0 flex items-end p-4 sm:p-6 bg-accent/90 text-white transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
          }`}
        >
          <span className="font-sans text-sm sm:text-base leading-snug">{member.bio}</span>
        </span>
        <span className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white text-text-base">
          {open ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <h3 className="mt-5 font-display text-xl sm:text-2xl font-medium tracking-[-0.03em]">{member.name}</h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{member.role}</p>
    </article>
  );
}

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
            <p className="font-display text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug">{hero.missionBody}</p>
          </div>
        }
      />

      <div className={CONTAINER}>
        <MediaFrame src={media.imageSrc} alt={media.imageAlt} captionLeft={media.captionLeft} captionRight={media.captionRight} objectPosition="object-top" />
      </div>

      {/* 01 — Belief: one line, three questions */}
      <Section chapter="01" label={philosophy.label} ruled={false} className="md:py-40">
        <ScrollHighlight
          text={philosophy.statement}
          highlightWords={philosophy.highlightWords}
          className="mt-10 md:mt-14 max-w-5xl font-display text-[clamp(36px,6vw,92px)] font-medium leading-[1.02] tracking-[-0.05em]"
        />
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.08] border border-black/[0.08]">
          {philosophy.examples.map((ex, i) => (
            <Reveal key={ex.figure} delay={i * 0.1} className="bg-white p-8 sm:p-10">
              <span className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.04em]">{ex.figure}</span>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{ex.caption}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 02 — Principles */}
      <Section chapter="02" label={principles.label} tone="warm">
        <SectionHead lead={principles.headlineLead} accent={principles.headlineAccent} />
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? BadgeCheck;
            return (
              <Reveal key={item.number} delay={i * 0.1} className="bg-white p-8 sm:p-10 h-full border border-black/[0.06]">
                <span className="w-12 h-12 flex items-center justify-center bg-accent text-white">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em]">{item.title}</h3>
                <div className="mt-3"><Lede>{item.body}</Lede></div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 03 — Team */}
      <Section chapter="03" label={leadership.label} ruled={false}>
        <SectionHead lead={leadership.headlineLead} accent={leadership.headlineAccent} aside={<MonoLabel>{leadership.bioHint}</MonoLabel>} />
        <div className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12">
          {leadership.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 0.06}>
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
