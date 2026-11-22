import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONTENT } from "../../data/content/site";
import { openConsentSettings } from "../../lib/consent";
import { ROUTES } from "../../lib/routes";

const { footer, contact } = SITE_CONTENT;

const SOCIAL_ICON_PATHS: Record<string, string> = {
  youtube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  tiktok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  linkedin:
    "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  whatsapp:
    "M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.88 11.88 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.41ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.76.98 1-3.66-.23-.38a9.83 9.83 0 0 1-1.51-5.18C2.21 6.46 6.64 2.03 12.08 2.03c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.44-4.43 9.87-9.88 9.87Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z",
};

function Socials({ tone }: { tone: "blue" | "ink" }) {
  const hover = tone === "blue" ? "hover:bg-white hover:text-accent" : "hover:bg-white hover:text-text-base";
  return (
    <div className="flex flex-wrap items-center gap-2 text-white">
      {footer.socialLinks.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className={`w-8 h-8 border border-white/25 flex items-center justify-center transition-colors ${hover}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
            <path d={SOCIAL_ICON_PATHS[s.icon]} />
          </svg>
        </a>
      ))}
    </div>
  );
}

function LegalRow() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-white/60">
      <span>
        {footer.copyrightPrefix} {new Date().getFullYear()} {footer.copyrightSuffix}
      </span>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <button type="button" onClick={openConsentSettings} className="uppercase tracking-wider underline underline-offset-4 hover:text-white transition-colors">
          {footer.cookieSettingsLabel}
        </button>
        <span>{footer.legalNote}</span>
      </div>
    </div>
  );
}

/** Slim footer for every inner page: everything useful, nothing big. */
function CompactFooter() {
  const links = footer.compactLinks;
  return (
    <footer className="print:hidden w-full bg-ink text-white border-t border-white/10">
      <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <Link to={footer.brandHref} className="inline-flex items-center gap-3">
              <img src={footer.logoSrc} alt={footer.logoAlt} className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-lg tracking-tight">{footer.brandName}</span>
            </Link>
            <p className="font-sans text-sm text-white/60 max-w-xs">{footer.description}</p>
          </div>
          <nav aria-label={footer.directoryHeading} className="lg:col-span-5">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 font-sans text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-1 font-sans text-sm">
              <a href={contact.emailHref} className="block text-white hover:text-white/70 transition-colors">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="block text-white/80 hover:text-white transition-colors">
                {contact.phone}
              </a>
            </div>
            <Socials tone="ink" />
          </div>
        </div>
        <div className="pt-6">
          <LegalRow />
        </div>
      </div>
    </footer>
  );
}

/** Big homepage footer: closing call to action, watermark, full directory. */
function FullFooter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="print:hidden w-full bg-accent text-white pt-16 md:pt-24 pb-10 md:pb-12 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      <div className="max-w-[1480px] mx-auto">
        <div className="pb-16 md:pb-24 border-b border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-medium">{footer.eyebrow}</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] leading-[0.94]">
              {footer.headingLead}{" "}
              <span className="underline decoration-white/40 decoration-2 underline-offset-8">{footer.headingEmphasis}</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col lg:items-end gap-5">
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm">{footer.ctaDescription}</p>
            <Link
              to={ROUTES.contact}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-accent hover:bg-text-base hover:text-white transition-colors font-mono text-xs uppercase tracking-wider font-semibold self-start lg:self-auto"
            >
              <span>{footer.ctaLabel}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center items-center overflow-hidden py-10 md:py-16 border-b border-white/20">
          <motion.div
            aria-label={footer.watermarkAriaLabel}
            animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            className="flex w-max shrink-0 gap-[6vw] font-display text-[clamp(44px,11vw,190px)] font-bold tracking-[-0.04em] leading-[0.85] uppercase whitespace-nowrap opacity-90"
          >
            <span aria-hidden="true">{footer.watermarkText}</span>
            <span aria-hidden="true">{footer.watermarkText}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pt-12 md:pt-16 pb-14 md:pb-20 items-start">
          <div className="col-span-2 md:col-span-4 space-y-6">
            <Link to={footer.brandHref} className="inline-flex items-center gap-3">
              <img src={footer.logoSrc} alt={footer.logoAlt} className="w-7 h-7 object-contain" />
              <span className="font-sans font-bold text-xl tracking-tight">{footer.brandName}</span>
            </Link>
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm">{footer.description}</p>
            <Socials tone="blue" />
            <div className="flex items-center gap-4 pt-2" aria-label={footer.partnersAriaLabel}>
              {footer.partnerLogos.map((logo) => (
                <div key={logo.src} className="p-1 bg-white/10 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-7 w-auto max-w-[85px] object-contain" />
                </div>
              ))}
            </div>
          </div>

          {[
            { heading: footer.directoryHeading, links: footer.directoryLinks },
            { heading: footer.resourcesHeading, links: footer.resourceLinks },
          ].map((col) => (
            <div key={col.heading} className="col-span-1 md:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-4">{col.heading}</span>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-white/70 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 space-y-3 font-mono text-xs text-white/90">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-1">{footer.coordinatesHeading}</span>
            <a href={contact.phoneHref} className="block hover:text-white transition-colors">
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="block hover:text-white transition-colors">
              {contact.email}
            </a>
            <p className="text-white/70 pt-2 leading-relaxed">
              {footer.addressLine1}
              <br />
              {footer.addressLine2}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <LegalRow />
        </div>
      </div>
    </footer>
  );
}

export function Footer({ variant = "compact" }: { variant?: "full" | "compact" }) {
  return variant === "full" ? <FullFooter /> : <CompactFooter />;
}
