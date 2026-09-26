import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RateCard } from '../components/studio/RateCard';
import { ROUTES } from '../lib/routes';

export function RateCardPage() {
  function handlePrint() {
    window.print();
  }

  return (
    <main className="min-h-screen w-full bg-[#2446EC] text-white pt-24 sm:pt-28 pb-16 px-5 sm:px-8 md:px-12 select-none flex flex-col justify-between">
      <div className="max-w-[1380px] w-full mx-auto flex-1 flex flex-col justify-between">

        {/* ─── Top Control Bar ────────────────────────────────────────── */}
        <div className="pb-6 sm:pb-8 border-b border-white/20 flex flex-wrap items-center justify-between gap-4">
          <Link
            to={ROUTES.studio}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Studio</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Schedule</span>
            </button>
          </div>
        </div>

        {/* ─── Hero Headline & Monograph Metadata ─────────────────────── */}
        <div className="py-8 sm:py-12 border-b border-white/20 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white inline-block animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-white font-medium">
                BNS STUDIOS // OFFICIAL RATE CARD 2026
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.05em] uppercase leading-[0.92] text-white">
              COMMERCIAL RATE CARD.
            </h1>
          </div>

          <div className="font-mono text-xs text-white/70 space-y-1 md:text-right shrink-0">
            <div>SCHEDULE REF: BNS-STUDIO-2026-V1</div>
            <div>CURRENCY: USD &bull; TERMS: 50/50 &bull; NET 30</div>
            <div>&ge; 40% REINVESTED IN CIVIC ENDOWMENT</div>
          </div>
        </div>

        {/* ─── Clean Rate Card Component (Receipt on mobile, ledger on desktop) ─── */}
        <RateCard showDisclosures={true} />

      </div>
    </main>
  );
}
export { RateCard };
