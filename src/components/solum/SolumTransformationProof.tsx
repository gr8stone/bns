import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

interface Scenario {
  id: string;
  tabLabel: string;
  beforeImage: string;
  afterImage: string;
  headline: string;
  description: string;
  projectSlug: string;
  timeline: string;
  outputFormat: string;
  commercialImpact: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'client-to-cgi',
    tabLabel: 'OPAQUE BUDGET ESTIMATES → DEMYSTIFIED CIVIC VISUALS',
    beforeImage: '/images/bns/studio productions/Before Budget.jpg',
    afterImage: '/images/bns/treasury/budget sasa ni delivery.jpg',
    headline: 'From dense parliamentary estimates to citizen-action reality.',
    description: 'Demystifying county allocations and spending targets into accessible visual breakdowns.',
    projectSlug: 'riviera-residence',
    timeline: 'REAL-TIME',
    outputFormat: 'YOUTUBE & SOCIAL SUITE',
    commercialImpact: '150,000+ CITIZENS EMPOWERED',
  },
  {
    id: 'viewport-to-film',
    tabLabel: 'PARLIAMENT HANSARD → INVESTIGATIVE REPORT',
    beforeImage: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/red Flags in Government contacts .jpeg',
    afterImage: '/images/bns/media/main media image.jpg',
    headline: 'Investigating sovereign debt & infrastructure funds.',
    description: 'Unpacking legal covenants and procurement liabilities into high-impact public journalism.',
    projectSlug: 'bunker-37',
    timeline: '4 WEEKS',
    outputFormat: '4-PART DOCUSERIES',
    commercialImpact: 'PARLIAMENTARY SCRUTINY',
  },
  {
    id: 'site-to-development',
    tabLabel: 'COMMUNITY GROUNDWORK → DEVOLVED WARD TRACKING',
    beforeImage: '/images/bns/survey/bnssurvey1.jpeg',
    afterImage: '/images/bns/cohort1 groundworks/129A3964.jpg',
    headline: 'Equipping grassroots communities to monitor county projects.',
    description: 'Connecting approved ward budgets to actual physical ground verification.',
    projectSlug: 'australia-residence',
    timeline: 'ONGOING',
    outputFormat: 'WARD SCORECARDS',
    commercialImpact: '36 WARDS MONITORED',
  },
  {
    id: 'old-to-renovated',
    tabLabel: 'CLOSED HEARINGS → PARTICIPATORY TOWN HALLS',
    beforeImage: '/images/bns/towwnhallmay/129A4056.jpg',
    afterImage: '/images/bns/hall/129A4248.jpg',
    headline: 'Bringing citizens face-to-face with budget decision makers.',
    description: 'Converting tokenistic consultations into decisive citizen accountability convenings.',
    projectSlug: 'berliner-strasse-69',
    timeline: 'BI-ANNUAL',
    outputFormat: 'LIVE BROADCAST & PETITIONS',
    commercialImpact: 'POLICY PETITIONS SUBMITTED',
  },
];

export function SolumTransformationProof() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeScenario = SCENARIOS[activeTabIdx];

  return (
    <section className="w-full bg-[#121212] text-white py-20 md:py-28 px-6 sm:px-12 md:px-16 lg:px-24 border-b border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/60 inline-block rounded-full" />
              <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                04 // PROOF &bull; CIVIC IMPACT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.04em] text-white">
              EXPLAINING OUR IMPACT.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
              Compare raw, opaque government financial estimates against Budget Ndio Story’s demystified civic media. Drag the interactive slider to inspect before and after.
            </p>
          </div>

          <div className="pb-1">
            <Link
              to={`/projects/${activeScenario.projectSlug}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:text-white/70 transition-colors group pb-0.5 border-b border-white/40 hover:border-white"
            >
              <span>View Case Study</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Clean Editorial Underline Tabs */}
        <div className="pt-8 pb-4 border-b border-white/10 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 sm:gap-8 min-w-max">
            {SCENARIOS.map((item, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`pb-3 font-mono text-xs uppercase tracking-wider transition-all duration-200 border-b-2 -mb-[18px] cursor-pointer ${
                    isActive
                      ? 'border-white text-white font-semibold'
                      : 'border-transparent text-white/40 hover:text-white/80'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scenario Context Bar */}
        <div className="pt-8 pb-5 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
              SCENARIO 0{activeTabIdx + 1}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase text-white tracking-tight">
              {activeScenario.headline}
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-white/60 font-light max-w-md">
            {activeScenario.description}
          </p>
        </div>

        {/* Comparison Viewport */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative border border-white/10 bg-black overflow-hidden shadow-2xl"
          >
            <BeforeAfterSlider
              beforeImage={activeScenario.beforeImage}
              beforeLabel="SOURCE INPUT"
              afterImage={activeScenario.afterImage}
              afterLabel="FINAL CGI"
              aspectRatio="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Technical Strip */}
        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
          <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
            <span className="text-white/40 uppercase tracking-wider">PRODUCTION TIMELINE</span>
            <span className="text-white font-semibold text-sm">{activeScenario.timeline}</span>
          </div>
          <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pl-6">
            <span className="text-white/40 uppercase tracking-wider">DELIVERABLE SPEC</span>
            <span className="text-white font-semibold text-sm">{activeScenario.outputFormat}</span>
          </div>
          <div className="flex flex-col gap-1 sm:pl-6">
            <span className="text-white/40 uppercase tracking-wider">COMMERCIAL IMPACT</span>
            <span className="text-white font-semibold text-sm">{activeScenario.commercialImpact}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
