import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { ROUTES } from "../../lib/routes";
import { ProgrammeCard } from "../page/ProgrammeCard";
import { ChapterMarker, MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.services;

/** Chapter 02: the work. Three programmes, side by side. */
export function StoryProgrammes() {
  return (
    <section id="services" className="relative w-full bg-paper-warm text-text-base">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 py-24 md:py-32">
        <ChapterMarker chapter={CONTENT.chapter} label={CONTENT.eyebrow} />
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display text-[clamp(38px,6vw,88px)] font-medium tracking-[-0.05em] leading-[0.96]">
            <MaskLine>{CONTENT.headlineLead}</MaskLine>
            <MaskLine delay={0.1} className="text-accent">
              {CONTENT.headlineAccent}
            </MaskLine>
          </h2>
          <Reveal delay={0.2}>
            <Link
              to={ROUTES.programmes}
              className="group inline-flex items-center gap-2 pb-1 border-b border-text-base hover:text-accent hover:border-accent transition-colors font-mono text-xs uppercase tracking-wider"
            >
              {CONTENT.exploreLabel}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CONTENT.items.map((item, i) => (
            <ProgrammeCard
              key={item.slug}
              index={i}
              data={{ slug: item.slug, number: item.number, tag: item.tag, title: item.title, line: item.description, chips: item.bullets, image: item.image }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
