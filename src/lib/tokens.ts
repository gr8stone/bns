/**
 * Design Token Source of Truth — Budget Ndio Story
 * ─────────────────────────────────────────────────
 * All design decisions live here. Tailwind config, CSS custom properties,
 * and Framer Motion constants all reference these values.
 *
 * DO NOT add raw hex values in component files.
 * Use Tailwind token classes (bg-ink, text-muted, border-line-dark, etc.)
 * or import JS constants from this file and motion.ts.
 */

// ─── Documentary Color Palette ───────────────────────────────────────────────
// Seven deliberate background tones — one per page section.
// The flow: charcoal → warm-white → black → navy → white → warm-white → near-black

export const COLORS = {
  // Section backgrounds
  ink:        '#0B0C0E',   // Hero — deep charcoal
  inkSoft:    '#111923',   // Programmes — deep navy (subtle warmth)
  paperWarm:  '#F4F2ED',   // Statement / FAQ — warm off-white
  paper:      '#FFFFFF',   // Projects — pure white (photography foreground)
  nearBlack:  '#070809',   // Footer — near-black closing frame

  // Typography — on light sections
  textBase:   '#111214',   // Primary text on paper/paperWarm
  textMuted:  '#656563',   // Secondary / meta text on light

  // Typography — on dark sections
  textLight:  '#F5F4F0',   // Primary text on ink/inkSoft/nearBlack
  textDim:    '#B7B8B5',   // Secondary / meta text on dark

  // Borders / hairlines
  lineDark:   'rgba(16, 16, 16, 0.12)',    // Hairline on light sections
  lineLight:  'rgba(255, 255, 255, 0.10)', // Hairline on dark sections

  // Single controlled accent — civic blue
  accent:     '#374EAB',   // Active states, links, focus rings, category tags only

  // Interactive surfaces
  ivory:      '#F6F6F2',   // FAQ drawer backgrounds, callout boxes
  formBg:     '#F9F9F8',   // Form input backgrounds

  // Scrollbar
  scrollThumb:      '#D4D4D0',
  scrollThumbHover: '#101010',
} as const;

export type ColorKey = keyof typeof COLORS;

// ─── Spacing — 8px Grid ──────────────────────────────────────────────────────
// All spacing decisions are multiples of 8.
// These map to Tailwind's default scale: space-2 = 8px (0.5rem), etc.
// Use Tailwind classes (p-4, gap-8, py-24) — this is documentation.

export const SPACE = {
  1:  '8px',    // Icon gaps, micro-adjustments
  2:  '16px',   // Text groups, badge padding
  3:  '24px',   // Card internal padding
  4:  '32px',   // Component gaps
  5:  '40px',   // Section header to content
  6:  '48px',   // Between card groups
  8:  '64px',   // Section padding (mobile)
  10: '80px',   // Section padding (tablet)
  12: '96px',   // Section padding (desktop)
  16: '128px',  // Major editorial transitions
} as const;

// ─── Container ───────────────────────────────────────────────────────────────
// One shared frame for every section. Use these classes verbatim.

export const CONTAINER = {
  maxWidth:  '1440px',             // max-w-[1440px]
  paddingX:  'px-6 md:px-10',     // Locked — do not expand to lg:px-24
  classes:   'max-w-[1440px] mx-auto px-6 md:px-10',
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────
// Role-based type scale. Inter handles display + body via weight/tracking contrast.
// Geist Mono handles all metadata, indices, labels, and badges.

export const TYPE = {
  display: {
    family:   'Inter',
    weight:   '700-900',
    size:     'clamp(44px, 7.5vw, 110px)',
    leading:  '0.92',
    tracking: '-0.05em',
    // Tailwind: font-display font-bold text-[clamp(44px,7.5vw,110px)] leading-[0.92] tracking-[-0.05em]
  },
  heading: {
    family:   'Inter',
    weight:   '600-700',
    size:     'clamp(28px, 4vw, 64px)',
    leading:  '1.0',
    tracking: '-0.04em',
    // Tailwind: font-display font-semibold text-[clamp(28px,4vw,64px)] leading-none tracking-[-0.04em]
  },
  body: {
    family:   'Inter',
    weight:   '300-400',
    size:     '1rem',
    leading:  '1.65',
    tracking: 'normal',
    maxWidth: '38ch',
    // Tailwind: font-sans font-light text-base leading-[1.65]
  },
  meta: {
    family:   'Geist Mono',
    weight:   '500-600',
    size:     '0.6875rem',  // 11px
    leading:  '1.2',
    tracking: '0.12em-0.2em',
    transform: 'uppercase',
    // Tailwind: font-mono font-medium text-[11px] tracking-[0.15em] uppercase
  },
} as const;

// ─── Section Vertical Rhythm ──────────────────────────────────────────────────
// Consistent padding for each section type.

export const SECTION_PADDING = {
  editorial:   'py-16 md:py-24',    // About Statement, FAQ, Projects, Services header
  page:        'py-20 md:py-28',    // Full internal pages (AboutPage, ContactPage)
  cinematic:   'min-h-screen',      // Hero, Media Break (viewport-relative)
} as const;

// ─── Page Background Sequence ─────────────────────────────────────────────────
// The documentary color flow. In order:

export const PAGE_FLOW = [
  { section: 'Hero',          bg: COLORS.ink,       text: COLORS.textLight,  tone: 'dark' },
  { section: 'Statement',     bg: COLORS.paperWarm, text: COLORS.textBase,   tone: 'light' },
  { section: 'Media Break',   bg: '#000000',        text: COLORS.textLight,  tone: 'dark' },
  { section: 'Programmes',    bg: COLORS.inkSoft,   text: COLORS.textLight,  tone: 'dark' },
  { section: 'Projects',      bg: COLORS.paper,     text: COLORS.textBase,   tone: 'light' },
  { section: 'FAQ',           bg: COLORS.paperWarm, text: COLORS.textBase,   tone: 'light' },
  { section: 'Footer',        bg: COLORS.nearBlack, text: COLORS.textLight,  tone: 'dark' },
] as const;
