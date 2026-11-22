import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FactGrid, Lede, MonoLabel, PageHero, PrevNext, Reveal, Section } from "../components/page/kit";
import { VideoStage } from "../components/page/VideoStage";
import { PRODUCTION_DETAIL_CONTENT } from "../data/content/productionDetail";
import { JOURNAL_ARTICLES } from "../data/journal";
import { PROJECTS } from "../data/projects";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const content = PRODUCTION_DETAIL_CONTENT;

/** First paragraph up front; the rest one tap away. */
function Story({ paragraphs, more, less }: { paragraphs: string[]; more: string; less: string }) {
  const [open, setOpen] = useState(false);
  const shown = open ? paragraphs : paragraphs.slice(0, 1);
  return (
    <>
      {shown.map((p, i) => (
        <p key={i} className="font-sans text-base sm:text-lg leading-relaxed text-text-base/80 max-w-3xl">
          {p}
        </p>
      ))}
      {paragraphs.length > 1 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 pb-1 border-b border-text-base hover:text-accent hover:border-accent transition-colors font-mono text-xs uppercase tracking-wider"
        >
          {open ? less : `${more} (${paragraphs.length - 1})`}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      )}
    </>
  );
}

export function ProjectDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const index = PROJECTS.findIndex((p) => p.slug === slug || p.aliases?.includes(slug));
  const project = PROJECTS[index];

  if (!project) return <Navigate to={ROUTES.projects} replace />;

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const article = JOURNAL_ARTICLES.find((a) => a.projectSlug === project.slug);
  const lede = article?.subtitle ?? project.summary;
  const paragraphs = article?.content ?? project.description;
  let chapter = 0;
  const nextChapter = () => String(++chapter).padStart(2, "0");

  return (
    <main className="w-full bg-white text-text-base">
      <PageHero
        compact
        back={{ to: ROUTES.projects, label: content.breadcrumb.backLabel }}
        eyebrow={`${project.category} ${content.bullet} ${project.year}`}
        lead={project.title}
        aside={<p className="font-display text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug">{project.subtitle}</p>}
      >
        <div className="mt-14 md:mt-16">
          <FactGrid
            facts={[
              { label: content.credits.partnerLabel, value: project.client },
              { label: content.credits.productionLabel, value: project.architect },
              { label: content.credits.locationLabel, value: project.location },
              { label: content.credits.focusLabel, value: project.services.join(content.listSeparator) },
            ]}
          />
        </div>
      </PageHero>

      <div className={CONTAINER}>
        <Reveal>
          <VideoStage
            video={project.heroVideo}
            fallbackPoster={project.heroImage}
            title={project.title}
            watchLabel={content.leadMedia.watchLabel}
            aspect="aspect-[4/3] sm:aspect-video"
          />
        </Reveal>
      </div>

      {/* The story + numbers */}
      <Section chapter={nextChapter()} label={content.narrative.label} ruled={false}>
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] leading-snug">{lede}</p>
            </Reveal>
            <Story paragraphs={paragraphs} more={content.narrative.readMoreLabel} less={content.narrative.readLessLabel} />
          </div>
          {project.stats.length > 0 && (
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <MonoLabel accent>{content.numbers.label}</MonoLabel>
                <dl className="mt-4 border-t border-black/[0.08]">
                  {project.stats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.06} className="py-5 border-b border-black/[0.08]">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">{s.label}</dt>
                      <dd className="mt-1 font-display text-2xl font-medium tracking-[-0.03em]">{s.value}</dd>
                    </Reveal>
                  ))}
                </dl>
              </div>
            </aside>
          )}
        </div>
      </Section>

      {/* Before / after */}
      {project.beforeAfter && (
        <Section chapter={nextChapter()} label={content.transformation.label} tone="warm">
          <Reveal className="mt-8 max-w-2xl">
            <Lede>{project.beforeAfter.description}</Lede>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: project.beforeAfter.beforeImage, label: project.beforeAfter.beforeLabel },
              { src: project.beforeAfter.afterImage, label: project.beforeAfter.afterLabel },
            ].map((side, i) => (
              <Reveal key={side.src} delay={i * 0.12}>
                <figure>
                  <div className="aspect-[4/3] overflow-hidden bg-ink">
                    <img src={side.src} alt={side.label} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">{side.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Process */}
      {project.process.length > 0 && (
        <Section chapter={nextChapter()} label={content.process.label}>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
            {project.process.map((step, i) => (
              <Reveal key={step.step} delay={(i % 3) * 0.08}>
                <article>
                  {step.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-paper-warm mb-5">
                      <img src={step.image} alt={step.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">
                    {content.process.stepLabel} {step.step}
                  </span>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-snug">{step.title}</h3>
                  <p className="mt-3 font-sans text-sm text-text-muted leading-relaxed">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <Section chapter={nextChapter()} label={content.gallery.label}>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((item, i) => (
              <Reveal key={item.url + i} delay={(i % 2) * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
                <figure>
                  <div className={`overflow-hidden bg-paper-warm ${i === 0 ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[4/3]"}`}>
                    <img src={item.url} alt={item.caption || project.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  {item.caption && (
                    <figcaption className="mt-3 flex gap-3 font-sans text-sm text-text-muted">
                      <span className="font-mono text-[11px] text-accent tabular-nums pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <PrevNext
        prevLabel={content.navigation.prevLabel}
        nextLabel={content.navigation.nextLabel}
        prev={{ to: ROUTES.project(prev.slug), title: prev.title, meta: `${prev.category} ${content.bullet} ${prev.year}` }}
        next={{ to: ROUTES.project(next.slug), title: next.title, meta: `${next.category} ${content.bullet} ${next.year}` }}
      />
    </main>
  );
}
