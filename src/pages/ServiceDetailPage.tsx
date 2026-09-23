import { useMemo, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { ROUTES } from '../lib/routes';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

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

  // Find related civic productions
  const relatedProjects = useMemo(() => {
    if (!service) return [];
    const titleLower = service.title.toLowerCase();
    return PROJECTS.filter((p) => {
      const matchServices = p.services?.some((s) =>
        s.toLowerCase().includes(titleLower) || titleLower.includes(s.toLowerCase())
      );
      const matchCategory =
        p.category.toLowerCase().includes(titleLower) ||
        titleLower.includes(p.category.toLowerCase());
      return matchServices || matchCategory;
    }).slice(0, 3);
  }, [service]);

  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  if (!service) {
    return <Navigate to={ROUTES.programmes} replace />;
  }

  return (
    <main className="w-full bg-white text-text-base pt-28 md:pt-36 select-none">
      <div className="max-w-[1425px] mx-auto px-6 md:px-10">
        {/* ========================================================= */}
        {/* 1. BREADCRUMB & PROGRAMME RAIL IDENTIFIER                 */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between pb-8 border-b border-black/[0.08] font-mono text-xs uppercase tracking-wider">
          <Link
            to={ROUTES.programmes}
            className="flex items-center gap-2 text-text-muted hover:text-text-base transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>ALL PROGRAMMES ({SERVICES.length})</span>
          </Link>
          <div className="flex items-center gap-2 text-text-base font-semibold">
            <span className="w-2 h-2 bg-coral inline-block" />
            <span className="text-terracotta">
              PILLAR {service.number} // {service.title}
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. EDITORIAL HERO: SWISS TYPOGRAPHY RAMP                   */}
        {/* ========================================================= */}
        <div className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-b border-black/[0.08]">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-slate font-medium">
              <span className="w-1.5 h-1.5 bg-coral inline-block" />
              <span>CIVIC OPERATIONAL DOSSIER &bull; PROGRAMME 0{currentIndex + 1}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-text-base uppercase leading-[0.94]">
              {service.title}.
            </h1>
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-normal tracking-[-0.03em] text-text-base leading-tight max-w-3xl pt-2">
              {service.heroHeadline}
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="font-mono text-xs text-slate block mb-2 font-medium uppercase tracking-wider">
                CORE MANDATE
              </span>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                {service.heroSubhead}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to={ROUTES.contact}
                className="inline-flex items-center gap-2 px-5 py-3 bg-text-base text-white hover:bg-terracotta transition-colors font-mono text-xs uppercase tracking-wider rounded-none group"
              >
                <span>GET INVOLVED</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="#deliverables"
                className="inline-flex items-center gap-2 px-4 py-3 border border-black/20 text-text-base hover:border-black transition-colors font-mono text-xs uppercase tracking-wider rounded-none"
              >
                <span>DELIVERABLES &darr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. VITAL IMPACT METRICS BARAZA GRID                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 md:py-12 border-b border-black/[0.08]">
          <div className="space-y-1">
            <span className="font-mono text-[10px] sm:text-xs text-slate uppercase tracking-wider block font-medium">
              COUNTY PRESENCE
            </span>
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base">
              47 / 47
            </span>
            <span className="font-sans text-xs text-text-muted block">
              County coverage & assemblies monitored
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] sm:text-xs text-slate uppercase tracking-wider block font-medium">
              COMMUNITY ADVOCATES
            </span>
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base">
              150,000+
            </span>
            <span className="font-sans text-xs text-text-muted block">
              Youth & citizens equipped in storytelling
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] sm:text-xs text-slate uppercase tracking-wider block font-medium">
              STATUTORY BRIEFS
            </span>
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base">
              12 Filed
            </span>
            <span className="font-sans text-xs text-text-muted block">
              Formal petitions delivered to Parliament
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] sm:text-xs text-slate uppercase tracking-wider block font-medium">
              ACCESSIBILITY FORMATS
            </span>
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base">
              Multi-Lingual
            </span>
            <span className="font-sans text-xs text-text-muted block">
              Vernacular barazas & motion explainers
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. FULL-BLEED IMMERSIVE MEDIA FIELD                       */}
      {/* ========================================================= */}
      <div
        ref={mediaRef}
        className="relative w-full h-[45vh] sm:h-[60vh] lg:h-[72vh] overflow-hidden bg-black my-14 md:my-20 border-t border-b border-black/[0.08]"
      >
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : yParallax }}
          className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
        >
          <img
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full object-cover filter brightness-95 select-none"
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />
        </motion.div>

        {/* Media Overlay Badges */}
        <div className="absolute top-4 left-6 md:left-10 z-10 pointer-events-none">
          <span className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white border border-white/15">
            PILLAR {service.number} // FIELD CONVENING ARCHIVE
          </span>
        </div>

        <div className="absolute bottom-4 left-6 md:left-10 z-10 pointer-events-none">
          <span className="font-mono text-sm text-white/95 uppercase tracking-wider block font-semibold">
            {service.title} &bull; BUDGET NDIO STORY
          </span>
          <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest block">
            DEMOCRATIZING PUBLIC FINANCE ACROSS KENYA
          </span>
        </div>
      </div>

      <div className="max-w-[1425px] mx-auto px-6 md:px-10">
        {/* ========================================================= */}
        {/* 5. CIVIC CHALLENGE VS THE BNS APPROACH                     */}
        {/* ========================================================= */}
        <div className="py-16 md:py-24 border-b border-black/[0.08]">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-coral inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
              DIAGNOSTIC FRAMEWORK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 border border-black/[0.08] bg-[#FAFAF8] relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate block font-medium">
                  01 // THE SYSTEMIC CHALLENGE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium uppercase text-text-base tracking-tight leading-snug">
                  Why Conventional Public Hearings Fail Citizens
                </h3>
                <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                  {service.problem}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-slate">
                <span>SYSTEMIC LOCKOUT</span>
                <span className="text-terracotta">&#9670; Barrier Identified</span>
              </div>
            </div>

            {/* The BNS Approach */}
            <div className="p-8 sm:p-10 border border-coral/30 bg-white relative overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(78,88,170,0.06)]">
              {/* Corner Color Accent Stripe */}
              <div className="absolute top-0 right-0 w-28 h-1 bg-gradient-to-r from-coral to-terracotta" />

              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-coral block font-semibold">
                  02 // THE BNS INTERVENTION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium uppercase text-text-base tracking-tight leading-snug">
                  Grassroots Rigor Meets Dynamic Media Action
                </h3>
                <p className="font-sans text-xs sm:text-sm text-text-base/85 leading-relaxed font-normal">
                  {service.solution}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-coral font-medium">
                <span>ACTION ARCHITECTURE</span>
                <span>&#10003; Direct Accountability</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. CORE DELIVERABLES & OUTPUT MATRIX                      */}
        {/* ========================================================= */}
        <div id="deliverables" className="py-16 md:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-coral inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                  PROGRAMME DELIVERABLES ({service.deliverables.length})
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase tracking-[-0.05em] text-text-base leading-none">
                WHAT THIS DESK DELIVERS.
              </h2>
            </div>
            <span className="font-mono text-xs text-slate uppercase tracking-widest hidden md:inline-block">
              MEASURABLE CIVIC ASSETS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="md:col-span-6 lg:col-span-4 p-7 border border-black/[0.08] bg-white flex flex-col justify-between hover:border-coral transition-colors duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-coral font-semibold">
                      OUTPUT 0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 bg-coral/40 group-hover:bg-coral transition-colors" />
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-medium uppercase text-text-base tracking-tight mb-3 group-hover:text-coral transition-colors">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-black/[0.08] flex items-center justify-between font-mono text-[11px] text-slate">
                  <span>STANDARD SPECIFICATION</span>
                  <span className="text-coral group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 7. OPERATIONAL WORKFLOW PIPELINE                          */}
        {/* ========================================================= */}
        <div className="py-16 md:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-coral inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                  OPERATIONAL METHODOLOGY
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase tracking-[-0.05em] text-text-base leading-none">
                HOW WE EXECUTE.
              </h2>
            </div>
            <span className="font-mono text-xs text-slate uppercase tracking-widest hidden md:inline-block">
              4-PHASE CYCLE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-7 border border-black/[0.08] bg-[#FAFAF8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm text-coral font-semibold">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] text-slate uppercase tracking-widest">
                      STAGE 0{sIdx + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-medium uppercase text-text-base tracking-tight mb-2.5">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-text-muted leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.08]">
                  <span className="font-mono text-[10px] text-slate uppercase tracking-wider block">
                    PHASE {sIdx + 1} PROTOCOL
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 8. FEATURED PRODUCTIONS PRODUCED UNDER THIS PROGRAMME     */}
        {/* ========================================================= */}
        {relatedProjects.length > 0 && (
          <div className="py-16 md:py-24 border-b border-black/[0.08]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-coral inline-block" />
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                    FIELD PRODUCTIONS UNDER THIS DESK
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase tracking-[-0.05em] text-text-base leading-none">
                  SELECTED CASE WORK.
                </h2>
              </div>
              <Link
                to={ROUTES.projects}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-base hover:text-coral transition-colors"
              >
                <span>VIEW ARCHIVE ({PROJECTS.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p, pIdx) => (
                <Link
                  key={p.slug}
                  to={ROUTES.project(p.slug)}
                  className="group block select-none"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border border-black/[0.08] rounded-none">
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-300" />
                  </div>

                  <div className="pt-4 space-y-1.5 border-b border-black/[0.08] pb-4">
                    <div className="flex items-center justify-between font-mono text-xs text-slate">
                      <span className="text-coral font-medium">0{pIdx + 1}</span>
                      <span className="tabular-nums">{p.year}</span>
                    </div>
                    <h4 className="font-display text-lg font-medium uppercase text-text-base group-hover:text-terracotta transition-colors leading-tight">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs text-text-muted line-clamp-2 leading-relaxed font-normal">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 9. FREQUENTLY ASKED QUESTIONS                              */}
        {/* ========================================================= */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="py-16 md:py-24 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-2 h-2 bg-coral inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                FREQUENT INQUIRIES & PROTOCOLS
              </span>
            </div>

            <div className="divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-coral mt-1 flex-shrink-0" />
                    <h4 className="font-display text-lg sm:text-xl font-medium uppercase text-text-base tracking-tight leading-snug">
                      {faq.q}
                    </h4>
                  </div>
                  <div className="lg:col-span-7 font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 10. ACTION CTA                                             */}
        {/* ========================================================= */}
        <div className="py-16 md:py-24 text-center">
          <div className="p-10 md:p-16 border border-black/[0.08] bg-[#FAFAF8] max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta block font-semibold">
              PARTNER WITH // {service.title}
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-medium uppercase text-text-base tracking-tight leading-none">
              BRING THIS TO YOUR COUNTY.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-text-muted font-normal max-w-lg mx-auto leading-relaxed pt-2">
              Want to co-convene a community town hall, commission an investigative public finance data brief, or host a grassroots budget baraza?
            </p>
            <div className="pt-6">
              <Link
                to={ROUTES.contact}
                className="px-8 py-4 bg-text-base text-white hover:bg-terracotta transition-colors font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2.5 rounded-none group cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 11. PREVIOUS & NEXT PROGRAMME NAVIGATION STRIP            */}
      {/* ========================================================= */}
      <div className="w-full border-t border-black/[0.08] bg-[#FAFAF8]">
        <div className="max-w-[1425px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
          {prevService && (
            <Link
              to={ROUTES.programme(prevService.slug)}
              className="py-12 pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-slate mb-4">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-coral" />
                <span>PREVIOUS PROGRAMME</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-text-base uppercase group-hover:text-terracotta transition-colors">
                {prevService.title}
              </h4>
              <span className="font-mono text-xs text-text-muted mt-2">
                PILLAR {prevService.number} &bull; {prevService.shortDescription}
              </span>
            </Link>
          )}

          {nextService && (
            <Link
              to={ROUTES.programme(nextService.slug)}
              className="py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-xs uppercase text-slate mb-4">
                <span>NEXT PROGRAMME</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-coral" />
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-text-base uppercase group-hover:text-terracotta transition-colors">
                {nextService.title}
              </h4>
              <span className="font-mono text-xs text-text-muted mt-2">
                PILLAR {nextService.number} &bull; {nextService.shortDescription}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
