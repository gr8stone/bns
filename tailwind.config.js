/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ── Color Tokens ───────────────────────────────────────────────────────
      // Semantic names — not literal. Reference tokens.ts for JS values.
      // Usage: bg-ink, text-muted, border-line-dark, bg-accent, etc.
      colors: {
        // Section backgrounds (documentary flow)
        ink:        '#0B0C0E',   // Hero — deep charcoal
        'ink-soft': '#111923',   // Programmes — deep navy
        'paper-warm': '#F4F2ED', // Statement / FAQ — warm off-white
        paper:      '#FFFFFF',   // Projects — pure white

        // Near-black footer
        'near-black': '#070809',

        // Typography on light sections
        'text-base':  '#111214',
        'text-muted': '#656563',

        // Typography on dark sections
        'text-light': '#F5F4F0',
        'text-dim':   '#B7B8B5',

        // Borders / hairlines
        'line-dark':  'rgba(16, 16, 16, 0.12)',
        'line-light': 'rgba(255, 255, 255, 0.10)',

        // Single brand accent
        accent: '#374EAB',

        // Interactive surfaces
        ivory:    '#F6F6F2',
        'form-bg': '#F9F9F8',
      },

      // ── Font Families ───────────────────────────────────────────────────────
      // display = Inter (headings, hero). sans = Inter (body). mono = Geist Mono (metadata).
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      // ── Letter Spacing ──────────────────────────────────────────────────────
      letterSpacing: {
        tighter: '-0.05em',   // Display headlines
        tight:   '-0.04em',   // Section headings
        normal:  '0em',       // Body copy
        wide:    '0.12em',    // Metadata labels
        wider:   '0.15em',    // Section markers
        widest:  '0.20em',    // Tightest mono labels
      },

      // ── Line Heights ────────────────────────────────────────────────────────
      lineHeight: {
        display: '0.92',   // Hero headlines
        heading: '1.0',    // Section headings
        tight:   '1.05',
        snug:    '1.2',
        body:    '1.65',   // Body paragraphs
      },

      // ── Max Widths ──────────────────────────────────────────────────────────
      maxWidth: {
        container: '1440px',  // max-w-container — standard page frame
        prose:     '38ch',    // max-w-prose — body copy columns
        statement: '52ch',    // max-w-statement — large editorial statements
      },

      // ── Animations (active only) ─────────────────────────────────────────
      animation: {
        marquee:         'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
    },
  },
  plugins: [],
}
