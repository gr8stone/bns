import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePanel {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const SERVICES: ServicePanel[] = [
  {
    number: "01",
    title: "BNS Connect",
    description:
      "Connecting citizens, grassroots advocates, and fiscal policymakers through high-impact town halls, legislative hearings, and national dialogues to ensure the national budget reflects the people's priorities.",
    bullets: [
      "Town hall convenings & national dialogues",
      "Citizen participation in legislative hearings",
      "Multi-stakeholder fiscal accountability roundtables",
      "Youth & civil society budget forums",
      "Policy advocacy briefs & stakeholder engagements",
    ],
    image: "/images/bns/towwnhallmay/129A3912.jpg",
  },
  {
    number: "02",
    title: "BNS Mashinani",
    description:
      "Taking budget literacy directly to the grassroots, informal settlements, and county communities to demystify public expenditure, track local project deliveries, and mobilize citizen monitoring.",
    bullets: [
      "Grassroots civic education & budget literacy",
      "County-level budget tracking & citizen monitoring",
      "Community listening tours & ward surveys",
      "Vernacular budget breakdowns & localized barazas",
      "Devolved funds oversight & social audits",
    ],
    image: "/images/bns/optimized/129A3964-card.webp",
  },
  {
    number: "03",
    title: "BNS Wanahabari",
    description:
      "Empowering journalists, media practitioners, and community storytellers with data tools, investigative fellowships, and reporting grants to uncover fiscal irregularities and report on public funds.",
    bullets: [
      "Data journalism fellowships & mentorship",
      "Investigative public finance reporting grants",
      "Budget analysis workshops & data toolkits",
      "Community radio syndication & newsroom partnerships",
      "Fiscal transparency & procurement investigations",
    ],
    image: "/images/bns/media/129A4039.jpg",
  },
  {
    number: "04",
    title: "BNS Studio",
    description:
      "Our dedicated multimedia creative lab producing viral video explainers, podcasts, animated reels, and dynamic infographics that translate complex macroeconomic and budget data into accessible stories.",
    bullets: [
      "Viral short-form explainer reels & social campaigns",
      "Civic podcasts & expert dialogue broadcasts",
      "Interactive infographics & fiscal data visualization",
      "National Budget Day live analysis & coverage",
      "Creative digital storytelling & youth media outreach",
    ],
    image: "/images/bns/studio/studio_cinema_cam.jpg",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: ServicePanel;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{ zIndex: index + 1 }}
      className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex flex-col md:flex-row bg-[#121212] overflow-hidden shadow-[0_-24px_48px_rgba(0,0,0,0.95)]"
    >
      {/* Editorial Content Column (Top flex-1 on mobile, Left 50% on desktop) */}
      <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-24 py-4 sm:py-8 md:py-16 bg-[#121212] z-10 overflow-y-auto sm:overflow-visible">
        <div className="max-w-xl space-y-3 sm:space-y-4 md:space-y-6 my-auto">
          {/* Number & Phase Tag */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="font-sans text-lg sm:text-xl md:text-2xl text-white/40 block font-normal">
              {service.number}
            </span>
            <span className="w-6 sm:w-8 h-px bg-white/20 inline-block" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/50">
              Phase 0{index + 1}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.08]"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0.4, y: 10 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-sans text-white/75 text-xs sm:text-sm md:text-base leading-relaxed font-light line-clamp-3 sm:line-clamp-none"
          >
            {service.description}
          </motion.p>

          {/* 5 Bullet Items */}
          <ul className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-white/10">
            {service.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2.5 font-sans text-[11px] sm:text-xs md:text-sm text-white/85"
              >
                <span className="w-1.5 h-1.5 bg-white/40 inline-block flex-shrink-0" />
                <span className="leading-tight sm:leading-normal">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Media Field (Bottom on mobile, Right 50% on desktop) */}
      <div className="w-full md:w-1/2 h-[36svh] sm:h-[42svh] md:h-full relative overflow-hidden bg-black flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover filter brightness-95 select-none"
        />
      </div>
    </div>
  );
}

export function SolumServices() {
  return (
    <section
      id="services"
      className="w-full bg-[#121212] text-white select-none relative overflow-visible"
    >
      {/* ========================================================= */}
      {/* 1) NORMAL NON-STICKY INTRODUCTION BLOCK                   */}
      {/* ========================================================= */}
      <div className="w-full py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#121212]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/60 inline-block rounded-full" />
              <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                02 // PROGRAMMES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.04em] text-white">
              WHAT WE DO.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
              From grassroots community barazas to high-impact media broadcasts,
              Budget Ndio Story delivers creative civic education, public
              finance tracking, and youth-led budget storytelling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest hidden sm:inline-block">
              BUDGET NDIO STORY&reg;
            </span>
            <Link
              to="/contact"
              className="solum-btn inline-flex items-center gap-3 px-6 py-3.5 border border-white text-white font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              <span>GET INVOLVED</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2) VERTICAL SERVICES LIST (Sticky Stacking in Flow)        */}
      {/* ========================================================= */}
      <div className="relative w-full overflow-visible">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
