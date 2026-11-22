import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { ROUTES } from "../../lib/routes";
import { ChapterMarker, Reveal, ScrollHighlight } from "./primitives";

const CONTENT = HOME_CONTENT.why;

/** Chapter 01: the problem. One thesis, then the gap and our answer side by side. */
export function StoryWhy() {
  return (
    <section className="w-full bg-white text-text-base border-t border-black/[0.08]">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 py-24 md:py-36">
        <ChapterMarker chapter={CONTENT.chapter} label={CONTENT.eyebrow} />

        <ScrollHighlight
          text={CONTENT.statement}
          highlightWords={CONTENT.highlightWords}
          className="mt-10 md:mt-14 max-w-5xl font-display text-[clamp(32px,5.2vw,76px)] font-medium leading-[1.04] tracking-[-0.045em]"
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 border-t border-black/[0.08]">
          <Reveal className="pt-8 md:pt-10 md:pr-12 pb-10 md:pb-0 border-b md:border-b-0 md:border-r border-black/[0.08]">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              {CONTENT.problemLabel}
            </span>
            <p className="mt-4 font-sans text-lg sm:text-xl leading-relaxed text-text-base/80 max-w-xl">
              {CONTENT.problemBody}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="pt-8 md:pt-10 md:pl-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
              {CONTENT.answerLabel}
            </span>
            <p className="mt-4 font-sans text-lg sm:text-xl leading-relaxed text-text-base max-w-xl">
              {CONTENT.answerBody}
            </p>
            <Link
              to={ROUTES.about}
              className="group mt-8 inline-flex items-center gap-2 pb-1 border-b border-text-base hover:text-accent hover:border-accent transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
            >
              <span>{CONTENT.ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
