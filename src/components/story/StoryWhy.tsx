import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { EASE_EDITORIAL, VIEWPORT } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";
import { ChapterMarker, Reveal, ScrollHighlight } from "./primitives";

const CONTENT = HOME_CONTENT.why;

/** Chapter 01: the gap, shown not told. Published → (arrow) → what we make. */
export function StoryWhy() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-white text-text-base border-t border-black/[0.08]">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 py-28 md:py-40">
        <ChapterMarker chapter={CONTENT.chapter} label={CONTENT.eyebrow} />

        <ScrollHighlight
          text={CONTENT.statement}
          highlightWords={CONTENT.highlightWords}
          className="mt-10 md:mt-14 max-w-4xl font-display text-[clamp(36px,6vw,92px)] font-medium leading-[1.02] tracking-[-0.05em]"
        />

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-4 md:gap-8">
          {/* What gets published: muted, struck through */}
          <Reveal className="p-8 sm:p-10 bg-paper-warm">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
              <FileText className="w-4 h-4" aria-hidden="true" />
              {CONTENT.fromLabel}
            </div>
            <ul className="mt-8 space-y-4">
              {CONTENT.fromItems.map((item, i) => (
                <li key={item} className="relative font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-text-base/40">
                  {item}
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-[2px] w-full bg-text-base/40 origin-left"
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={VIEWPORT.onceHalf}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: 0.4 + i * 0.15 }}
                  />
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex items-center justify-center" aria-hidden="true">
            <motion.span
              initial={reduce ? false : { scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={VIEWPORT.onceHalf}
              transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay: 0.9 }}
              className="w-14 h-14 flex items-center justify-center bg-text-base text-white"
            >
              <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
            </motion.span>
          </div>

          {/* What we make: bold, accent */}
          <Reveal delay={0.2} className="p-8 sm:p-10 bg-accent text-white">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/75">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {CONTENT.toLabel}
            </div>
            <ul className="mt-8 space-y-4">
              {CONTENT.toItems.map((item) => (
                <li key={item} className="font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Link
            to={ROUTES.about}
            className="group inline-flex items-center gap-2 pb-1 border-b border-text-base hover:text-accent hover:border-accent transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
          >
            {CONTENT.ctaLabel}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
