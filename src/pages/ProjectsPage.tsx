import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArchvizProjectShowcase } from "../components/common/ArchvizProjectShowcase";
import { PRODUCTIONS_PAGE_CONTENT } from "../data/content/productions";
import { PROJECTS } from "../data/projects";

const content = PRODUCTIONS_PAGE_CONTENT;

const ALL_CATEGORY = content.filter.allCategoryLabel;

const CATEGORIES = [ALL_CATEGORY, ...content.filter.categories];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);
  const [activeScrollCategory, setActiveScrollCategory] =
    useState(ALL_CATEGORY);
  const [isFilterOnly, setIsFilterOnly] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === ALL_CATEGORY) return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // ─────────────────────────────────────────────────────────────
  // 1. SCROLLSPY OBSERVER: Tracks which desk is currently in view
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (selectedCategory !== ALL_CATEGORY) {
      setActiveScrollCategory(selectedCategory);
      return;
    }

    const handleScroll = () => {
      // Near top of page, activate 'All Projects'
      if (window.scrollY < 260) {
        setActiveScrollCategory(ALL_CATEGORY);
        return;
      }

      const elements =
        document.querySelectorAll<HTMLElement>("[data-category]");
      if (!elements || elements.length === 0) return;

      const triggerY = 200; // reading line below navbar
      let detectedCategory = ALL_CATEGORY;

      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const rect = el.getBoundingClientRect();
        // If element spans the reading line:
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          const cat = el.getAttribute("data-category");
          if (cat) {
            detectedCategory = cat;
            break;
          }
        } else if (rect.top > triggerY && i === 0) {
          detectedCategory = ALL_CATEGORY;
          break;
        }
      }

      setActiveScrollCategory(detectedCategory);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCategory]);

  // ─────────────────────────────────────────────────────────────
  // 2. MOBILE AUTO-CENTER: Keeps the active tab visible on mobile
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const activeBtn = mobileNavRef.current?.querySelector<HTMLElement>(
      `[data-nav-cat="${activeScrollCategory}"]`,
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeScrollCategory]);

  // ─────────────────────────────────────────────────────────────
  // 3. CATEGORY CLICK HANDLER: Smooth scroll or filter
  // ─────────────────────────────────────────────────────────────
  const handleCategoryClick = (cat: string) => {
    if (cat === ALL_CATEGORY) {
      setSelectedCategory(ALL_CATEGORY);
      setActiveScrollCategory(ALL_CATEGORY);
      setIsFilterOnly(false);

      const topAnchor = document.getElementById("projects-top");
      if (topAnchor) {
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(topAnchor, { offset: -120, duration: 1.0 });
        } else {
          const y =
            topAnchor.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
      return;
    }

    if (isFilterOnly) {
      setSelectedCategory(cat);
      setActiveScrollCategory(cat);
      return;
    }

    // Scroll Mode (Default): smoothly scroll to that category's first card
    if (selectedCategory !== ALL_CATEGORY) {
      setSelectedCategory(ALL_CATEGORY);
    }

    setTimeout(
      () => {
        const target = document.querySelector<HTMLElement>(
          `[data-category="${cat}"]`,
        );
        if (target) {
          setActiveScrollCategory(cat);
          const lenis = (window as any).lenis;
          if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(target, { offset: -110, duration: 1.1 });
          } else {
            const y =
              target.getBoundingClientRect().top + window.pageYOffset - 110;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      },
      selectedCategory !== ALL_CATEGORY ? 50 : 0,
    );
  };

  return (
    <main className="w-full bg-white text-text-base pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div
        id="projects-top"
        className="max-w-[1425px] mx-auto px-5 sm:px-8 md:px-10"
      >
        {/* Header: Swiss 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-black/[0.08] items-end">
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold">
                {content.hero.eyebrow}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-text-base uppercase leading-[0.94]">
              {content.hero.titleLead}{" "}
              <span className="text-[#2446EC]">{content.hero.titleAccent}</span>
            </h1>
          </div>

          <div className="col-span-1">
            <span className="font-mono text-xs text-slate block mb-2 font-medium">
              {content.hero.scopeLabel}
            </span>
            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
              {content.hero.scopeText}
            </p>
          </div>
        </div>

        {/* Content Layout: Sticky Left Sidebar Rail + Main Project Stream */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 items-start">
          {/* Left Rail: Category Navigation (Responsive to scroll & clickable) */}
          <div className="col-span-1 md:sticky md:top-28 z-20 bg-white">
            <div className="flex items-center justify-between mb-3 md:mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold block">
                {content.filter.label}
              </span>
              <button
                onClick={() => {
                  const nextMode = !isFilterOnly;
                  setIsFilterOnly(nextMode);
                  if (!nextMode && selectedCategory !== ALL_CATEGORY) {
                    setSelectedCategory(ALL_CATEGORY);
                  }
                }}
                className="font-mono text-[10px] uppercase text-text-muted hover:text-[#2446EC] transition-colors flex items-center gap-1.5 cursor-pointer rounded-none border-0"
                title={
                  isFilterOnly
                    ? content.filter.switchToScrollTitle
                    : content.filter.switchToFilterTitle
                }
              >
                <Filter className="w-3 h-3 text-[#2446EC]" />
                <span className="text-slate font-medium">
                  {isFilterOnly
                    ? content.filter.isolateOnLabel
                    : content.filter.scrollNavLabel}
                </span>
              </button>
            </div>

            {/* Horizontal swipe strip on mobile, vertical sticky stack on desktop */}
            <div
              ref={mobileNavRef}
              className="flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar gap-2 md:gap-0 md:space-y-3 pb-3 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0"
            >
              {CATEGORIES.map((cat) => {
                const isActive =
                  selectedCategory === ALL_CATEGORY
                    ? activeScrollCategory === cat
                    : selectedCategory === cat;

                const count =
                  cat === ALL_CATEGORY
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    data-nav-cat={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`whitespace-nowrap px-3.5 py-2 md:p-0 border md:border-0 text-left font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex-shrink-0 rounded-none flex items-center justify-between ${
                      isActive
                        ? "border-[#2446EC] bg-[#2446EC]/5 md:bg-transparent text-text-base font-semibold"
                        : "border-black/10 text-text-muted hover:text-text-base hover:border-black/30"
                    }`}
                  >
                    <div className="flex items-center">
                      {isActive ? (
                        <span className="w-1.5 h-1.5 bg-[#2446EC] inline-block mr-2.5 flex-shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-transparent inline-block mr-2.5 flex-shrink-0 hidden md:inline-block" />
                      )}
                      <span>{cat}</span>
                    </div>
                    <span
                      className={`text-[10px] ml-2 font-mono tabular-nums ${
                        isActive ? "text-[#2446EC] font-medium" : "text-slate"
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Stream: Full-Width Projects */}
          <div className="col-span-1 md:col-span-3 min-h-[500px]">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="py-32 text-center border border-black/[0.08] p-12 bg-[#FAFAF8]"
              >
                <span className="font-mono text-xs text-slate uppercase block mb-3 font-medium">
                  {content.emptyState.eyebrow}
                </span>
                <h3 className="font-display text-2xl font-medium uppercase text-text-base mb-4 tracking-tight">
                  {content.emptyState.title}
                </h3>
                <button
                  onClick={() => handleCategoryClick(ALL_CATEGORY)}
                  className="px-6 py-3 border border-black/20 text-xs font-mono uppercase tracking-wider hover:bg-text-base hover:text-white transition-colors cursor-pointer rounded-none"
                >
                  {content.emptyState.resetLabel}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12 sm:space-y-16"
              >
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.slug}
                    id={`project-${project.slug}`}
                    data-category={project.category}
                    className="scroll-mt-28"
                  >
                    <ArchvizProjectShowcase project={project} index={idx} />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
