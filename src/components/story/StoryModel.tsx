import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { EASE_EDITORIAL, VIEWPORT } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";
import { ChapterMarker, MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.model;

function EntityCard({ entity, delay }: { entity: typeof CONTENT.studios; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full p-7 sm:p-9 border border-white/15 bg-white/[0.03]">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">{entity.role}</span>
        <h3 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-[-0.04em]">{entity.label}</h3>
        <p className="mt-5 font-sans text-sm sm:text-base leading-relaxed text-white/75">{entity.body}</p>
      </div>
    </Reveal>
  );
}

/** The ≥ 40% transfer, drawn as money moving from Studios to the Foundation. */
function Flow() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex lg:flex-col items-center justify-center gap-5 py-8 lg:py-0 lg:px-4">
      {/* Track: vertical on mobile, horizontal on desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 lg:left-0 lg:right-0 lg:top-1/2 lg:bottom-auto lg:w-auto lg:h-px lg:translate-x-0 lg:-translate-y-1/2 bg-white/10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-accent origin-top lg:origin-left"
          initial={reduce ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT.onceHalf}
          transition={{ duration: 1.2, ease: EASE_EDITORIAL, delay: 0.3 }}
        />
      </div>

      <Reveal delay={0.5} y={12} className="relative z-10 bg-ink px-4 py-3 text-center">
        <div className="font-display text-5xl sm:text-6xl font-medium tracking-[-0.05em] text-white tabular-nums">
          {CONTENT.flowValue}
        </div>
        <p className="mt-2 max-w-[200px] mx-auto font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 leading-relaxed">
          {CONTENT.flowLabel}
        </p>
        <ArrowRight className="mx-auto mt-3 w-4 h-4 text-accent rotate-90 lg:rotate-0" aria-hidden="true" />
      </Reveal>
    </div>
  );
}

/** Chapter 04: the engine. Why the civic work can last. */
export function StoryModel() {
  return (
    <section className="w-full bg-ink text-white">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 py-24 md:py-36">
        <ChapterMarker chapter={CONTENT.chapter} label={CONTENT.eyebrow} tone="dark" />

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <h2 className="lg:col-span-8 font-display text-[clamp(38px,6vw,88px)] font-medium tracking-[-0.05em] leading-[0.96]">
            <MaskLine>{CONTENT.headlineLead}</MaskLine>
            <MaskLine delay={0.1} className="text-white/55">
              {CONTENT.headlineAccent}
            </MaskLine>
          </h2>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">{CONTENT.description}</p>
          </Reveal>
        </div>

        {/* Studios → ≥ 40% → Foundation */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[1fr_minmax(220px,0.6fr)_1fr] items-stretch">
          <EntityCard entity={CONTENT.studios} delay={0} />
          <Flow />
          <EntityCard entity={CONTENT.foundation} delay={0.15} />
        </div>

        <Reveal className="mt-12 md:mt-16 pt-8 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p className="flex items-start gap-3 font-sans text-sm text-white/70 max-w-xl">
            <ShieldCheck className="w-5 h-5 text-white flex-shrink-0" aria-hidden="true" />
            <span>{CONTENT.independenceNote}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={ROUTES.studio}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-text-base hover:bg-accent hover:text-white transition-colors duration-200 font-mono text-xs uppercase tracking-wider font-semibold"
            >
              <span>{CONTENT.primaryCtaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to={ROUTES.whitepaper}
              className="inline-flex items-center px-5 py-3.5 border border-white/25 hover:border-white transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
            >
              {CONTENT.secondaryCtaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
