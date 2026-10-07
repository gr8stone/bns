import { ABOUT_CONTENT } from "./about";
import { CONTACT_PAGE_CONTENT } from "./contact";
import { COOKIES_CONTENT } from "./cookies";
import { FAQ_PAGE_CONTENT } from "./faqPage";
import { HOME_CONTENT } from "./home";
import { NOT_FOUND_CONTENT } from "./notFound";
import { PRIVACY_CONTENT } from "./privacy";
import { PRODUCTION_DETAIL_CONTENT } from "./productionDetail";
import { PRODUCTIONS_PAGE_CONTENT } from "./productions";
import { PROGRAMME_DETAIL_CONTENT } from "./programmeDetail";
import { PROGRAMMES_PAGE_CONTENT } from "./programmes";
import { RATE_CARD_CONTENT } from "./rateCard";
import { SEO_CONTENT } from "./seo";
import { SHOWCASE_CONTENT } from "./showcase";
import { SITE_CONTENT } from "./site";
import { STUDIO_PAGE_CONTENT } from "./studioPage";
import { TERMS_CONTENT } from "./terms";
import { WHITEPAPER_CONTENT } from "./whitepaper";

export interface PageContentEntry {
  key: string;
  title: string;
  content: Record<string, unknown>;
}

// Each entry becomes one singleton Sanity document: _id "content-<key>", _type "<key>Content".
export const PAGE_CONTENT: PageContentEntry[] = [
  { key: "site", title: "Site: navigation, footer & contact", content: SITE_CONTENT },
  { key: "seo", title: "Site: SEO & metadata", content: SEO_CONTENT },
  { key: "home", title: "Page: Home", content: HOME_CONTENT },
  { key: "about", title: "Page: About", content: ABOUT_CONTENT },
  { key: "programmes", title: "Page: Programmes", content: PROGRAMMES_PAGE_CONTENT },
  { key: "programmeDetail", title: "Page: Programme detail", content: PROGRAMME_DETAIL_CONTENT },
  { key: "studioPage", title: "Page: Studio", content: STUDIO_PAGE_CONTENT },
  { key: "rateCard", title: "Page: Rate card", content: RATE_CARD_CONTENT },
  { key: "productions", title: "Page: Productions", content: PRODUCTIONS_PAGE_CONTENT },
  { key: "productionDetail", title: "Page: Production detail", content: PRODUCTION_DETAIL_CONTENT },
  { key: "showcase", title: "Component: Production showcase & lightbox", content: SHOWCASE_CONTENT },
  { key: "contact", title: "Page: Contact", content: CONTACT_PAGE_CONTENT },
  { key: "faqPage", title: "Page: FAQ", content: FAQ_PAGE_CONTENT },
  { key: "whitepaper", title: "Page: Whitepaper", content: WHITEPAPER_CONTENT },
  { key: "terms", title: "Page: Terms", content: TERMS_CONTENT },
  { key: "privacy", title: "Page: Privacy", content: PRIVACY_CONTENT },
  { key: "cookies", title: "Page: Cookies", content: COOKIES_CONTENT },
  { key: "notFound", title: "Page: 404", content: NOT_FOUND_CONTENT },
];

export const contentDocId = (key: string) => `content-${key}`;
export const contentDocType = (key: string) => `${key}Content`;
