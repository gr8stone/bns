/**
 * SEO content — Budget Ndio Story
 * Site-level meta defaults, per-route metadata, and structured-data values.
 * Plain JSON-like data, editable via CMS.
 */

export const SEO_CONTENT = {
  siteUrl: 'https://budgetndiostory.org',
  siteName: 'Budget Ndio Story',
  defaultImage: '/images/bns/towwnhallmay/129A3912.jpg',
  detailTitleSuffix: ' | Budget Ndio Story',
  author: 'Budget Ndio Story',
  htmlLang: 'en',
  themeColor: '#0c0c0d',
  ogLocale: 'en_KE',
  inLanguage: 'en-KE',
  twitterCard: 'summary_large_image',
  robotsIndex: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  robotsNoIndex: 'noindex,nofollow',
  breadcrumbHomeLabel: 'Home',

  organization: {
    name: 'Budget Ndio Story',
    logoPath: '/images/bns/logo.svg',
    email: 'info@budgetndiostory.org',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
    sameAs: [
      'https://youtube.com/@budgetndiostory',
      'https://x.com/budgetndiostory',
      'https://www.tiktok.com/@budget.ndio.story',
      'https://www.linkedin.com/company/budget-ndio-story/',
      'https://instagram.com/budgetndiostory',
      'https://www.facebook.com/share/1CPg2LgfVJ/',
      'https://wa.me/254790631623',
    ],
  },

  notFound: {
    title: 'Page Not Found | Budget Ndio Story',
    description: 'The requested Budget Ndio Story page could not be found.',
    canonicalPath: '/404',
  },

  pages: [
    {
      path: '/',
      title: 'Budget Ndio Story | Civic Media & Public Finance Accountability',
      description:
        'Budget Ndio Story turns public budgets, sovereign debt data, and fiscal policy into accessible civic media, investigative stories, and community action across Kenya.',
      canonicalPath: '/',
      schemaType: 'WebPage',
      noIndex: false,
    },
    {
      path: '/about',
      title: 'About Budget Ndio Story | Civic Media & Public Finance',
      description:
        'Learn how Budget Ndio Story combines public finance research, civic media, and grassroots action to make government budgets understandable and accountable.',
      canonicalPath: '/about',
      schemaType: 'AboutPage',
      noIndex: false,
    },
    {
      path: '/projects',
      title: 'Projects | Civic Media & Public Finance Stories | Budget Ndio Story',
      description:
        "Explore Budget Ndio Story investigations, docuseries, town halls, and visual explainers about Kenya's public finance and civic accountability.",
      canonicalPath: '/projects',
      schemaType: 'CollectionPage',
      noIndex: false,
    },
    {
      path: '/services',
      title: 'Programmes | Budget Ndio Story',
      description:
        'Discover BNS Connect, BNS Mashinani, BNS Wanahabari, and BNS Studio programmes for civic participation, grassroots budget literacy, and public-interest media.',
      canonicalPath: '/programmes',
      schemaType: 'CollectionPage',
      noIndex: false,
    },
    {
      path: '/programmes',
      title: 'Programmes | Budget Ndio Story',
      description:
        'Discover BNS Connect, BNS Mashinani, BNS Wanahabari, and BNS Studio programmes for civic participation, grassroots budget literacy, and public-interest media.',
      canonicalPath: '/programmes',
      schemaType: 'CollectionPage',
      noIndex: false,
    },
    {
      path: '/studio',
      title: 'BNS Studios | Impact Production & Creative Civic Media | Budget Ndio Story',
      description:
        'BNS Studios translates complex research into high-impact podcasts, animations, and documentaries, with ≥ 40% of net profits reinvested into BNS Foundation civic work.',
      canonicalPath: '/studio',
      schemaType: 'WebPage',
      noIndex: false,
    },
    {
      path: '/ratecard',
      title: 'Rate Card | BNS Studios Commercial Production Pricing | Budget Ndio Story',
      description:
        'Official production tariffs for BNS Studios podcasts, kinetic animated explainers, research documentaries, digital campaigns, and town halls.',
      canonicalPath: '/ratecard',
      schemaType: 'WebPage',
      noIndex: false,
    },
    {
      path: '/whitepaper',
      title: 'Two-Entity Model Whitepaper | Budget Ndio Story',
      description:
        'The institutional governance architecture, fiduciary endowment covenant, and commercial studio model powering Budget Ndio Story.',
      canonicalPath: '/whitepaper',
      schemaType: 'Article',
      noIndex: false,
    },
    {
      path: '/faq',
      title: 'Frequently Asked Questions | Budget Ndio Story',
      description:
        'Common questions regarding the Two-Entity Model, BNS Studios tariffs, civic programmes, partnerships, and public finance data integrity.',
      canonicalPath: '/faq',
      schemaType: 'WebPage',
      noIndex: false,
    },
    {
      path: '/contact',
      title: 'Contact Budget Ndio Story | Civic Action & Public Finance',
      description:
        'Connect with Budget Ndio Story to host a civic dialogue, request a budget literacy workshop, commission public-interest media, or partner on fiscal accountability work.',
      canonicalPath: '/contact',
      schemaType: 'ContactPage',
      noIndex: false,
    },
    {
      path: '/terms',
      title: 'Terms of Service | Budget Ndio Story',
      description:
        'Read the terms governing access to Budget Ndio Story civic media, public finance resources, and community programmes.',
      canonicalPath: '/terms',
      schemaType: 'WebPage',
      noIndex: true,
    },
    {
      path: '/privacy',
      title: 'Privacy Policy | Budget Ndio Story',
      description:
        'Read how Budget Ndio Story protects citizen, source, and contact information across its civic media platform.',
      canonicalPath: '/privacy',
      schemaType: 'WebPage',
      noIndex: true,
    },
    {
      path: '/404',
      title: 'Page Not Found | Budget Ndio Story',
      description: 'The requested Budget Ndio Story page could not be found.',
      canonicalPath: '/404',
      schemaType: 'WebPage',
      noIndex: true,
    },
  ],
};
