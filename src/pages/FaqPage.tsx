import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileDown, Mail, Plus, Minus, SlidersHorizontal, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPREHENSIVE_FAQS, FAQ_CATEGORIES } from '../data/comprehensiveFaq';
import { ROUTES } from '../lib/routes';
import { WordReveal } from '../components/common/WordReveal';

export function FaqPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const listRef = useRef<HTMLDivElement>(null);

  const filteredFaqs = useMemo(() => {
    return COMPREHENSIVE_FAQS.filter((item) =>
      selectedCategory === 'all' || item.category === selectedCategory
    );
  }, [selectedCategory]);

  function handleCategoryChange(id: string) {
    setSelectedCategory(id);
    setFiltersOpen(false);
    setOpenIds(new Set()); // collapse all when switching topic
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function toggleItem(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const activeLabel =
    selectedCategory === 'all'
      ? 'All Topics'
      : FAQ_CATEGORIES.find((c) => c.id === selectedCategory)?.label ?? 'All Topics';

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        {/* ========================================================= */}
        {/* 1. HERO                                                    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 md:pb-20 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                HELP CENTER &bull; INSTITUTIONAL REPOSITORY &bull; 2026
              </span>
            </motion.div>
            <WordReveal
              as="h1"
              text="THE COMPLETE BRIEF, IN THE OPEN."
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.92]"
              staggerMs={28}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 space-y-4"
          >
            <div>
              <span className="font-mono text-xs text-[#757575] block mb-2 font-medium">
                SCOPE OF KNOWLEDGE
              </span>
              <p className="font-sans text-sm text-[#757575] leading-relaxed font-light">
                Drawn directly from the BNS Partnership Prospectus 2026,
                Institutional Whitepaper, Terms, and Fiduciary Charters.
              </p>
            </div>
            <a
              href="/docs/BNS_Partnership_Prospectus_2026.pdf"
              download="BNS_Partnership_Prospectus_2026.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#101010]/20 text-[#101010] hover:border-[#101010] transition-colors font-mono text-xs uppercase tracking-wider"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Full Prospectus (PDF)</span>
            </a>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 2. STICKY BAR — filter icon + active label                 */}
        {/* ========================================================= */}
        <div className="sticky top-[72px] md:top-[88px] z-30 bg-white border-b border-[#101010]/12 -mx-6 md:-mx-10 px-6 md:px-10">

          {/* Trigger row */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575]">
                {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''}
              </span>
              {selectedCategory !== 'all' && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#101010] bg-[#101010]/06 px-2 py-0.5 border border-[#101010]/10">
                  {activeLabel}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="font-mono text-[10px] uppercase tracking-wider text-[#757575] hover:text-[#101010] transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className={`flex items-center gap-2 px-3 py-2 border font-mono text-[10px] uppercase tracking-wider transition-colors ${
                  filtersOpen
                    ? 'bg-[#101010] text-white border-[#101010]'
                    : 'bg-white text-[#101010] border-[#101010]/20 hover:border-[#101010]'
                }`}
              >
                {filtersOpen
                  ? <X className="w-3.5 h-3.5" />
                  : <SlidersHorizontal className="w-3.5 h-3.5" />
                }
                <span>Filter by topic</span>
              </button>
            </div>
          </div>

          {/* Collapsible category panel */}
          <AnimatePresence initial={false}>
            {filtersOpen && (
              <motion.div
                key="filters"
                initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pb-4 pt-1">
                  {FAQ_CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    const count =
                      cat.id === 'all'
                        ? COMPREHENSIVE_FAQS.length
                        : COMPREHENSIVE_FAQS.filter((f) => f.category === cat.id).length;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all border ${
                          isActive
                            ? 'bg-[#101010] text-white border-[#101010]'
                            : 'bg-white text-[#757575] border-[#101010]/20 hover:border-[#101010] hover:text-[#101010]'
                        }`}
                      >
                        {cat.label}
                        <span className={`ml-1.5 tabular-nums ${isActive ? 'opacity-60' : 'opacity-40'}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* 3. FAQ ACCORDION ROWS — always visible                     */}
        {/* ========================================================= */}
        <div ref={listRef} className="divide-y divide-[#101010]/12">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openIds.has(item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, delay: Math.min(idx * 0.025, 0.18) }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left py-6 flex items-start gap-4 group hover:bg-[#FAFAF8] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6"
                  >
                    <span className="font-mono text-xs text-[#757575] pt-0.5 shrink-0 w-7 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 space-y-0.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block">
                        {item.categoryLabel}
                      </span>
                      <h2 className="font-display text-lg sm:text-xl font-medium tracking-tight text-[#101010] leading-snug group-hover:text-[#4E58AA] transition-colors">
                        {item.question}
                      </h2>
                    </div>
                    <span className="shrink-0 pt-1 text-[#757575]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-11 pr-4 sm:pr-6 space-y-4">
                          <p className="font-sans text-sm sm:text-base text-[#101010]/80 font-light leading-relaxed max-w-3xl">
                            {item.answer}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-[#757575]">
                            {item.sourceDoc && (
                              <span className="bg-[#101010]/04 px-2 py-0.5 border border-[#101010]/08">
                                SOURCE: {item.sourceDoc}
                              </span>
                            )}
                            {item.relatedLinks?.map((link) => (
                              <Link
                                key={link.url}
                                to={link.url}
                                className="inline-flex items-center gap-1 text-[#101010] hover:text-[#4E58AA] transition-colors uppercase tracking-wider"
                              >
                                <span>{link.label}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* 4. CLOSING DESK                                            */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#101010]/12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium block">
              CANNOT FIND WHAT YOU ARE LOOKING FOR?
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#101010] uppercase">
              Speak directly with our team in Nairobi.
            </h3>
            <p className="font-sans text-sm text-[#757575] font-light max-w-xl leading-relaxed">
              We respond to institutional queries, partnership inquiries, and
              rate card clarifications within 24 business hours.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap items-center gap-3 md:justify-end">
            <Link
              to={ROUTES.contact}
              className="solum-btn px-6 py-3.5 bg-[#101010] text-white font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-[#101010] transition-colors inline-flex items-center gap-2"
            >
              <span>Write to Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="mailto:info@budgetndiostory.org"
              className="px-5 py-3.5 border border-[#101010]/20 text-[#101010] font-mono text-xs uppercase tracking-wider hover:border-[#101010] transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
