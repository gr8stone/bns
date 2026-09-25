import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const PARTNER_LOGOS = [
  { src: "/images/bns/logo.svg", alt: "Budget Ndio Story" },
  { src: "/images/bns/partners/tisa.svg", alt: "TISA" },
  {
    src: "/images/bns/partners/committee-on-fiscal-studies.png",
    alt: "University of Nairobi",
  },
  {
    src: "/images/bns/partners/house-of-fiscal-wisdom.png",
    alt: "House of Fiscal Wisdom",
  },
];

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-[#0B0B0B] text-white pt-12 md:pt-16 pb-8 md:pb-10 px-6 md:px-12 border-t border-[#1A1A1A] select-none overflow-hidden">
      <div className="max-w-[1480px] mx-auto">
        {/* ─────────────────────────────────────────────────────────────
            TOP SECTION: GIGANTIC MUTED WATERMARK WORDMARK
            Matches exact 'INTERO' reference in scale, weight & charcoal tone
            ───────────────────────────────────────────────────────────── */}
        <div className="w-full flex justify-center items-center overflow-hidden py-4 md:py-6 select-none">
          <motion.h2
            aria-label="Budget Ndio Story"
            animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            className="flex w-max shrink-0 gap-[8vw] font-display text-[clamp(48px,14vw,260px)] font-bold tracking-[-0.03em] leading-[0.82] text-[#242424] uppercase whitespace-nowrap"
          >
            <span aria-hidden="true">BUDGET NDIO STORY</span>
            <span aria-hidden="true">BUDGET NDIO STORY</span>
          </motion.h2>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MIDDLE SECTION: 4-COLUMN BRAND, NAV & CONTACT GRID
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pt-12 md:pt-20 pb-16 md:pb-24 items-start">
          {/* Column 1: Brand Mark + Social Slashes */}
          <div className="col-span-2 md:col-span-4 space-y-8">
            {/* Logo Mark + Name */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/images/bns/logo.svg"
                alt="Budget Ndio Story"
                className="w-6 h-6 object-contain"
              />
              <span className="font-sans font-semibold text-xl tracking-tight text-white flex items-center gap-2">
                Budget Ndio Story
                <span className="inline-flex items-center justify-center w-4 h-4 bg-white/10 rounded-full text-white">
                  <svg
                    className="w-2.5 h-2.5 fill-current translate-x-0.5"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                </span>
              </span>
            </Link>

            {/* Official Social Media Icons (YouTube, X, TikTok, LinkedIn, Instagram) */}
            <div className="flex flex-wrap items-center gap-2.5 text-neutral-400">
              <a
                href="https://youtube.com/@budgetndiostory"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://x.com/budgetndiostory"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@budget.ndio.story"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/budget-ndio-story/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/budgetndiostory"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1CPg2LgfVJ/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.667.333-1 1-1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/254790631623"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded border border-neutral-800 flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.88 11.88 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.41ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.76.98 1-3.66-.23-.38a9.83 9.83 0 0 1-1.51-5.18C2.21 6.46 6.64 2.03 12.08 2.03c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.44-4.43 9.87-9.88 9.87Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-3" aria-label="Partners">
              {PARTNER_LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[96px] object-contain"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Navigation 1 */}
          <div className="col-span-1 md:col-span-2">
            <ul className="space-y-3 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90">
              <li>
                <Link
                  to="/"
                  className="hover:text-neutral-400 transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-neutral-400 transition-colors"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes"
                  className="hover:text-neutral-400 transition-colors"
                >
                  PROGRAMMES
                </Link>
              </li>
              <li>
                <Link
                  to="/studio"
                  className="hover:text-neutral-400 transition-colors"
                >
                  STUDIO
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-neutral-400 transition-colors"
                >
                  PRODUCTIONS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Resources */}
          <div className="col-span-1 md:col-span-2">
            <ul className="space-y-3 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90">
              <li>
                <Link
                  to="/whitepaper"
                  className="hover:text-neutral-400 transition-colors"
                >
                  WHITE PAPER
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-neutral-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-neutral-400 transition-colors"
                >
                  TERMS
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-neutral-400 transition-colors"
                >
                  PRIVACY
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-neutral-400 transition-colors"
                >
                  COOKIES
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="col-span-2 md:col-span-4 space-y-3 font-sans text-xs sm:text-sm text-neutral-300 md:text-left">
            <div>
              <a
                href="tel:+254790631623"
                className="hover:text-white transition-colors"
              >
                +254 790 631 623
              </a>
            </div>

            <div>
              <a
                href="mailto:info@budgetndiostory.org"
                className="hover:text-white transition-colors inline-block"
              >
                [ info@budgetndiostory.org ]
              </a>
            </div>

            <div className="text-neutral-400 pt-1 leading-relaxed">
              Civic Action & Public Finance Hub,
              <br />
              Nairobi, Kenya
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM DIVIDER & CENTERED COPYRIGHT
            ───────────────────────────────────────────────────────────── */}
        <div className="border-t border-[#1C1C1C] pt-8 flex items-center justify-between text-xs font-sans text-neutral-500">
          <div className="w-6 hidden md:block" />

          <div className="w-full text-center">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <strong className="text-white font-semibold uppercase tracking-wider">
                BUDGET NDIO STORY
              </strong>{" "}
              All Rights Reserved
            </span>
          </div>

          {/* Subtle Corner Mark */}
          <div className="text-neutral-600 hover:text-neutral-400 transition-colors text-right shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3.5 h-3.5 inline-block"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
