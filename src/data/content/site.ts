/**
 * Site-wide content — Budget Ndio Story
 * Navigation, contact, social, and shared chrome copy (Navbar, Footer,
 * Preloader, Back-to-top). Plain JSON-like data, editable via CMS.
 * Must not import from src/lib/routes.ts (routes re-exports from here).
 */

export const SITE_CONTENT = {
  navLinks: [
    { label: 'Home', index: '01', href: '/' },
    { label: 'About', index: '02', href: '/about' },
    { label: 'Programmes', index: '03', href: '/programmes' },
    { label: 'Studio', index: '04', href: '/studio' },
    { label: 'Productions', index: '05', href: '/projects' },
    { label: 'Contact', index: '06', href: '/contact' },
  ],

  programmePreview: [
    { label: 'BNS Connect', href: '/programmes/bns-connect' },
    { label: 'BNS Mashinani', href: '/programmes/bns-mashinani' },
    { label: 'BNS Wanahabari', href: '/programmes/bns-wanahabari' },
  ],

  footerNavPrimary: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PROGRAMMES', href: '/programmes' },
    { label: 'STUDIO', href: '/studio' },
    { label: 'PRODUCTIONS', href: '/projects' },
  ],

  footerNavSecondary: [
    { label: 'CONTACT', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'TERMS', href: '/terms' },
    { label: 'PRIVACY', href: '/privacy' },
    { label: 'COOKIES', href: '/cookies' },
    { label: 'WHITE PAPER', href: '/whitepaper' },
  ],

  contact: {
    phone: '+254 790 631 623',
    phoneHref: 'tel:+254790631623',
    email: 'info@budgetndiostory.org',
    emailHref: 'mailto:info@budgetndiostory.org',
  },

  social: [
    { label: 'YouTube', href: 'https://youtube.com/@budgetndiostory' },
    { label: 'X', href: 'https://x.com/budgetndiostory' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@budget.ndio.story' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/budget-ndio-story/' },
    { label: 'Instagram', href: 'https://instagram.com/budgetndiostory' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1CPg2LgfVJ/' },
    { label: 'WhatsApp', href: 'https://wa.me/254790631623' },
  ],

  navbar: {
    logoSrc: '/images/bns/logo.svg',
    logoAlt: '',
    brandName: 'BUDGET NDIO STORY',
    primaryNavAriaLabel: 'Primary',
    ctaLabel: 'Get Involved',
    openMenuAriaLabel: 'Open Menu',
    closeMenuAriaLabel: 'Close Menu',
    menuLabel: 'MENU',
    closeLabel: 'CLOSE',
    contactHeading: 'CIVIC CONTACT',
    hubsHeading: 'HUBS',
    hubsText: 'Nairobi • Kenya (47 Counties)',
    indexHeading: 'INDEX',
    indexLinks: [
      { label: 'White Paper', href: '/whitepaper' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
    ],
    copyright: '© 2026',
    tagline: 'Budget Ndio Story • AI in Civic Design',
  },

  footer: {
    eyebrow: 'CIVIC ENGAGEMENT • 47 COUNTIES',
    headingLead: 'What could your community',
    headingEmphasis: 'become?',
    ctaDescription:
      'Connect with Budget Ndio Story to organize county town halls, request ward-level budget training, or pitch an investigative story.',
    ctaLabel: 'Get Involved',
    watermarkAriaLabel: 'Budget Ndio Story',
    watermarkText: 'BUDGET NDIO STORY • 47 COUNTIES •',
    brandHref: '/',
    logoSrc: '/images/bns/logo.svg',
    logoAlt: 'Budget Ndio Story',
    brandName: 'Budget Ndio Story®',
    description:
      "An independent civic media & public finance platform working to make Kenya's public budgets readable, relatable, and responsive across all 47 counties.",
    socialLinks: [
      { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@budgetndiostory' },
      { icon: 'x', label: 'X (Twitter)', href: 'https://x.com/budgetndiostory' },
      { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@budget.ndio.story' },
      { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/budget-ndio-story/' },
      { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/budgetndiostory' },
      { icon: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/254790631623' },
    ],
    partnersAriaLabel: 'Partners',
    partnerLogos: [
      { src: '/images/bns/logo.svg', alt: 'Budget Ndio Story' },
      { src: '/images/bns/partners/tisa.svg', alt: 'TISA' },
      { src: '/images/bns/partners/committee-on-fiscal-studies.png', alt: 'University of Nairobi' },
      { src: '/images/bns/partners/house-of-fiscal-wisdom.png', alt: 'House of Fiscal Wisdom' },
    ],
    directoryHeading: 'DIRECTORY',
    directoryLinks: [
      { label: 'HOME', href: '/' },
      { label: 'ABOUT US', href: '/about' },
      { label: 'PROGRAMMES', href: '/programmes' },
      { label: 'STUDIO', href: '/studio' },
      { label: 'PRODUCTIONS', href: '/projects' },
    ],
    resourcesHeading: 'RESOURCES',
    resourceLinks: [
      { label: 'WHITE PAPER', href: '/whitepaper' },
      { label: 'RATE CARD', href: '/ratecard' },
      { label: 'FAQ', href: '/faq' },
      { label: 'TERMS', href: '/terms' },
      { label: 'PRIVACY', href: '/privacy' },
      { label: 'COOKIES', href: '/cookies' },
    ],
    coordinatesHeading: 'COORDINATES',
    addressLine1: 'Civic Action & Public Finance Hub,',
    addressLine2: 'Nairobi, Kenya • 47 Counties',
    copyrightPrefix: '©',
    copyrightSuffix: 'BUDGET NDIO STORY • ALL RIGHTS RESERVED',
    legalNote: 'KENYA DEVOLUTION ARTICLE 10 • 201',
  },

  preloader: {
    topLeftText: 'Budget Ndio Story® // Civic Media & Public Finance',
    topRightText: 'Edition 2026 // Civic Tech & Storytelling',
    wordmark: 'Budget Ndio Story®',
    taglines: [
      { label: 'Civic Media' },
      { label: 'Budget Literacy' },
      { label: 'Public Finance' },
    ],
    bottomLeftText: 'Index 01 // Public Finance Archive',
    loadingPrefix: 'Loading [',
    loadingSuffix: '%]',
  },

  backToTop: {
    label: 'TOP',
  },
};
