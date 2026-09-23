/**
 * Motion Constants — Budget Ndio Story
 * ─────────────────────────────────────
 * Three-tier documentary motion system.
 * Import these instead of writing inline transition objects in components.
 *
 * Tier rule:
 *   FAST   → UI feedback (buttons, icons, tooltips, menu controls)
 *   MEDIUM → Content reveals (cards, accordions, text, navigation)
 *   SLOW   → Photography, wordmarks, section entrances, parallax
 */

import type { Variants, Transition } from 'framer-motion';

// ─── Easing Curves ────────────────────────────────────────────────────────────
// Two families. Use EDITORIAL for deliberate, documentary moments.
// Use SNAPPY for imagery and large section entrances.

export const EASE_EDITORIAL: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_SNAPPY:    [number, number, number, number] = [0.16, 1, 0.3,  1];
export const EASE_CURTAIN:   [number, number, number, number] = [0.76, 0, 0.24, 1]; // Preloader / dramatic

// ─── Durations ────────────────────────────────────────────────────────────────

export const DURATION = {
  micro:   0.18,  // Button state, icon swap, tooltip
  fast:    0.25,  // Overlay fade, small badge
  medium:  0.45,  // Cards, accordions, text reveals, nav items
  reveal:  0.6,   // Section text reveals, page hero copy
  slow:    0.8,   // Photography, section entrances
  cinematic: 1.0, // Page transitions, major section crossfades
} as const;

// ─── Stagger ─────────────────────────────────────────────────────────────────

export const STAGGER = {
  tight:   0.04,  // Nav links, dense metadata lists
  normal:  0.08,  // Card grids, step sequences, feature lists
  relaxed: 0.12,  // Editorial word reveals, hero copy
} as const;

// ─── Y-Offsets ────────────────────────────────────────────────────────────────
// How far elements travel upward on entrance.

export const OFFSET = {
  subtle:  12,   // Labels, metadata, small elements
  normal:  20,   // Cards, body text, most content blocks
  dramatic: 32,  // Section headers, hero elements
} as const;

export const PARALLAX: Record<'subtle' | 'normal' | 'deep', [string, string]> = {
  subtle:   ['-4%', '4%'],   // Small imagery, subtle depth
  normal:   ['-6%', '6%'],   // Standard full-bleed images (hero, about)
  deep:     ['-8%', '8%'],   // Media break, cinematic dividers
};

// ─── Pre-built Transitions ────────────────────────────────────────────────────

export const TRANSITION = {
  micro:   { duration: DURATION.micro,    ease: EASE_EDITORIAL } satisfies Transition,
  fast:    { duration: DURATION.fast,     ease: EASE_EDITORIAL } satisfies Transition,
  medium:  { duration: DURATION.medium,   ease: EASE_EDITORIAL } satisfies Transition,
  reveal:  { duration: DURATION.reveal,   ease: EASE_EDITORIAL } satisfies Transition,
  slow:    { duration: DURATION.slow,     ease: EASE_SNAPPY    } satisfies Transition,
  cinematic: { duration: DURATION.cinematic, ease: EASE_SNAPPY } satisfies Transition,
  page:    { duration: 0.85,              ease: EASE_SNAPPY    } satisfies Transition,
} as const;

// ─── Reusable Framer Motion Variants ─────────────────────────────────────────

/** Standard card / content block entrance: fade up */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: OFFSET.normal },
  visible: { opacity: 1, y: 0, transition: TRANSITION.medium },
};

/** Subtle entrance for labels and metadata */
export const fadeUpSubtle: Variants = {
  hidden:  { opacity: 0, y: OFFSET.subtle },
  visible: { opacity: 1, y: 0, transition: TRANSITION.medium },
};

/** Section headline entrance */
export const fadeUpDramatic: Variants = {
  hidden:  { opacity: 0, y: OFFSET.dramatic },
  visible: { opacity: 1, y: 0, transition: TRANSITION.reveal },
};

/** Opacity-only fade (for overlays, backgrounds) */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: TRANSITION.medium },
};

/** Scale entrance for images (1.03 → 1.0) */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: TRANSITION.slow },
};

/** Accordion / drawer expand */
export const accordionVariants: Variants = {
  collapsed: { opacity: 0, height: 0 },
  expanded:  { opacity: 1, height: 'auto', transition: TRANSITION.medium },
};

/**
 * Stagger container wrapper.
 * Wrap a list of `fadeUp` children with this on the parent.
 *
 * @example
 * <motion.ul variants={staggerContainer()} initial="hidden" whileInView="visible">
 *   <motion.li variants={fadeUp}>Item</motion.li>
 * </motion.ul>
 */
export function staggerContainer(
  stagger: number = STAGGER.normal,
  delay: number = 0,
): Variants {
  return {
    hidden:  {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren:   delay,
      },
    },
  };
}

// ─── Viewport Config ──────────────────────────────────────────────────────────
// Use with whileInView. Standard viewport settings for scroll reveals.

export const VIEWPORT = {
  once:        { once: true } as const,
  onceAmount:  { once: true, amount: 0.15 } as const,
  onceHalf:    { once: true, amount: 0.5 } as const,
} as const;

// ─── CSS Hover Durations (for Tailwind duration-* classes) ───────────────────
// Reference these when writing Tailwind transition classes.

export const CSS_TRANSITION = {
  micro:  'duration-[180ms] ease-out',   // .solum-btn, icon rotations
  fast:   'duration-200 ease-out',       // Link underlines, color swaps
  image:  'duration-[550ms] ease-out',   // Image hover scale (standardized)
} as const;
