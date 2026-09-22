/**
 * Route Manifest — Budget Ndio Story
 * ────────────────────────────────────
 * Single source of truth for all application route paths.
 * Import ROUTES instead of hardcoding strings like "/projects" in components.
 *
 * @example
 * import { ROUTES } from '@/lib/routes';
 * <Link to={ROUTES.about}>About</Link>
 * <Link to={ROUTES.project('bns-connect')}>BNS Connect</Link>
 */

// ─── Core Route Paths ─────────────────────────────────────────────────────────

export const ROUTES = {
  // Pages
  home:     '/',
  about:    '/about',
  contact:  '/contact',
  terms:    '/terms',
  privacy:  '/privacy',
  notFound: '/404',

  // Productions (projects)
  projects: '/projects',
  project:  (slug: string) => `/projects/${slug}`,

  // Programmes (services) — canonical BNS terminology
  programmes: '/programmes',
  programme:  (slug: string) => `/programmes/${slug}`,

  // Compatibility aliases (legacy paths — these redirect in App.tsx)
  _legacy: {
    services: '/services',
    service:  (slug: string) => `/services/${slug}`,
    blog:     '/blog',
    journal:  '/journal',
    work:     '/work',
    process:  '/process',
    studio:   '/studio',
  },
} as const;

// ─── Programme Slugs ──────────────────────────────────────────────────────────
// Must match the `id` field in src/data/services.ts

export const PROGRAMME_SLUGS = {
  connect:    'bns-connect',
  mashinani:  'bns-mashinani',
  wanahabari: 'bns-wanahabari',
  studio:     'bns-studio',
} as const;

export type ProgrammeSlug = (typeof PROGRAMME_SLUGS)[keyof typeof PROGRAMME_SLUGS];

// ─── Navigation Structure ─────────────────────────────────────────────────────
// Drives both Navbar and Footer nav. Change labels or routes here, not in components.

export const NAV_LINKS = [
  { label: 'Home',        index: '01', href: ROUTES.home       },
  { label: 'About',       index: '02', href: ROUTES.about      },
  { label: 'Programmes',  index: '03', href: ROUTES.programmes },
  { label: 'Productions', index: '04', href: ROUTES.projects   },
  { label: 'Contact',     index: '05', href: ROUTES.contact    },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

// ─── Programme Preview Links (Navbar hover submenu) ──────────────────────────
// All four pillars. Drives the Programmes submenu in Navbar.

export const PROGRAMME_PREVIEW = [
  { label: 'BNS Connect',    href: ROUTES.programme(PROGRAMME_SLUGS.connect)    },
  { label: 'BNS Mashinani',  href: ROUTES.programme(PROGRAMME_SLUGS.mashinani)  },
  { label: 'BNS Wanahabari', href: ROUTES.programme(PROGRAMME_SLUGS.wanahabari) },
  { label: 'BNS Studio',     href: ROUTES.programme(PROGRAMME_SLUGS.studio)     },
] as const;

// ─── Footer Nav Columns ───────────────────────────────────────────────────────

export const FOOTER_NAV_PRIMARY = [
  { label: 'HOME',        href: ROUTES.home        },
  { label: 'ABOUT US',    href: ROUTES.about       },
  { label: 'PROGRAMMES',  href: ROUTES.programmes  },
  { label: 'PRODUCTIONS', href: ROUTES.projects    },
] as const;

export const FOOTER_NAV_SECONDARY = [
  { label: 'CONTACT', href: ROUTES.contact  },
  { label: 'TERMS',   href: ROUTES.terms    },
  { label: 'PRIVACY', href: ROUTES.privacy  },
] as const;

// ─── External / Contact Links ─────────────────────────────────────────────────

export const CONTACT = {
  phone:    '+254 790 631 623',
  phoneHref: 'tel:+254790631623',
  email:    'info@budgetndiostory.org',
  emailHref: 'mailto:info@budgetndiostory.org',
} as const;

export const SOCIAL = [
  { label: 'YouTube',   href: 'https://youtube.com/@budgetndiostory'              },
  { label: 'X',         href: 'https://x.com/budgetndiostory'                     },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@budget.ndio.story'         },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/budget-ndio-story/' },
  { label: 'Instagram', href: 'https://instagram.com/budgetndiostory'             },
  { label: 'Facebook',  href: 'https://www.facebook.com/share/1CPg2LgfVJ/'       },
  { label: 'WhatsApp',  href: 'https://wa.me/254790631623'                        },
] as const;
