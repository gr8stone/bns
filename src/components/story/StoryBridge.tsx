import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HOME_CONTENT } from "../../data/content/home";
import { PARALLAX } from "../../lib/motion";
import { MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.bridge;

/** A full-bleed breath between the problem and the work: the stakes, in two lines. */
export function StoryBridge() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : PARALLAX.deep);

  return (
    <section
      ref={ref}
      className="relative w-full h-[70svh] min-h-[460px] md:h-[85svh] overflow-hidden bg-ink text-white"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%]">
        <img
          src={CONTENT.image}
          alt={CONTENT.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-125 brightness-[0.6]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 pointer-events-none" />

      <div className="relative h-full max-w-container mx-auto px-5 sm:px-8 md:px-10 flex flex-col justify-end pb-12 md:pb-16">
        <h2 className="font-display text-[clamp(40px,7.5vw,116px)] font-medium leading-[0.94] tracking-[-0.055em]">
          <MaskLine className="text-white/60">{CONTENT.lineOne}</MaskLine>
          <MaskLine delay={0.12}>{CONTENT.lineTwo}</MaskLine>
        </h2>
        <Reveal delay={0.3} className="mt-6 md:mt-8 pt-5 border-t border-white/20 max-w-md">
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-white/75 leading-relaxed">
            {CONTENT.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
