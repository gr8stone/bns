/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ── Color Tokens (AI in Design Report 2026 / State of AI Design) ─────────
      colors: {
        // Inspo system palette
        coral:        '#f87343',   // Dominant coral
        peach:        '#fa9c7b',   // Surface peach
        terracotta:   '#9c4527',   // Ink / accent terracotta
        sage:         '#7d9590',   // Support sage
        slate:        '#b4b7b6',   // Muted slate

        // Section backgrounds
        ink:          '#0B0C0E',   // High-contrast deep ink
        'ink-soft':   '#1A1C1E',   // Soft charcoal
        'paper-warm': '#FAFAF8',   // Light surface
        paper:        '#FFFFFF',   // Stark white

        // Near-black footer
        'near-black': '#070809',

        // Typography on light sections
        'text-base':  '#111214',
        'text-muted': '#656563',

        // Typography on dark sections
        'text-light': '#FFFFFF',
        'text-dim':   '#b4b7b6',

        // Borders / hairlines
        'line-dark':  'rgba(16, 16, 16, 0.12)',
        'line-light': 'rgba(255, 255, 255, 0.12)',

        // Brand accents
        accent:          '#9c4527',
        'accent-coral':  '#f87343',
        'accent-sage':   '#7d9590',

        // Interactive surfaces
        ivory:    '#FAFAF8',
        'form-bg': '#FFFFFF',
      },

      // ── Font Families (Beausite Classic Medium ramp) ─────────────────────────
      fontFamily: {
        sans:    ['"Beausite Classic Medium"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Beausite Classic Medium"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      // ── Letter Spacing ──────────────────────────────────────────────────────
      letterSpacing: {
        tighter: '-0.06em',   // h1/h2 tight kerning (-7.2px on 120px, -4.8px on 80px)
        tight:   '-0.04em',   // h3 tight kerning (-1.04px on 26px)
        normal:  '0em',       // Body copy
        wide:    '0.12em',    // Metadata labels
        wider:   '0.15em',    // Section markers
        widest:  '0.20em',    // Mono labels
      },

      // ── Line Heights ────────────────────────────────────────────────────────
      lineHeight: {
        display: '0.95',   // h1/h2 leading (0.95)
        heading: '0.95',   // Section headings
        tight:   '1.05',
        snug:    '1.2',
        body:    '1.4',    // Body leading (1.4 per DESIGN.md)
      },

      // ── Max Widths ──────────────────────────────────────────────────────────
      maxWidth: {
        container: '1425px',  // max-w-container — 1425px per DESIGN.md
        prose:     '42ch',    // max-w-prose — body copy columns
        statement: '52ch',    // max-w-statement — large editorial statements
      },

      // ── Border Radius (Strict 0px per DESIGN.md) ─────────────────────────────
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },

      // ── Animations ──────────────────────────────────────────────────────────
      animation: {
        marquee:         'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
    },
  },
  plugins: [],
}
