import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { ROUTES } from "../../lib/routes";
import { ChapterMarker, MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.services;
type Programme = (typeof CONTENT.items)[number];

function ProgrammeBody({ item, index }: { item: Programme; index: number }) {
  return (
    <>
      <Reveal y={12} className="flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-white/75">
        <span className="text-white font-semibold tabular-nums">
          {item.number} {CONTENT.slideCounterTotal}
        </span>
        <span className="w-8 h-px bg-white/40" />
        <span>{item.tag}</span>
      </Reveal>

      <h3 className="mt-6 font-display text-5xl sm:text-6xl xl:text-7xl font-medium tracking-[-0.05em] leading-[0.94]">
        <MaskLine delay={0.05}>
          <Link to={ROUTES.programme(item.slug)} className="hover:text-white/80 transition-colors duration-200">
            {item.title}
          </Link>
        </MaskLine>
      </h3>

      <Reveal delay={0.1}>
        <p className="mt-6 font-display text-2xl sm:text-3xl font-medium tracking-[-0.03em] leading-snug text-white/90 max-w-lg">
          {item.description}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="px-3.5 py-2 border border-white/30 font-sans text-sm text-white">
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          to={ROUTES.programme(item.slug)}
          aria-label={`${CONTENT.exploreLabel}: ${item.title}`}
          className="group mt-10 inline-flex items-center gap-2 px-5 py-3 bg-white text-accent hover:bg-text-base hover:text-white transition-colors duration-200 font-mono text-xs uppercase tracking-wider font-semibold"
        >
          <span>{CONTENT.exploreLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </Reveal>
      <span className="sr-only">
        {CONTENT.programmeLabelPrefix} {index + 1}
      </span>
    </>
  );
}

/** Desktop: cards pin under the navbar and stack; the covered card recedes. */
function StackedCard({
  item,
  index,
  total,
  progress,
}: {
  item: Programme;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  const isLast = index === total - 1;
  const static_ = reduce || isLast || total < 2;
  // Card i is covered by card i+1 over this slice of the stack's scroll progress.
  // Ranges must stay within [0, 1]: Framer may hand them to a WAAPI scroll timeline.
  const start = static_ ? 0 : index / (total - 1);
  const end = static_ ? 1 : (index + 1) / (total - 1);
  const scale = useTransform(progress, [start, end], static_ ? [1, 1] : [1, 0.92]);
  const dim = useTransform(progress, [start, end], static_ ? [0, 0] : [0, 0.45]);

  return (
    <div className="sticky top-20 h-[calc(100svh-5rem)]" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{ scale }}
        className="relative h-full w-full origin-top flex bg-accent text-white border-t border-white/20 overflow-hidden"
      >
        <div className="w-1/2 h-full flex items-center px-12 lg:px-16 py-12 overflow-y-auto">
          <div className="max-w-xl">
            <ProgrammeBody item={item} index={index} />
          </div>
        </div>
        <div className="w-1/2 h-full relative overflow-hidden bg-ink">
          <img
            src={item.image}
            alt={item.title}
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-black pointer-events-none" />
      </motion.div>
    </div>
  );
}

/** Chapter 02: the work. Three flagship programmes, one at a time. */
export function StoryProgrammes() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
  const items = CONTENT.items;

  return (
    <section id="services" className="relative w-full bg-paper-warm text-text-base isolate">
      {/* Chapter intro */}
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 py-24 md:py-32">
        <ChapterMarker chapter={CONTENT.chapter} label={CONTENT.eyebrow} />
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <h2 className="lg:col-span-8 font-display text-[clamp(38px,6vw,88px)] font-medium tracking-[-0.05em] leading-[0.96]">
            <MaskLine>{CONTENT.headlineLead}</MaskLine>
            <MaskLine delay={0.1} className="text-accent">
              {CONTENT.headlineAccent}
            </MaskLine>
          </h2>
          <Reveal delay={0.2} className="lg:col-span-4 flex flex-col gap-6">
            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              {CONTENT.description}
            </p>
            <Link
              to={ROUTES.contact}
              className="group self-start inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-white hover:bg-text-base transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
            >
              <span>{CONTENT.ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Mobile: a simple vertical sequence, nothing hidden off-screen */}
      <div className="md:hidden px-5 sm:px-8 pb-20 space-y-5">
        {items.map((item, index) => (
          <article key={item.number} className="bg-accent text-white">
            <div className="aspect-[16/10] overflow-hidden bg-ink">
              <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <ProgrammeBody item={item} index={index} />
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: sticky stack */}
      <div ref={stackRef} className="hidden md:block relative">
        {items.map((item, index) => (
          <StackedCard
            key={item.number}
            item={item}
            index={index}
            total={items.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
