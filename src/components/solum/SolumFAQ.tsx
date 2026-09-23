import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/faq';
import { ROUTES } from '../../lib/routes';

export function SolumFAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#FAFAF8] text-text-base py-20 md:py-28 px-6 md:px-10 border-b border-black/[0.08] select-none">
      <div className="max-w-[1425px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left Column: Title, Intro, and Inquire Link */}
          <div className="md:col-span-4 flex flex-col justify-between md:sticky md:top-28">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-coral inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                  05 // PROTOCOLS & FAQ
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.05em] text-text-base uppercase leading-[0.98] mb-4">
                FREQUENTLY ASKED QUESTIONS.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed mb-8 font-normal">
                Clear answers regarding public finance data sources, citizen participation, BNS Mashinani barazas, and reporting fellowships.
              </p>
            </div>

            <Link
              to={ROUTES.contact}
              className="inline-flex items-center gap-2.5 self-start px-6 py-3.5 bg-text-base text-white hover:bg-terracotta transition-colors font-mono text-xs uppercase tracking-wider rounded-none group"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Columns: Numbered Accordion */}
          <div className="md:col-span-8 divide-y divide-black/[0.08] border-t border-b border-black/[0.08] bg-white p-2 sm:p-6 border-l border-r">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const formattedNumber = String(idx + 1).padStart(2, '0');

              return (
                <div key={item.id} className="transition-colors duration-200">
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 md:py-6 px-3 flex items-baseline justify-between text-left group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 md:gap-6 pr-4">
                      <span className="font-mono text-xs text-slate tabular-nums font-medium">
                        {formattedNumber}
                      </span>
                      <h3 className="font-sans text-base sm:text-lg font-medium text-text-base tracking-[-0.02em] group-hover:text-terracotta transition-colors">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-5 h-5 flex-shrink-0 border border-black/20 flex items-center justify-center transition-transform duration-200 rounded-none ${
                        isOpen ? 'rotate-45 border-terracotta text-terracotta' : 'group-hover:border-black'
                      }`}
                    >
                      <span className="text-xs leading-none mb-0.5 font-bold">+</span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden px-3"
                      >
                        <div className="pb-6 pt-1 pl-8 md:pl-12 border-l border-coral/30">
                          <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
