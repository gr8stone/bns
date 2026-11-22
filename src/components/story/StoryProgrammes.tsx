import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_CONTENT } from "../../data/content/home";
import { ROUTES } from "../../lib/routes";
import { ChapterMarker, MaskLine, Reveal } from "./primitives";

const CONTENT = HOME_CONTENT.services;
type Programme = (typeof CONTENT.items)[number];

/**
 * One compact card per programme. Copy is capped in the layout (2-line
 * description, 3 chips) so a long CMS entry can't bloat the card.
 */
function ProgrammeCard({ item, index }: { item: Programme; index: number }) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <Link
        to={ROUTES.programme(item.slug)}
        className="group h-full flex flex-col bg-white border border-black/[0.08] hover:border-accent hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(36,70,236,0.35)] transition-[border-color,transform,box-shadow] duration-300"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white font-mono text-[10px] uppercase tracking-[0.14em] tabular-nums">
            {item.number} • {item.tag}
          </span>
        </div>
        <div className="flex-1 flex flex-col p-6 sm:p-7">
          <h3 className="flex items-start justify-between gap-3 font-display text-2xl sm:text-3xl font-medium tracking-[-0.04em] leading-tight group-hover:text-accent transition-colors duration-200">
            {item.title}
            <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-3 font-sans text-base text-text-muted leading-snug line-clamp-2">{item.description}</p>
          <ul className="mt-auto pt-6 flex flex-wrap gap-1.5">
            {item.bullets.slice(0, 3).map((b) => (
              <li key={b} className="max-w-full truncate px-2.5 py-1 bg-paper-warm font-sans text-xs sm:text-[13px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </Reveal>
  );
}

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
            <ProgrammeCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
