import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { ROUTES } from "../../lib/routes";

const CONTENT = HOME_CONTENT.hero;
const CLIENT_AVATARS = CONTENT.youthCard.avatars;
const CLIENT_LOGOS = CONTENT.partnerLogos;

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const heroImage = CONTENT.heroImage;
  const heroVideoUrl = CONTENT.heroVideoUrl;

  const tickerItems = CONTENT.tickerItems;

  return (
    <section className="relative w-full bg-white text-text-base pt-16 sm:pt-20 border-b border-black/[0.08] overflow-hidden select-none">
      {/* ========================================================= */}
      {/* 1) TOP MARQUEE TICKER (Macrostructure: Marquee Hero)      */}
      {/* ========================================================= */}
      <div className="w-full border-b border-black/[0.08] bg-[#2446EC]/5 overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#2446EC] font-medium">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-[#2446EC] inline-block" />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2) MAIN HERO CONTAINER (1425px Max Width per DESIGN.md)   */}
      {/* ========================================================= */}
      <div className="max-w-[1425px] mx-auto px-5 sm:px-8 md:px-10 pt-12 md:pt-16 pb-12 relative">
        {/* Subtle Swiss grid guides */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-5 sm:px-8 md:px-10">
          <div className="border-r border-black/[0.04] h-full hidden md:block" />
          <div className="border-r border-black/[0.04] h-full hidden md:block" />
          <div className="border-r border-black/[0.04] h-full hidden md:block" />
          <div className="h-full hidden md:block" />
        </div>

        {/* Hero Header Area */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
          {/* Left: Giant Typography Ramp */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0.5, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(44px,7.5vw,112px)] font-medium leading-[0.93] tracking-[-0.06em] text-text-base"
            >
              {CONTENT.headlineLead}{" "}
              <span className="text-[#2446EC] block sm:inline">
                {CONTENT.headlineAccent}
              </span>
            </motion.h1>
          </div>

          {/* Right: Actions & Micro Metadata */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end gap-6">
            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal max-w-sm">
              {CONTENT.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={ROUTES.contact}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2446EC] text-white hover:bg-[#101010] transition-colors font-mono text-xs uppercase tracking-wider rounded-none group border-0"
              >
                <span>{CONTENT.primaryCtaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to={ROUTES.projects}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-black/20 text-text-base hover:border-black hover:bg-ivory transition-colors font-mono text-xs uppercase tracking-wider rounded-none"
              >
                <span>{CONTENT.secondaryCtaLabel}</span>
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
                  alt={CONTENT.heroImageAlt}
                  fetchPriority="high"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                {/* Fluid Saturated Gradient Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* Video Play Button Overlay */}
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  aria-label={CONTENT.playButtonAriaLabel}
                  className="absolute bottom-5 left-5 z-20 flex items-center gap-3 px-4 py-2.5 bg-white text-text-base hover:bg-[#2446EC] hover:text-white transition-colors border border-black/10 rounded-none shadow-sm cursor-pointer group/btn"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    {CONTENT.playButtonLabel}
                  </span>
                </button>

                {/* Saturated Color Tag */}
                <div className="absolute top-4 right-4 z-20 bg-[#2446EC] text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-none">
                  {CONTENT.liveTag}
                </div>
              </>
            )}
          </div>

          {/* Right Column Bento Collage Cards */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            {/* Card 1: Electric Blue Metric Tile */}
            <div className="p-6 sm:p-7 border border-black/[0.08] bg-[#FAFAF8] relative overflow-hidden flex flex-col justify-between">
              {/* Corner Color Accent Stripe */}
              <div className="absolute top-0 right-0 w-24 h-1 bg-[#2446EC]" />

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate block mb-2">
                  {CONTENT.coverageCard.eyebrow}
                </span>
                <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-text-base leading-none mb-3">
                  {CONTENT.coverageCard.metric}
                </div>
                <p className="font-sans text-xs text-text-muted leading-relaxed font-normal">
                  {CONTENT.coverageCard.description}
                </p>
              </div>

              <Link
                to={ROUTES.projects}
                className="pt-4 mt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-[#2446EC] font-medium hover:underline"
              >
                <span>{CONTENT.coverageCard.linkLabel}</span>
                <span className="text-[#2446EC]">{CONTENT.coverageCard.linkArrow}</span>
              </Link>
            </div>

            {/* Card 2: Sage / Peach Social Proof Card */}
            <div className="p-6 sm:p-7 border border-black/[0.08] bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#2446EC] font-medium">
                    {CONTENT.youthCard.eyebrow}
                  </span>
                  <span className="w-2 h-2 bg-[#2446EC] rounded-none animate-pulse" />
                </div>

                <div className="flex -space-x-2 overflow-hidden mb-3">
                  {CLIENT_AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={CONTENT.youthCard.avatarAlt}
                      width={32}
                      height={32}
                      className="inline-block w-8 h-8 rounded-none border border-white object-cover"
                    />
                  ))}
                </div>

                <div className="font-display text-xl font-medium tracking-tight text-text-base">
                  {CONTENT.youthCard.metric}
                </div>
                <p className="font-sans text-xs text-text-muted leading-tight mt-1">
                  {CONTENT.youthCard.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-black/[0.08] flex items-center gap-2 font-mono text-[11px] text-slate">
                <span className="text-coral">{CONTENT.youthCard.verifiedIcon}</span> {CONTENT.youthCard.verifiedLabel}
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
            <span>{CONTENT.partnersLabel}</span>
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
