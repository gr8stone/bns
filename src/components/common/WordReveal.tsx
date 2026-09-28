import { motion, useReducedMotion, type Variants, type MotionValue } from 'framer-motion';

interface WordRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'blockquote' | 'span';
  staggerMs?: number;
  delayMs?: number;
  highlightWords?: string[];
  highlightColor?: MotionValue<string> | string;
  highlightClassName?: string;
}

export function WordReveal({
  text,
  className = '',
  as = 'p',
  staggerMs = 30,
  delayMs = 0,
  highlightWords,
  highlightColor,
  highlightClassName = '',
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerMs / 1000,
        delayChildren: shouldReduceMotion ? 0 : delayMs / 1000,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Component = motion[as] as any;

  const isHighlighted = (w: string) => {
    if (!highlightWords || highlightWords.length === 0) return false;
    const clean = w.toLowerCase().replace(/[^a-z0-9]/g, '');
    return highlightWords.some((hw) => hw.toLowerCase().replace(/[^a-z0-9]/g, '') === clean);
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => {
        const highlighted = isHighlighted(word);
        return (
          <span key={`${word}-${idx}`} className="inline-block whitespace-nowrap overflow-hidden mr-[0.28em] last:mr-0">
            <motion.span
              variants={wordVariants}
              style={highlighted && highlightColor ? { color: highlightColor } : undefined}
              className={`inline-block ${highlighted && highlightClassName ? highlightClassName : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
