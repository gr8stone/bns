import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TRANSITION, VIEWPORT } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";

interface ServicePanel {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  tag: string;
}

const SERVICES: ServicePanel[] = [
  {
    number: "01",
    title: "BNS Connect",
    tag: "CONVENINGS & HEARINGS",
    description:
      "Connecting citizens, grassroots advocates, and fiscal policymakers through high-impact town halls, legislative hearings, and national dialogues to ensure the national budget reflects the people's priorities.",
    bullets: [
      "Town hall convenings & national dialogues",
      "Citizen participation in legislative hearings",
      "Multi-stakeholder fiscal accountability roundtables",
      "Youth & civil society budget forums",
      "Policy advocacy briefs & stakeholder engagements",
    ],
    image: "/images/bns/optimized/129A3912-hero.webp",
  },
  {
    number: "02",
    title: "BNS Mashinani",
    tag: "GRASSROOTS LITERACY",
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
    tag: "INVESTIGATIVE DATA",
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
    tag: "CREATIVE MEDIA LAB",
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

  const reveal = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0.4, y: 10 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: VIEWPORT.onceAmount,
    transition: { ...TRANSITION.medium, delay },
  });

  return (
    <div
      style={{ zIndex: index + 1 }}
      className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex flex-col md:flex-row bg-[#0B0C0E] text-white overflow-hidden shadow-[0_-24px_48px_rgba(0,0,0,0.85)] border-t border-white/10"
    >
      {/* Editorial Content Column — Left 50% on desktop */}
      <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 md:py-16 bg-[#0B0C0E] z-10 overflow-y-auto sm:overflow-visible">
        <div className="max-w-xl space-y-4 md:space-y-6 my-auto">
          {/* Number & Phase Tag */}
          <motion.div
            {...reveal(0)}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-sm text-coral block font-medium">
              {service.number} // {service.tag}
            </span>
            <span className="w-8 h-px bg-white/20 inline-block" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-slate">
              PROGRAMME 0{index + 1}
            </span>
          </motion.div>

          {/* Title (h2 ramp: 80px, leading: 0.95, -4.8px) */}
          <motion.h3
            {...reveal(0.04)}
            className="font-display font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white tracking-[-0.05em] leading-[0.96]"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            {...reveal(0.08)}
            className="font-sans text-white/80 text-xs sm:text-sm md:text-base leading-relaxed font-normal line-clamp-3 sm:line-clamp-none"
          >
            {service.description}
          </motion.p>

          {/* 5 Bullet Items */}
          <ul className="space-y-2 pt-4 border-t border-white/10">
            {service.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white/90"
              >
                <span className="w-1.5 h-1.5 bg-coral inline-block flex-shrink-0" />
                <span className="leading-normal">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Media Field — Right 50% on desktop */}
      <div className="w-full md:w-1/2 h-[36svh] sm:h-[42svh] md:h-full relative overflow-hidden bg-black flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover filter brightness-95 select-none"
        />
        {/* Subtle fluid gradient highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export function SolumServices() {
  return (
    <section
      id="services"
      className="w-full bg-[#FAFAF8] text-text-base select-none relative z-10 isolate overflow-visible border-b border-black/[0.08]"
    >
      {/* ========================================================= */}
      {/* 1) INTRODUCTION BLOCK (Light Swiss Header)                */}
      {/* ========================================================= */}
      <div className="w-full py-16 md:py-24 px-6 md:px-10 max-w-[1425px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-coral inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block">
                03 // PROGRAMMES & OPERATIONS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium uppercase tracking-[-0.05em] text-text-base leading-[0.98]">
              WHAT WE DO.
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-muted max-w-xl font-normal leading-relaxed">
              From grassroots community barazas to high-impact media broadcasts,
              Budget Ndio Story delivers creative civic education, public finance
              tracking, and youth-led budget storytelling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-mono text-xs text-slate uppercase tracking-widest hidden sm:inline-block">
              BUDGET NDIO STORY&reg;
            </span>
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-text-base text-white hover:bg-terracotta transition-colors font-mono text-xs uppercase tracking-wider rounded-none group"
            >
              <span>GET INVOLVED</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2) STICKY STACKING SERVICE CARDS                           */}
      {/* ========================================================= */}
      <div className="relative w-full overflow-visible">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
