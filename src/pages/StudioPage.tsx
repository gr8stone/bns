import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileDown, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordReveal } from '../components/common/WordReveal';
import { STUDIO_RATE_CARD } from '../data/studio';
import { STUDIO_FAQS } from '../data/comprehensiveFaq';
import { ROUTES } from '../lib/routes';

export function StudioPage() {
  const shouldReduceMotion = useReducedMotion();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  function toggleFaq(id: string) {
    setOpenFaqId((prev) => (prev === id ? null : id));
  }

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* ========================================================= */}
        {/* 1. HERO (MATCHING STATE OF AI DESIGN & SERVICES PAGE)     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-20 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                IMPACT CONTENT STUDIO // TWO-ENTITY MODEL
              </span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.92]"
            >
              WE TRANSLATE EVIDENCE INTO CULTURE THAT COMPELS ACTION.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 space-y-4"
          >
            <div>
              <span className="font-mono text-xs text-[#757575] block mb-2 font-medium">
                COMMERCIAL MANDATE
              </span>
              <p className="font-sans text-sm text-[#757575] leading-relaxed font-light">
                Commissioned research documentaries, animated explainers,
                podcasts, and campaigns. A minimum of 40% of net profits is
                returned annually to BNS Foundation to fund open civic
                accountability.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to={ROUTES.contact}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#101010] text-white hover:bg-[#4E58AA] transition-colors font-mono text-xs uppercase tracking-wider"
              >
                <span>Commission Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/docs/BNS_Partnership_Prospectus_2026.pdf"
                download="BNS_Partnership_Prospectus_2026.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 border border-[#101010]/20 text-[#101010] hover:border-[#101010] transition-colors font-mono text-xs uppercase tracking-wider"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>PDF Prospectus</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 2. PRODUCTION MEDIA REEL & ETHOS                           */}
        {/* ========================================================= */}
        <div className="py-16 md:py-24 border-b border-[#101010]/12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="relative aspect-video w-full overflow-hidden bg-black border border-[#101010]/12">
                <video
                  controls
                  playsInline
                  poster="/images/bns/studio/studio_motion_vfx.jpg"
                  src="/images/bns/reels/animation reel opportunities . Where do I start ( nyota programmes  uwezo fund) main landing page .mp4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#757575]">
                <span>BNS Studios Motion &amp; Animation Reel</span>
                <span>4K UHD Master &bull; Rec.709 &bull; EBU R128</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                  PRODUCTION DISCIPLINE
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-[-0.04em] text-[#101010] uppercase leading-tight">
                RESEARCH SHOULD NOT DIE IN A PDF.
              </h2>

              <p className="font-sans text-sm text-[#757575] leading-relaxed font-light">
                Millions of dollars are invested into public expenditure
                reviews, audit reports, and baseline evaluations that sit unread
                on institutional portals. BNS Studios turns technical findings
                into high-retention films, audio, and visual journalism that
                citizens, newsrooms, and policymakers actively debate.
              </p>

              <div className="pt-4 border-t border-[#101010]/12 space-y-2 font-mono text-xs text-[#101010]">
                <div className="flex items-center justify-between py-1 border-b border-[#101010]/06">
                  <span>01 // RESEARCH CINEMATOGRAPHY</span>
                  <span className="text-[#4E58AA]">4K DCI</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#101010]/06">
                  <span>02 // PROCEDURAL 2D/3D EXPLAINERS</span>
                  <span className="text-[#4E58AA]">9:16 + 16:9</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#101010]/06">
                  <span>03 // BROADCAST AUDIO &amp; PODCASTS</span>
                  <span className="text-[#4E58AA]">STUDIO + FIELD</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>04 // STATUTORY TOWN HALL HEARINGS</span>
                  <span className="text-[#4E58AA]">47 COUNTIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. ETHOS WORD REVEAL                                      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#101010]/12 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                THE COMMERCIAL PRINCIPLE
              </span>
            </div>
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
        </div>

        {/* ========================================================= */}
        {/* 4. MINIMALIST BRUTALIST RATE SCHEDULE (INVOICE-STYLE)     */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#101010]/12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                  RATE SCHEDULE // PROSPECTUS 2026 TARIFFS
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-[#101010] uppercase leading-none">
                COMMERCIAL RATE CARD.
              </h2>
            </div>
            <div className="font-mono text-xs text-[#757575] space-y-1 md:text-right">
              <div>REF: BNS-STUDIO-2026-V1 &bull; CURRENCY: USD</div>
              <div>TERMS: 50% ADVANCE / 50% DELIVERY &bull; NET 30</div>
            </div>
          </div>

          {/* Table Header (Desktop) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 py-4 border-b border-[#101010]/12 font-mono text-[11px] uppercase tracking-wider text-[#757575]">
            <div className="col-span-4">FORMAT</div>
            <div className="col-span-6">SCOPE &amp; DELIVERABLES</div>
            <div className="col-span-2 text-right">STARTING RATE</div>
          </div>

          {/* Table Rows (Desktop & Mobile) */}
          <div className="divide-y divide-[#101010]/12">
            {STUDIO_RATE_CARD.map((item, idx) => (
              <div
                key={idx}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-start group hover:bg-[#FAFAF8] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6"
              >
                {/* Format */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#101010] uppercase group-hover:text-[#4E58AA] transition-colors leading-tight">
                    {item.format}
                  </h3>
                </div>

                {/* Scope */}
                <div className="lg:col-span-6 font-sans text-sm text-[#101010]/75 font-light leading-relaxed">
                  {item.scope}
                </div>

                {/* Tariff & Action */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-2 pt-1 lg:pt-0 border-t border-[#101010]/08 lg:border-0 mt-2 lg:mt-0">
                  <div className="lg:text-right">
                    <span className="font-mono text-sm font-semibold text-[#101010] tabular-nums block">
                      {item.startingRate}
                    </span>
                    <span className="font-mono text-[11px] text-[#757575] block">
                      {item.unit}
                    </span>
                  </div>
                  <Link
                    to={ROUTES.contact}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#101010] hover:text-[#4E58AA] transition-colors font-medium"
                  >
                    <span>Brief</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Ledger Disclosures */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 mt-4 border-t border-[#101010]/12 font-mono text-[11px] text-[#757575] leading-relaxed">
            <div>
              <span className="text-[#101010] uppercase block font-semibold mb-1">
                DISBURSEMENTS
              </span>
              <span>
                Tariffs exclude travel and accommodation outside Nairobi
                metropolitan area. Invoiced at verified cost.
              </span>
            </div>
            <div>
              <span className="text-[#101010] uppercase block font-semibold mb-1">
                EDITORIAL FIREWALL
              </span>
              <span>
                Commissions fund creative production and dissemination. BNS
                maintains complete independence over civic research.
              </span>
            </div>
            <div>
              <span className="text-[#101010] uppercase block font-semibold mb-1">
                MULTI-EPISODE RETAINERS
              </span>
              <span>
                Series commitments, multi-year projects, and embedded grant
                budget lines receive customized tariff schedules.
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. STUDIO FAQ (FOCUSED COMMISSIONING ACCORDION)            */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#101010]/12 items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                  STUDIO COMMISSIONING BRIEF // FAQ
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#101010] uppercase leading-none">
                FREQUENTLY ASKED QUESTIONS.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to={ROUTES.faq}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#101010] hover:text-[#4E58AA] transition-colors font-medium"
              >
                <span>Complete Knowledge Base &rarr;</span>
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
                    className="w-full text-left py-7 grid grid-cols-[1fr_auto] md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#FAFAF8] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6"
                  >
                    <div className="md:col-span-11 flex gap-4 md:gap-8 items-start">
                      <span className="font-mono text-xs text-[#757575] pt-0.5 shrink-0 w-6">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block">
                          {faq.categoryLabel}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-medium tracking-tight text-[#101010] leading-snug group-hover:text-[#4E58AA] transition-colors">
                          {faq.question}
                        </h3>
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
                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                                  className="inline-flex items-center gap-1 text-[#101010] hover:text-[#4E58AA] uppercase tracking-wider transition-colors font-medium"
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

        {/* ========================================================= */}
        {/* 6. CLOSING ACTION DOCKET (MATCHING SERVICES & ABOUT)       */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#101010]/12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101010] leading-tight uppercase">
              READY TO MAKE YOUR EVIDENCE LAND?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#757575] font-light max-w-xl leading-relaxed">
              Reach out to our production team in Nairobi to discuss project
              scoping, review retainer agreements, or submit a commission brief.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={ROUTES.contact}
              className="solum-btn px-7 py-3.5 bg-[#101010] text-white border border-[#101010] font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-[#101010] transition-colors"
            >
              Write to Production Desk &rarr;
            </Link>
            <Link
              to={ROUTES.faq}
              className="px-6 py-3.5 border border-[#101010]/20 text-[#101010] font-mono text-xs uppercase tracking-wider hover:border-[#101010] transition-colors"
            >
              Help &amp; FAQ &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
