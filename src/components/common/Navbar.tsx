import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, PROGRAMME_PREVIEW, ROUTES } from "../../lib/routes";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Desktop direct nav items: About, Programmes, Studio, Productions, Contact
  const desktopLinks = NAV_LINKS.filter((item) => item.label !== "Home");

  return (
    <>
      {/* Sticky High-Contrast Swiss Glass Nav */}
      {!menuOpen && (
        <header className="fixed inset-x-0 top-0 z-[65] h-16 sm:h-20 border-b border-black/[0.08] bg-white/90 backdrop-blur-md transition-colors duration-200 select-none">
          <div className="max-w-[1425px] mx-auto h-full px-6 md:px-10 flex items-center justify-between">
            {/* Left: Brand Wordmark */}
            <Link
              to={ROUTES.home}
              className="flex items-center gap-2.5 font-sans font-bold text-sm md:text-base tracking-[-0.04em] uppercase text-text-base hover:text-[#2446EC] transition-colors"
            >
              <img
                src="/images/bns/logo.svg"
                alt=""
                className="w-6 h-6 object-contain"
              />
              <span className="tracking-tight font-extrabold">BUDGET NDIO STORY</span>
              <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-[#2446EC] border border-[#2446EC]/30 px-1.5 py-0.5 ml-1 bg-[#2446EC]/5">
                REPORT 2026
              </span>
            </Link>

            {/* Desktop Direct Nav Links */}
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
              {desktopLinks.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`font-mono text-xs uppercase tracking-wider transition-colors duration-150 py-1 border-b ${
                      isActive
                        ? "text-[#2446EC] border-[#2446EC] font-semibold"
                        : "text-text-muted border-transparent hover:text-text-base hover:border-black/20"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <Link
                to={ROUTES.contact}
                className="hidden sm:inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider pl-4 pr-3 py-2 bg-[#2446EC] text-white hover:bg-[#101010] transition-colors rounded-none font-medium group border-0"
              >
                <span>Get Involved</span>
                <span className="font-mono text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-none leading-none">
                  03
                </span>
                <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  &nearr;
                </span>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                className="cursor-pointer flex items-center gap-2.5 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 border border-black/15 bg-white text-text-base hover:bg-ivory rounded-none group"
              >
                <span>{menuOpen ? "CLOSE" : "MENU"}</span>
                <div
                  className={`w-3.5 h-3.5 border border-current flex items-center justify-center transition-transform duration-200 ease-out ${
                    menuOpen ? "rotate-45" : "group-hover:rotate-45"
                  }`}
                >
                  <span className="text-[11px] leading-none mb-0.5 font-bold">+</span>
                </div>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Accessible Full-Screen Pure White Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] bg-white text-text-base flex flex-col justify-between pt-24 pb-10 px-6 md:px-10 overflow-y-auto select-none"
          >
            {/* Top Bar inside Overlay */}
            <div className="max-w-[1425px] w-full mx-auto flex items-center justify-between pb-6 border-b border-black/[0.08]">
              <Link
                to={ROUTES.home}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 font-sans font-bold text-sm md:text-base tracking-[-0.04em] uppercase text-text-base hover:text-terracotta transition-colors"
              >
                <img
                  src="/images/bns/logo.svg"
                  alt=""
                  className="w-6 h-6 object-contain"
                />
                <span className="tracking-tight font-extrabold">BUDGET NDIO STORY</span>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
                className="cursor-pointer flex items-center gap-2.5 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider border border-black/20 bg-text-base text-white hover:bg-terracotta rounded-none"
              >
                <span>CLOSE</span>
                <span className="font-bold text-xs">&times;</span>
              </button>
            </div>

            {/* Navigation List Container */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full my-auto divide-y divide-black/[0.08] border-t border-b border-black/[0.08] mx-auto py-4"
            >
              {NAV_LINKS.map((link, idx) => {
                const isHovered = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const isDimmed = isAnyHovered && !isHovered;
                const isProgrammes = link.label === "Programmes";

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.04 * idx,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="py-4 md:py-6"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      onFocus={() => setHoveredIdx(idx)}
                      className={`block font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-display text-text-base transition-all duration-180 ${
                        isDimmed ? "opacity-35" : "opacity-100 hover:text-terracotta"
                      }`}
                    >
                      <span className="font-mono text-xs text-slate mr-4 md:mr-8 align-middle">
                        {link.index}
                      </span>
                      {link.label}
                    </Link>

                    <AnimatePresence initial={false}>
                      {isProgrammes && isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex flex-wrap gap-x-5 gap-y-2 pl-12 pt-3 md:pl-20 md:pt-4"
                        >
                          {PROGRAMME_PREVIEW.map((programme) => (
                            <Link
                              key={programme.href}
                              to={programme.href}
                              onClick={() => setMenuOpen(false)}
                              onFocus={() => setHoveredIdx(idx)}
                              className="font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-coral"
                            >
                              {programme.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Meta & Legal / Social Links */}
            <div className="max-w-[1425px] w-full mx-auto pt-8 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-mono text-text-muted">
              <div className="col-span-1">
                <span className="text-text-base block mb-1 font-semibold">
                  CIVIC CONTACT
                </span>
                <a
                  href="mailto:info@budgetndiostory.org"
                  className="hover:text-terracotta transition-colors"
                >
                  info@budgetndiostory.org
                </a>
              </div>

              <div className="col-span-1">
                <span className="text-text-base block mb-1 font-semibold">
                  HUBS
                </span>
                <span>Nairobi &bull; Kenya (47 Counties)</span>
              </div>

              <div className="col-span-1">
                <span className="text-text-base block mb-1 font-semibold">
                  INDEX
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <Link
                    to={ROUTES.whitepaper}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-terracotta transition-colors"
                  >
                    White Paper
                  </Link>
                  <Link
                    to={ROUTES.faq}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-terracotta transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    to={ROUTES.terms}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-terracotta transition-colors"
                  >
                    Terms
                  </Link>
                  <Link
                    to={ROUTES.privacy}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-terracotta transition-colors"
                  >
                    Privacy
                  </Link>
                  <Link
                    to={ROUTES.cookies}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-terracotta transition-colors"
                  >
                    Cookies
                  </Link>
                </div>
              </div>

              <div className="col-span-1 text-left md:text-right">
                <span className="text-text-base block mb-1 font-semibold">
                  &copy; 2026
                </span>
                <span className="block mt-1">
                  Budget Ndio Story &bull; AI in Civic Design
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
