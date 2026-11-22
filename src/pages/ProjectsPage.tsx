import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FilterBar } from "../components/page/FilterBar";
import { Lede, MonoLabel, PageHero } from "../components/page/kit";
import { scrollToResults } from "../lib/scroll";
import { PRODUCTIONS_PAGE_CONTENT } from "../data/content/productions";
import { PROJECTS } from "../data/projects";
import { CONTAINER } from "../lib/layout";
import { EASE_EDITORIAL } from "../lib/motion";
import { ROUTES } from "../lib/routes";
import type { Project } from "../types";

const content = PRODUCTIONS_PAGE_CONTENT;
const ALL = content.filter.allCategoryLabel;

function ProductionCard({ project, lead }: { project: Project; lead: boolean }) {
  return (
    <Link
      to={ROUTES.project(project.slug)}
      className={`group grid gap-5 ${lead ? "lg:grid-cols-12 lg:gap-10 lg:items-end" : ""}`}
    >
      <div className={`relative overflow-hidden bg-paper-warm ${lead ? "lg:col-span-8 aspect-[16/10]" : "aspect-[4/3]"}`}>
        <img
          src={project.heroImage}
          alt={project.heroImageAlt || project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white font-mono text-[10px] uppercase tracking-[0.14em]">
          {project.category}
        </span>
      </div>
      <div className={`space-y-3 ${lead ? "lg:col-span-4 lg:pb-2" : ""}`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted tabular-nums">
          {project.year} • {project.location}
        </span>
        <h2
          className={`font-display font-medium tracking-[-0.03em] leading-tight group-hover:text-accent transition-colors duration-200 ${
            lead ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h2>
        {lead && <p className="font-sans text-sm text-text-muted leading-relaxed line-clamp-3">{project.summary}</p>}
        <span className="inline-flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider border-b border-text-base pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors duration-200">
          {content.card.viewLabel}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}

export function ProjectsPage() {
  const reduce = useReducedMotion();
  const [category, setCategory] = useState(ALL);

  const categories = useMemo(
    () => [
      { label: ALL, count: PROJECTS.length },
      ...content.filter.categories
        .map((c) => ({ label: c, count: PROJECTS.filter((p) => p.category === c).length }))
        .filter((c) => c.count > 0),
    ],
    [],
  );

  const resultsRef = useRef<HTMLDivElement>(null);
  const choose = (next: string) => {
    setCategory(next);
    scrollToResults(resultsRef.current);
  };

  const visible = category === ALL ? PROJECTS : PROJECTS.filter((p) => p.category === category);
  const [lead, ...rest] = visible;

  return (
    <main className="w-full bg-white text-text-base pb-24 md:pb-32">
      <PageHero
        eyebrow={content.hero.eyebrow}
        lead={content.hero.titleLead}
        accent={content.hero.titleAccent}
        aside={
          <div className="space-y-3">
            <MonoLabel accent>{content.hero.scopeLabel}</MonoLabel>
            <Lede>{content.hero.scopeText}</Lede>
          </div>
        }
      />

      <FilterBar
        label={content.filter.label}
        options={categories.map((c) => ({ id: c.label, label: c.label, count: c.count }))}
        value={category}
        onChange={choose}
        meta={`${visible.length} ${content.card.countSuffix}`}
      />

      <div ref={resultsRef} className={CONTAINER}>
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
            className="pt-12 md:pt-16"
          >
            {lead ? (
              <>
                <ProductionCard project={lead} lead />
                {rest.length > 0 && (
                  <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-14">
                    {rest.map((p) => (
                      <ProductionCard key={p.slug} project={p} lead={false} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="py-24 text-center">
                <p className="font-display text-2xl font-medium">{content.emptyState.title}</p>
                <button
                  type="button"
                  onClick={() => choose(ALL)}
                  className="mt-6 px-5 py-3 border border-black/20 hover:border-text-base font-mono text-xs uppercase tracking-wider"
                >
                  {content.emptyState.resetLabel}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
