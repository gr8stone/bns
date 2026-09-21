import { useMemo, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { SERVICES } from '../data/services';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const service = useMemo(() => {
    return SERVICES.find((s) => s.slug === slug);
  }, [slug]);

  const currentIndex = useMemo(() => {
    return SERVICES.findIndex((s) => s.slug === slug);
  }, [slug]);

  const prevService = useMemo(() => {
    if (currentIndex <= 0) return SERVICES[SERVICES.length - 1];
    return SERVICES[currentIndex - 1];
  }, [currentIndex]);

  const nextService = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= SERVICES.length - 1) return SERVICES[0];
    return SERVICES[currentIndex + 1];
  }, [currentIndex]);

  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* ========================================================= */}
        {/* BREADCRUMB & BACK LINK                                    */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between pb-8 border-b border-[#101010]/12 font-mono text-xs text-[#757575] uppercase tracking-wider">
          <Link
            to="/services"
            className="flex items-center gap-2 hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO ALL PROGRAMMES</span>
          </Link>
          <div className="flex items-center gap-2 text-[#101010]">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span>PILLAR {service.number} // {service.title}</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HERO SECTION (MATCHING ABOUT)                             */}
        {/* ========================================================= */}
        <div className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-8 items-end border-b border-[#101010]/12">
          <div className="col-span-1 md:col-span-3 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#757575]">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span>CIVIC PROGRAMME DOSSIER</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              {service.title}
            </h1>
            <p className="font-display text-xl sm:text-2xl font-normal tracking-[-0.03em] text-[#101010] pt-2">
              {service.heroHeadline}
            </p>
          </div>

          <div className="col-span-1">
            <span className="font-mono text-xs text-[#757575] block mb-2 font-medium uppercase">
              PROGRAMME MANDATE
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
              {service.heroSubhead}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FULL-BLEED MEDIA WITH PARALLAX                            */}
      {/* ========================================================= */}
      <div
        ref={mediaRef}
        className="relative w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden bg-zinc-900 my-16 border-t border-b border-[#101010]/12"
      >
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : yParallax }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img
            src={service.image}
            alt={service.title}
            loading="eager"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
          />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </motion.div>
        <div className="absolute bottom-4 left-6 md:left-10 text-white font-mono text-xs uppercase tracking-wider">
          PILLAR {service.number} FIELD ARCHIVE &bull; {service.title}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* ========================================================= */}
        {/* CHALLENGE VS APPROACH (RULED GRID MATCHING ABOUT)         */}
        {/* ========================================================= */}
        <div className="py-16 md:py-24 border-b border-[#101010]/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="p-8 border border-[#101010]/12 bg-[#FBFBFA] space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block">
                01 // THE CIVIC CHALLENGE
              </span>
              <h3 className="font-display text-2xl font-semibold uppercase text-[#101010]">
                Why Traditional Systems Fail
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                {service.problem}
              </p>
            </div>

            <div className="p-8 border border-[#101010]/12 bg-white space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold block">
                02 // THE BNS APPROACH
              </span>
              <h3 className="font-display text-2xl font-semibold uppercase text-[#101010]">
                Data Rigor Meets Mass Action
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                {service.solution}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* OUTPUT MATRIX & DELIVERABLES                              */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              KEY DELIVERABLES &bull; OUTPUT MATRIX
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.05em] text-[#101010] uppercase mb-12">
            What This Programme Delivers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.deliverables.map((item, idx) => (
              <div
                key={item.name}
                className="p-6 sm:p-8 border border-[#101010]/12 bg-white flex flex-col justify-between hover:border-[#101010] transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-[#757575] block mb-3">
                    OUTPUT 0{idx + 1}
                  </span>
                  <h4 className="font-display text-lg font-semibold uppercase tracking-tight text-[#101010] mb-2">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#101010]/10 flex items-center gap-2 text-xs font-mono font-medium text-[#101010] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#101010]" />
                  <span>Civic Impact Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* IMPLEMENTATION WORKFLOW                                    */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              METHODOLOGY &bull; IMPLEMENTATION PIPELINE
            </span>
          </div>

          <div className="divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {service.workflow.map((wf) => (
              <div key={wf.step} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 font-display text-3xl font-semibold text-[#101010] tabular-nums">
                  {wf.step}
                </div>
                <div className="md:col-span-4 font-sans text-base sm:text-lg font-medium uppercase tracking-tight text-[#101010]">
                  {wf.title}
                </div>
                <div className="md:col-span-6 font-sans text-xs sm:text-sm text-[#757575] font-light leading-relaxed">
                  {wf.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS                                 */}
        {/* ========================================================= */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="py-20 border-b border-[#101010]/12">
            <div className="flex items-center gap-2 mb-12">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                CLARITY &bull; FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <div className="divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5 flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#757575] mt-1 flex-shrink-0" />
                    <h4 className="font-display text-lg font-semibold uppercase text-[#101010] tracking-tight">
                      {faq.q}
                    </h4>
                  </div>
                  <div className="lg:col-span-7 font-sans text-xs sm:text-sm text-[#757575] font-light leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ACTION CTA                                                 */}
        {/* ========================================================= */}
        <div className="py-20 text-center">
          <div className="p-10 md:p-14 border border-[#101010]/12 bg-[#F9F9F8] max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block">
              GET INVOLVED // PILLAR {service.number}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold uppercase text-[#101010]">
              Engage with {service.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#757575] font-light max-w-md mx-auto leading-relaxed">
              Ready to bring this programme to your county, pitch an investigative investigation, or co-convene a town hall?
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="solum-btn px-8 py-3.5 bg-[#101010] text-white border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#101010] transition-colors inline-flex items-center gap-2"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PREVIOUS & NEXT PROGRAMME NAVIGATION STRIP                 */}
      {/* ========================================================= */}
      <div className="w-full border-t border-[#101010]/12 bg-[#F6F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12">
          {prevService && (
            <Link
              to={`/services/${prevService.slug}`}
              className="py-12 pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS PROGRAMME</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {prevService.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                PILLAR {prevService.number} &bull; {prevService.shortDescription}
              </span>
            </Link>
          )}

          {nextService && (
            <Link
              to={`/services/${nextService.slug}`}
              className="py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <span>NEXT PROGRAMME</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
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
