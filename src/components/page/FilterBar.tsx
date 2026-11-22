import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { CONTAINER } from "../../lib/layout";

export interface FilterOption {
  id: string;
  label: string;
  count: number;
}

/**
 * Full-width sticky filter bar that tracks the navbar (see .sticky-under-nav).
 * Active option is marked by a sliding pill; scrolls horizontally on small screens.
 */
export function FilterBar({
  options,
  value,
  onChange,
  label,
  meta,
  children,
}: {
  options: FilterOption[];
  value: string;
  onChange: (id: string) => void;
  label: string;
  /** Right-hand text, e.g. "12 productions". */
  meta?: ReactNode;
  /** Extra controls rendered above the chips (e.g. a search box). */
  children?: ReactNode;
}) {
  return (
    <div className="sticky-under-nav z-30 bg-white/95 backdrop-blur-md border-y border-black/[0.08]">
      <div className={`${CONTAINER} py-3 space-y-3`}>
        {children}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 min-w-0">
            <div role="group" aria-label={label} className="flex gap-1 overflow-x-auto no-scrollbar pr-8">
              {options.map((o) => {
                const active = o.id === value;
                return (
                  <button
                    key={o.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onChange(o.id)}
                    className={`relative shrink-0 px-4 py-2.5 font-sans text-sm font-medium transition-colors duration-200 ${
                      active ? "text-white" : "text-text-base/70 hover:text-text-base"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId={`filter-pill-${label}`}
                        aria-hidden="true"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className="absolute inset-0 bg-text-base"
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {o.label}
                      <span className={`font-mono text-[11px] tabular-nums ${active ? "text-white/60" : "text-text-muted"}`}>{o.count}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Fade hint that more chips scroll horizontally */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent md:hidden" />
          </div>
          {meta && (
            <span className="hidden md:block shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted" aria-live="polite">
              {meta}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
