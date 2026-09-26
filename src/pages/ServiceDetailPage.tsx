import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SERVICES } from "../data/services";
import { getYouTubeId, getYouTubeThumbnail } from "../lib/media";

const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeScriptTab, setActiveScriptTab] = useState<
    "deliverables" | "pipeline"
  >("deliverables");

  const service = useMemo(() => {
    return SERVICES.find(
      (s) => s.slug === slug || s.aliases?.includes(slug || ""),
    );
  }, [slug]);

  const currentIndex = useMemo(() => {
    return SERVICES.findIndex(
      (s) => s.slug === slug || s.aliases?.includes(slug || ""),
    );
  }, [slug]);

  const prevService = useMemo(() => {
    if (currentIndex <= 0) return SERVICES[SERVICES.length - 1];
    return SERVICES[currentIndex - 1];
  }, [currentIndex]);

  const nextService = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= SERVICES.length - 1)
      return SERVICES[0];
    return SERVICES[currentIndex + 1];
  }, [currentIndex]);

  // Scene 1: Groundwork Parallax (Starting from 01)
  const challengeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: challengeScroll } = useScroll({
    target: challengeRef,
    offset: ["start end", "end start"],
  });
  const challengeImgY = useTransform(challengeScroll, [0, 1], ["-8%", "8%"]);

  // Scene 2: Video Scaling
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScroll } = useScroll({
    target: videoRef,
    offset: ["start end", "center center"],
  });
  const videoScale = useTransform(videoScroll, [0, 1], [0.96, 1]);
  const videoOpacity = useTransform(videoScroll, [0, 0.8], [0.5, 1]);

  // Scene 3: Methodology Timeline Line Draw
  const workflowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: workflowScroll } = useScroll({
    target: workflowRef,
    offset: ["start 80%", "end 70%"],
  });

  if (!service) {
    return <Navigate to="/programmes" replace />;
  }

  const ytId = getYouTubeId(service.video);
  const videoPoster = ytId
    ? getYouTubeThumbnail(ytId, "maxres") || service.image
    : service.image;

  return (
    <main className="w-full bg-white text-[#101010] select-none overflow-x-hidden pt-28 md:pt-36">
      {/* Top Header / Breadcrumb Navigation */}
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto w-full pb-8 border-b border-[#101010]/12 flex items-center justify-between font-mono text-xs text-[#757575] uppercase tracking-wider">
        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 hover:text-[#2446EC] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>ALL PROGRAMMES</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#2446EC] inline-block" />
          <span className="text-[#2446EC] font-semibold">{service.number}</span>
          <span>//</span>
          <span className="text-[#101010] font-semibold">{service.title}</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 🎬 SCENE 01: THE CIVIC CHALLENGE (STARTING FROM 01)        */}
      {/* ========================================================= */}
      <section
        ref={challengeRef}
        className="w-full py-16 sm:py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto"
      >
        <div className="space-y-16">
          {/* Act Label */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#2446EC] inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
              01 // THE CIVIC CHALLENGE
            </span>
          </div>

          {/* Massive Typographic Thesis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] uppercase text-[#101010] leading-[0.94]">
                Why Traditional Systems Fail To Deliver Accountability.
              </h1>
            </div>

            <div className="lg:col-span-5 space-y-6 pt-2">
              <p className="font-sans text-lg sm:text-xl text-[#101010] font-normal leading-relaxed">
                {service.problem}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#757575] font-light leading-relaxed">
                {service.heroSubhead}
              </p>
            </div>
          </div>

          {/* Telemetry Strip: Zero Cards, Pure Typographic Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#101010]/15">
            <div>
              <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                CONSTITUTIONAL MANDATE
              </span>
              <span className="font-mono text-base sm:text-lg font-semibold text-[#101010]">
                ARTICLES 10 &amp; 201
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                TERRITORIAL REACH
              </span>
              <span className="font-mono text-base sm:text-lg font-semibold text-[#101010]">
                ALL 47 COUNTIES
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                CYCLE WINDOW
              </span>
              <span className="font-mono text-base sm:text-lg font-semibold text-[#101010]">
                ANNUAL STATUTORY REVIEW
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                INITIATIVE TRACK
              </span>
              <span className="font-mono text-base sm:text-lg font-semibold text-[#2446EC]">
                {service.number} // {service.title}
              </span>
            </div>
          </div>

          {/* Full-Bleed Panoramic Visual (Zero card border) */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-black select-none">
            <motion.img
              style={{ y: shouldReduceMotion ? "0%" : challengeImgY }}
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
              <span>EVIDENCE GROUNDWORK ARCHIVE</span>
              <span>{service.number} // FIELD REPORT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SCENE 03: LIVE DOCUMENTARY REEL (ACCURATE VIDEO POSTER) */}
      {/* ========================================================= */}
      <section
        ref={videoRef}
        className="w-full py-24 sm:py-36 md:py-44 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#101010]/12"
      >
        <div className="space-y-12">
          {/* Header Typography */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#2446EC] inline-block" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                  02 // DOCUMENTARY EVIDENCE &amp; PROCEEDINGS
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-[#101010] leading-[0.94]">
                Data Rigor Meets Mass Action.
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#757575] font-light max-w-md leading-relaxed">
              {service.solution}
            </p>
          </div>

          {/* Cinema Frame (Zero Cards, Accurate YouTube Video Poster) */}
          <motion.div
            style={{
              scale: shouldReduceMotion ? 1 : videoScale,
              opacity: shouldReduceMotion ? 1 : videoOpacity,
            }}
            className="relative w-full aspect-video bg-black overflow-hidden shadow-2xl will-change-transform"
          >
            {ytId && isPlayingVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${service.title} Civic Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div
                onClick={() => setIsPlayingVideo(true)}
                className="group relative w-full h-full cursor-pointer overflow-hidden"
              >
                <img
                  src={videoPoster}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                {/* Animated Pulsing Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute -inset-4 bg-[#2446EC]/30 rounded-full animate-ping pointer-events-none" />
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white text-[#2446EC] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Minimalist Bottom Scene Telemetry */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-white/90 bg-black/70 backdrop-blur-md px-5 py-3">
                  <span>WATCH BROADCAST EVIDENCE STREAM</span>
                  <span className="text-[#2446EC] font-semibold">
                    1080P PROCEEDINGS
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SCENE 04: THE MOTION SCRIPT (OUTPUTS & PIPELINE)       */}
      {/* ========================================================= */}
      <section className="w-full py-24 sm:py-36 md:py-44 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#101010]/12">
        <div className="space-y-16">
          {/* Header & Interactive Script Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#101010]/15">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#2446EC] inline-block" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                  03 // THE MOTION SCRIPT ARCHITECTURE
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight uppercase text-[#101010] leading-[0.94]">
                Audited Outputs &amp; Execution.
              </h2>
            </div>

            {/* Interactive Script Mode Tabs (Zero Cards, Pure Affordance) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveScriptTab("deliverables")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                  activeScriptTab === "deliverables"
                    ? "bg-[#101010] text-white border-[#101010]"
                    : "bg-white text-[#757575] border-[#101010]/15 hover:border-[#101010] hover:text-[#101010]"
                }`}
              >
                [01 TANGIBLE DELIVERABLES]
              </button>
              <button
                onClick={() => setActiveScriptTab("pipeline")}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                  activeScriptTab === "pipeline"
                    ? "bg-[#101010] text-white border-[#101010]"
                    : "bg-white text-[#757575] border-[#101010]/15 hover:border-[#101010] hover:text-[#101010]"
                }`}
              >
                [02 4-PHASE METHODOLOGY]
              </button>
            </div>
          </div>

          {/* VIEW 1: DELIVERABLES AS KINETIC SCREENPLAY (ZERO CARDS) */}
          {activeScriptTab === "deliverables" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
              className="divide-y divide-[#101010]/15 border-t border-b border-[#101010]/15"
            >
              {service.deliverables.map((item, idx) => (
                <div
                  key={item.name}
                  className="group py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline transition-colors hover:bg-[#FAFAF8] -mx-6 px-6 sm:-mx-12 sm:px-12"
                >
                  {/* Huge Number */}
                  <div className="lg:col-span-2">
                    <span className="font-mono text-3xl sm:text-5xl font-light text-[#2446EC] transition-transform duration-300 group-hover:scale-110 inline-block">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-5 space-y-1">
                    <h3 className="font-display text-2xl sm:text-4xl font-medium uppercase tracking-tight text-[#101010] group-hover:text-[#2446EC] transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block">
                      AUDITED STATUTORY OUTPUT // CHAPTER 0{idx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="font-sans text-sm sm:text-base text-[#101010]/85 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* VIEW 2: METHODOLOGY PIPELINE (KINETIC TIMELINE, ZERO CARDS) */}
          {activeScriptTab === "pipeline" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
              ref={workflowRef}
              className="pt-6"
            >
              <div className="relative pl-6 sm:pl-12 border-l-2 border-[#101010]/15 space-y-16 sm:space-y-24">
                {/* Animated Drawn Line */}
                <motion.div
                  style={{
                    scaleY: shouldReduceMotion ? 1 : workflowScroll,
                    transformOrigin: "top",
                  }}
                  className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#2446EC] will-change-transform"
                />

                {service.workflow.map((wf) => (
                  <motion.div
                    key={wf.step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                    className="relative space-y-3"
                  >
                    {/* Step indicator dot */}
                    <div className="absolute -left-[31px] sm:-left-[55px] top-2 w-3.5 h-3.5 bg-[#2446EC] ring-4 ring-white" />

                    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                      <span>PHASE {wf.step}</span>
                      <span className="text-zinc-300">//</span>
                      <span className="text-[#757575]">EXECUTION TIMELINE</span>
                    </div>

                    <h4 className="font-display text-2xl sm:text-4xl font-medium uppercase tracking-tight text-[#101010]">
                      {wf.title}
                    </h4>

                    <p className="font-sans text-sm sm:text-base text-[#757575] font-light max-w-3xl leading-relaxed">
                      {wf.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* PREVIOUS & NEXT PROGRAMME NAVIGATION STRIP                 */}
      {/* ========================================================= */}
      <div className="w-full border-t border-[#101010]/12 bg-[#F6F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 divide-x divide-[#101010]/12">
          {prevService && (
            <Link
              to={`/programmes/${prevService.slug}`}
              className={`py-6 px-3 sm:py-12 sm:pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 ${nextService ? "" : "col-span-2"}`}
            >
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase text-[#757575] mb-3 sm:mb-4">
                <ArrowLeft className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform text-[#2446EC]" />
                <span className="sm:hidden">PREV</span>
                <span className="hidden sm:inline">PREVIOUS INITIATIVE // {prevService.number}</span>
              </div>
              <h4 className="font-display text-base sm:text-3xl font-medium tracking-tight text-[#101010] uppercase group-hover:text-[#2446EC] transition-colors leading-tight">
                {prevService.title}
              </h4>
              <span className="font-mono text-[10px] sm:text-xs text-[#757575] mt-2">
                {prevService.shortDescription}
              </span>
            </Link>
          )}

          {nextService && (
            <Link
              to={`/programmes/${nextService.slug}`}
              className={`py-6 px-3 sm:py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right ${prevService ? "" : "col-span-2"}`}
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-[10px] sm:text-xs uppercase text-[#757575] mb-3 sm:mb-4">
                <span className="sm:hidden">NEXT</span>
                <span className="hidden sm:inline">NEXT INITIATIVE // {nextService.number}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform text-[#2446EC]" />
              </div>
              <h4 className="font-display text-base sm:text-3xl font-medium tracking-tight text-[#101010] uppercase group-hover:text-[#2446EC] transition-colors leading-tight">
                {nextService.title}
              </h4>
              <span className="font-mono text-[10px] sm:text-xs text-[#757575] mt-2">
                {nextService.shortDescription}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
