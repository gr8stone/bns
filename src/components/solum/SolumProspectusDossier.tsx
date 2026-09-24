import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Coins, Users, Scale, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { TRANSITION } from "../../lib/motion";

interface ProspectusPillar {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: typeof Coins;
}

const PILLARS: ProspectusPillar[] = [
  {
    id: "two-entity",
    number: "01",
    tag: "SUSTAINABILITY ARCHITECTURE",
    title: "Our Two-Entity Model",
    subtitle: "How BNS Studios directly cross-subsidises youth civic engagement across Kenya.",
    icon: Coins,
  },
  {
    id: "problem-we-solve",
    number: "02",
    tag: "IMPACT FOCUS",
    title: "The Problem We Solve",
    subtitle: "Bridging the persistent communication gap between fiscal policy and public understanding.",
    icon: Scale,
  },
  {
    id: "rate-card",
    number: "03",
    tag: "BNS STUDIOS RATES",
    title: "Commissioned Content Catalog",
    subtitle: "Transparent production formats, deliverables, and starting rates for partners.",
    icon: Sparkles,
  },
  {
    id: "partner-tracks",
    number: "04",
    tag: "ENGAGEMENT PATHWAYS",
    title: "Three Ways to Partner",
    subtitle: "Tailored structures for County Governments, MDAs, Donors, and Foundations.",
    icon: Users,
  },
  {
    id: "governance",
    number: "05",
    tag: "ETHICS & OVERSIGHT",
    title: "Governance & Independence",
    subtitle: "Non-partisan positioning, arm's length transactions, and independent board oversight.",
    icon: Shield,
  },
];

export function SolumProspectusDossier() {
  const [activeTab, setActiveTab] = useState<string>("two-entity");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-white text-text-base py-20 md:py-28 px-6 md:px-10 border-b border-black/[0.08] select-none">
      <div className="max-w-[1425px] mx-auto">
        {/* Section Header: Swiss 4-Column Marker */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-black/[0.08] items-end">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-coral inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                03 // PARTNERSHIP PROSPECTUS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.05em] text-text-base uppercase leading-[0.95]">
              PROSPECTUS DOSSIER.
            </h2>
          </div>

          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-xl leading-relaxed font-normal">
              <strong className="text-text-base font-semibold">Budget Ndio Story</strong> sits at the intersection of public finance, civic organising, and creative media. Explore our operational model, production rate card, and engagement pathways.
            </p>

            <a
              href="mailto:info@budgetndiostory.org?subject=Partnership%20Prospectus%20Inquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-text-base text-white hover:bg-terracotta transition-colors font-mono text-xs uppercase tracking-wider rounded-none group shrink-0"
            >
              <span>PARTNERSHIP ENQUIRIES</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Sticky Interactive Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-12 items-start">
          {/* Left Sticky Nav Rail */}
          <div className="md:col-span-4 space-y-4 md:sticky md:top-28">
            <div className="p-5 bg-paperWarm border border-black/[0.08]">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] mb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-terracotta font-semibold">
                  SELECT DOSSIER CHAPTER
                </span>
                <span className="font-mono text-[11px] text-slate">5 CHAPTERS</span>
              </div>

              <div className="space-y-1.5">
                {PILLARS.map((p) => {
                  const isActive = activeTab === p.id;
                  const Icon = p.icon;

                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveTab(p.id)}
                      className={`w-full text-left p-3.5 transition-all duration-200 border flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-text-base text-white border-text-base shadow-sm"
                          : "bg-white text-text-base border-black/[0.08] hover:border-black/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs tabular-nums font-semibold ${
                            isActive ? "text-coral" : "text-slate group-hover:text-terracotta"
                          }`}
                        >
                          {p.number}
                        </span>
                        <div>
                          <div className="font-sans text-xs sm:text-sm font-semibold tracking-tight uppercase leading-snug">
                            {p.title}
                          </div>
                          <div
                            className={`font-sans text-[11px] line-clamp-1 ${
                              isActive ? "text-white/70" : "text-text-muted"
                            }`}
                          >
                            {p.subtitle}
                          </div>
                        </div>
                      </div>
                      <Icon className={`w-4 h-4 shrink-0 ml-2 ${isActive ? "text-coral" : "text-slate"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="p-5 border border-black/[0.08] bg-white">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                INSTITUTIONAL SLOGAN
              </span>
              <p className="font-display text-lg font-medium text-text-base leading-snug">
                "Follow the Budget. Find the Story."
              </p>
              <div className="pt-3 mt-3 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Nairobi, Kenya</span>
                <a href="mailto:info@budgetndiostory.org" className="underline hover:text-text-base">
                  info@budgetndiostory.org
                </a>
              </div>
            </div>
          </div>

          {/* Right Dynamic Content Stage */}
          <div className="md:col-span-8 min-h-[520px]">
            <AnimatePresence mode="wait">
              {/* CHAPTER 1: TWO-ENTITY MODEL */}
              {activeTab === "two-entity" && (
                <motion.div
                  key="two-entity"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={TRANSITION.medium}
                  className="space-y-6"
                >
                  <div className="p-6 sm:p-8 bg-paperWarm border border-black/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                      <span className="w-1.5 h-1.5 bg-coral inline-block" />
                      CHAPTER 01 // CROSS-SUBSIDISATION MODEL
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base uppercase leading-tight mb-4">
                      Two Complementary Entities That Reinforce Each Other.
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed font-normal">
                      BNS operates through a hybrid civic-commercial architecture designed for permanent sustainability.
                    </p>
                  </div>

                  {/* Side-by-Side Dual-Entity Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* BNS Foundation */}
                    <div className="p-6 border border-black/[0.08] bg-white flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] mb-4">
                          <span className="font-display text-xl font-semibold uppercase text-text-base">
                            BNS Foundation
                          </span>
                          <span className="px-2 py-0.5 bg-terracotta/10 text-terracotta font-mono text-[10px] uppercase font-semibold">
                            CIVIC MISSION
                          </span>
                        </div>
                        <ul className="space-y-3 font-sans text-xs sm:text-sm text-text-muted">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                            <span><strong>Civic Mission</strong>: Budget literacy, youth organising, scorecards, town halls, and national surveys.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                            <span><strong>Funding</strong>: Grants, donations, and statutory programme partnerships.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                            <span><strong>Reinvestment</strong>: Receives surplus distributions from BNS Studios to fuel grassroots chapters.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 pt-4 border-t border-black/[0.08] font-mono text-[11px] text-slate">
                        NON-PROFIT &bull; 47 COUNTIES
                      </div>
                    </div>

                    {/* BNS Studios */}
                    <div className="p-6 border border-black/[0.08] bg-white flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] mb-4">
                          <span className="font-display text-xl font-semibold uppercase text-text-base">
                            BNS Studios
                          </span>
                          <span className="px-2 py-0.5 bg-coral/15 text-coral font-mono text-[10px] uppercase font-semibold">
                            IMPACT CONTENT STUDIO
                          </span>
                        </div>
                        <ul className="space-y-3 font-sans text-xs sm:text-sm text-text-muted">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                            <span><strong>Impact Content</strong>: Producing podcasts, animations, research spotlights, and multi-platform campaigns.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                            <span><strong>Commission Mandates</strong>: Funded by development partners, the private sector, CSOs, and government.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                            <span><strong>40% Cross-Subsidisation</strong>: Minimum 40% of annual profits channeled directly back to BNS Foundation.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 pt-4 border-t border-black/[0.08] font-mono text-[11px] text-slate">
                        IMPACT COMMERCIAL &bull; MISSION-ANCHORED
                      </div>
                    </div>
                  </div>

                  {/* Core Value Proposition Banner */}
                  <div className="p-6 border-l-4 border-coral bg-coral/5 text-text-base">
                    <p className="font-display text-base sm:text-lg font-medium leading-relaxed">
                      "This model means commissioning BNS Studios doesn't just get you great content, it directly cross-subsidises youth civic engagement across Kenya. A proposition no generic agency can offer."
                    </p>
                  </div>
                </motion.div>
              )}

              {/* CHAPTER 2: THE PROBLEM WE SOLVE */}
              {activeTab === "problem-we-solve" && (
                <motion.div
                  key="problem-we-solve"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={TRANSITION.medium}
                  className="space-y-6"
                >
                  <div className="p-6 sm:p-8 bg-paperWarm border border-black/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                      <span className="w-1.5 h-1.5 bg-coral inline-block" />
                      CHAPTER 02 // STAKEHOLDER VALUE PROPOSITION
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base uppercase leading-tight mb-2">
                      The Problem We Solve.
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted">
                      Tailored solutions addressing systemic accountability barriers across Kenya's governance landscape.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* For Government */}
                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        01 // FOR GOVERNMENT (MDAS & COUNTIES)
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-2">
                        Public Participation Mandates
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        Public participation is a constitutional obligation, but dense PDFs fail to reach ordinary citizens. We bridge the communication gap between fiscal policy and citizens without compromising accuracy or institutional dignity.
                      </p>
                    </div>

                    {/* For Development Partners */}
                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        02 // DEVELOPMENT PARTNERS & PRIVATE SECTOR
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-2">
                        Beyond the Impact Report
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        High-quality technical reports routinely gather digital dust. BNS Studios translates research dossiers into podcasts, animations, documentaries, and social campaigns that real audiences actually engage with.
                      </p>
                    </div>

                    {/* For CSOs */}
                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        03 // FOR CSOS & ACCOUNTABILITY GROUPS
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-2">
                        Mission-Aligned Production
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        Access high-caliber multimedia production capacity at mission-aligned rates without building an expensive in-house studio, while maintaining complete editorial independence.
                      </p>
                    </div>

                    {/* For Young Kenyans */}
                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        04 // FOR YOUNG KENYANS (18–35)
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-2">
                        Budgets Are Not Boring
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        Budgets are the direct expression of government priorities. We equip youth—who make up a third of the population—to demand transparency and participate in ward, county, and national processes year-round.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CHAPTER 3: RATE CARD */}
              {activeTab === "rate-card" && (
                <motion.div
                  key="rate-card"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={TRANSITION.medium}
                  className="space-y-6"
                >
                  <div className="p-6 sm:p-8 bg-paperWarm border border-black/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                      <span className="w-1.5 h-1.5 bg-coral inline-block" />
                      CHAPTER 03 // BNS STUDIOS PRODUCTION PRICING
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base uppercase leading-tight mb-2">
                      Commissioned Content Catalog.
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted">
                      Your research, your institution, and your work. We make it land.
                    </p>
                  </div>

                  {/* Pricing Table */}
                  <div className="border border-black/[0.08] bg-white overflow-hidden">
                    <div className="grid grid-cols-12 bg-paperWarm p-3.5 border-b border-black/[0.08] font-mono text-[11px] uppercase tracking-wider text-terracotta font-semibold">
                      <div className="col-span-4 sm:col-span-3">Format</div>
                      <div className="col-span-5 sm:col-span-6">What We Deliver</div>
                      <div className="col-span-3 sm:col-span-3 text-right">Starting Rate</div>
                    </div>

                    <div className="divide-y divide-black/[0.08] font-sans text-xs sm:text-sm">
                      <div className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 sm:col-span-3 font-semibold uppercase text-text-base">
                          Podcast & Audio
                        </div>
                        <div className="col-span-5 sm:col-span-6 text-text-muted pr-2">
                          Research-informed episodes, expert interviews, public voice (Spotify, Apple, YouTube, WhatsApp).
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-mono font-semibold text-text-base">
                          USD 3,500/ep
                        </div>
                      </div>

                      <div className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 sm:col-span-3 font-semibold uppercase text-text-base">
                          Short Animation / Explainer
                        </div>
                        <div className="col-span-5 sm:col-span-6 text-text-muted pr-2">
                          60–90 second animated explainers translating one key finding or issue for social distribution.
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-mono font-semibold text-text-base">
                          USD 2,000/video
                        </div>
                      </div>

                      <div className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 sm:col-span-3 font-semibold uppercase text-text-base">
                          Research Spotlight (Documentary)
                        </div>
                        <div className="col-span-5 sm:col-span-6 text-text-muted pr-2">
                          8–10 min institutional video profiles featuring researchers, data, and BNS narrative.
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-mono font-semibold text-text-base">
                          USD 8,000–15,000
                        </div>
                      </div>

                      <div className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 sm:col-span-3 font-semibold uppercase text-text-base">
                          Social Media Series
                        </div>
                        <div className="col-span-5 sm:col-span-6 text-text-muted pr-2">
                          Multi-platform campaigns: threads, reels, carousels, quote cards over 4–6 weeks.
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-mono font-semibold text-text-base">
                          USD 5,000–8,000
                        </div>
                      </div>

                      <div className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 sm:col-span-3 font-semibold uppercase text-text-base">
                          Town Hall Design & Facilitation
                        </div>
                        <div className="col-span-5 sm:col-span-6 text-text-muted pr-2">
                          Full-service public dialogue: design, moderation, documentation, and summary outputs.
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-mono font-semibold text-text-base">
                          USD 4,000–7,000
                        </div>
                      </div>

                      <div className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 sm:col-span-3 font-semibold uppercase text-text-base">
                          Community Listening Sessions
                        </div>
                        <div className="col-span-5 sm:col-span-6 text-text-muted pr-2">
                          Participatory sessions with consent management, documentation, and storytelling outputs.
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-mono font-semibold text-text-base">
                          USD 2,500–4,500
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Embedded Retainer Callout */}
                  <div className="p-5 border border-black/[0.08] bg-paperWarm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-1">
                        ANNUAL RETAINER & GRANT EMBEDDING
                      </span>
                      <p className="font-sans text-xs text-text-muted">
                        BNS Studios can be embedded as a <strong>'Content & Engagement Studio'</strong> budget line in your grant applications from inception.
                      </p>
                    </div>
                    <Link
                      to={ROUTES.contact}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-base hover:text-terracotta transition-colors underline shrink-0"
                    >
                      <span>Inquire Retainers</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* CHAPTER 4: PARTNERSHIP TRACKS */}
              {activeTab === "partner-tracks" && (
                <motion.div
                  key="partner-tracks"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={TRANSITION.medium}
                  className="space-y-6"
                >
                  <div className="p-6 sm:p-8 bg-paperWarm border border-black/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                      <span className="w-1.5 h-1.5 bg-coral inline-block" />
                      CHAPTER 04 // HOW TO PARTNER WITH BNS
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base uppercase leading-tight mb-2">
                      Three Concrete Partnership Tracks.
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted">
                      Tailored collaboration models designed for maximum accountability and mutual value.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Track 1 */}
                    <div className="p-6 border border-black/[0.08] bg-white flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-xs text-slate uppercase mb-1">TRACK 01</div>
                        <h4 className="font-display text-xl font-semibold uppercase text-text-base mb-3">
                          Programme Partner
                        </h4>
                        <p className="font-sans text-xs text-text-muted leading-relaxed mb-4">
                          Co-design and co-fund a civic engagement programme such as budget town halls, youth chapters, scorecards, surveys, and ward barazas.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-black/[0.08] font-mono text-[11px] text-terracotta">
                        <strong>Ideal</strong>: County Govts, MDAs, bilateral agencies, civic foundations.
                      </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-6 border border-black/[0.08] bg-white flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-xs text-slate uppercase mb-1">TRACK 02</div>
                        <h4 className="font-display text-xl font-semibold uppercase text-text-base mb-3">
                          Content Commission
                        </h4>
                        <p className="font-sans text-xs text-text-muted leading-relaxed mb-4">
                          Commission BNS Studios to produce impact content for your research dossiers, campaigns, institutional findings, or civic products.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-black/[0.08] font-mono text-[11px] text-coral">
                        <strong>Ideal</strong>: Development partners, think tanks, UN agencies, private sector.
                      </div>
                    </div>

                    {/* Track 3 */}
                    <div className="p-6 border border-black/[0.08] bg-white flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-xs text-slate uppercase mb-1">TRACK 03</div>
                        <h4 className="font-display text-xl font-semibold uppercase text-text-base mb-3">
                          Strategic Partnership
                        </h4>
                        <p className="font-sans text-xs text-text-muted leading-relaxed mb-4">
                          Become a foundational partner of BNS Foundation, supporting our long-term civic mission with flexible, multi-year core funding.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-black/[0.08] font-mono text-[11px] text-text-base">
                        <strong>Ideal</strong>: Foundations and philanthropies committed to civic infrastructure.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CHAPTER 5: GOVERNANCE & ETHICS */}
              {activeTab === "governance" && (
                <motion.div
                  key="governance"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={TRANSITION.medium}
                  className="space-y-6"
                >
                  <div className="p-6 sm:p-8 bg-paperWarm border border-black/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                      <span className="w-1.5 h-1.5 bg-coral inline-block" />
                      CHAPTER 05 // INSTITUTIONAL INTEGRITY
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-base uppercase leading-tight mb-2">
                      Transparent by Design.
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted">
                      Our governance model ensures commercial activity never compromises civic independence.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        EDITORIAL INTEGRITY
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-1.5">
                        Non-Partisan Positioning
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        Strict editorial independence. We do not endorse political parties or candidates. All civic content is evidence-based and governed by our strict Editorial Policy.
                      </p>
                    </div>

                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        FIDUCIARY SAFEGUARD
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-1.5">
                        Arm's Length Transactions
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        Any transaction between BNS Foundation and BNS Studios is conducted at arm's length, documented, and approved by an independent governance adviser.
                      </p>
                    </div>

                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        ANNUAL AUDITING
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-1.5">
                        Transparency Reporting
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        BNS Foundation publishes an Annual Impact Report. BNS Studios produces independently audited financial statements with Foundation contributions publicly declared.
                      </p>
                    </div>

                    <div className="p-5 border border-black/[0.08] bg-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate block mb-1">
                        COMMUNITY CARE
                      </span>
                      <h4 className="font-display text-lg font-semibold uppercase text-text-base mb-1.5">
                        Safeguarding & Eligibility
                      </h4>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        Full Safeguarding Policy protecting youth participants in all activities. Not every commission is accepted—all mandates are screened for mission alignment.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
