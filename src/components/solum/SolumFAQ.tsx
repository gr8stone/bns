import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/faq';
import { ROUTES } from '../../lib/routes';
import { WordReveal } from '../common/WordReveal';

const ease = [0.22, 1, 0.36, 1] as const;

export function SolumFAQ() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="w-full bg-white text-text-base py-20 md:py-28 px-6 md:px-10 border-b border-black/[0.08]">
      <div className="max-w-[1425px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 pb-10 sm:pb-12 border-b border-black/[0.08] items-end">
          <figure className="md:col-span-4 order-2 md:order-1">
            <img
              src="/images/bns/towwnhallmay/129A4094.jpg"
              alt=""
              className="w-full aspect-[16/10] md:aspect-[4/5] object-cover"
            />
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-wider text-slate">
              [ NAIROBI / TOWN HALL ]
            </figcaption>
          </figure>
          <div className="md:col-span-8 order-1 md:order-2">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-terracotta mb-4">
              [ 05 / PARTNERSHIP NOTES ]
            </p>
            <WordReveal
              as="h2"
              text="The brief, in the open."
              className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.05em] leading-[0.98]"
              staggerMs={40}
            />
            <p className="mt-6 max-w-xl font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              Model, rates, governance, and how a commission is accepted. Click
              any question to read the answer.
            </p>
          </div>
        </div>

        <div className="divide-y divide-black/[0.08]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                {/* Trigger row */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left py-8 grid grid-cols-[1fr_auto] md:grid-cols-12 gap-4 md:gap-8 items-start group"
                >
                  {/* Left: index + question */}
                  <div className="md:col-span-11 flex gap-4 md:gap-8 items-start">
                    <span className="font-mono text-xs text-slate pt-0.5 shrink-0 w-6">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-1">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate">
                        {item.category}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl tracking-tight leading-snug group-hover:text-terracotta transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="md:col-span-1 flex items-start pt-1 justify-end shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-slate" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate" />
                    )}
                  </div>
                </button>

                {/* Expandable answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-10 md:pl-[calc(2rem+1.5rem)] font-sans text-sm sm:text-base leading-[1.65] text-text-muted max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="pt-10">
          <Link
            to={ROUTES.contact}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-3 bg-text-base text-white hover:bg-terracotta transition-colors"
          >
            Write to the desk
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
