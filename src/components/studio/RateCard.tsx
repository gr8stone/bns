import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RATE_CARD_CONTENT } from '../../data/content/rateCard';
import { STUDIO_RATE_CARD } from '../../data/studio';
import { ROUTES } from '../../lib/routes';

interface RateCardProps {
  showDisclosures?: boolean;
}

export function RateCard({ showDisclosures = true }: RateCardProps) {
  const { table, disclosures } = RATE_CARD_CONTENT;

  return (
    <div className="w-full text-white">
      {/* ── Desktop View (Tabular Brutalist Ledger) ── */}
      <div className="hidden md:block">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-6 py-3 border-b border-white/20 font-mono text-[11px] uppercase tracking-wider text-white/70">
          <div className="col-span-1">{table.codeHeader}</div>
          <div className="col-span-3">{table.formatHeader}</div>
          <div className="col-span-5">{table.scopeHeader}</div>
          <div className="col-span-2 text-right">{table.rateHeader}</div>
          <div className="col-span-1 text-right">{table.actionHeader}</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-white/15">
          {STUDIO_RATE_CARD.map((item, idx) => (
            <div
              key={item.code}
              className="py-5 grid grid-cols-12 gap-6 items-baseline transition-colors hover:bg-white/5 -mx-4 px-4"
            >
              <div className="col-span-1 font-mono text-xs text-white/60">
                0{idx + 1}
              </div>
              <div className="col-span-3">
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-white leading-tight">
                  {item.format}
                </h3>
              </div>
              <div className="col-span-5 font-sans text-xs lg:text-sm text-white/85 font-light leading-relaxed">
                {item.scope}
              </div>
              <div className="col-span-2 text-right">
                <div className="font-mono text-base lg:text-lg font-bold text-white tabular-nums">
                  {item.startingRate}
                </div>
                <div className="font-mono text-[11px] text-white/70">
                  {item.unit}
                </div>
              </div>
              <div className="col-span-1 text-right">
                <Link
                  to={ROUTES.contact}
                  className="group/btn inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-white text-[#2446EC] hover:bg-[#101010] hover:text-white transition-colors font-semibold"
                >
                  <span>{table.briefLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile View: Clean Receipt-Style Ledger ── */}
      <div className="block md:hidden">
        {/* Receipt Header Strip */}
        <div className="py-2.5 px-3 border-y border-white/20 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/70">
          <span>{table.mobileFormatHeader}</span>
          <span>{table.mobileRateHeader}</span>
        </div>

        {/* Receipt Line Items */}
        <div className="divide-y divide-white/15">
          {STUDIO_RATE_CARD.map((item, idx) => (
            <div key={item.code} className="py-4 space-y-2">
              {/* Top Row: Format name Left, Cost Perfectly Aligned Right */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] text-white/60">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold uppercase tracking-tight text-white leading-tight">
                    {item.format}
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono text-sm font-bold text-white tabular-nums block">
                    {item.startingRate}
                  </span>
                  <span className="font-mono text-[10px] text-white/70 block -mt-0.5">
                    {item.unit}
                  </span>
                </div>
              </div>

              {/* Middle Row: Scope Description */}
              <p className="font-sans text-xs text-white/80 font-light leading-relaxed pl-5">
                {item.scope}
              </p>

              {/* Bottom Row: Brief Action Right-Aligned */}
              <div className="flex items-center justify-between pl-5 pt-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-white/60">
                  {table.refLabel} {item.code.replace('SRV-', '')}
                </span>
                <Link
                  to={ROUTES.contact}
                  className="group/btn inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider px-3 py-1 bg-white text-[#2446EC] hover:bg-[#101010] hover:text-white transition-colors font-semibold"
                >
                  <span>{table.briefLabel}</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Ledger Disclosures */}
      {showDisclosures && (
        <div className="pt-6 mt-6 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 font-mono text-[10px] md:text-[11px] text-white/70 leading-relaxed">
          {disclosures.map((disclosure) => (
            <div key={disclosure.label}>
              <span className="text-white uppercase font-semibold block mb-0.5">
                {disclosure.label}
              </span>
              <p>{disclosure.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
