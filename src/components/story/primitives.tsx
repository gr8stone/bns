/**
 * Story motion primitives — the single motion vocabulary for the v2 homepage.
 *
 *   MaskLine        Headlines: each line rises out of a mask (one per line).
 *   Reveal          Supporting copy, cards, CTAs: short fade-up.
 *   ScrollHighlight Thesis statements: words light up as the reader scrolls.
 *   CountUp         Proof numbers: count once, when seen.
 *   ChapterMarker   "01 — Why it matters": tells the reader where they are.
 *
 * All primitives respect prefers-reduced-motion by rendering the final state.
 */
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { EASE_EDITORIAL, EASE_SNAPPY, OFFSET, VIEWPORT } from "../../lib/motion";

// ─── MaskLine ────────────────────────────────────────────────────────────────

interface MaskLineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "mount" animates immediately (hero); "view" waits until scrolled into view. */
  trigger?: "mount" | "view";
}

const maskVariants = { hidden: { y: "110%" }, shown: { y: "0%" } };

export function MaskLine({ children, delay = 0, className = "", trigger = "view" }: MaskLineProps) {
  const reduce = useReducedMotion();
  // The in-view trigger sits on the (unclipped) mask, not on the line inside it:
  // a line translated out of its overflow-hidden mask never "intersects".
  const play =
    trigger === "mount" ? { animate: "shown" } : { whileInView: "shown", viewport: VIEWPORT.once };

  return (
    <motion.span
      className="block overflow-hidden pb-[0.1em] -mb-[0.1em]"
      initial={reduce ? false : "hidden"}
      {...play}
    >
      <motion.span
        className={`block ${className}`}
        variants={maskVariants}
        transition={{ duration: 0.9, ease: EASE_SNAPPY, delay }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

// ─── Reveal ──────────────────────────────────────────────────────────────────

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  trigger?: "mount" | "view";
}

export function Reveal({ children, delay = 0, className, y = OFFSET.normal, trigger = "view" }: RevealProps) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0 };
  const play =
    trigger === "mount" ? { animate: target } : { whileInView: target, viewport: VIEWPORT.onceAmount };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      {...play}
      transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── ScrollHighlight ─────────────────────────────────────────────────────────

const normalise = (word: string) => word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();

function HighlightWord({
  progress,
  range,
  accent,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className={accent ? "text-accent" : undefined}>
        {children}
      </motion.span>{" "}
    </>
  );
}

interface ScrollHighlightProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

export function ScrollHighlight({ text, highlightWords = [], className }: ScrollHighlightProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });

  const words = text.split(/\s+/).filter(Boolean);
  const accents = new Set(highlightWords.map(normalise));

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {words.map((word, i) => (
          <span key={i} className={accents.has(normalise(word)) ? "text-accent" : undefined}>
            {word}{" "}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <HighlightWord
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          accent={accents.has(normalise(word))}
        >
          {word}
        </HighlightWord>
      ))}
    </p>
  );
}

// ─── CountUp ─────────────────────────────────────────────────────────────────

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, prefix = "", suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE_EDITORIAL,
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  const shown = reduce ? value : current;
  const label = `${prefix}${value.toLocaleString("en-US")}${suffix}`;

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={label}>
      <span aria-hidden="true">
        {prefix}
        {shown.toLocaleString("en-US")}
        {suffix}
      </span>
    </span>
  );
}

// ─── ChapterMarker ───────────────────────────────────────────────────────────

interface ChapterMarkerProps {
  chapter?: string;
  label: string;
  tone?: "light" | "dark";
}

export function ChapterMarker({ chapter, label, tone = "light" }: ChapterMarkerProps) {
  const reduce = useReducedMotion();
  const ink = tone === "light" ? "text-text-base" : "text-white";
  const line = tone === "light" ? "bg-text-base/25" : "bg-white/30";
  const number = tone === "light" ? "text-accent" : "text-white/55";

  return (
    <div className={`flex items-center gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] ${ink}`}>
      {chapter && <span className={`${number} font-semibold tabular-nums`}>{chapter}</span>}
      <motion.span
        aria-hidden="true"
        className={`h-px w-10 sm:w-16 origin-left ${line}`}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT.once}
        transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
      />
      <span className="font-medium">{label}</span>
    </div>
  );
}
