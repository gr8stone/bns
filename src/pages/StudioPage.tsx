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
          <div className="space-y-2">
            <p className="font-display text-xl font-medium tracking-[-0.02em] leading-snug">{hero.lead}</p>
            <Lede>{hero.body}</Lede>
          </div>
        }
        cta={
          <>
            <Btn to={ROUTES.contact}>{hero.ctaLabel}</Btn>
            <Btn to={ROUTES.ratecard} variant="secondary" arrow={false}>
              {hero.rateCardLabel}
            </Btn>
          </>
        }
      >
        <div className="mt-8 md:mt-12">
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
              <p className="mt-3 font-sans text-base leading-relaxed">{m.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2 flex-1 content-start">
                {m.deliverables.map((d) => (
                  <li key={d} className="px-3 py-1.5 bg-white border border-black/10 font-sans text-sm">
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-5 border-t border-black/[0.08] font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                {models.idealForLabel}: <span className="text-text-base">{m.idealFor}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 — Audiences */}
      <Section chapter="03" label={audiences.label} ruled={false}>
        <SectionHead lead={audiences.headlineLead} accent={audiences.headlineAccent} />
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE_ALIGNMENTS.map((a, i) => (
            <Reveal key={a.category} delay={0.1 * i} className="h-full">
              <article className="h-full p-8 sm:p-10 border border-black/[0.08] hover:border-accent transition-colors duration-300">
                <MonoLabel accent>{a.tag}</MonoLabel>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] leading-tight">{a.category}</h3>
                <p className="mt-6 font-sans text-sm text-text-muted line-through decoration-text-muted/50">{a.challenge}</p>
                <p className="mt-2 font-sans text-base leading-relaxed">{a.solution}</p>
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
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-medium tracking-[-0.03em] flex-1">{r.format}</h3>
              <div className="mt-10 pt-5 border-t border-white/10 flex items-baseline justify-between gap-3">
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
