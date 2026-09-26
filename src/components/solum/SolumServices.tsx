import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TRANSITION, VIEWPORT } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";

interface ServicePanel {
  number: string;
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  tag: string;
}

const SERVICES: ServicePanel[] = [
  {
    number: "01",
    slug: "bns-connect",
    title: "BNS Connect",
    tag: "CIVIC PROGRAMME PARTNERSHIPS",
    description:
      "Co-designing budget literacy programmes, national youth town halls, scorecards, and statutory public hearings to bridge the gap between citizens and budget makers under the PFM Act and Constitution 2010 Articles 10 & 232.",
    bullets: [
      "Budget Town Halls at ward, sub-county & county levels",
      "Youth Budget Scorecards tracking commitments vs expenditure",
      "Community Budget Surveys generating citizen evidence",
      "Citizen Legislative Memoranda to Parliamentary Committees",
      "Free Budget Explainer Content translating official documents",
    ],
    image: "/images/bns/optimized/129A3912-hero.webp",
  },
  {
    number: "02",
    slug: "bns-mashinani",
    title: "BNS Mashinani",
    tag: "GRASSROOTS 47 COUNTIES",
    description:
      "Grassroots budget organizing, community listening sessions, and ward-level expenditure tracking across all 47 counties to demystify Annual Development Plans (ADPs) and monitor local project delivery.",
    bullets: [
      "Community Listening Sessions with consent management",
      "County-level budget tracking & citizen monitoring",
      "Ward-level project ground scorecards (dispensaries, roads, water)",
      "Vernacular budget breakdowns & localized community barazas",
      "Devolved funds oversight & social audits (ADPs, CDF, county funds)",
    ],
    image: "/images/bns/optimized/129A3964-card.webp",
  },
  {
    number: "03",
    slug: "bns-wanahabari",
    title: "Wanahabari Lab",
    tag: "TRAINING & CAPACITY BUILDING",
    description:
      "Supporting Kenyan journalists and digital storytellers with quarterly capacity building training, investigative reporting grants, and data toolkits to report accurately and effectively on public finance.",
    bullets: [
      "Quarterly capacity building training on public finance",
      "Data journalism fellowships & expert mentorship",
      "Investigative public finance reporting grants",
      "Budget analysis toolkits & Controller of Budget guides",
      "Community radio & vernacular broadcast syndication",
    ],
    image: "/images/bns/media/129A4039.jpg",
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
      className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex flex-col md:flex-row bg-[#2446EC] text-white overflow-hidden border-t border-white/20"
    >
      {/* Editorial Content Column — Left 50% on desktop */}
      <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 bg-[#2446EC] z-10 overflow-y-auto sm:overflow-visible">
        <div className="max-w-xl space-y-4 md:space-y-6 my-auto">
          {/* Number & Phase Tag */}
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span className="font-mono text-sm text-white block font-medium">
              {service.number} // {service.tag}
            </span>
            <span className="w-8 h-px bg-white/40 inline-block" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/70">
              PROGRAMME 0{index + 1}
            </span>
          </motion.div>

          {/* Title (h2 ramp: 80px, leading: 0.95, -4.8px) */}
          <motion.h3
            {...reveal(0.04)}
            className="font-display font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white tracking-[-0.05em] leading-[0.96]"
          >
            <Link
              to={ROUTES.programme(service.slug)}
              className="hover:text-white/80 transition-colors"
            >
              {service.title}
            </Link>
          </motion.h3>

          {/* Description */}
          <motion.p
            {...reveal(0.08)}
            className="font-sans text-white/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal line-clamp-3 sm:line-clamp-none"
          >
            {service.description}
          </motion.p>

          {/* 5 Bullet Items */}
          <ul className="space-y-2 pt-4 border-t border-white/20">
            {service.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2.5 font-sans text-xs sm:text-sm text-white"
              >
                <span className="w-1.5 h-1.5 bg-white inline-block flex-shrink-0" />
                <span className="leading-normal">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              to={ROUTES.programme(service.slug)}
              className="group/btn inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-4 py-2.5 bg-white text-[#2446EC] hover:bg-[#101010] hover:text-white transition-colors font-semibold"
            >
              <span>EXPLORE PROGRAMME</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Media Field — Right 50% on desktop */}
      <div className="w-full md:w-1/2 h-[36svh] sm:h-[42svh] md:h-full relative overflow-hidden bg-black flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover select-none"
        />
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
      <div className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-10 max-w-[1425px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold block">
                03 // PROGRAMMES & OPERATIONS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.05em] text-text-base leading-[0.98]">
              Good accountability starts with{" "}
              <span className="text-[#2446EC]">good questions.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-muted max-w-xl font-normal leading-relaxed">
              From grassroots community barazas to high-impact media broadcasts,
              Budget Ndio Story delivers creative civic education, public
              finance tracking, and youth-led budget storytelling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-mono text-xs text-slate uppercase tracking-widest hidden sm:inline-block">
              BUDGET NDIO STORY&reg;
            </span>
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2446EC] text-white hover:bg-[#101010] transition-colors font-mono text-xs uppercase tracking-wider rounded-none group border-0"
            >
              <span>GET INVOLVED</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2A) MOBILE HORIZONTAL SCROLL SLIDER (Enhanced Emphasis)    */}
      {/* ========================================================= */}
      <div className="block md:hidden w-full pb-12">
        <div className="px-5 sm:px-8 pb-3 flex items-center justify-between font-mono text-[11px] text-[#757575] uppercase tracking-wider">
          <span>SWIPE &rarr;</span>
          <span> FLAGSHIP PROGRAMMES</span>
        </div>

        {/* Snap Slider Track */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 sm:px-8 no-scrollbar pb-4 pt-1">
          {SERVICES.map((service, index) => (
            <div
              key={`mobile-${service.number}`}
              className="snap-center shrink-0 w-[86vw] max-w-[340px] bg-[#2446EC] text-white flex flex-col justify-between border border-white/20 select-none"
            >
              {/* Card Image Header */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black border-b border-white/20">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#101010] text-white font-mono text-[10px] uppercase tracking-widest px-2.5 py-1">
                  {service.number}
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white font-mono text-[10px] tracking-widest px-2 py-0.5">
                  0{index + 1} / 03
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 block">
                    {service.tag}
                  </span>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-white leading-tight">
                    <Link to={ROUTES.programme(service.slug)}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-xs text-white/90 leading-relaxed font-normal line-clamp-3">
                    {service.description}
                  </p>

                  {/* Top 3 Bullets for Emphasis */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/20">
                    {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 font-sans text-[11px] text-white/95"
                      >
                        <span className="w-1.5 h-1.5 bg-white inline-block mt-1 flex-shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <Link
                    to={ROUTES.programme(service.slug)}
                    className="w-full py-3 px-4 bg-white text-[#2446EC] hover:bg-[#101010] hover:text-white transition-colors font-mono text-[11px] uppercase tracking-wider flex items-center justify-between font-semibold"
                  >
                    <span>EXPLORE PROGRAMME</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress / Swipe Hint Pill */}
        <div className="px-5 sm:px-8 pt-2 flex items-center justify-center gap-2">
          {SERVICES.map((s, idx) => (
            <div
              key={s.number}
              className="h-1 rounded-none transition-all duration-300 bg-[#2446EC] w-6 opacity-75"
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2B) DESKTOP STICKY STACKING SERVICE CARDS                 */}
      {/* ========================================================= */}
      <div className="hidden md:block relative w-full overflow-visible">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>

      {/* ========================================================= */}
      {/* 3) BNS STUDIOS COMMISSIONING BRIDGE                       */}
      {/* ========================================================= */}
      <div className="w-full bg-[#2446EC] text-white py-16 md:py-20 px-5 sm:px-8 md:px-10 border-t border-white/20 relative z-20">
        <div className="max-w-[1425px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                COMMERCIAL IMPACT
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight uppercase leading-[0.98] text-white">
              LOOKING FOR COMMISSIONED PRODUCTION?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-light">
              BNS Studios translates complex research into high-impact podcasts,
              animations, and documentaries. Operating under our Two-Entity
              Model, &ge; 40% of studio profits are reinvested into BNS
              Foundation&apos;s civic mission.
            </p>
          </div>
          <Link
            to={ROUTES.studio}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2446EC] hover:bg-[#101010] hover:text-white transition-colors font-mono text-xs uppercase tracking-wider self-start md:self-auto font-semibold rounded-none border-0 shadow-sm"
          >
            <span>DISCOVER BNS STUDIOS &amp; RATE CARD</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
