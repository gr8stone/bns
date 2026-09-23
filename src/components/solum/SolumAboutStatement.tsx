import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TRANSITION, VIEWPORT } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";

export function SolumAboutStatement() {
  const shouldReduceMotion = useReducedMotion();

  const initial = (axis: "y") =>
    shouldReduceMotion ? { opacity: 1, [axis]: 0 } : { opacity: 0, [axis]: 16 };

  const metrics = [
    {
      number: "47",
      label: "COUNTIES COVERED",
      detail: "Grassroots barazas and youth budget tracking.",
    },
    {
      number: "150K+",
      label: "CITIZENS REACHED",
      detail: "Direct civic media engagement and radio broadcasts.",
    },
    {
      number: "100%",
      label: "OPEN PUBLIC DATA",
      detail: "National and county fiscal transparency archives.",
    },
    {
      number: "2026",
      label: "STRATEGIC REPORT",
      detail: "Budget journalism and fiscal insights.",
    },
  ];

  return (
    <section className="w-full bg-white text-text-base border-b border-black/[0.08] select-none">
      {/* Standard container — 1425px max width */}
      <div className="max-w-[1425px] mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 md:pb-20 border-b border-black/[0.08]">
          {/* Col 1: Category Tag */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-coral inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                02 // ABOUT & MISSION
              </span>
            </div>
          </div>

          {/* Cols 2–4: Massive Swiss Editorial Statement (h2 ramp: 80px, leading: 0.95, -4.8px) */}
          <div className="md:col-span-9 space-y-6">
            <motion.h2
              initial={initial("y")}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.once}
              transition={TRANSITION.reveal}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-medium tracking-[-0.05em] text-text-base leading-[0.98]"
            >
              Budget Ndio Story is an independent civic media and public finance
              storytelling platform working across 4 pilot counties.
            </motion.h2>

            <motion.p
              initial={initial("y")}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.once}
              transition={{ ...TRANSITION.reveal, delay: 0.1 }}
              className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl font-normal"
            >
              We translate national budgets, county allocations, and public debt
              into accessible stories, citizen barazas, and grassroots
              accountability tools.
            </motion.p>

            <motion.div
              initial={initial("y")}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT.once}
              transition={{ ...TRANSITION.reveal, delay: 0.15 }}
              className="pt-2"
            >
              <Link
                to={ROUTES.about}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-base pb-1 border-b border-text-base hover:text-terracotta hover:border-terracotta transition-colors group"
              >
                <span>Read our full charter</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom 4-Column Practice Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08] pt-12 md:pt-16">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`py-6 sm:py-0 ${idx === 0 ? "sm:pr-8" : idx === metrics.length - 1 ? "sm:pl-8" : "sm:px-8"}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate block mb-2">
                METRIC 0{idx + 1}
              </span>
              <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-text-base mb-2">
                {item.number}
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-medium block mb-1">
                {item.label}
              </span>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
