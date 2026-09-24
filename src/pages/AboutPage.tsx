import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { WordReveal } from '../components/common/WordReveal';

export function AboutPage() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Clipped frame parallax within 10% range
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const leadership = [
    {
      name: 'Millicent Makina',
      role: 'Board Advisor & Governance Lead',
      bio: 'Provides independent strategic and governance counsel to the Advisory Board, strengthening organizational effectiveness, institutional policies, and fiduciary risk oversight.',
      image: '/images/avatars/team/Millicent Makina.jpeg',
    },
    {
      name: 'Movine Omondi',
      role: 'Executive Director & Founder (ELT)',
      bio: 'Leads strategy execution, institutional partnerships, and legislative advocacy. Over a decade directing youth civic organizing, public finance accountability, and national dialogues.',
      image: '/images/avatars/team/Movine Omondi_HeadShot.jpg',
    },
    {
      name: 'Peculiar Koros',
      role: 'Director ICT & Chief Technologist (ELT)',
      bio: 'Directs digital verification systems and open-data infrastructure, engineering data pipelines cross-referencing Treasury books, COB reports, and parliamentary finance acts.',
      image: '/images/avatars/team/Koros.jpeg',
    },
    {
      name: 'Shem Odhiambo Ojunga',
      role: 'Director Media & BNS Studios (ELT)',
      bio: 'Leads BNS Studios production mandates, pioneering research spotlights, animated explainers, and multi-platform social series that translate institutional research into high-impact civic media.',
      image: '/images/avatars/team/Shem Odhiambo Ojunga.jpeg',
    },
    {
      name: 'James Maingi Mutinda',
      role: 'Director Partnerships & Programmes (ELT)',
      bio: 'Drives strategic alliances with government MDAs, county assemblies, development partners, and civil society coalitions, scaling BNS civic programmes across all 47 counties.',
      image: '/images/avatars/team/James Mutinda.jpeg',
    },
    {
      name: 'Nelly Maina',
      role: 'Lead Podcast Host & Audio Producer',
      bio: 'Broadcast journalist and audio lead anchoring BNS podcasts across Spotify, Apple Podcasts, and YouTube, translating macroeconomic policy into relatable everyday civic conversation.',
      image: '/images/avatars/team/Nelly Maina.jpg',
    },
    {
      name: 'Calvina Praise',
      role: 'Lead Youth Content Strategist & Fellow',
      bio: 'Produces youth-centered visual campaigns, infographics, and explainer reels across digital channels, demystifying county budgets and public debt for youth across all 47 counties.',
      image: '/images/avatars/team/Calvina Praise.jpg',
    },
  ];

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* White Grid Hero with Oversized Studio Title Left/Center and Mission Summary in Right Column */}
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
                ORGANIZATIONAL MONOGRAPH
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]"
            >
              TURNING PUBLIC FINANCE INTO CITIZEN POWER.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1"
          >
            <span className="font-mono text-xs text-[#757575] block mb-2 font-medium">
              MISSION SUMMARY
            </span>
            <p className="font-sans text-sm text-[#757575] leading-relaxed font-light">
              We operate through two complementary entities: BNS Foundation (civic mission & budget literacy) and BNS Studios (impact content studio), channeling a minimum of 40% of studio profits back into youth civic engagement.
            </p>
          </motion.div>
        </div>

        {/* Full-Bleed Grayscale/Muted Studio Media with Restrained Parallax */}
        <div ref={mediaRef} className="py-16 md:py-24 border-b border-[#101010]/12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
            <motion.img
              style={{ y: shouldReduceMotion ? '0%' : yParallax }}
              src="/images/bns/towwnhallmay/129A3912.jpg"
              alt="Budget Ndio Story National Civic Convening"
              initial={{ scale: 1.06, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 will-change-transform"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
              <span>NAIROBI // CITIZEN BUDGET CONVENING</span>
              <span>EST. 2023</span>
            </div>
          </div>
        </div>



        {/* Studio Philosophy & Narrative with Word-by-Word Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#101010]/12 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                PHILOSOPHY
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6 max-w-3xl text-sm sm:text-base text-[#101010]/85 font-light leading-relaxed">
            <WordReveal
              text="Budgets are not boring — they are the most direct expression of government priorities. A public budget is a moral contract before it is a ledger."
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
              Since its inception, BNS has engaged 50,000+ young Kenyans across all 47 counties through surveys, town halls, digital storytelling, and community dialogues. When citizens understand where public money goes and are given platforms to respond, governance improves.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-[#757575] leading-relaxed font-light"
            >
              We sit at the intersection of public finance, civic organising, and creative media. African content studios with deep subject-matter expertise in public finance and civic accountability are rare—we bring that expertise alongside an existing youth audience and distribution infrastructure.
            </motion.p>
          </div>
        </div>

        {/* Why This Matters Right Now — 3-Card Grid */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                CONTEXT // WHY THIS MATTERS RIGHT NOW
              </span>
            </div>
            <span className="font-mono text-xs text-[#757575] uppercase hidden sm:inline">
              CIVIC URGENCY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 border border-[#101010]/12 bg-white"
            >
              <span className="font-mono text-xs text-[#757575] uppercase block mb-2 font-medium">01 // CONSTITUTIONAL RIGHT</span>
              <h3 className="font-display text-xl font-semibold uppercase text-[#101010] mb-2.5">
                Statutory Citizen Participation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                Kenya's Constitution (2010 Articles 10 &amp; 232) and the Public Finance Management Act (2015) enshrine the right of citizens to participate in budgeting. Yet participation remains limited for youth aged 18–35, who make up over a third of Kenya's population.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 border border-[#101010]/12 bg-white"
            >
              <span className="font-mono text-xs text-[#757575] uppercase block mb-2 font-medium">02 // TURNING POINT</span>
              <h3 className="font-display text-xl font-semibold uppercase text-[#101010] mb-2.5">
                The 2024 Turning Point
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                The 2024 Finance Bill protests proved young Kenyans are informed, engaged, and demanding fiscal transparency. BNS exists to channel that energy into structured, constructive civic accountability at every level of government year-round, not just at crisis points.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 border border-[#101010]/12 bg-white"
            >
              <span className="font-mono text-xs text-[#757575] uppercase block mb-2 font-medium">03 // CIVIC ROOTS &amp; REACH</span>
              <h3 className="font-display text-xl font-semibold uppercase text-[#101010] mb-2.5">
                Beyond Entertainment
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                Africa's creator economy is valued at USD 5.1 billion in 2025 and growing at 28.7% annually, but mostly in entertainment. BNS occupies a distinct position: a mission-anchored content platform with real civic roots and professional production capability.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Dual Entity Model Section */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              SUSTAINABILITY ARCHITECTURE // OUR TWO-ENTITY MODEL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[#101010]/12 bg-[#FAFAF8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#101010]/12 mb-4">
                  <h3 className="font-display text-2xl font-semibold uppercase text-[#101010]">
                    BNS Foundation
                  </h3>
                  <span className="px-2 py-0.5 bg-[#101010] text-white font-mono text-[10px] uppercase font-semibold">
                    CIVIC PILLAR
                  </span>
                </div>
                <div className="space-y-4 font-sans text-sm text-[#757575] font-light leading-relaxed">
                  <p>
                    <strong className="text-[#101010] font-medium">Civic Mission:</strong> Budget literacy, youth organising, ward scorecards, community town halls, and national surveys.
                  </p>
                  <p>
                    <strong className="text-[#101010] font-medium">Funded through:</strong> Philanthropic grants, donations, and statutory programme partnerships.
                  </p>
                  <p>
                    <strong className="text-[#101010] font-medium">Reinvestment:</strong> Direct beneficiary of surplus generated by BNS Studios to permanently sustain grassroots civic organizing.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-[#101010]/12 font-mono text-xs text-[#757575]">
                SERVING ALL 47 KENYAN COUNTIES
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border border-[#101010]/12 bg-[#FAFAF8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#101010]/12 mb-4">
                  <h3 className="font-display text-2xl font-semibold uppercase text-[#101010]">
                    BNS Studios
                  </h3>
                  <span className="px-2 py-0.5 bg-[#4E58AA] text-white font-mono text-[10px] uppercase font-semibold">
                    IMPACT STUDIO
                  </span>
                </div>
                <div className="space-y-4 font-sans text-sm text-[#757575] font-light leading-relaxed">
                  <p>
                    <strong className="text-[#101010] font-medium">Impact Content Studio:</strong> Producing research podcasts, animated explainers, documentary research spotlights, and multi-platform social series.
                  </p>
                  <p>
                    <strong className="text-[#101010] font-medium">Funded through:</strong> Commissioned content mandates from development partners, the private sector, CSOs, and government.
                  </p>
                  <p>
                    <strong className="text-[#101010] font-medium">Cross-Subsidisation:</strong> Minimum 40% of profits channelled back to BNS Foundation annually — sustaining the civic mission permanently.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-[#101010]/12 font-mono text-xs text-[#4E58AA] font-semibold">
                COMMISSIONING SUBSIDISES YOUTH CIVIC POWER
              </div>
            </motion.div>
          </div>
        </div>

        {/* Track Record Strip */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              VERIFIED TRACK RECORD &bull; OVER 3 YEARS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 border border-[#101010]/12 bg-white">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block mb-1">
                CIVIC REACH
              </span>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[#101010] tracking-tight">
                50,000+
              </div>
              <p className="font-sans text-xs text-[#757575] font-light mt-2 leading-relaxed">
                Young Kenyans engaged across all 47 counties, growing to 200,000+.
              </p>
            </div>

            <div className="p-6 border border-[#101010]/12 bg-white">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block mb-1">
                ECOSYSTEM PARTNERS
              </span>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[#101010] tracking-tight">
                Active
              </div>
              <p className="font-sans text-xs text-[#757575] font-light mt-2 leading-relaxed">
                TISA Kenya, House of Fiscal Wisdom, and Committee on Fiscal Studies.
              </p>
            </div>

            <div className="p-6 border border-[#101010]/12 bg-white">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block mb-1">
                INSTITUTIONAL PIPELINE
              </span>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[#101010] tracking-tight">
                Multi-Agency
              </div>
              <p className="font-sans text-xs text-[#757575] font-light mt-2 leading-relaxed">
                Active negotiations with major bilateral funders and international NGOs.
              </p>
            </div>

            <div className="p-6 border border-[#101010]/12 bg-white">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block mb-1">
                PERMANENT REINVESTMENT
              </span>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[#101010] tracking-tight">
                &ge; 40%
              </div>
              <p className="font-sans text-xs text-[#757575] font-light mt-2 leading-relaxed">
                Studio profits returned annually to fund grassroots civic participation.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              GOVERNANCE &bull; EXECUTIVE LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-550 ease-out hover:scale-[1.025]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#101010]">
                    {leader.name}
                  </h3>
                  <span className="font-mono text-xs sm:text-sm text-[#757575] block mt-1 mb-2 font-medium">
                    {leader.role}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chronological Archive */}
        {/* <div className="py-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
              CHRONOLOGY
            </span>
          </div>

          <div className="divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {history.map((h) => (
              <div key={h.year} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 font-display text-3xl font-semibold text-[#101010] tabular-nums">
                  {h.year}
                </div>
                <div className="md:col-span-4 font-sans text-lg font-medium uppercase tracking-tight text-[#101010]">
                  {h.title}
                </div>
                <div className="md:col-span-6 font-sans text-sm text-[#757575] font-light leading-relaxed">
                  {h.detail}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
}
