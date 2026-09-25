import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { EASE_EDITORIAL, VIEWPORT } from '../../lib/motion';

interface ProseRevealProps {
  text: string;
  className?: string;
}

const line: Variants = {
  hidden: { opacity: 0, transform: 'translateY(100%)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: { duration: 0.6, ease: EASE_EDITORIAL },
  },
};

/**
 * Marketing prose: each sentence rises from a clip as it enters the viewport.
 * Reduced motion shows the paragraph at once.
 */
export function ProseReveal({ text, className = '' }: ProseRevealProps) {
  const reduce = useReducedMotion();
  const lines = text
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (reduce) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.onceAmount}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {lines.map((sentence) => (
        <span key={sentence} className="block overflow-hidden">
          <motion.span variants={line} className="block pb-[0.08em]">
            {sentence}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
