import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_CONTENT } from "../../data/content/site";
import { STUDIO_PAGE_CONTENT } from "../../data/content/studioPage";
import { SERVICES } from "../../data/services";
import { EASE_EDITORIAL } from "../../lib/motion";
import { NAV_LINKS, ROUTES } from "../../lib/routes";

const { navbar, contact } = SITE_CONTENT;

/** "/programmes/bns-connect" counts as being in "/programmes". */
const isWithin = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link to={ROUTES.home} onClick={onClick} className="group flex items-center gap-3 shrink-0" aria-label={navbar.brandName}>
      <img src={navbar.logoSrc} alt="" className="h-9 w-9 object-contain" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-[-0.02em] group-hover:text-accent transition-colors duration-200">
          {navbar.brandName}
        </span>
        <span className="hidden xl:block mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
          {navbar.brandTagline}
        </span>
      </span>
    </Link>
  );
}

/** Desktop dropdown listing the three programmes. */
function ProgrammesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-0 bg-white border border-black/[0.08] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
      <div className="col-span-8 p-3">
        <p className="px-4 pt-3 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">{navbar.programmesMenuEyebrow}</p>
        <ul>
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                to={ROUTES.programme(s.slug)}
                onClick={onNavigate}
                className="group flex gap-4 p-4 hover:bg-paper-warm focus-visible:bg-paper-warm transition-colors duration-150"
              >
                <span className="font-mono text-xs text-accent font-semibold tabular-nums pt-0.5">{s.number}</span>
                <span className="flex-1">
                  <span className="flex items-center gap-2 font-display text-base font-medium tracking-[-0.02em] group-hover:text-accent transition-colors">
                    {s.title}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </span>
                  <span className="mt-1 block font-sans text-[13px] text-text-muted leading-snug">{s.shortDescription}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={ROUTES.programmes}
          onClick={onNavigate}
          className="mx-4 mt-1 mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
        >
          {navbar.allProgrammesLabel}
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      <Link
        to={ROUTES.studio}
        onClick={onNavigate}
        className="group col-span-4 relative overflow-hidden bg-ink text-white flex flex-col justify-end p-6 min-h-[280px]"
      >
        <img
          src={STUDIO_PAGE_CONTENT.panorama.imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-[1.04] transition-all duration-700"
        />
        <span className="relative font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">{navbar.studioPromoLabel}</span>
        <span className="relative mt-2 flex items-center gap-2 font-display text-2xl font-medium tracking-[-0.03em]">
          {navbar.studioPromoLink}
          <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </div>
  );
}

export function Navbar() {
  const location = useLocation();
  const reduce = useReducedMotion();

  // The mobile menu is "open for a pathname": navigating anywhere closes it
  // without a state-syncing effect.
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null);
  const menuOpen = menuOpenAt === location.pathname;
  const [dropdown, setDropdown] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Smart sticky: solid after 8px, hides while scrolling down, returns on scroll up.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    if (dropdown) return;
    setHidden(y > 160 && y > prev + 4 ? true : y < prev - 4 ? false : hidden);
  });

  const closeAll = () => {
    setDropdown(false);
    setMenuOpenAt(null);
  };

  const openMenu = () => {
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setMenuOpenAt(location.pathname);
  };

  const openDropdown = () => {
    window.clearTimeout(closeTimer.current);
    setDropdown(true);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropdown(false), 140);
  };

  // Escape closes dropdown/menu; Tab is trapped inside the open mobile menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(false);
        setMenuOpenAt(null);
        return;
      }
      if (e.key !== "Tab" || !menuOpen || !overlayRef.current) return;
      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((el) => el.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useLayoutEffect(() => {
    if (menuOpen) {
      closeButtonRef.current?.focus();
    } else if (previouslyFocusedRef.current) {
      const prev = previouslyFocusedRef.current;
      (prev.isConnected ? prev : document.querySelector<HTMLElement>('[aria-controls="primary-menu-overlay"]'))?.focus();
      previouslyFocusedRef.current = null;
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const desktopLinks = NAV_LINKS.filter((l) => l.href !== ROUTES.home && l.href !== ROUTES.contact);
  const activeHref = desktopLinks.find((l) => isWithin(location.pathname, l.href))?.href ?? null;
  const showBar = !hidden || dropdown || !scrolled;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: showBar ? 0 : "-100%" }}
        transition={{ duration: reduce ? 0 : 0.35, ease: EASE_EDITORIAL }}
        className={`print:hidden fixed inset-x-0 top-0 z-[65] h-16 sm:h-20 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || dropdown
            ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-16px_rgba(0,0,0,0.18)]"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-container mx-auto h-full px-5 sm:px-8 md:px-10 flex items-center justify-between gap-6">
          <Brand onClick={closeAll} />

          {/* Desktop links */}
          <nav
            aria-label={navbar.primaryNavAriaLabel}
            className="hidden lg:flex items-center"
            onMouseLeave={() => setHovered(null)}
          >
            <ul className="flex items-center gap-1">
              {desktopLinks.map((link) => {
                const isActive = link.href === activeHref;
                const isProgrammes = link.href === ROUTES.programmes;
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => {
                      setHovered(link.href);
                      if (isProgrammes) openDropdown();
                      else setDropdown(false);
                    }}
                    onMouseLeave={isProgrammes ? scheduleClose : undefined}
                  >
                    <div className="flex items-center">
                      <Link
                        to={link.href}
                        onClick={closeAll}
                        onFocus={() => setHovered(link.href)}
                        onBlur={() => setHovered(null)}
                        aria-current={isActive ? "page" : undefined}
                        className={`relative z-10 flex items-center gap-1.5 px-4 py-2.5 font-sans text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                          isActive ? "text-text-base" : "text-text-base/65 hover:text-text-base"
                        }`}
                      >
                        {link.label}
                        {isProgrammes && (
                          <ChevronDown
                            aria-hidden="true"
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
                          />
                        )}
                      </Link>
                      {isProgrammes && (
                        <button
                          type="button"
                          aria-label={navbar.allProgrammesLabel}
                          aria-expanded={dropdown}
                          aria-controls="programmes-menu"
                          onClick={() => (dropdown ? setDropdown(false) : openDropdown())}
                          className="sr-only focus:not-sr-only focus:px-2 focus:py-2 text-xs"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Hover pill glides between links; the accent underline marks the current section. */}
                    {hovered === link.href && (
                      <motion.span
                        layoutId="nav-hover"
                        aria-hidden="true"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className="absolute inset-0 bg-black/[0.045]"
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className="absolute left-4 right-4 bottom-0 h-[2px] bg-accent"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <Link
              to={ROUTES.contact}
              onClick={closeAll}
              className={`hidden lg:inline-flex items-center px-4 py-2.5 font-sans text-[15px] font-medium transition-colors duration-200 ${
                isWithin(location.pathname, ROUTES.contact) ? "text-text-base" : "text-text-base/65 hover:text-text-base"
              }`}
            >
              {NAV_LINKS.find((l) => l.href === ROUTES.contact)?.label}
            </Link>
            <Link
              to={ROUTES.contact}
              onClick={closeAll}
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-3 bg-accent text-white hover:bg-text-base transition-colors duration-200 font-mono text-xs uppercase tracking-wider font-medium"
            >
              {navbar.ctaLabel}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={openMenu}
              aria-label={navbar.openMenuAriaLabel}
              aria-expanded={menuOpen}
              aria-controls="primary-menu-overlay"
              className="lg:hidden flex items-center gap-2 px-3.5 py-2.5 border border-black/15 hover:border-text-base font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              {navbar.menuLabel}
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Programmes dropdown */}
        <AnimatePresence>
          {dropdown && (
            <motion.div
              id="programmes-menu"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
              className="hidden lg:block absolute inset-x-0 top-full"
            >
              <div className="max-w-container mx-auto px-5 sm:px-8 md:px-10 pt-2">
                <div className="max-w-[860px] mx-auto">
                  <ProgrammesPanel onNavigate={closeAll} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            id="primary-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={navbar.openMenuAriaLabel}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_EDITORIAL }}
            className="fixed inset-0 z-[70] bg-white text-text-base flex flex-col overflow-y-auto"
          >
            <div className="h-16 sm:h-20 shrink-0 px-5 sm:px-8 flex items-center justify-between border-b border-black/[0.08]">
              <Brand onClick={closeAll} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpenAt(null)}
                aria-label={navbar.closeMenuAriaLabel}
                className="flex items-center gap-2 px-3.5 py-2.5 bg-text-base text-white font-mono text-xs font-semibold uppercase tracking-wider"
              >
                {navbar.closeLabel}
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav aria-label={navbar.primaryNavAriaLabel} className="flex-1 px-5 sm:px-8 py-8">
              <ul className="border-t border-black/[0.08]">
                {NAV_LINKS.map((link, i) => {
                  const active = isWithin(location.pathname, link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.04 * i, ease: EASE_EDITORIAL }}
                      className="border-b border-black/[0.08]"
                    >
                      <Link
                        to={link.href}
                        onClick={closeAll}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-baseline gap-4 py-4 font-display text-4xl sm:text-5xl font-medium tracking-[-0.04em] transition-colors ${
                          active ? "text-accent" : "hover:text-accent"
                        }`}
                      >
                        <span className="font-mono text-xs text-text-muted tabular-nums">{link.index}</span>
                        {link.label}
                      </Link>
                      {link.href === ROUTES.programmes && (
                        <div className="flex flex-wrap gap-2 pb-4 pl-9">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              to={ROUTES.programme(s.slug)}
                              onClick={closeAll}
                              className="px-3 py-1.5 border border-black/10 font-sans text-sm hover:border-accent hover:text-accent transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="px-5 sm:px-8 py-6 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-5 font-mono text-xs text-text-muted">
              <div>
                <span className="block mb-1 text-text-base font-semibold uppercase tracking-wider">{navbar.contactHeading}</span>
                <a href={contact.emailHref} className="hover:text-accent transition-colors">
                  {contact.email}
                </a>
                <br />
                <a href={contact.phoneHref} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end sm:items-end">
                {navbar.indexLinks.map((item) => (
                  <Link key={item.href} to={item.href} onClick={closeAll} className="uppercase tracking-wider hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
