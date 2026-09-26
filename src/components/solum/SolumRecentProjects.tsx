import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { ArchvizProjectShowcase } from '../common/ArchvizProjectShowcase';
import { TRANSITION, VIEWPORT } from '../../lib/motion';
import { ROUTES } from '../../lib/routes';

export function SolumRecentProjects() {
  const pLead     = PROJECTS[0];
  const pSupport1 = PROJECTS[1];
  const pSupport2 = PROJECTS[2];
  const pBroad    = PROJECTS[3];

  const cardReveal = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT.once,
    transition: { ...TRANSITION.slow, delay },
  });

  return (
    <section className="relative z-20 w-full bg-white text-text-base py-16 md:py-24 px-5 sm:px-8 md:px-10 border-b border-black/[0.08] select-none">
      <div className="max-w-[1425px] mx-auto">
        {/* Section Header: Swiss 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-black/[0.08]">
          {/* Column 1: Editorial Rail Marker */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-coral inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                04 // CIVIC PRODUCTIONS
              </span>
            </div>
          </div>

          {/* Columns 2–4: Large Heading + All Projects Link */}
          <div className="md:col-span-9 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[32px] font-medium tracking-[-0.05em] text-text-base uppercase leading-[0.98]">
              SELECTED PRODUCTIONS.
            </h2>
            <Link
              to={ROUTES.projects}
              className="inline-flex items-center gap-2.5 px-5 py-3 border border-black/20 text-xs font-mono uppercase tracking-wider text-text-base hover:bg-text-base hover:text-white hover:border-text-base transition-colors rounded-none group self-start sm:self-auto"
            >
              <span>ALL PRODUCTIONS ({PROJECTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Lead Project Showcase */}
        <div className="w-full pt-8">
          <ArchvizProjectShowcase project={pLead} index={0} />
        </div>

        {/* Asymmetric Supporting Exhibition Rows */}
        <div className="space-y-16 md:space-y-24 pt-16">
          {/* Row 2: Offset Supporting Items (2 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Supporting Card 1: Cols 1–6 */}
            <motion.div {...cardReveal(0.1)} className="md:col-span-6">
              <Link to={ROUTES.project(pSupport1.slug)} className="group block select-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-black/[0.08] rounded-none">
                  <img
                    src={pSupport1.heroImage}
                    alt={pSupport1.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[550ms] ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-300" />
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-text-base border-b border-black/[0.08] pb-3">
                  <span className="font-semibold uppercase tracking-wider group-hover:text-terracotta transition-colors">
                    {pSupport1.title}
                  </span>
                  <span className="text-xs font-mono text-slate tabular-nums font-normal">
                    {pSupport1.category} &bull; {pSupport1.year}
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Supporting Card 2: Cols 7–12 (vertical offset) */}
            <motion.div {...cardReveal(0.2)} className="md:col-span-6 md:pt-16">
              <Link to={ROUTES.project(pSupport2.slug)} className="group block select-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-black/[0.08] rounded-none">
                  <img
                    src={pSupport2.heroImage}
                    alt={pSupport2.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[550ms] ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-300" />
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-text-base border-b border-black/[0.08] pb-3">
                  <span className="font-semibold uppercase tracking-wider group-hover:text-terracotta transition-colors">
                    {pSupport2.title}
                  </span>
                  <span className="text-xs font-mono text-slate tabular-nums font-normal">
                    {pSupport2.category} &bull; {pSupport2.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Row 3: Broad Panoramic Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3 hidden md:block pt-4">
              <span className="font-mono text-xs uppercase text-slate font-medium block mb-2">
                EXHIBITION 04
              </span>
              <span className="font-sans text-xs text-text-muted leading-relaxed block font-normal">
                National sovereign debt conferences, open fiscal audits, and contract transparency broadcasts.
              </span>
            </div>

            <motion.div {...cardReveal(0.15)} className="md:col-span-9">
              <Link to={ROUTES.project(pBroad.slug)} className="group block select-none">
                <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-zinc-100 border border-black/[0.08] rounded-none">
                  <img
                    src={pBroad.heroImage}
                    alt={pBroad.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[550ms] ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-300" />
                </div>
                <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-text-base border-b border-black/[0.08] pb-3">
                  <span className="font-semibold uppercase tracking-wider group-hover:text-terracotta transition-colors">
                    {pBroad.title}
                  </span>
                  <span className="text-xs font-mono text-slate tabular-nums font-normal">
                    {pBroad.category} &bull; {pBroad.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
