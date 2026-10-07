/**
 * Route Manifest — Budget Ndio Story
 * ────────────────────────────────────
 * Single source of truth for all application route paths.
 * Import ROUTES instead of hardcoding strings like "/projects" in components.
 *
 * @example
 * import { ROUTES } from '@/lib/routes';
 * <Link to={ROUTES.about}>About</Link>
 * <Link to={ROUTES.project('county-budget-where-money-comes-from')}>County Budget Investigation</Link>
 */

import { SITE_CONTENT } from '../data/content/site';

// ─── Core Route Paths ─────────────────────────────────────────────────────────

export const ROUTES = {
  // Pages
  home:     '/',
  about:    '/about',
  studio:   '/studio',
  ratecard: '/ratecard',
  contact:  '/contact',
  terms:    '/terms',
  privacy:  '/privacy',
  cookies:  '/cookies',
  whitepaper: '/whitepaper',
  faq:      '/faq',
  help:     '/help',
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
  },
} as const;

// ─── Programme Slugs ──────────────────────────────────────────────────────────
// Must match the `id` field in src/data/services.ts (3 Flagship Civic Programmes)

export const PROGRAMME_SLUGS = {
  connect:    'bns-connect',
  mashinani:  'bns-mashinani',
  wanahabari: 'bns-wanahabari',
} as const;

export type ProgrammeSlug = (typeof PROGRAMME_SLUGS)[keyof typeof PROGRAMME_SLUGS];

// ─── Navigation Structure ─────────────────────────────────────────────────────
// Content lives in src/data/content/site.ts (CMS-editable). Re-exported here so
// existing importers keep working.

export const NAV_LINKS = SITE_CONTENT.navLinks;

export type NavLink = (typeof NAV_LINKS)[number];

// ─── Programme Preview Links (Navbar hover submenu) ──────────────────────────
// 3 Flagship Civic Programmes under BNS Foundation

export const PROGRAMME_PREVIEW = SITE_CONTENT.programmePreview;

// ─── Footer Nav Columns ───────────────────────────────────────────────────────

export const FOOTER_NAV_PRIMARY = SITE_CONTENT.footerNavPrimary;

export const FOOTER_NAV_SECONDARY = SITE_CONTENT.footerNavSecondary;

// ─── External / Contact Links ─────────────────────────────────────────────────

export const CONTACT = SITE_CONTENT.contact;

export const SOCIAL = SITE_CONTENT.social;
