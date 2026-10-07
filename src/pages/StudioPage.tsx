import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { STUDIO_FAQS } from "../data/comprehensiveFaq";
import { STUDIO_PAGE_CONTENT } from "../data/content/studioPage";
import { STUDIO_RATE_CARD } from "../data/studio";
import { ROUTES } from "../lib/routes";

export function StudioPage() {
  const { breadcrumb, hero, metrics, panorama, reel, rateSchedule, faq: faqSection, closing } =
    STUDIO_PAGE_CONTENT;
  const shouldReduceMotion = useReducedMotion();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [activeRateIndex, setActiveRateIndex] = useState<number>(0);

  function toggleFaq(id: string) {
    setOpenFaqId((prev) => (prev === id ? null : id));
  }

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10">
        {/* ========================================================= */}
        {/* TOP HEADER / BREADCRUMB (MATCHING 3 PROGRAMMES STYLE)     */}
        {/* ========================================================= */}
        <div className="pb-8 border-b border-[#101010]/12 flex items-center justify-between font-mono text-xs text-[#757575] uppercase tracking-wider">
          <Link
            to={ROUTES.programmes}
            className="inline-flex items-center gap-2 hover:text-[#2446EC] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{breadcrumb.backLabel}</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2446EC] inline-block" />
            <span className="text-[#2446EC] font-semibold">{breadcrumb.sectionLabel}</span>
            <span>{breadcrumb.separator}</span>
            <span className="text-[#101010] font-semibold">
              {breadcrumb.pageLabel}
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 🎬 SCENE 01: THE PRODUCTION MANDATE (STARTING FROM 01)     */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="space-y-16">
            {/* Act Label */}

            {/* Massive Typographic Thesis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] uppercase text-[#101010] leading-[0.94]">
                  {hero.titleLead}{" "}
                  <span className="text-[#2446EC]">{hero.titleHighlight}</span>
                </h1>
              </div>

              <div className="lg:col-span-5 space-y-6 pt-2">
                <p className="font-sans text-lg sm:text-xl text-[#101010] font-normal leading-relaxed">
                  {hero.lead}
                </p>
                <p className="font-sans text-sm sm:text-base text-[#757575] font-light leading-relaxed">
                  {hero.body}
                </p>
                <div className="pt-2">
                  <Link
                    to={ROUTES.contact}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2446EC] text-white hover:bg-[#101010] transition-colors font-mono text-xs uppercase tracking-wider font-semibold rounded-none shadow-sm"
                  >
                    <span>{hero.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Telemetry Strip: Zero Cards, Pure Typographic Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#101010]/15">
              <div>
                <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                  {metrics[0].label}
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-[#2446EC]">
                  {metrics[0].value}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                  {metrics[1].label}
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-[#101010]">
                  {metrics[1].value}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                  {metrics[2].label}
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-[#101010]">
                  {metrics[2].value}
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#757575] uppercase tracking-wider block mb-1">
                  {metrics[3].label}
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-[#101010]">
                  {metrics[3].value}
                </span>
              </div>
            </div>

            {/* Full-Bleed Panoramic Visual (Zero card border) */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-black select-none">
              <img
                src={panorama.imageSrc}
                alt={panorama.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
                <span>{panorama.captionLeft}</span>
                <span>{panorama.captionRight}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 🎬 SCENE 02: PRODUCTION REEL & DISCIPLINE                 */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-36 md:py-44 border-t border-[#101010]/12">
          <div className="space-y-12">
            {/* Header Typography */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-[#2446EC] inline-block" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
                    {reel.eyebrow}
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-[#101010] leading-[0.94]">
                  {reel.title}
                </h2>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#757575] font-light max-w-md leading-relaxed">
                {reel.body}
              </p>
            </div>

            {/* Cinema Frame (Zero Cards) */}
            <div className="relative aspect-video w-full overflow-hidden bg-black border border-[#101010]/12 shadow-2xl">
              <video
                controls
                playsInline
                poster={reel.videoPoster}
                src={reel.videoSrc}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#757575]">
              <span>{reel.captionLeft}</span>
              <span>{reel.captionRight}</span>
            </div>

            {/* Production Discipline Telemetry Strip */}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 🎬 SCENE 03: COMMISSION TARIFFS & RATE SCHEDULE           */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-[#101010]/12">
          {/* Act Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 bg-[#2446EC] inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
              {rateSchedule.eyebrow}
            </span>
          </div>

          {/* SINGLE-VIEWPORT COCKPIT RATE CARD (ZERO-SCROLL VIEW) */}
          <div className="border border-black/10 bg-[#2446EC] text-white p-6 sm:p-8 md:p-12 min-h-[92svh] md:h-[90svh] flex flex-col justify-between shadow-2xl">
            {/* 1. Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 md:pb-6 border-b border-white/20">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-white inline-block animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white font-medium">
                    {rateSchedule.headerTag}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.05em] text-white uppercase leading-none">
                  {rateSchedule.title}
                </h2>
              </div>
              <div className="font-mono text-[11px] text-white/70 space-y-1 sm:text-right">
                <div>{rateSchedule.reference}</div>
                <div className="flex items-center sm:justify-end gap-3 pt-0.5">
                  <Link
                    to={ROUTES.ratecard}
                    className="underline underline-offset-4 text-white hover:opacity-80"
                  >
                    {rateSchedule.dedicatedLinkLabel}
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Mobile Clean Minimalist View (Direct Integrated Ledger) */}
            <div className="flex lg:hidden flex-col text-white my-auto divide-y divide-white/20">
              {/* Mobile Header Info */}
              <div className="pb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white font-semibold">
                  {rateSchedule.mobileHeaderLabel}
                </span>
                <span className="font-mono text-[10px] text-white/70 uppercase">
                  {rateSchedule.mobileFormatsLabel}
                </span>
              </div>

              {/* 6 Minimalist Compact Rows (Receipt Style) */}
              <div className="py-2 divide-y divide-white/10">
                {STUDIO_RATE_CARD.map((item, idx) => (
                  <div
                    key={item.code}
                    className="py-3 flex items-baseline justify-between gap-3"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[10px] text-white/60">
                        0{idx + 1}
                      </span>
                      <span className="font-display font-medium text-sm text-white uppercase tracking-tight">
                        {item.format}
                      </span>
                    </div>
                    <div className="text-right font-mono shrink-0">
                      <span className="text-sm font-bold text-white tabular-nums">
                        {item.startingRate}
                      </span>
                      <span className="text-[10px] text-white/70 ml-1">
                        {item.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Bottom Action */}
              <div className="pt-3.5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/70 uppercase tracking-tight">
                  {rateSchedule.mobileEndowmentLabel}
                </span>
                <Link
                  to={ROUTES.contact}
                  className="group/btn inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-4 py-2 bg-white text-[#2446EC] hover:bg-[#101010] hover:text-white transition-colors font-semibold"
                >
                  <span>{rateSchedule.mobileCtaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* 3. Desktop Cockpit Master-Detail Body (lg screens only) */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 my-auto py-4 items-stretch">
              {/* Left Master List (Desktop: all 6 items in tight single-line ledger) */}
              <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-white/15 pr-2">
                {STUDIO_RATE_CARD.map((item, idx) => {
                  const isActive = activeRateIndex === idx;
                  return (
                    <button
                      key={item.code}
                      onClick={() => setActiveRateIndex(idx)}
                      onMouseEnter={() => setActiveRateIndex(idx)}
                      className={`w-full text-left py-3 px-3.5 transition-all flex items-center justify-between group rounded-none cursor-pointer ${
                        isActive
                          ? "bg-white text-[#2446EC] font-semibold translate-x-1"
                          : "hover:bg-white/10 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs ${isActive ? "text-[#2446EC]" : "text-white/70"}`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="font-display text-base uppercase tracking-tight">
                          {item.format}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-xs">
                        <span
                          className={
                            isActive ? "text-[#2446EC]" : "text-white/80"
                          }
                        >
                          {item.startingRate}
                        </span>
                        <ArrowUpRight
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isActive
                              ? "rotate-0 text-[#2446EC]"
                              : "-rotate-45 text-white/40 group-hover:rotate-0 group-hover:text-white"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Inspector Card (Desktop detail pane) */}
              <div className="lg:col-span-7 bg-white text-[#101010] p-8 lg:p-10 flex flex-col justify-between border border-black/10 shadow-xl">
                <div>
                  {/* Meta Top Line */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#101010]/10">
                    <span className="font-mono text-xs font-semibold text-[#2446EC] tracking-wider uppercase">
                      {STUDIO_RATE_CARD[activeRateIndex].code} {rateSchedule.inspectorScopeLabel}
                    </span>
                    <span className="font-mono text-xs text-[#757575] uppercase">
                      {rateSchedule.inspectorItemPrefix}{activeRateIndex + 1} {rateSchedule.inspectorItemSuffix}
                    </span>
                  </div>

                  {/* Format Headline */}
                  <h3 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#101010] uppercase mt-4 mb-3 leading-tight">
                    {STUDIO_RATE_CARD[activeRateIndex].format}
                  </h3>

                  {/* Scope Description */}
                  <p className="font-sans text-xs sm:text-sm lg:text-base text-[#101010]/80 font-normal leading-relaxed">
                    {STUDIO_RATE_CARD[activeRateIndex].scope}
                  </p>
                </div>

                {/* Bottom Tariff & Action Bar */}
                <div className="pt-6 mt-6 border-t border-[#101010]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#757575] uppercase tracking-wider block">
                      {rateSchedule.investmentLabel}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xl sm:text-3xl font-bold text-[#101010] tabular-nums">
                        {STUDIO_RATE_CARD[activeRateIndex].startingRate}
                      </span>
                      <span className="font-mono text-xs text-[#757575]">
                        {STUDIO_RATE_CARD[activeRateIndex].unit}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={ROUTES.contact}
                      className="group/btn inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-3 bg-[#2446EC] text-white hover:bg-[#101010] transition-colors font-semibold shadow-sm"
                    >
                      <span>{rateSchedule.ctaLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Compact 3-Column Disclosures Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 pt-4 border-t border-white/20 font-mono text-[10px] md:text-[11px] text-white/70 leading-normal">
              {rateSchedule.disclosures.map((disclosure) => (
                <div key={disclosure.label}>
                  <span className="text-white uppercase font-semibold">
                    {disclosure.label}
                  </span>{" "}
                  {disclosure.body}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 🎬 SCENE 04: PRODUCTION ETHOS & COMMONLY ASKED QUESTIONS   */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-[#101010]/12">
          {/* Act Label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2.5 h-2.5 bg-[#2446EC] inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#2446EC] font-semibold">
              {faqSection.eyebrow}
            </span>
          </div>

          {/* Ethos Word Reveal Statement */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-start">
            <div className="col-span-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold block">
                THE COMMERCIAL PRINCIPLE
              </span>
            </div>

            <div className="col-span-1 md:col-span-3 space-y-6 max-w-3xl">
              <WordReveal
                text="You fund the rigorous research. We build the public culture that makes it impossible to ignore."
                as="p"
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[-0.03em] leading-snug text-[#101010]"
                staggerMs={28}
              />
              <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed font-light">
                Every commission carries a double impact: your evidence reaches
                real audiences, and a minimum of 40% of the studio&apos;s net
                profit flows directly to BNS Foundation to fund grassroots civic
                budget monitoring across all 47 counties.
              </p>
            </div>
          </div> */}

          {/* Studio Commissioning FAQ Accordion */}
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#101010]/12 items-end">
              <div className="md:col-span-8">
                <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-2">
                  {faqSection.kicker}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#101010] uppercase leading-none">
                  {faqSection.title}
                </h3>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to={ROUTES.faq}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#2446EC] hover:underline font-semibold"
                >
                  <span>{faqSection.allLinkLabel}</span>
                </Link>
              </div>
            </div>

            <div className="divide-y divide-[#101010]/12">
              {STUDIO_FAQS.slice(0, 5).map((faq, idx) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left py-7 grid grid-cols-[1fr_auto] md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#FAFAF8] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 cursor-pointer"
                    >
                      <div className="md:col-span-11 flex gap-4 md:gap-8 items-start">
                        <span className="font-mono text-xs text-[#757575] pt-0.5 shrink-0 w-6">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block">
                            {faq.categoryLabel}
                          </span>
                          <h4 className="font-display text-lg sm:text-xl font-medium tracking-tight text-[#101010] leading-snug group-hover:text-[#2446EC] transition-colors">
                            {faq.question}
                          </h4>
                        </div>
                      </div>
                      <div className="md:col-span-1 flex items-start pt-1 justify-end shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#757575]" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#757575]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={
                            shouldReduceMotion
                              ? false
                              : { height: 0, opacity: 0 }
                          }
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-10 md:pl-[calc(2rem+1.5rem)] pr-4 sm:pr-6 space-y-3">
                            <p className="font-sans text-sm text-[#101010]/80 font-light leading-relaxed max-w-3xl">
                              {faq.answer}
                            </p>
                            {faq.relatedLinks && (
                              <div className="flex items-center gap-4 font-mono text-xs">
                                {faq.relatedLinks.map((link) => (
                                  <Link
                                    key={link.url}
                                    to={link.url}
                                    className="inline-flex items-center gap-1 text-[#2446EC] hover:underline uppercase tracking-wider font-semibold"
                                  >
                                    <span>{link.label}</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CLOSING ACTION DOCKET                                     */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#101010]/12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101010] leading-tight uppercase">
              {closing.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#757575] font-light max-w-xl leading-relaxed">
              {closing.body}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={ROUTES.contact}
              className="px-7 py-3.5 bg-[#2446EC] text-white border border-[#2446EC] font-mono text-xs uppercase tracking-wider hover:bg-[#101010] hover:border-[#101010] transition-colors rounded-none font-semibold shadow-sm"
            >
              {closing.primaryCtaLabel}
            </Link>
            <Link
              to={ROUTES.faq}
              className="px-6 py-3.5 border border-[#101010]/20 text-[#101010] font-mono text-xs uppercase tracking-wider hover:border-[#2446EC] hover:text-[#2446EC] transition-colors rounded-none font-medium"
            >
              {closing.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
