import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import { Reveal } from "../story/primitives";

export interface ProgrammeCardData {
  slug: string;
  number: string;
  tag: string;
  title: string;
  line: string;
  chips: string[];
  image: string;
}

/**
 * The one programme card used on Home and /programmes. Copy is capped in the
 * layout (2-line description, 3 chips) so long CMS text can't bloat it.
 */
export function ProgrammeCard({ data, index = 0 }: { data: ProgrammeCardData; index?: number }) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <Link
        to={ROUTES.programme(data.slug)}
        data-key="programme-card"
        className="group h-full flex flex-col bg-white border border-black/[0.08] hover:border-accent hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(36,70,236,0.35)] transition-[border-color,transform,box-shadow] duration-300"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={data.image}
            alt={data.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white font-mono text-[10px] uppercase tracking-[0.14em] tabular-nums">
            {data.number} • {data.tag}
          </span>
        </div>
        <div className="flex-1 flex flex-col p-6 sm:p-7">
          <h3 className="flex items-start justify-between gap-3 font-display text-2xl sm:text-3xl font-medium tracking-[-0.04em] leading-tight group-hover:text-accent transition-colors duration-200">
            {data.title}
            <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-3 font-sans text-base text-text-muted leading-snug line-clamp-2">{data.line}</p>
          <ul className="mt-auto pt-6 flex flex-wrap gap-1.5">
            {data.chips.slice(0, 3).map((c) => (
              <li key={c} className="max-w-full truncate px-2.5 py-1 bg-paper-warm font-sans text-xs sm:text-[13px]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </Reveal>
  );
}
