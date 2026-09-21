import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section className="bg-[#050505] text-[#FAF9F6] py-28 md:py-40 relative overflow-hidden border-t border-white/10">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-6"
          >
            09 / CIVIC PARTICIPATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.98] text-[#FAF9F6] mb-8"
          >
            READY TO DEMYSTIFY <br />
            <span className="italic font-serif text-white/90">PUBLIC MONEY?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white/60 font-sans max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Whether organizing a county budget town hall, commissioning investigative reporting, or joining our youth budget fellowship, our initiative provides open tools that demand public accountability.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FAF9F6] text-[#0B0B0A] text-xs font-mono font-medium tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-black transition-all duration-300"
            >
              <span>GET INVOLVED</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/20 text-[#FAF9F6] text-xs font-mono font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <span>EXPLORE EPISODES</span>
            </Link>
          </motion.div>

          {/* Direct Atelier Details Bar */}
          <div className="pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" /> CIVIC DESK
              </span>
              <a
                href="mailto:contact@budgetndiostory.org"
                className="text-xs md:text-sm text-white/90 hover:text-[#C5A880] transition-colors"
              >
                contact@budgetndiostory.org
              </a>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" /> NAIROBI HUB
              </span>
              <a
                href="tel:+254700000000"
                className="text-xs md:text-sm text-white/90 hover:text-[#C5A880] transition-colors"
              >
                +254 (0) 20 800 BNS
              </a>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> RESPONSE SLA
              </span>
              <span className="text-xs md:text-sm text-white/90">
                Within 24 Hours
              </span>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1">
                <Shield className="w-3.5 h-3.5 text-[#C5A880]" /> SOURCE PROTECTION
              </span>
              <span className="text-xs md:text-sm text-white/90">
                Encrypted & Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
