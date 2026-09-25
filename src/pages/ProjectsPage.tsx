import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ArchvizProjectShowcase } from '../components/common/ArchvizProjectShowcase';

const CATEGORIES = [
  'All Projects',
  'Wanahabari Lab',
  'BNS Connect',
  'BNS Mashinani',
  'BNS Studios',
];

const ASPECT_RATIOS = [
  'aspect-[21/9]',
  'aspect-[16/10]',
  'aspect-[16/9]',
  'aspect-[4/3]',
  'aspect-[21/9]',
  'aspect-[16/10]',
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeScrollCategory, setActiveScrollCategory] = useState('All Projects');
  const [isFilterOnly, setIsFilterOnly] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // ─────────────────────────────────────────────────────────────
  // 1. SCROLLSPY OBSERVER: Tracks which desk is currently in view
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (selectedCategory !== 'All Projects') {
      setActiveScrollCategory(selectedCategory);
      return;
    }

    const handleScroll = () => {
      // Near top of page, activate 'All Projects'
      if (window.scrollY < 260) {
        setActiveScrollCategory('All Projects');
        return;
      }

      const elements = document.querySelectorAll<HTMLElement>('[data-category]');
      if (!elements || elements.length === 0) return;

      const triggerY = 200; // reading line below navbar
      let detectedCategory = 'All Projects';

      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const rect = el.getBoundingClientRect();
        // If element spans the reading line:
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          const cat = el.getAttribute('data-category');
          if (cat) {
            detectedCategory = cat;
            break;
          }
        } else if (rect.top > triggerY && i === 0) {
          detectedCategory = 'All Projects';
          break;
        }
      }

      setActiveScrollCategory(detectedCategory);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategory]);

  // ─────────────────────────────────────────────────────────────
  // 2. MOBILE AUTO-CENTER: Keeps the active tab visible on mobile
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;
    const activeBtn = mobileNavRef.current?.querySelector<HTMLElement>(
      `[data-nav-cat="${activeScrollCategory}"]`
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeScrollCategory]);

  // ─────────────────────────────────────────────────────────────
  // 3. CATEGORY CLICK HANDLER: Smooth scroll or filter
  // ─────────────────────────────────────────────────────────────
  const handleCategoryClick = (cat: string) => {
    if (cat === 'All Projects') {
      setSelectedCategory('All Projects');
      setActiveScrollCategory('All Projects');
      setIsFilterOnly(false);

      const topAnchor = document.getElementById('projects-top');
      if (topAnchor) {
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(topAnchor, { offset: -120, duration: 1.0 });
        } else {
          const y = topAnchor.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
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
    if (selectedCategory !== 'All Projects') {
      setSelectedCategory('All Projects');
    }

    setTimeout(() => {
      const target = document.querySelector<HTMLElement>(`[data-category="${cat}"]`);
      if (target) {
        setActiveScrollCategory(cat);
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(target, { offset: -110, duration: 1.1 });
        } else {
          const y = target.getBoundingClientRect().top + window.pageYOffset - 110;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, selectedCategory !== 'All Projects' ? 50 : 0);
  };

  return (
    <main className="w-full bg-white text-text-base pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div id="projects-top" className="max-w-[1425px] mx-auto px-6 md:px-10">
        {/* Header: Swiss 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-black/[0.08] items-end">
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#2446EC] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold">
                CIVIC MEDIA ARCHIVE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-text-base uppercase leading-[0.94]">
              Productions &amp; <span className="text-[#2446EC]">campaigns.</span>
            </h1>
          </div>

          <div className="col-span-1">
            <span className="font-mono text-xs text-slate block mb-2 font-medium">
              ARCHIVE SCOPE
            </span>
            <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
              Docuseries, investigations, plain-language budget explainers, and grassroots tracking campaigns produced for citizen accountability across 47 counties.
            </p>
          </div>
        </div>

        {/* Content Layout: Sticky Left Sidebar Rail + Main Project Stream */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 items-start">
          {/* Left Rail: Category Navigation (Responsive to scroll & clickable) */}
          <div className="col-span-1 md:sticky md:top-28 z-20 bg-white">
            <div className="flex items-center justify-between mb-3 md:mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#2446EC] font-semibold block">
                FILTER BY DESK
              </span>
              <button
                onClick={() => {
                  const nextMode = !isFilterOnly;
                  setIsFilterOnly(nextMode);
                  if (!nextMode && selectedCategory !== 'All Projects') {
                    setSelectedCategory('All Projects');
                  }
                }}
                className="font-mono text-[10px] uppercase text-text-muted hover:text-[#2446EC] transition-colors flex items-center gap-1.5 cursor-pointer rounded-none border-0"
                title={isFilterOnly ? "Switch to Scroll Navigation Mode" : "Switch to Filter-Only Mode"}
              >
                <Filter className="w-3 h-3 text-[#2446EC]" />
                <span className="text-slate font-medium">
                  {isFilterOnly ? "ISOLATE: ON" : "SCROLL NAV"}
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
                  selectedCategory === 'All Projects'
                    ? activeScrollCategory === cat
                    : selectedCategory === cat;

                const count =
                  cat === 'All Projects'
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    data-nav-cat={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`whitespace-nowrap px-3.5 py-2 md:p-0 border md:border-0 text-left font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex-shrink-0 rounded-none flex items-center justify-between ${
                      isActive
                        ? 'border-[#2446EC] bg-[#2446EC]/5 md:bg-transparent text-text-base font-semibold'
                        : 'border-black/10 text-text-muted hover:text-text-base hover:border-black/30'
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
                        isActive ? 'text-[#2446EC] font-medium' : 'text-slate'
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
                  00 // NO ENTRIES FOUND
                </span>
                <h3 className="font-display text-2xl font-medium uppercase text-text-base mb-4 tracking-tight">
                  NO PRODUCTIONS IN THIS DESK
                </h3>
                <button
                  onClick={() => handleCategoryClick('All Projects')}
                  className="px-6 py-3 border border-black/20 text-xs font-mono uppercase tracking-wider hover:bg-text-base hover:text-white transition-colors cursor-pointer rounded-none"
                >
                  RESET FILTER
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
                {filteredProjects.map((project, idx) => {
                  if (project.heroVideo) {
                    return (
                      <div
                        key={project.slug}
                        id={`project-${project.slug}`}
                        data-category={project.category}
                        className="scroll-mt-28"
                      >
                        <ArchvizProjectShowcase project={project} index={idx} />
                      </div>
                    );
                  }

                  const aspect = ASPECT_RATIOS[idx % ASPECT_RATIOS.length];

                  return (
                    <div
                      key={project.slug}
                      id={`project-${project.slug}`}
                      data-category={project.category}
                      className="group py-8 border-b border-black/[0.08] scroll-mt-28"
                    >
                      <Link to={`/projects/${project.slug}`} className="block select-none">
                        {/* Image with Deliberately Varied Aspect Ratio */}
                        <div
                          className={`relative ${aspect} w-full overflow-hidden bg-zinc-100 border border-black/[0.08] rounded-none`}
                        >
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                          />
                          <div className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-300" />
                        </div>

                        {/* Metadata Strip with Title Left / Year Right */}
                        <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between font-mono text-xs sm:text-sm text-text-base border-b border-black/[0.08] pb-3 gap-2">
                          <div className="flex items-baseline gap-3">
                            <span className="text-coral font-medium">0{idx + 1}</span>
                            <span className="font-semibold uppercase tracking-wider group-hover:text-terracotta transition-colors">
                              {project.title}
                            </span>
                            <span className="text-slate hidden sm:inline">&mdash;</span>
                            <span className="text-text-muted font-sans text-xs hidden sm:inline">
                              {project.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-slate">
                            <span className="text-terracotta font-medium">{project.category}</span>
                            <span>&bull;</span>
                            <span className="tabular-nums font-mono">{project.year}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-text-base transform group-hover:translate-x-1.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
