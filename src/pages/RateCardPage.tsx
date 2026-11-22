import { ArrowUpRight, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { FactGrid, Lede, MonoLabel, PageHero } from "../components/page/kit";
import { RATE_CARD_CONTENT } from "../data/content/rateCard";
import { STUDIO_RATE_CARD } from "../data/studio";
import { CONTAINER } from "../lib/layout";
import { ROUTES } from "../lib/routes";

const { page, table, disclosures } = RATE_CARD_CONTENT;

export function RateCardPage() {
  return (
    <main className="w-full bg-white text-text-base pb-20 md:pb-28">
      <PageHero
        back={{ to: ROUTES.studio, label: page.backLabel }}
        eyebrow={page.eyebrow}
        lead={page.title}
        aside={
          <div className="space-y-5">
            <Lede>{page.intro}</Lede>
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden inline-flex items-center gap-2 px-5 py-3 border border-black/20 hover:border-text-base transition-colors font-mono text-xs uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5" />
              {page.printLabel}
            </button>
          </div>
        }
      >
        <div className="mt-14 md:mt-16">
          <FactGrid facts={page.facts} />
        </div>
      </PageHero>

      <div className={CONTAINER}>
        <div className="hidden md:grid grid-cols-12 gap-6 pb-3 border-b border-text-base">
          <div className="col-span-3"><MonoLabel>{table.formatHeader}</MonoLabel></div>
          <div className="col-span-6"><MonoLabel>{table.scopeHeader}</MonoLabel></div>
          <div className="col-span-3 text-right"><MonoLabel>{table.rateHeader}</MonoLabel></div>
        </div>
        <ol>
          {STUDIO_RATE_CARD.map((item, i) => (
              <li key={item.code} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-7 border-b border-black/[0.08] break-inside-avoid">
                <div className="md:col-span-3 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-tight">{item.format}</h2>
                </div>
                <p className="md:col-span-6 font-sans text-sm text-text-muted leading-relaxed pl-8 md:pl-0">{item.scope}</p>
                <div className="md:col-span-3 md:text-right pl-8 md:pl-0 flex md:flex-col items-baseline md:items-end justify-between gap-2">
                  <div>
                    <span className="font-display text-xl font-medium tabular-nums">{item.startingRate}</span>
                    <span className="ml-1.5 font-mono text-[11px] text-text-muted">{item.unit}</span>
                  </div>
                  <Link
                    to={ROUTES.contact}
                    className="print:hidden group inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
                  >
                    {table.briefLabel}
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </li>
          ))}
        </ol>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {disclosures.map((d) => (
            <div key={d.label}>
              <MonoLabel accent>{d.label}</MonoLabel>
              <p className="mt-2 font-sans text-sm text-text-muted leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
