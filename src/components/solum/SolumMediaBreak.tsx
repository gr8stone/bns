import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { PARALLAX } from "../../lib/motion";

export function SolumMediaBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax on background photo — uses PARALLAX.deep
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : PARALLAX.deep,
  );

  // Scroll-linked horizontal marquee with tight Swiss typography
  const xMarquee = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["2%", "-16%"],
  );

  const marqueeText =
    "FOLLOW THE BUDGET ◆ FIND THE STORY ◆ BNS FOUNDATION ◆ BNS STUDIOS ◆ 47 COUNTIES ◆ ";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden bg-ink select-none border-b border-black/[0.08]"
    >
      {/* Background Photography with Parallax */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="/images/bns/optimized/129A4248-media.webp"
          alt="Budget Ndio Story National Civic Convening"
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75"
        />
        {/* Saturated fluid gradient wash per DESIGN.md */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2446EC]/30 via-transparent to-[#2446EC]/20 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </motion.div>

      {/* Floating Horizontal Typography linked to scroll (Beausite / Swiss Ramp) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <motion.div
          style={{ x: xMarquee }}
          className="flex items-center whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-medium tracking-[-0.06em] text-white/95 uppercase will-change-transform leading-none"
        >
          <span>{marqueeText}</span>
          <span className="text-[#2446EC]">{marqueeText}</span>
        </motion.div>
      </div>

      {/* Corner Swiss Markers (0px radius) */}
      <div className="absolute bottom-6 left-6 md:left-10 z-20 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#2446EC] inline-block" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-white/80">
            CIVIC DIALOGUE // CITIZEN CONVENING
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-10 z-20 pointer-events-none hidden sm:block text-right">
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
          REPORT 2026 &bull; BUDGET NDIO STORY
        </span>
      </div>
    </section>
  );
}
