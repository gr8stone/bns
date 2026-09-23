/**
 * Design Token Source of Truth — AI in Design Report 2026 / Budget Ndio Story
 * ─────────────────────────────────────────────────────────────────────────────
 * Extracted by Inspo (https://inspomcp.dev/d/stateofaidesign-com/DESIGN.md)
 * All design decisions live here. Tailwind config, CSS custom properties,
 * and Framer Motion constants reference these values.
 *
 * DO NOT add raw hex values in component files.
 * Use Tailwind token classes (bg-ink, text-muted, border-line-dark, bg-accent, etc.)
 * or import JS constants from this file and motion.ts.
 */

// ─── Color Palette (AI in Design Report 2026) ───────────────────────────────
export const COLORS = {
  // Inspo System Palette
  coral:       '#f87343',   // Support / Dominant — saturated vibrant coral
  peach:       '#fa9c7b',   // Support / Surface  — warm soft peach
  terracotta:  '#9c4527',   // Accent / Ink       — deep terracotta rust
  sage:        '#7d9590',   // Support            — muted sage teal
  slate:       '#b4b7b6',   // Muted              — slate gray

  // Controlled Accents
  accent:      '#9c4527',   // Primary accent (terracotta)
  accentCoral: '#f87343',   // Vibrant coral accent
  accentSage:  '#7d9590',   // Secondary sage accent
  agencyBlue:  '#374EAB',   // Agency Brand Royal Blue (Vantage Studio / BNS classic blue #374EAB)

  // Section backgrounds (Light mode focus with stark contrast)
  paper:       '#FFFFFF',   // Stark white background
  paperWarm:   '#FAFAF8',   // Clean warm white surface
  ink:         '#0B0C0E',   // High-contrast deep ink
  inkSoft:     '#1A1C1E',   // Soft charcoal
  nearBlack:   '#070809',   // Near-black closing frame

  // Typography — on light sections
  textBase:    '#111214',   // Primary text on white/paper
  textMuted:   '#656563',   // Secondary / meta text on light
  textSlate:   '#b4b7b6',   // Slate muted detail text

  // Typography — on dark sections
  textLight:   '#FFFFFF',   // Primary text on dark sections
  textDim:     '#b4b7b6',   // Secondary / meta text on dark sections

  // Borders / hairlines
  lineDark:    'rgba(16, 16, 16, 0.12)',   // Hairline on light sections
  lineLight:   'rgba(255, 255, 255, 0.12)',// Hairline on dark sections
  lineSlate:   '#b4b7b6',

  // Interactive surfaces
  surface:     '#fa9c7b',
  ivory:       '#FAFAF8',
  formBg:      '#FFFFFF',

  // Scrollbar
  scrollThumb:      '#b4b7b6',
  scrollThumbHover: '#9c4527',
} as const;

export type ColorKey = keyof typeof COLORS;

// ─── Spacing — 16px Base Grid ───────────────────────────────────────────────
// Spacing scale: 16px per DESIGN.md
export const SPACE = {
  half: '8px',
  1:    '16px',   // Base step 16px
  2:    '32px',
  3:    '48px',
  4:    '64px',
  5:    '80px',
  6:    '96px',
  8:    '128px',
} as const;

// ─── Container ───────────────────────────────────────────────────────────────
// Max content width: 1425px per DESIGN.md
export const CONTAINER = {
  maxWidth:  '1425px',             // Locked to 1425px
  paddingX:  'px-6 md:px-10',     // Consistent horizontal padding
  classes:   'max-w-[1425px] mx-auto px-6 md:px-10',
} as const;

// ─── Border Radius ──────────────────────────────────────────────────────────
// Border radius: 0px per DESIGN.md
export const RADIUS = {
  none: '0px',
  base: '0px',
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────
// Type ramp from DESIGN.md: Beausite Classic Medium, sans-serif
export const TYPE = {
  h1: {
    family:   '"Beausite Classic Medium", Inter, sans-serif',
    weight:   '500',
    size:     'clamp(48px, 8vw, 120px)',
    leading:  '0.95',
    tracking: '-0.06em', // -7.2px on 120px
  },
  h2: {
    family:   '"Beausite Classic Medium", Inter, sans-serif',
    weight:   '500',
    size:     'clamp(36px, 5.5vw, 80px)',
    leading:  '0.95',
    tracking: '-0.06em', // -4.8px on 80px
  },
  h3: {
    family:   '"Beausite Classic Medium", Inter, sans-serif',
    weight:   '500',
    size:     'clamp(20px, 2vw, 26px)',
    leading:  '1.4',
    tracking: '-0.04em', // -1.04px on 26px
  },
  body: {
    family:   'Inter, system-ui, sans-serif',
    weight:   '400',
    size:     '12px',
    leading:  '1.4',
    tracking: '0',
    maxWidth: '42ch',
  },
  button: {
    family:   'Inter, system-ui, sans-serif',
    weight:   '400',
    size:     '12px',
    leading:  '1.4',
    tracking: '0',
  },
  meta: {
    family:   'Geist Mono, JetBrains Mono, monospace',
    weight:   '500',
    size:     '11px',
    leading:  '1.2',
    tracking: '0.15em',
    transform: 'uppercase',
  },
} as const;

// ─── Section Vertical Rhythm ──────────────────────────────────────────────────
export const SECTION_PADDING = {
  editorial:   'py-16 md:py-24',
  page:        'py-20 md:py-28',
  cinematic:   'min-h-screen',
} as const;

// ─── Page Background Sequence ─────────────────────────────────────────────────
export const PAGE_FLOW = [
  { section: 'Hero',          bg: COLORS.ink,       text: COLORS.textLight,  tone: 'dark' },
  { section: 'Statement',     bg: COLORS.paper,     text: COLORS.textBase,   tone: 'light' },
  { section: 'Media Break',   bg: '#000000',        text: COLORS.textLight,  tone: 'dark' },
  { section: 'Programmes',    bg: COLORS.inkSoft,   text: COLORS.textLight,  tone: 'dark' },
  { section: 'Projects',      bg: COLORS.paper,     text: COLORS.textBase,   tone: 'light' },
  { section: 'FAQ',           bg: COLORS.paperWarm, text: COLORS.textBase,   tone: 'light' },
  { section: 'Footer',        bg: COLORS.nearBlack, text: COLORS.textLight,  tone: 'dark' },
] as const;
