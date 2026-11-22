import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../story/primitives";

export interface TimelineStep {
  step: string;
  title: string;
  detail: string;
}

/** Vertical step list with a line that draws itself as the reader scrolls. */
export function Timeline({ steps, stepLabel }: { steps: TimelineStep[]; stepLabel: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });

  return (
    <ol ref={ref} className="relative pl-8 sm:pl-14 space-y-14 sm:space-y-20">
      <span aria-hidden="true" className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-black/10" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
        className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-accent origin-top"
      />
      {steps.map((s) => (
        <li key={s.step} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-8 sm:-left-14 top-1.5 w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] bg-accent ring-4 ring-white"
          />
          <Reveal y={12}>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">
              {stepLabel} {s.step}
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.04em] leading-tight">
              {s.title}
            </h3>
            <p className="mt-3 font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">{s.detail}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
