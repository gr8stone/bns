import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { WordReveal } from "../components/common/WordReveal";
import { SERVICES } from "../data/services";

export function ServicesPage() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Clipped frame parallax within 10% range matching AboutPage
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10">
        {/* ========================================================= */}
        {/* 1) WHITE GRID HERO WITH OVERSIZED TITLE (MATCHING ABOUT)  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-20 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]"
            >
              Our three <span className="text-[#2446EC]">programmes.</span>
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
              From grassroots community barazas and investigative journalism to
              live national town halls and civic budget monitoring, our three programmes
              make public money understandable and actionable.
            </p>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 2) FULL-BLEED MEDIA WITH RESTRAINED PARALLAX              */}
        {/* ========================================================= */}
        <div
          ref={mediaRef}
          className="py-16 md:py-24 border-b border-[#101010]/12"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12">
            <motion.img
              style={{ y: shouldReduceMotion ? "0%" : yParallax }}
              src="/images/bns/towwnhallmay/129A4056.jpg"
              alt="Budget Ndio Story Civic Programmes in Action"
              initial={{ scale: 1.06, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 will-change-transform"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-white/80 uppercase">
              <span>
                NAIROBI &amp; 47 COUNTIES // CITIZEN PARTICIPATION &amp; OPEN
                FINANCE
              </span>
              <span>3 ACTIVE CIVIC PROGRAMMES</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3) PROGRAMME ETHOS & WORD REVEAL                          */}
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
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-sm sm:text-base text-[#757575] leading-relaxed font-light"
            >
              Too often, public finance reports are buried in technical jargon,
              locking ordinary Kenyans out of critical spending decisions. Under
              BNS Foundation, our three flagship programmes function as cohesive
              civic machinery: BNS Connect opens legislative doors, BNS Mashinani
              mobilizes grassroots communities, and Wanahabari Lab equips data
              journalists. Commercial impact productions are delivered by our
              sister entity, BNS Studios.
            </motion.p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4) THE 3 PROGRAMMES (MINIMALIST EDITORIAL LIST)           */}
        {/* ========================================================= */}
        <div className="py-20 border-b border-[#101010]/12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                3 STRATEGIC INITIATIVES
              </span>
            </div>
          </div>

          {/* Minimalist Editorial List Layout */}
          <div className="divide-y divide-[#101010]/15 border-t border-b border-[#101010]/15">
            {SERVICES.map((prog) => (
              <div
                key={prog.slug}
                className="group py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-[#FAFAF8] transition-colors -mx-5 sm:-mx-8 md:-mx-10 px-5 sm:px-8 md:px-10"
              >
                {/* Column 1: Just Number (No PILLAR text) */}
                <div className="lg:col-span-2 space-y-1">
                  <span className="font-mono text-2xl lg:text-3xl font-light text-[#2446EC] block">
                    {prog.number}
                  </span>
                  <span className="font-mono text-[11px] text-[#757575] block uppercase tracking-wider">
                    {prog.slug.replace('-', ' ')}
                  </span>
                </div>

                {/* Column 2: Minimalist Title, Headline, and Clean Link */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight uppercase text-[#101010] group-hover:text-[#2446EC] transition-colors leading-[0.98]">
                    <Link to={`/programmes/${prog.slug}`}>
                      {prog.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#101010]/80 font-normal leading-relaxed max-w-xl">
                    {prog.shortDescription}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/programmes/${prog.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#101010] group-hover:text-[#2446EC] font-semibold border-b border-current pb-0.5 transition-colors"
                    >
                      <span>Explore {prog.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 3: High-Res Visual Frame (No card borders) */}
                <div className="lg:col-span-4">
                  <Link to={`/programmes/${prog.slug}`} className="block overflow-hidden bg-black aspect-[16/10] relative group/img">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-95 group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#2446EC]/0 group-hover/img:bg-[#2446EC]/15 transition-colors duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6) PROGRAMME METHODOLOGY WORKFLOW (CHRONOLOGY STYLE)     */}
        {/* ========================================================= */}


        {/* ========================================================= */}
        {/* 7) CLOSING INITIATIVE CALLOUT (MATCHING ABOUT)            */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#101010]/12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101010] leading-tight">
              BRING OUR PROGRAMMES TO YOUR COMMUNITY.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#757575] font-light max-w-xl leading-relaxed">
              Whether you want to host a county town hall, request ward budget
              literacy training, or pitch an investigative story, connect with
              our team.
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
