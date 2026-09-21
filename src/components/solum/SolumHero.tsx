import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CLIENT_AVATARS = [
  "/images/bns/optimized/nelly-avatar.webp",
  "/images/bns/optimized/latiff-avatar.webp",
  "/images/bns/optimized/james-avatar.webp",
  "/images/bns/optimized/calvina-avatar.webp",
];

const CLIENT_LOGOS = [
  {
    name: "Budget Ndio Story",
    label: "Budget Ndio Story",
    src: "/images/bns/logo.svg",
  },
  { name: "TISA", label: "TISA", src: "/images/bns/partners/tisa.svg" },
  {
    name: "University of Nairobi",
    label: "University of Nairobi",
    src: "/images/bns/optimized/committee-on-fiscal-studies.webp",
  },
  {
    name: "House of Fiscal Wisdom",
    label: "House of Fiscal Wisdom",
    src: "/images/bns/optimized/house-of-fiscal-wisdom.webp",
  },
];

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax strictly limited to 6%
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const heroImage = "/images/bns/optimized/129A3912-hero.webp";
  const heroVideoUrl = "/images/bns/tiktoklanding.mp4";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#101010] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 4-Column Visible Hairline Grid Overlay (matching screenshot) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 z-20">
        <div className="border-r border-white/[0.12] h-full hidden md:block" />
        <div className="border-r border-white/[0.12] h-full hidden md:block" />
        <div className="border-r border-white/[0.12] h-full hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      {/* ========================================================= */}
      {/* 1) HERO BACKGROUND: Ambient Cinematic Video (No controls) */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: shouldReduceMotion ? "0%" : parallaxY }}
          className="w-full h-full"
        >
          {heroVideoUrl ? (
            <video
              src={heroVideoUrl}
              poster={heroImage}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              className="w-full h-full object-cover filter brightness-90 contrast-105 pointer-events-none select-none"
            />
          ) : (
            <motion.img
              src={heroImage}
              alt="Budget Ndio Story Civic Convening"
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.08 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full object-cover filter brightness-90 contrast-105 origin-center will-change-transform"
            />
          )}
        </motion.div>

        {/* Subtle Contrast Gradient for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45 pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* CENTER HERO STAGE (Exact layout from user screenshot)     */}
      {/* ========================================================= */}
      <div className="relative z-30 my-auto pt-28 md:pt-36 pb-12 md:pb-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Giant Brand Wordmark & Subtitle (Columns 1-2) */}
          <div className="col-span-1 md:col-span-2">
            <motion.h1
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-[clamp(44px,7.5vw,110px)] font-bold tracking-[-0.05em] leading-[0.92] text-white mb-6 uppercase"
            >
              Budget Ndio Story&reg;
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-md"
            >
              Civic media and public finance storytelling platform empowering
              citizens and youth to track, understand, and demand accountability
              in national and county budgets.
            </motion.p>
          </div>

          {/* Right Stage: Split Start a Project Button (Columns 3-4) */}
          <div className="col-span-1 md:col-span-2 md:pl-8 flex flex-col justify-end items-start md:items-end">
            {/* Split Architectural Start a Project Button */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
              <Link
                to="/contact"
                className="group inline-flex items-stretch bg-white text-[#101010] hover:bg-[#F4F4F0] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white"
              >
                <div className="py-3.5 px-6 sm:px-7 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] flex items-center">
                  Get Involved
                </div>
                <div className="w-12 sm:w-14 border-l border-[#101010]/15 flex items-center justify-center bg-white group-hover:bg-[#101010] group-hover:text-white transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM STRIP: Avatars + Logos (NO 4-thumbnail switcher!)   */}
      {/* ========================================================= */}
      <div className="relative z-30 pb-8 pt-6 px-6 md:px-10 border-t border-white/15">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          {/* Left: Overlapping Avatars + Social Proof */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex -space-x-2.5 overflow-hidden flex-shrink-0">
              {CLIENT_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Citizen advocate"
                  width={32}
                  height={32}
                  loading="lazy"
                  className="inline-block w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#101010] object-cover"
                />
              ))}
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-tight">
              Over 150,000 citizens engaged across 47 counties.
            </p>
          </div>

          {/* Center/Right: Partner Logo Strip */}
          <div className="flex items-center flex-wrap justify-start md:justify-end gap-4 sm:gap-8 font-mono text-xs tracking-widest text-white/70 w-full md:w-auto">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.label}
                width={112}
                height={40}
                decoding="async"
                className="h-8 sm:h-10 w-auto max-w-[112px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
