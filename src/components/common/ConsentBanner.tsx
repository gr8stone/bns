import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE_CONTENT } from "../../data/content/site";
import { onOpenConsentSettings, setConsent, useConsent } from "../../lib/consent";
import { EASE_EDITORIAL } from "../../lib/motion";
import { ROUTES } from "../../lib/routes";

const { consent: copy } = SITE_CONTENT;

/** Loads Vercel Web Analytics + Speed Insights only after opt-in consent. */
export function ConsentedAnalytics() {
  const consent = useConsent();
  if (!consent?.analytics) return null;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

/**
 * Consent banner. Shown until the visitor decides; reopened from the footer.
 * Accept and Reject are equally prominent (no nudging), per the DPA's
 * "freely given" requirement.
 */
export function ConsentBanner() {
  const consent = useConsent();
  const reduce = useReducedMotion();
  const [reopened, setReopened] = useState(false);

  useEffect(() => onOpenConsentSettings(() => setReopened(true)), []);

  const open = consent === null || reopened;
  const decide = (analytics: boolean) => {
    setConsent(analytics);
    setReopened(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          role="dialog"
          aria-modal="false"
          aria-labelledby="consent-title"
          aria-describedby="consent-body"
          initial={reduce ? false : { y: 24, opacity: 0 }}
          // First-visit entrance waits for the hero to settle; reopening and closing are instant.
          animate={{ y: 0, opacity: 1, transition: { duration: 0.45, ease: EASE_EDITORIAL, delay: consent === null ? 1.2 : 0 } }}
          exit={reduce ? undefined : { y: 24, opacity: 0, transition: { duration: 0.25, ease: EASE_EDITORIAL } }}
          className="print:hidden fixed z-[80] bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md bg-ink text-white border border-white/15 shadow-2xl p-6"
        >
          <h2 id="consent-title" className="font-display text-lg font-medium tracking-[-0.02em]">
            {copy.title}
          </h2>
          <p id="consent-body" className="mt-2 font-sans text-sm text-white/75 leading-relaxed">
            {copy.body}{" "}
            <Link to={ROUTES.cookies} className="underline underline-offset-2 hover:text-white">
              {copy.policyLabel}
            </Link>
          </p>
          {consent && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
              {copy.currentLabel}: {consent.analytics ? copy.acceptLabel : copy.rejectLabel} •{" "}
              {new Date(consent.decidedAt).toLocaleDateString("en-KE")}
            </p>
          )}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => decide(false)}
              className="px-4 py-3 border border-white/30 hover:border-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              {copy.rejectLabel}
            </button>
            <button
              type="button"
              onClick={() => decide(true)}
              className="px-4 py-3 border border-white/30 hover:border-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              {copy.acceptLabel}
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
