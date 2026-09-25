import { useMemo, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, CheckCircle2, HelpCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { getYouTubeId } from '../lib/media';

const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const service = useMemo(() => {
    return SERVICES.find((s) => s.slug === slug || s.aliases?.includes(slug || ''));
  }, [slug]);

  const currentIndex = useMemo(() => {
    return SERVICES.findIndex((s) => s.slug === slug || s.aliases?.includes(slug || ''));
  }, [slug]);

  const prevService = useMemo(() => {
    if (currentIndex <= 0) return SERVICES[SERVICES.length - 1];
    return SERVICES[currentIndex - 1];
  }, [currentIndex]);

  const nextService = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= SERVICES.length - 1) return SERVICES[0];
    return SERVICES[currentIndex + 1];
  }, [currentIndex]);

  // Section 1: Hero Parallax & Fade
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ['0%', '-15%']);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  // Section 2: Challenge Window Parallax
  const challengeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: challengeScroll } = useScroll({
    target: challengeRef,
    offset: ['start end', 'end start'],
  });
  const challengeImgY = useTransform(challengeScroll, [0, 1], ['-10%', '10%']);

  // Section 3: Approach Video Scaling
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScroll } = useScroll({
    target: videoRef,
    offset: ['start end', 'center center'],
  });
  const videoScale = useTransform(videoScroll, [0, 1], [0.95, 1]);
  const videoOpacity = useTransform(videoScroll, [0, 0.8], [0.4, 1]);

  // Section 5: Implementation Timeline Line Draw
  const workflowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: workflowScroll } = useScroll({
    target: workflowRef,
    offset: ['start 75%', 'end 70%'],
  });

  // Section 6: Impact Quote Scale & Opacity Ramp
  const quoteRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: quoteScroll } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start'],
  });
  const quoteScale = useTransform(quoteScroll, [0, 0.5, 1], [0.85, 1.08, 0.85]);
  const quoteOpacity = useTransform(quoteScroll, [0, 0.5, 1], [0.3, 1, 0.3]);

  if (!service) {
    return <Navigate to="/programmes" replace />;
  }

  const ytId = getYouTubeId(service.video);

  return (
    <main className="w-full bg-white text-[#101010] select-none overflow-x-hidden">
      {/* ========================================================= */}
      {/* 🎬 SECTION 1: CINEMATIC HERO (TOP OF PAGE)                */}
      {/* ========================================================= */}
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[680px] overflow-hidden bg-black flex flex-col justify-between"
      >
        {/* Full-bleed background media with scale-down and reverse parallax */}
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : heroImageY }}
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: EASE_EDITORIAL }}
          className="absolute inset-0 w-full h-[115%] -top-[5%] will-change-transform"
        >
          <img
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-transparent pointer-events-none" />
          {/* Bottom dissolve gradient into next white section */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </motion.div>

        {/* Top Floating Navigation Bar */}
        <div className="relative z-20 pt-24 md:pt-28 px-6 md:px-12 max-w-[1440px] mx-auto w-full flex items-center justify-between font-mono text-xs text-white/80 uppercase tracking-wider">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL PROGRAMMES</span>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 bg-[#2446EC] inline-block" />
            <span>PILLAR {service.number} // DOSSIER</span>
          </div>
        </div>

        {/* Hero Narrative Content */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 1 : heroTextOpacity }}
          className="relative z-20 px-6 md:px-12 max-w-[1440px] mx-auto w-full pb-16 md:pb-24"
        >
          <div className="max-w-4xl space-y-4">
            {/* Eyebrow */}
            <div className="overflow-hidden">
              <motion.div
                initial={shouldReduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_EDITORIAL }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/90"
              >
                <span className="w-2 h-2 bg-[#2446EC] inline-block" />
                <span>BNS FOUNDATION &bull; STRATEGIC CIVIC PILLAR</span>
              </motion.div>
            </div>

            {/* Giant Title */}
            <div className="overflow-hidden">
              <motion.h1
                initial={shouldReduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE_EDITORIAL }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.06em] text-white uppercase leading-[0.9]"
              >
                {service.title}
              </motion.h1>
            </div>

            {/* Subheadline */}
            <div className="overflow-hidden pt-2">
              <motion.p
                initial={shouldReduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: EASE_EDITORIAL }}
                className="font-sans text-base sm:text-xl md:text-2xl text-[#101010] font-medium leading-snug max-w-3xl"
              >
                {service.heroHeadline}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SECTION 2: THE CHALLENGE (TEXT + PARALLAX IMAGE)       */}
      {/* ========================================================= */}
      <section
        ref={challengeRef}
        className="w-full py-24 sm:py-32 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 7-Column Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#757575] font-semibold">
                01 // THE CIVIC CHALLENGE
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-[#101010] leading-[0.98]">
              Why Traditional Systems Fail To Deliver Accountability.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#101010]/85 font-normal leading-relaxed">
              {service.problem}
            </p>

            <div className="pt-4 border-t border-[#101010]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#757575] uppercase">
              <span>STATUTORY MANDATE: CONSTITUTION 2010 ARTICLES 10 &amp; 201</span>
              <span>47 COUNTIES</span>
            </div>
          </div>

          {/* Right: 5-Column Parallax Window Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[440px] sm:h-[540px] overflow-hidden bg-zinc-950 border border-black/10 select-none">
              <motion.img
                style={{ y: shouldReduceMotion ? '0%' : challengeImgY }}
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter grayscale contrast-125 brightness-95 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/80">
                <span>EVIDENCE GROUNDWORK</span>
                <span>PILLAR {service.number}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SECTION 3: THE APPROACH (YOUTUBE INTEGRATION)           */}
      {/* ========================================================= */}
      <section
        ref={videoRef}
        className="w-full py-24 sm:py-32 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#101010]/12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky Text Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                02 // THE BNS APPROACH
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-[#101010] leading-[0.98]">
              Data Rigor Meets Mass Action.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#757575] font-light leading-relaxed">
              {service.solution}
            </p>

            <p className="font-sans text-xs text-[#757575] leading-relaxed">
              {service.heroSubhead}
            </p>

            <div className="pt-2">
              <span className="font-mono text-[11px] text-[#101010] uppercase tracking-wider block border-b border-[#101010]/15 pb-2">
                &bull; BROADCAST REPLAY &amp; CIVIC PROCEEDINGS
              </span>
            </div>
          </div>

          {/* Right: 16:9 Video Container with Editorial Styling */}
          <div className="lg:col-span-7">
            <motion.div
              style={{
                scale: shouldReduceMotion ? 1 : videoScale,
                opacity: shouldReduceMotion ? 1 : videoOpacity,
              }}
              className="relative w-full aspect-video bg-black overflow-hidden border border-black/15 shadow-sm will-change-transform"
            >
              {ytId && isPlayingVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${service.title} Civic Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0 filter grayscale contrast-125"
                />
              ) : (
                <div
                  onClick={() => setIsPlayingVideo(true)}
                  className="group relative w-full h-full cursor-pointer overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#2446EC]/10 group-hover:bg-[#2446EC]/20 transition-colors" />

                  {/* Minimalist Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-[#2446EC] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Strip Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-4 py-2">
                    <span>PLAY DOCUMENTARY STREAM</span>
                    <span className="text-[#2446EC] font-semibold">1080P HD</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SECTION 4: OUTPUT MATRIX (STICKY CHAPTER SCROLL)       */}
      {/* ========================================================= */}
      <section className="w-full py-24 sm:py-32 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#101010]/12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Locked Sticky Chapter Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#757575] font-semibold">
                03 // DELIVERABLES MATRIX
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-medium tracking-tight uppercase text-[#101010] leading-[0.94]">
              Tangible Deliverables.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#757575] font-light max-w-sm leading-relaxed">
              Every initiative under {service.title} produces audited, verifiable civic assets designed to shift policy and public discourse.
            </p>
          </div>

          {/* Right Column: Scrolling Chapters with Massive Vertical Spacing */}
          <div className="lg:col-span-7 space-y-28 sm:space-y-36">
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
                className="space-y-4 border-b border-[#101010]/15 pb-12"
              >
                <div className="flex items-center gap-3 font-mono text-xs uppercase text-[#2446EC] tracking-widest">
                  <span>CHAPTER 0{idx + 1}</span>
                  <span className="w-6 h-px bg-[#2446EC]" />
                  <span>AUDITED OUTPUT</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-medium tracking-tight uppercase text-[#101010] leading-snug">
                  {item.name}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#101010]/80 font-normal leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[#757575] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2446EC]" />
                  <span>Verified Civic Impact Metric</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SECTION 5: IMPLEMENTATION WORKFLOW (DRAWN LINE)        */}
      {/* ========================================================= */}
      <section
        ref={workflowRef}
        className="w-full py-24 sm:py-32 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#101010]/12"
      >
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2446EC] inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#757575] font-semibold">
              04 // PIPELINE ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-medium tracking-tight uppercase text-[#101010] leading-[0.94]">
            Methodology &amp; Workflow.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#757575] font-light max-w-xl mx-auto leading-relaxed">
            How evidence moves from obscure Treasury books to constitutional debate and citizen empowerment.
          </p>
        </div>

        {/* Vertical Drawn Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Background Track */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#101010]/15 -translate-x-1/2" />

          {/* Central Animated Drawn Line */}
          <motion.div
            style={{
              scaleY: shouldReduceMotion ? 1 : workflowScroll,
              transformOrigin: 'top',
            }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#2446EC] -translate-x-1/2 will-change-transform"
          />

          <div className="space-y-24 sm:space-y-32">
            {service.workflow.map((wf, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={wf.step}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center pl-10 sm:pl-0"
                >
                  {/* Step Dot with Spring Reveal */}
                  <motion.div
                    initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2446EC] border-4 border-white shadow-sm z-10"
                  />

                  {/* Left Box on Desktop for Even Steps */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-16 sm:text-right' : 'sm:hidden'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                        className="space-y-2"
                      >
                        <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                          PHASE {wf.step}
                        </span>
                        <h4 className="font-display text-2xl font-medium tracking-tight uppercase text-[#101010]">
                          {wf.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                          {wf.detail}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Box on Desktop for Odd Steps */}
                  <div className={`w-full sm:w-1/2 ${!isEven ? 'sm:pl-16' : 'sm:hidden'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                      className="space-y-2"
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                        PHASE {wf.step}
                      </span>
                      <h4 className="font-display text-2xl font-medium tracking-tight uppercase text-[#101010]">
                        {wf.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                        {wf.detail}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 🎬 SECTION 6: IMPACT QUOTE (SCROLL-SCALE CLIMAX)          */}
      {/* ========================================================= */}
      <section
        ref={quoteRef}
        className="w-full py-28 sm:py-36 md:py-48 px-6 md:px-12 max-w-5xl mx-auto text-center overflow-hidden"
      >
        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : quoteScale,
            opacity: shouldReduceMotion ? 1 : quoteOpacity,
          }}
          className="space-y-6 will-change-transform"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold block">
            CORE PHILOSOPHY &bull; PILLAR {service.number}
          </span>

          <blockquote className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.05em] uppercase text-[#101010] leading-[0.98]">
            &ldquo;Public participation is a constitutional right, not an administrative favor.&rdquo;
          </blockquote>

          <p className="font-sans text-xs sm:text-sm text-[#757575] font-mono uppercase tracking-widest">
            Constitution of Kenya 2010 &bull; Article 10 &bull; Article 201
          </p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS (EDITORIAL ACCORDION)          */}
      {/* ========================================================= */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="w-full py-20 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#101010]/12">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 bg-[#2446EC] inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#757575] font-semibold">
              05 // FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <div className="divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#2446EC] mt-1 flex-shrink-0" />
                  <h4 className="font-display text-lg font-medium uppercase text-[#101010] tracking-tight">
                    {faq.q}
                  </h4>
                </div>
                <div className="lg:col-span-7 font-sans text-xs sm:text-sm text-[#757575] font-light leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 🎬 SECTION 7: IMMERSIVE CTA (GRAND FINALE)                 */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#101010] text-white py-28 sm:py-36 md:py-44 px-6 md:px-12 overflow-hidden">
        {/* Subtle Pulsing Ambient Radial Gradient */}
        <motion.div
          animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2446EC]/20 rounded-full blur-[140px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold block">
            GET INVOLVED // PILLAR {service.number}
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight uppercase leading-[0.95]">
            Bring {service.title} To Your Community.
          </h2>

          <p className="font-sans text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-light">
            Whether you are a county government seeking participatory budget toolkits, an investigative reporter pitching a lead, or a youth group ready to organize a town hall, we are ready.
          </p>

          <div className="pt-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2446EC] text-white border border-[#2446EC] font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-[#101010] hover:border-white transition-all duration-300"
            >
              <span>CONNECT WITH BNS TEAM</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PREVIOUS & NEXT PROGRAMME NAVIGATION STRIP                 */}
      {/* ========================================================= */}
      <div className="w-full border-t border-[#101010]/12 bg-[#F6F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12">
          {prevService && (
            <Link
              to={`/programmes/${prevService.slug}`}
              className="py-12 pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#2446EC]" />
                <span>PREVIOUS PROGRAMME</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#101010] uppercase group-hover:text-[#2446EC] transition-colors">
                {prevService.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                PILLAR {prevService.number} &bull; {prevService.shortDescription}
              </span>
            </Link>
          )}

          {nextService && (
            <Link
              to={`/programmes/${nextService.slug}`}
              className="py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <span>NEXT PROGRAMME</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#2446EC]" />
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#101010] uppercase group-hover:text-[#2446EC] transition-colors">
                {nextService.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                PILLAR {nextService.number} &bull; {nextService.shortDescription}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
