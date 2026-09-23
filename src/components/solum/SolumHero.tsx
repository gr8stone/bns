import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";

const CLIENT_AVATARS = [
  "/images/bns/optimized/nelly-avatar.webp",
  "/images/bns/optimized/latiff-avatar.webp",
  "/images/bns/optimized/james-avatar.webp",
  "/images/bns/optimized/calvina-avatar.webp",
];

const CLIENT_LOGOS = [
  {
    name: "TISA",
    label: "The Institute for Social Accountability (TISA)",
    src: "/images/bns/partners/tisa.svg",
  },
  {
    name: "House of Fiscal Wisdom",
    label: "House of Fiscal Wisdom",
    src: "/images/bns/optimized/house-of-fiscal-wisdom.webp",
  },
  {
    name: "UON CFS",
    label: "University of Nairobi Committee on Fiscal Studies (UON CFS)",
    src: "/images/bns/optimized/committee-on-fiscal-studies.webp",
  },
  {
    name: "Budget Ndio Story",
    label: "Budget Ndio Story",
    src: "/images/bns/logo.svg",
  },
];

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const heroImage = "/images/bns/optimized/129A3912-hero.webp";
  const heroVideoUrl = "/images/bns/tiktoklanding.mp4";

  const tickerItems = [
    "AI IN CIVIC STORYTELLING",
    "2026 RESEARCH & ACTION REPORT",
    "4 COUNTIES MONITORED",
    "PUBLIC FINANCE TRACKING",
    "KENYA OPEN BUDGET DATA",
    "YOUTH-LED ACCOUNTABILITY",
    "BUDGET NDIO STORY",
  ];

  return (
    <section className="relative w-full bg-white text-text-base pt-16 sm:pt-20 border-b border-black/[0.08] overflow-hidden select-none">
      {/* ========================================================= */}
      {/* 1) TOP MARQUEE TICKER (Macrostructure: Marquee Hero)      */}
      {/* ========================================================= */}
      <div className="w-full border-b border-black/[0.08] bg-coral/5 overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-terracotta font-medium">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-coral inline-block" />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2) MAIN HERO CONTAINER (1425px Max Width per DESIGN.md)   */}
      {/* ========================================================= */}
      <div className="max-w-[1425px] mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-12 relative">
        {/* Subtle Swiss grid guides */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-6 md:px-10">
          <div className="border-r border-black/[0.04] h-full hidden md:block" />
          <div className="border-r border-black/[0.04] h-full hidden md:block" />
          <div className="border-r border-black/[0.04] h-full hidden md:block" />
          <div className="h-full hidden md:block" />
        </div>

        {/* Hero Header Area */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
          {/* Left: Giant Typography Ramp (h1: 120px, leading: 0.95, -7.2px) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-coral inline-block" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-terracotta font-semibold">
                01 // CIVIC MEDIA & RESEARCH INITIATIVE
              </span>
              <span className="text-slate font-mono text-[11px]">&bull;</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate">
                EDITION 2026
              </span>
            </div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0.5, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(44px,8vw,116px)] font-medium leading-[0.93] tracking-[-0.06em] text-text-base uppercase"
            >
              Budget Ndio Story<span className="text-coral">&reg;</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0.5, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-lg sm:text-xl md:text-[24px] font-medium leading-[1.3] tracking-[-0.04em] text-text-base mt-5 max-w-2xl"
            >
              Independent civic media and public finance storytelling platform
              empowering citizens and youth to track, understand, and demand
              accountability across Kenya.
            </motion.p>
          </div>

          {/* Right: Actions & Micro Metadata */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end gap-6">
            <p className="font-sans text-xs text-text-muted leading-relaxed font-normal max-w-sm">
              From grassroots community barazas to broadcast journalism, we
              translate complex budgets into actionable citizen data across 47
              counties.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={ROUTES.contact}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-text-base text-white hover:bg-terracotta transition-colors font-mono text-xs uppercase tracking-wider rounded-none group"
              >
                <span>GET INVOLVED</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to={ROUTES.projects}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-black/20 text-text-base hover:border-black hover:bg-ivory transition-colors font-mono text-xs uppercase tracking-wider rounded-none"
              >
                <span>EXPLORE WORK</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3) FRAGMENTED ABSTRACT COLLAGE HEADER (Inspo Signature)    */}
        {/* ========================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-2">
          {/* Main Visual Panel: Media / Video Frame */}
          <div className="md:col-span-7 lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/11] border border-black/[0.08] bg-black overflow-hidden group">
            {isPlayingVideo ? (
              <video
                src={heroVideoUrl}
                poster={heroImage}
                autoPlay
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <img
                  src={heroImage}
                  alt="Budget Ndio Story Civic Convening"
                  fetchPriority="high"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                {/* Fluid Saturated Gradient Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* Video Play Button Overlay */}
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  aria-label="Play documentary reel"
                  className="absolute bottom-5 left-5 z-20 flex items-center gap-3 px-4 py-2.5 bg-white text-text-base hover:bg-coral hover:text-white transition-colors border border-black/10 rounded-none shadow-sm cursor-pointer group/btn"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Watch Reel &bull; 2026
                  </span>
                </button>

                {/* Saturated Color Tag */}
                <div className="absolute top-4 right-4 z-20 bg-terracotta text-white font-mono text-[10px] uppercase tracking-widest px-2.5 py-1">
                  LIVE DOC
                </div>
              </>
            )}
          </div>

          {/* Right Column Bento Collage Cards */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            {/* Card 1: Saturated Terracotta & Coral Metric Tile */}
            <div className="p-6 sm:p-7 border border-black/[0.08] bg-[#FAFAF8] relative overflow-hidden flex flex-col justify-between">
              {/* Corner Color Accent Stripe */}
              <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-r from-coral to-terracotta" />

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate block mb-2">
                  COVERAGE & METRICS
                </span>
                <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-text-base leading-none mb-3">
                  4 / 47
                </div>
                <p className="font-sans text-xs text-text-muted leading-relaxed font-normal">
                  County Assemblies & National Treasury monitored through open
                  citizen tracking barazas.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-terracotta font-medium">
                <span>OPEN DATA ARCHIVE</span>
                <span className="text-coral">&rarr;</span>
              </div>
            </div>

            {/* Card 2: Sage / Peach Social Proof Card */}
            <div className="p-6 sm:p-7 border border-black/[0.08] bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-sage font-medium">
                    CITIZEN ADVOCATES
                  </span>
                  <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                </div>

                <div className="flex -space-x-2 overflow-hidden mb-3">
                  {CLIENT_AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Citizen advocate"
                      width={32}
                      height={32}
                      className="inline-block w-8 h-8 rounded-none border border-white object-cover"
                    />
                  ))}
                </div>

                <div className="font-display text-xl font-medium tracking-tight text-text-base">
                  150,000+ Reached
                </div>
                <p className="font-sans text-xs text-text-muted leading-tight mt-1">
                  Youth & grassroots participants trained in public finance
                  storytelling.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-black/[0.08] flex items-center gap-2 font-mono text-[11px] text-slate">
                <span className="text-coral">&#9670;</span> Verified Field Reach
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4) PARTNER STRIP (Hairline Swiss Grid)                     */}
        {/* ========================================================= */}
        <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-black/40 inline-block" />
            <span>PARTNERS & COLLABORATORS</span>
          </div>

          <div className="flex items-center flex-wrap gap-6 sm:gap-10">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.label}
                loading="lazy"
                className="h-8 sm:h-10 w-auto object-contain transition-all duration-200 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
