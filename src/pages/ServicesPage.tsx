import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WordReveal } from '../components/common/WordReveal';
import { SERVICES } from '../data/services';

export function ServicesPage() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Clipped frame parallax within 10% range matching AboutPage
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const stats = [
    { value: '47', label: 'COUNTIES REACHED', note: 'Active grassroots and ward-level budget tracking' },
    { value: '04', label: 'STRATEGIC PROGRAMMES', note: 'Connect, Mashinani, Wanahabari, Studio' },
    { value: '150K+', label: 'CITIZENS ENGAGED', note: 'Through town halls, barazas, and digital explainers' },
    { value: '100%', label: 'OPEN CIVIC DATA', note: 'Independent statutory research and free public tools' },
  ];

  const methodologyCycle = [
    {
      step: '01',
      programme: 'BNS MASHINANI',
      role: 'Grassroots Listening & Ward Audits',
      detail: 'Community monitors identify local public project delays, dispensary stock shortages, and devolved fund allocations in wards across Kenya.',
    },
    {
      step: '02',
      programme: 'BNS WANAHABARI',
      role: 'Data Verification & Investigative Grants',
      detail: 'Journalists cross-reference community ground data with official Auditor-General reports, Controller of Budget papers, and procurement ledgers.',
    },
    {
      step: '03',
      programme: 'BNS STUDIO',
      role: 'Multimedia Production & Viral Storytelling',
      detail: 'Our creative lab transforms verified fiscal numbers into snappy vertical reels, YouTube docuseries, podcasts, and shareable infographics.',
    },
    {
      step: '04',
      programme: 'BNS CONNECT',
      role: 'Town Halls & Legislative Policy Submissions',
      detail: 'We bring citizens and lawmakers face-to-face in high-impact public hearings, submitting formal citizen memoranda to parliamentary committees.',
    },
  ];

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* ========================================================= */}
        {/* 1) WHITE GRID HERO WITH OVERSIZED TITLE (MATCHING ABOUT)  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-20 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                CIVIC ACTION FRAMEWORK // 4 STRATEGIC PROGRAMMES
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]"
            >
              OUR FOUR PROGRAMMES.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1"
          >
            <span className="font-mono text-xs text-[#757575] block mb-2 font-medium">
              SCOPE OF ACTION
            </span>
            <p className="font-sans text-sm text-[#757575] leading-relaxed font-light">
              From grassroots community barazas and investigative journalism to live national town halls and viral docuseries, our four programmes make public money understandable and actionable.
            </p>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 2) FULL-BLEED MEDIA WITH RESTRAINED PARALLAX              */}
        {/* ========================================================= */}
        <div ref={mediaRef} className="py-16 md:py-24 border-b border-[#101010]/12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
            <motion.img
              style={{ y: shouldReduceMotion ? '0%' : yParallax }}
              src="/images/bns/towwnhallmay/129A4056.jpg"
              alt="Budget Ndio Story Civic Programmes in Action"
              initial={{ scale: 1.06, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 will-change-transform"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
              <span>NAIROBI &amp; 47 COUNTIES // CITIZEN PARTICIPATION &amp; OPEN FINANCE</span>
              <span>4 ACTIVE PROGRAMMES</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3) METRICS ROW WITH TABULAR FIGURES                       */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12 py-16 border-b border-[#101010]/12"
        >
          {stats.map((st) => (
            <div key={st.label} className="p-6 md:p-8">
              <div className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.06em] text-[#101010] tabular-nums mb-2">
                {st.value}
              </div>
              <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] mb-1 font-medium">
                {st.label}
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#757575] font-light">
                {st.note}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ========================================================= */}
        {/* 4) PROGRAMME ETHOS & WORD REVEAL (MATCHING ABOUT)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#101010]/12 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                PROGRAMME ETHOS
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6 max-w-3xl text-sm sm:text-base text-[#101010]/85 font-light leading-relaxed">
            <WordReveal
              text="Public participation must never be an afterthought. We build platforms that take citizens from passive observers to active monitors of public money."
              as="p"
              className="font-display text-2xl sm:text-3xl font-normal tracking-[-0.03em] leading-snug text-[#101010]"
              staggerMs={30}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-[#757575] leading-relaxed font-light"
            >
              Too often, public finance reports are buried in technical jargon, locking ordinary Kenyans out of critical spending decisions. Our four programmes function as a cohesive civic machinery: BNS Connect opens legislative doors, BNS Mashinani mobilizes grassroots communities, BNS Wanahabari equips data journalists, and BNS Studio transforms numbers into captivating digital stories.
            </motion.p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5) THE 4 PROGRAMMES CARDS (EXACT EDITORIAL STYLE)        */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                CORE PILLARS &bull; 4 INITIATIVES
              </span>
            </div>
            <span className="font-mono text-xs text-[#757575] uppercase hidden sm:inline">
              SELECT A PROGRAMME TO EXPLORE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((prog) => (
              <div
                key={prog.slug}
                className="group border border-[#101010]/12 bg-white flex flex-col justify-between hover:border-[#101010] transition-colors duration-300"
              >
                {/* Card Image Frame */}
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border-b border-[#101010]/12">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#101010] text-white font-mono text-xs font-semibold">
                      PILLAR {prog.number}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#101010]">
                        {prog.title}
                      </h3>
                      <Link
                        to={`/programmes/${prog.slug}`}
                        className="text-xs font-mono uppercase tracking-wider text-[#101010] inline-flex items-center gap-1 group-hover:underline"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <p className="font-mono text-xs uppercase tracking-wider text-[#757575]">
                      {prog.shortDescription}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                      {prog.heroSubhead}
                    </p>

                    {/* Deliverables Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {prog.deliverables.slice(0, 3).map((item) => (
                        <span
                          key={item.name}
                          className="px-2.5 py-1 bg-[#F6F6F2] border border-[#101010]/10 font-mono text-[10px] text-[#101010] uppercase tracking-wider"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to={`/programmes/${prog.slug}`}
                    className="w-full py-3.5 px-4 border border-[#101010] text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-200 text-xs font-mono uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>EXPLORE {prog.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6) PROGRAMME METHODOLOGY WORKFLOW (CHRONOLOGY STYLE)     */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              HOW OUR FOUR PROGRAMMES CONVERGE &bull; 4-STAGE PIPELINE
            </span>
          </div>

          <div className="divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {methodologyCycle.map((item) => (
              <div key={item.step} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 font-display text-3xl font-semibold text-[#101010] tabular-nums">
                  {item.step}
                </div>
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-[#757575] uppercase block mb-1">
                    {item.programme}
                  </span>
                  <div className="font-sans text-base sm:text-lg font-medium uppercase tracking-tight text-[#101010]">
                    {item.role}
                  </div>
                </div>
                <div className="md:col-span-6 font-sans text-xs sm:text-sm text-[#757575] font-light leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 7) CLOSING INITIATIVE CALLOUT (MATCHING ABOUT)            */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#101010]/12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101010] leading-tight">
              BRING OUR PROGRAMMES TO YOUR COMMUNITY.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#757575] font-light max-w-xl leading-relaxed">
              Whether you want to host a county town hall, request ward budget literacy training, or pitch an investigative story, connect with our team.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="solum-btn px-7 py-3.5 bg-[#101010] text-white border border-[#101010] font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-[#101010] transition-colors"
            >
              Get Involved &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
