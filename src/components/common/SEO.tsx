import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { SERVICES } from '../../data/services';

const SITE_URL = 'https://budgetndiostory.org';
const DEFAULT_IMAGE = '/images/bns/towwnhallmay/129A3912.jpg';

interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'Article' | 'Service';
}

const STATIC_METADATA: Record<string, PageMetadata> = {
  '/': {
    title: 'Budget Ndio Story | Civic Media & Public Finance Accountability',
    description:
      'Budget Ndio Story turns public budgets, sovereign debt data, and fiscal policy into accessible civic media, investigative stories, and community action across Kenya.',
    canonicalPath: '/',
    schemaType: 'WebPage',
  },
  '/about': {
    title: 'About Budget Ndio Story | Civic Media & Public Finance',
    description:
      'Learn how Budget Ndio Story combines public finance research, civic media, and grassroots action to make government budgets understandable and accountable.',
    canonicalPath: '/about',
    schemaType: 'AboutPage',
  },
  '/projects': {
    title: 'Projects | Civic Media & Public Finance Stories | Budget Ndio Story',
    description:
      'Explore Budget Ndio Story investigations, docuseries, town halls, and visual explainers about Kenya\'s public finance and civic accountability.',
    canonicalPath: '/projects',
    schemaType: 'CollectionPage',
  },
  '/services': {
    title: 'Programmes | Budget Ndio Story',
    description:
      'Discover BNS Connect, BNS Mashinani, BNS Wanahabari, and BNS Studio programmes for civic participation, grassroots budget literacy, and public-interest media.',
    canonicalPath: '/programmes',
    schemaType: 'CollectionPage',
  },
  '/programmes': {
    title: 'Programmes | Budget Ndio Story',
    description:
      'Discover BNS Connect, BNS Mashinani, BNS Wanahabari, and BNS Studio programmes for civic participation, grassroots budget literacy, and public-interest media.',
    canonicalPath: '/programmes',
    schemaType: 'CollectionPage',
  },
  '/contact': {
    title: 'Contact Budget Ndio Story | Civic Action & Public Finance',
    description:
      'Connect with Budget Ndio Story to host a civic dialogue, request a budget literacy workshop, commission public-interest media, or partner on fiscal accountability work.',
    canonicalPath: '/contact',
    schemaType: 'ContactPage',
  },
  '/terms': {
    title: 'Terms of Service | Budget Ndio Story',
    description: 'Read the terms governing access to Budget Ndio Story civic media, public finance resources, and community programmes.',
    canonicalPath: '/terms',
    noIndex: true,
  },
  '/privacy': {
    title: 'Privacy Policy | Budget Ndio Story',
    description: 'Read how Budget Ndio Story protects citizen, source, and contact information across its civic media platform.',
    canonicalPath: '/privacy',
    noIndex: true,
  },
  '/404': {
    title: 'Page Not Found | Budget Ndio Story',
    description: 'The requested Budget Ndio Story page could not be found.',
    canonicalPath: '/404',
    noIndex: true,
  },
};

const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Budget Ndio Story',
  url: SITE_URL,
  logo: `${SITE_URL}/images/bns/logo.svg`,
  email: 'info@budgetndiostory.org',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://youtube.com/@budgetndiostory',
    'https://x.com/budgetndiostory',
    'https://www.tiktok.com/@budget.ndio.story',
    'https://www.linkedin.com/company/budget-ndio-story/',
    'https://instagram.com/budgetndiostory',
    'https://www.facebook.com/share/1CPg2LgfVJ/',
    'https://wa.me/254790631623',
  ],
};

function getDetailMetadata(pathname: string): PageMetadata | undefined {
  const projectMatch = pathname.match(/^\/(?:projects|work)\/([^/]+)$/);
  if (projectMatch) {
    const project = PROJECTS.find((item) => item.slug === projectMatch[1]);
    if (!project) return undefined;

    return {
      title: `${project.title} | Budget Ndio Story`,
      description: project.summary,
      canonicalPath: `/projects/${project.slug}`,
      image: project.heroImage,
      type: 'article',
      schemaType: 'Article',
    };
  }

  const serviceMatch = pathname.match(/^\/(?:services|programmes)\/([^/]+)$/);
  if (serviceMatch) {
    const service = SERVICES.find((item) => item.slug === serviceMatch[1] || item.aliases?.includes(serviceMatch[1]));
    if (!service) return undefined;

    return {
      title: `${service.title} | Budget Ndio Story`,
      description: service.shortDescription,
      canonicalPath: `/programmes/${service.slug}`,
      image: service.image,
      schemaType: 'Service',
    };
  }

  return undefined;
}

function getMetadata(pathname: string): PageMetadata {
  if (pathname === '/work') {
    return { ...STATIC_METADATA['/projects'], canonicalPath: '/projects' };
  }

  const detailMetadata = getDetailMetadata(pathname);
  if (detailMetadata) return detailMetadata;

  if (pathname.startsWith('/blog') || pathname.startsWith('/journal') || pathname === '/process' || pathname === '/studio') {
    return {
      ...STATIC_METADATA['/about'],
      canonicalPath: '/about',
      noIndex: true,
    };
  }

  return STATIC_METADATA[pathname] ?? {
    title: 'Page Not Found | Budget Ndio Story',
    description: 'The requested Budget Ndio Story page could not be found.',
    canonicalPath: '/404',
    noIndex: true,
  };
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getMetadata(pathname);
    const canonicalUrl = `${SITE_URL}${metadata.canonicalPath}`;
    const imageUrl = new URL(metadata.image ?? DEFAULT_IMAGE, SITE_URL).toString();
    const robots = metadata.noIndex
      ? 'noindex,nofollow'
      : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    document.title = metadata.title;
    document.documentElement.lang = 'en';
    upsertMeta('name', 'title', metadata.title);
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('name', 'author', 'Budget Ndio Story');
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'theme-color', '#0c0c0d');
    upsertMeta('property', 'og:type', metadata.type ?? 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', metadata.title);
    upsertMeta('property', 'og:description', metadata.description);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', metadata.title);
    upsertMeta('property', 'og:site_name', 'Budget Ndio Story');
    upsertMeta('property', 'og:locale', 'en_KE');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', metadata.title);
    upsertMeta('name', 'twitter:description', metadata.description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertLink('canonical', canonicalUrl);

    const breadcrumbItems = pathname.split('/').filter(Boolean);
    const breadcrumbSchema = breadcrumbItems.length
      ? {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            ...breadcrumbItems.map((segment, index) => ({
              '@type': 'ListItem',
              position: index + 2,
              name: segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
              item: `${SITE_URL}/${breadcrumbItems.slice(0, index + 1).join('/')}`,
            })),
          ],
        }
      : null;

    const pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: 'Budget Ndio Story',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en-KE',
        },
        {
          '@type': metadata.schemaType ?? 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: metadata.title,
          description: metadata.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          ...(metadata.image ? { image: imageUrl } : {}),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ],
    };

    let schemaElement = document.head.querySelector<HTMLScriptElement>('script[data-bns-seo-schema]');
    if (!schemaElement) {
      schemaElement = document.createElement('script');
      schemaElement.type = 'application/ld+json';
      schemaElement.dataset.bnsSeoSchema = 'true';
      document.head.appendChild(schemaElement);
    }
    schemaElement.textContent = JSON.stringify(pageSchema);
  }, [pathname]);

  return null;
}