import { Navigate, useParams } from "react-router-dom";
import {
  Accordion,
  FactGrid,
  Lede,
  MediaFrame,
  MonoLabel,
  PageHero,
  PrevNext,
  Reveal,
  Section,
  SectionHead,
} from "../components/page/kit";
import { Timeline } from "../components/page/Timeline";
import { VideoStage } from "../components/page/VideoStage";
import { PROGRAMME_DETAIL_CONTENT } from "../data/content/programmeDetail";
import { SERVICES } from "../data/services";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const content = PROGRAMME_DETAIL_CONTENT;

export function ServiceDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const index = SERVICES.findIndex((s) => s.slug === slug || s.aliases?.includes(slug));
  const service = SERVICES[index];

  if (!service) return <Navigate to={ROUTES.programmes} replace />;

  const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];
  const { facts } = content;

  return (
    <main className="w-full bg-white text-text-base">
      <PageHero
        back={{ to: ROUTES.programmes, label: content.breadcrumb.backLabel }}
        eyebrow={`${service.number} ${content.separator} ${content.hero.eyebrowSuffix}`}
        lead={service.title}
        aside={
          <div className="space-y-4">
            <p className="font-display text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug">{service.heroHeadline}</p>
            <Lede>{service.heroSubhead}</Lede>
          </div>
        }
      >
        <div className="mt-14 md:mt-20">
          <FactGrid
            facts={[
              { label: facts.mandateLabel, value: facts.mandateValue },
              { label: facts.reachLabel, value: facts.reachValue },
              { label: facts.cycleLabel, value: facts.cycleValue },
              { label: facts.entityLabel, value: facts.entityValue },
            ]}
          />
        </div>
      </PageHero>

      <div className={CONTAINER}>
        <MediaFrame src={service.image} alt={service.title} />
      </div>

      {/* 01 — Problem / approach */}
      <Section chapter="01" label={content.context.label} ruled={false}>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-black/[0.08]">
          <Reveal className="pt-8 md:pt-10 md:pr-12 pb-10 md:pb-0 border-b md:border-b-0 md:border-r border-black/[0.08]">
            <MonoLabel>{content.context.problemLabel}</MonoLabel>
            <p className="mt-4 font-sans text-lg sm:text-xl leading-relaxed text-text-base/80">{service.problem}</p>
          </Reveal>
          <Reveal delay={0.12} className="pt-8 md:pt-10 md:pl-12">
            <MonoLabel accent>{content.context.solutionLabel}</MonoLabel>
            <p className="mt-4 font-sans text-lg sm:text-xl leading-relaxed">{service.solution}</p>
          </Reveal>
        </div>
      </Section>

      {/* 02 — Film */}
      {service.video && (
        <Section chapter="02" label={content.video.label} tone="dark">
          <Reveal className="mt-10 md:mt-14">
            <VideoStage
              video={service.video}
              fallbackPoster={service.image}
              title={`${service.title} ${content.video.iframeTitleSuffix}`}
              watchLabel={content.video.watchLabel}
            />
          </Reveal>
        </Section>
      )}

      {/* 03 — Deliverables */}
      <Section chapter="03" label={content.deliverables.label} tone="warm">
        <SectionHead lead={content.deliverables.headlineLead} accent={content.deliverables.headlineAccent} />
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08] border border-black/[0.08]">
          {service.deliverables.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.08} className="bg-paper-warm p-7 sm:p-9 h-full">
              <span className="font-mono text-xs text-accent font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-snug">{d.name}</h3>
              <p className="mt-3 font-sans text-sm text-text-muted leading-relaxed">{d.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 04 — Workflow */}
      <Section chapter="04" label={content.workflow.label} ruled={false}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHead lead={content.workflow.headlineLead} accent={content.workflow.headlineAccent} />
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <Timeline steps={service.workflow} stepLabel={content.workflow.stepLabel} />
          </div>
        </div>
      </Section>

      {/* 05 — FAQs */}
      {service.faqs.length > 0 && (
        <Section chapter="05" label={content.faqs.label}>
          <div className="mt-10 md:mt-14 max-w-4xl">
            <Accordion items={service.faqs.map((f, i) => ({ id: `${service.slug}-${i}`, title: f.q, body: <Lede>{f.a}</Lede> }))} />
          </div>
        </Section>
      )}

      <PrevNext
        prevLabel={content.navigation.prevLabel}
        nextLabel={content.navigation.nextLabel}
        prev={{ to: ROUTES.programme(prev.slug), title: prev.title, meta: prev.number }}
        next={{ to: ROUTES.programme(next.slug), title: next.title, meta: next.number }}
      />
    </main>
  );
}
