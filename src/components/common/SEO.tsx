import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { SERVICES } from '../../data/services';
import { SEO_CONTENT } from '../../data/content/seo';

interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'Article' | 'Service';
}

// Built lazily: SEO_CONTENT is hydrated from the CMS after module load.
const getStaticMetadata = (): Record<string, PageMetadata> => Object.fromEntries(
  SEO_CONTENT.pages.map(({ path, schemaType, ...page }) => [
    path,
    { ...page, schemaType: schemaType as PageMetadata['schemaType'] },
  ])
);

const getOrganizationSchema = (SITE_URL: string) => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SEO_CONTENT.organization.name,
  url: SITE_URL,
  logo: `${SITE_URL}${SEO_CONTENT.organization.logoPath}`,
  email: SEO_CONTENT.organization.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SEO_CONTENT.organization.addressLocality,
    addressCountry: SEO_CONTENT.organization.addressCountry,
  },
  sameAs: SEO_CONTENT.organization.sameAs,
});

function getDetailMetadata(pathname: string): PageMetadata | undefined {
  const projectMatch = pathname.match(/^\/(?:projects|work)\/([^/]+)$/);
  if (projectMatch) {
    const project = PROJECTS.find(
      (item) => item.slug === projectMatch[1] || item.aliases?.includes(projectMatch[1])
    );
    if (!project) return undefined;

    return {
      title: `${project.title}${SEO_CONTENT.detailTitleSuffix}`,
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
      title: `${service.title}${SEO_CONTENT.detailTitleSuffix}`,
      description: service.shortDescription,
      canonicalPath: `/programmes/${service.slug}`,
      image: service.image,
      schemaType: 'Service',
    };
  }

  return undefined;
}

function getMetadata(pathname: string): PageMetadata {
  const STATIC_METADATA = getStaticMetadata();
  if (pathname === '/work') {
    return { ...STATIC_METADATA['/projects'], canonicalPath: '/projects' };
  }

  const detailMetadata = getDetailMetadata(pathname);
  if (detailMetadata) return detailMetadata;

  if (pathname.startsWith('/blog') || pathname.startsWith('/journal') || pathname === '/process') {
    return {
      ...STATIC_METADATA['/about'],
      canonicalPath: '/about',
      noIndex: true,
    };
  }

  return STATIC_METADATA[pathname] ?? {
    title: SEO_CONTENT.notFound.title,
    description: SEO_CONTENT.notFound.description,
    canonicalPath: SEO_CONTENT.notFound.canonicalPath,
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
    const SITE_URL = SEO_CONTENT.siteUrl;
    const DEFAULT_IMAGE = SEO_CONTENT.defaultImage;
    const metadata = getMetadata(pathname);
    const canonicalUrl = `${SITE_URL}${metadata.canonicalPath}`;
    const imageUrl = new URL(metadata.image ?? DEFAULT_IMAGE, SITE_URL).toString();
    const robots = metadata.noIndex
      ? SEO_CONTENT.robotsNoIndex
      : SEO_CONTENT.robotsIndex;

    document.title = metadata.title;
    document.documentElement.lang = SEO_CONTENT.htmlLang;
    upsertMeta('name', 'title', metadata.title);
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('name', 'author', SEO_CONTENT.author);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'theme-color', SEO_CONTENT.themeColor);
    upsertMeta('property', 'og:type', metadata.type ?? 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', metadata.title);
    upsertMeta('property', 'og:description', metadata.description);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', metadata.title);
    upsertMeta('property', 'og:site_name', SEO_CONTENT.siteName);
    upsertMeta('property', 'og:locale', SEO_CONTENT.ogLocale);
    upsertMeta('name', 'twitter:card', SEO_CONTENT.twitterCard);
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
            { '@type': 'ListItem', position: 1, name: SEO_CONTENT.breadcrumbHomeLabel, item: SITE_URL },
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
        getOrganizationSchema(SITE_URL),
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SEO_CONTENT.siteName,
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: SEO_CONTENT.inLanguage,
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