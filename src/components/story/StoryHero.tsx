import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { EASE_SNAPPY } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";
import { MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.hero;

// Hero choreography: eyebrow → headline lines → supporting copy → media.
// Starts just after the preloader curtain lifts (~150ms).
const T = { eyebrow: 0.2, lineOne: 0.3, lineTwo: 0.42, copy: 0.62, media: 0.7 };

export function StoryHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-text-base pt-16 sm:pt-20 overflow-hidden"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14">
        {/* Eyebrow */}
        <Reveal trigger="mount" delay={T.eyebrow} y={8}>
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-text-muted">
            <span className="w-1.5 h-1.5 bg-accent inline-block" />
            <span>{CONTENT.eyebrow}</span>
          </div>
        </Reveal>

        {/* The promise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-6 md:mt-8">
          <h1 className="lg:col-span-8 font-display text-[clamp(46px,8vw,124px)] font-medium leading-[0.92] tracking-[-0.06em]">
            <MaskLine trigger="mount" delay={T.lineOne}>
              {CONTENT.headlineLead}
            </MaskLine>
            <MaskLine trigger="mount" delay={T.lineTwo} className="text-accent">
              {CONTENT.headlineAccent}
            </MaskLine>
          </h1>

          <Reveal trigger="mount" delay={T.copy} className="lg:col-span-4 flex flex-col gap-6 lg:pb-3">
            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-md">
              {CONTENT.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={ROUTES.contact}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-white hover:bg-text-base transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
              >
                <span>{CONTENT.primaryCtaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to={ROUTES.projects}
                className="inline-flex items-center px-5 py-3.5 border border-black/20 hover:border-text-base transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
              >
                {CONTENT.secondaryCtaLabel}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* The evidence: documentary frame, uncovered like a curtain */}
        <motion.div
          initial={reduce ? false : { clipPath: "inset(14% 6% 0% 6%)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE_SNAPPY, delay: T.media }}
          className="relative mt-12 md:mt-16 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-ink"
        >
          {isPlaying ? (
            <video
              src={CONTENT.heroVideoUrl}
              poster={CONTENT.heroImage}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <motion.img
                src={CONTENT.heroImage}
                alt={CONTENT.heroImageAlt}
                fetchPriority="high"
                style={{ scale: imageScale }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10 pointer-events-none" />
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={CONTENT.playButtonAriaLabel}
                className="group absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 pl-2 pr-5 py-2 bg-white text-text-base hover:bg-accent hover:text-white transition-colors duration-200"
              >
                <span className="w-9 h-9 flex items-center justify-center bg-accent text-white group-hover:bg-white group-hover:text-accent transition-colors duration-200">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  {CONTENT.playButtonLabel}
                </span>
              </button>
            </>
          )}
        </motion.div>

        {/* Meta strip + scroll cue */}
        <Reveal
          trigger="mount"
          delay={T.media + 0.4}
          y={0}
          className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-text-muted"
        >
          <span>{CONTENT.metaLeft}</span>
          <span className="hidden md:inline">{CONTENT.metaRight}</span>
          <span className="flex items-center gap-2 text-text-base">
            {CONTENT.scrollCue}
            <motion.span
              aria-hidden="true"
              animate={reduce ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}
