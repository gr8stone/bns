import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  Btn,
  ClosingCta,
  FactGrid,
  Lede,
  MediaFrame,
  MonoLabel,
  PageHero,
  Reveal,
  Section,
  SectionHead,
} from "../components/page/kit";
import { VideoStage } from "../components/page/VideoStage";
import { STUDIO_FAQS } from "../data/comprehensiveFaq";
import { STUDIO_PAGE_CONTENT } from "../data/content/studioPage";
import { AUDIENCE_ALIGNMENTS, STUDIO_MODELS, STUDIO_RATE_CARD } from "../data/studio";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const { hero, metrics, panorama, reel, models, audiences, rateSchedule, faq, closing } = STUDIO_PAGE_CONTENT;

export function StudioPage() {
  return (
    <main className="w-full bg-white text-text-base">
      <PageHero
        eyebrow={hero.eyebrow}
        lead={hero.titleLead}
        accent={hero.titleHighlight}
        aside={
          <div className="space-y-4">
            <p className="font-display text-xl font-medium tracking-[-0.02em] leading-snug">{hero.lead}</p>
            <Lede>{hero.body}</Lede>
            <div className="flex flex-wrap gap-3 pt-2">
              <Btn to={ROUTES.contact}>{hero.ctaLabel}</Btn>
              <Btn to={ROUTES.ratecard} variant="secondary" arrow={false}>
                {hero.rateCardLabel}
              </Btn>
            </div>
          </div>
        }
      >
        <div className="mt-14 md:mt-20">
          <FactGrid facts={metrics} />
        </div>
      </PageHero>

      <div className={CONTAINER}>
        <MediaFrame src={panorama.imageSrc} alt={panorama.imageAlt} captionLeft={panorama.captionLeft} captionRight={panorama.captionRight} />
      </div>

      {/* 01 — Why */}
      <Section chapter="01" label={reel.eyebrow} ruled={false}>
        <SectionHead lead={reel.title} aside={<Lede>{reel.body}</Lede>} />
        <Reveal className="mt-12 md:mt-16">
          <VideoStage video={reel.videoSrc} fallbackPoster={reel.videoPoster} title={reel.title} watchLabel={reel.watchLabel} />
        </Reveal>
      </Section>

      {/* 02 — Engagement models */}
      <Section chapter="02" label={models.label} tone="warm">
        <SectionHead lead={models.headlineLead} accent={models.headlineAccent} />
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/[0.08] border border-black/[0.08]">
          {STUDIO_MODELS.map((m, i) => (
            <Reveal key={m.track} delay={i * 0.1} className="bg-paper-warm p-8 sm:p-10 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent font-semibold tabular-nums">{m.track}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 border border-black/10">{m.badge}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em]">{m.title}</h3>
              <p className="mt-4 font-sans text-sm sm:text-base text-text-muted leading-relaxed">{m.description}</p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {m.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-sans text-sm">
                    <span className="mt-[0.5em] w-1.5 h-1.5 bg-accent shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-5 border-t border-black/[0.08]">
                <MonoLabel>{models.idealForLabel}</MonoLabel>
                <p className="mt-2 font-sans text-sm leading-relaxed">{m.idealFor}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 — Audiences */}
      <Section chapter="03" label={audiences.label} ruled={false}>
        <SectionHead lead={audiences.headlineLead} accent={audiences.headlineAccent} />
        <div className="mt-14 md:mt-20 border-t border-black/[0.08]">
          {AUDIENCE_ALIGNMENTS.map((a, i) => (
            <Reveal key={a.category} delay={0.05 * i}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-12 border-b border-black/[0.08]">
                <div className="lg:col-span-4">
                  <MonoLabel accent>{a.tag}</MonoLabel>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] leading-tight">{a.category}</h3>
                </div>
                <div className="lg:col-span-4">
                  <MonoLabel>{audiences.challengeLabel}</MonoLabel>
                  <p className="mt-2 font-sans text-sm sm:text-base text-text-muted leading-relaxed">{a.challenge}</p>
                </div>
                <div className="lg:col-span-4">
                  <MonoLabel>{audiences.solutionLabel}</MonoLabel>
                  <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed">{a.solution}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                    {audiences.engagementLabel}: <span className="text-text-base normal-case tracking-normal font-sans text-sm">{a.engagement}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 04 — Rates */}
      <Section chapter="04" label={rateSchedule.eyebrow} tone="dark">
        <SectionHead
          tone="dark"
          lead={rateSchedule.title}
          aside={
            <div className="space-y-4">
              <Lede tone="dark">{rateSchedule.note}</Lede>
              <Link
                to={ROUTES.ratecard}
                className="inline-flex items-center gap-2 pb-1 border-b border-white/40 hover:border-white font-mono text-xs uppercase tracking-wider"
              >
                {rateSchedule.dedicatedLinkLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          }
        />
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {STUDIO_RATE_CARD.map((r, i) => (
            <Reveal key={r.code} delay={(i % 3) * 0.08} className="bg-ink p-7 sm:p-9 h-full flex flex-col">
              <span className="font-mono text-[11px] text-white/50 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-medium tracking-[-0.03em]">{r.format}</h3>
              <p className="mt-3 font-sans text-sm text-white/65 leading-relaxed flex-1">{r.scope}</p>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-baseline justify-between gap-3">
                <span className="font-display text-xl sm:text-2xl font-medium tabular-nums">{r.startingRate}</span>
                <span className="font-mono text-[11px] text-white/55">{r.unit}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[11px] text-white/60 leading-relaxed">
          {rateSchedule.disclosures.map((d) => (
            <p key={d.label}>
              <span className="text-white uppercase tracking-[0.12em]">{d.label}.</span> {d.body}
            </p>
          ))}
        </div>
      </Section>

      {/* 05 — FAQ */}
      <Section chapter="05" label={faq.eyebrow} ruled={false}>
        <SectionHead
          lead={faq.title}
          aside={
            <Link to={ROUTES.faq} className="inline-flex items-center gap-2 pb-1 border-b border-text-base hover:text-accent hover:border-accent transition-colors font-mono text-xs uppercase tracking-wider">
              {faq.allLinkLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />
        <div className="mt-12 md:mt-16 max-w-4xl">
          <Accordion
            items={STUDIO_FAQS.slice(0, 5).map((f) => ({
              id: f.id,
              kicker: f.categoryLabel,
              title: f.question,
              body: <Lede>{f.answer}</Lede>,
            }))}
          />
        </div>
      </Section>

      <ClosingCta
        eyebrow={closing.eyebrow}
        title={closing.title}
        body={closing.body}
        primary={{ to: ROUTES.contact, label: closing.primaryCtaLabel }}
        secondary={{ to: ROUTES.faq, label: closing.secondaryCtaLabel }}
      />
    </main>
  );
}
