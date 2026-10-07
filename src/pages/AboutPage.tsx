import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "../components/common/WordReveal";
import { ABOUT_CONTENT } from "../data/content/about";

export function AboutPage() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Clipped frame parallax anchored at top to protect subject framing
  const { scrollYProgress: mediaScroll } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(mediaScroll, [0, 1], ["0%", "5%"]);

  // Scroll-linked color transitions for philosophy keywords
  const { scrollYProgress: philosophyScroll } = useScroll({
    target: philosophyRef,
    offset: ["start 80%", "end 35%"],
  });
  const colorPhilosophyWords = useTransform(
    philosophyScroll,
    [0.1, 0.45],
    ["#101010", "#2446EC"]
  );
  const colorCivicStatement = useTransform(
    philosophyScroll,
    [0.45, 0.8],
    ["#101010", "#2446EC"]
  );

  const { hero, media, philosophy, leadership } = ABOUT_CONTENT;

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10">
        {/* White Grid Hero with Oversized Studio Title Left/Center and Mission Summary in Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-20 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold">
                {hero.eyebrow}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]"
            >
              {hero.titleLead}{" "}
              <span className="text-[#2446EC]">{hero.titleHighlight}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1"
          >
            <span className="font-mono text-xs text-[#101010] uppercase tracking-wider block mb-2 font-semibold">
              {hero.missionLabel}
            </span>
            <p className="font-sans text-sm sm:text-base text-[#101010] leading-relaxed font-normal">
              {hero.missionBody}
            </p>
          </motion.div>
        </div>

        {/* Full-Bleed Grayscale/Muted Studio Media with Restrained Parallax */}
        <div
          ref={mediaRef}
          className="py-16 md:py-24 border-b border-[#101010]/12"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[18/9] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
            <motion.img
              style={{ y: shouldReduceMotion ? "0%" : yParallax }}
              src={media.imageSrc}
              alt={media.imageAlt}
              initial={{ scale: 1.02, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover object-top filter grayscale contrast-115 brightness-95 will-change-transform origin-top"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
              <span>{media.captionLeft}</span>
              <span>{media.captionRight}</span>
            </div>
          </div>
        </div>

        {/* Studio Philosophy & Narrative with Word-by-Word Reveal & Scroll Highlights */}
        <div
          ref={philosophyRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#101010]/12 items-start"
        >
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                {philosophy.label}
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6 max-w-3xl text-sm sm:text-base text-[#101010]/90 font-light leading-relaxed">
            <WordReveal
              text={philosophy.statement}
              as="p"
              className="font-display text-2xl sm:text-3xl font-normal tracking-[-0.03em] leading-snug text-[#101010]"
              staggerMs={30}
              highlightWords={philosophy.highlightWords}
              highlightColor={shouldReduceMotion ? "#2446EC" : colorPhilosophyWords}
              highlightClassName="font-medium transition-colors duration-300"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm sm:text-base text-[#101010]/85 leading-relaxed font-normal"
            >
              {philosophy.paragraphOne}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm sm:text-base text-[#101010]/85 leading-relaxed font-normal"
            >
              {philosophy.paragraphTwo}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pt-6 border-t border-[#101010]/12"
            >
              <p className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#101010] leading-snug">
                {philosophy.closingLead}{" "}
                <motion.span
                  style={{ color: shouldReduceMotion ? "#2446EC" : colorCivicStatement }}
                  className="font-semibold transition-colors duration-300"
                >
                  {philosophy.closingHighlight}
                </motion.span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              {leadership.label}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.members.map((leader) => (
              <div key={leader.name} className="space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className={`w-full h-full object-cover ${leader.objectPosition || "object-top"} origin-top filter grayscale contrast-115 transition-transform duration-550 ease-out hover:scale-[1.025]`}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#101010]">
                    {leader.name}
                  </h3>
                  <span className="font-mono text-xs sm:text-sm text-[#757575] block mt-1 mb-2 font-medium">
                    {leader.role}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chronological Archive */}
        {/* <div className="py-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              CHRONOLOGY
            </span>
          </div>

          <div className="divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {history.map((h) => (
              <div key={h.year} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 font-display text-3xl font-semibold text-[#101010] tabular-nums">
                  {h.year}
                </div>
                <div className="md:col-span-4 font-sans text-lg font-medium uppercase tracking-tight text-[#101010]">
                  {h.title}
                </div>
                <div className="md:col-span-6 font-sans text-sm text-[#757575] font-light leading-relaxed">
                  {h.detail}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
}
