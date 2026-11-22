import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FilterBar } from "../components/page/FilterBar";
import { scrollToResults } from "../lib/scroll";
import { Accordion, ClosingCta, Lede, MonoLabel, PageHero } from "../components/page/kit";
import { COMPREHENSIVE_FAQS, FAQ_CATEGORIES } from "../data/comprehensiveFaq";
import { FAQ_PAGE_CONTENT } from "../data/content/faqPage";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const { hero, filters, answer, closing } = FAQ_PAGE_CONTENT;

export function FaqPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMPREHENSIVE_FAQS.filter(
      (f) =>
        (category === "all" || f.category === category) &&
        (!q || `${f.question} ${f.answer}`.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <main className="w-full bg-white text-text-base">
      <PageHero
        eyebrow={hero.eyebrow}
        lead={hero.titleLead}
        accent={hero.titleAccent}
        aside={
          <div className="space-y-3">
            <MonoLabel accent>{hero.scopeLabel}</MonoLabel>
            <Lede>{hero.scopeBody}</Lede>
          </div>
        }
      />

      <FilterBar
        label={filters.allTopicsLabel}
        options={FAQ_CATEGORIES.map((c) => ({
          id: c.id,
          label: c.id === "all" ? filters.allTopicsLabel : c.label,
          count: c.id === "all" ? COMPREHENSIVE_FAQS.length : COMPREHENSIVE_FAQS.filter((f) => f.category === c.id).length,
        }))}
        value={category}
        onChange={(id) => {
          setCategory(id);
          scrollToResults(resultsRef.current);
        }}
        meta={`${visible.length} ${filters.countSingular}${visible.length !== 1 ? filters.countPluralSuffix : ""}`}
      >
          <label className="relative block">
            <span className="sr-only">{filters.searchLabel}</span>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={filters.searchPlaceholder}
              className="w-full bg-paper-warm border border-black/10 pl-11 pr-10 py-3 font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={filters.clearLabel}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-base"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </label>
      </FilterBar>

      <div ref={resultsRef} className={`${CONTAINER} pb-24 md:pb-32`}>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted" aria-live="polite">
          {visible.length} {filters.countSingular}
          {visible.length !== 1 ? filters.countPluralSuffix : ""}
        </p>

        <div className="mt-4 max-w-4xl">
          {visible.length === 0 ? (
            <p className="py-16 font-display text-2xl font-medium">{filters.emptyLabel}</p>
          ) : (
            <Accordion
              key={`${category}-${query}`}
              items={visible.map((f) => ({
                id: f.id,
                kicker: category === "all" ? f.categoryLabel : undefined,
                title: f.question,
                body: (
                  <div className="space-y-4">
                    <Lede>{f.answer}</Lede>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {f.sourceDoc && (
                        <span className="font-mono text-[11px] text-text-muted">
                          {answer.sourceLabel} {f.sourceDoc}
                        </span>
                      )}
                      {f.relatedLinks?.map((l) => (
                        <Link
                          key={l.url}
                          to={l.url}
                          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
                        >
                          {l.label}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              }))}
            />
          )}
        </div>
      </div>

      <ClosingCta
        eyebrow={closing.eyebrow}
        title={closing.title}
        body={closing.body}
        primary={{ to: ROUTES.contact, label: closing.primaryCtaLabel }}
        secondary={{ href: closing.emailHref, label: closing.emailCtaLabel }}
      />
    </main>
  );
}
