import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { PROJECTS } from "../../data/projects";
import { ROUTES } from "../../lib/routes";
import type { Project } from "../../types";
import { ChapterMarker, MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.recentProjects;

function Meta({ project }: { project: Project }) {
  return (
    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-text-muted tabular-nums">
      {project.category} {CONTENT.metaSeparator} {project.year}
    </span>
  );
}

function ProductionCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link to={ROUTES.project(project.slug)} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-warm">
          <img
            src={project.heroImage}
            alt={project.heroImageAlt || project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="pt-4 space-y-2">
          <Meta project={project} />
          <h3 className="font-display text-lg sm:text-xl font-medium tracking-[-0.02em] leading-snug group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>
      </Link>
    </Reveal>
  );
}

/** Still chapter 03: the record, told through the stories themselves. */
export function StoryProductions() {
  const [lead, ...rest] = PROJECTS;
  const supporting = rest.slice(0, 3);
  if (!lead) return null;

  return (
    <section className="w-full bg-white text-text-base">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 pt-16 md:pt-20 pb-24 md:pb-36 border-t border-black/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <ChapterMarker label={CONTENT.eyebrow} />
            <h2 className="mt-6 font-display text-[clamp(30px,4vw,56px)] font-medium tracking-[-0.045em] leading-[1]">
              <MaskLine>{CONTENT.heading}</MaskLine>
            </h2>
          </div>
          <Link
            to={ROUTES.projects}
            className="group self-start sm:self-auto inline-flex items-center gap-2.5 px-5 py-3 border border-black/20 hover:bg-text-base hover:text-white hover:border-text-base transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
          >
            <span>
              {CONTENT.allLinkLabelPrefix}
              {PROJECTS.length}
              {CONTENT.allLinkLabelSuffix}
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Lead story */}
        <Reveal className="mt-12 md:mt-16">
          <Link
            to={ROUTES.project(lead.slug)}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end"
          >
            <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden bg-paper-warm">
              <img
                src={lead.heroImage}
                alt={lead.heroImageAlt || lead.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-4 space-y-4 lg:pb-2">
              <Meta project={lead} />
              <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.02] group-hover:text-accent transition-colors duration-200">
                {lead.title}
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed">{lead.subtitle}</p>
              <span className="inline-flex items-center gap-2 pt-2 font-mono text-xs uppercase tracking-wider border-b border-text-base pb-1 group-hover:text-accent group-hover:border-accent transition-colors duration-200">
                {CONTENT.viewLabel}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Supporting stories */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
          {supporting.map((project, i) => (
            <ProductionCard key={project.slug} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
