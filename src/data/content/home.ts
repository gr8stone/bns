/**
 * Home page content — Budget Ndio Story
 *
 * Built for skimmers (see AGENTS.md → Copy rules): one headline per section,
 * at most one short line, then something visual. Lists are chips of ≤ 5 words.
 *
 *   Hero      → the promise
 *   01 Why    → the gap: what government publishes vs. what people can use
 *   Bridge    → the stakes
 *   02 What   → three programmes
 *   03 Proof  → numbers, partners, productions
 *   04 Model  → Studios funds the Foundation (≥ 40%)
 *   Footer    → the ask
 */
export const HOME_CONTENT = {
  hero: {
    eyebrow: "Civic media & public finance • Kenya",
    headlineLead: "Follow the budget.",
    headlineAccent: "Find the story.",
    description: "Kenya's public budgets, made readable. For everyone, in all 47 counties.",
    primaryCtaLabel: "GET INVOLVED",
    secondaryCtaLabel: "EXPLORE WORK",
    heroImage: "/images/bns/optimized/129A3912-hero.webp",
    heroVideoUrl: "/images/bns/tiktoklanding.mp4",
    heroImageAlt: "Budget Ndio Story Civic Convening",
    playButtonAriaLabel: "Play documentary reel",
    playButtonLabel: "Watch the reel",
    metaLeft: "BNS FOUNDATION • BNS STUDIOS",
    metaRight: "ALL 47 COUNTIES",
    scrollCue: "Scroll",
  },

  why: {
    chapter: "01",
    eyebrow: "Why it matters",
    statement: "A budget is a promise. You have the right to read it.",
    highlightWords: ["promise", "right", "read"],
    fromLabel: "What gets published",
    fromItems: ["Thick estimates books", "Dense jargon", "PDFs nobody opens"],
    toLabel: "What we make",
    toItems: ["Short films", "Town halls", "Ward scorecards"],
    ctaLabel: "More about us",
  },

  bridge: {
    image: "/images/bns/optimized/129A4248-media.webp",
    imageAlt: "Budget Ndio Story National Civic Convening",
    lineOne: "Different counties.",
    lineTwo: "Shared public money.",
    caption: "Independent. Non-partisan. In all 47 counties.",
  },

  services: {
    chapter: "02",
    eyebrow: "What we do",
    headlineLead: "Three ways",
    headlineAccent: "we open the books.",
    description: "Dialogue, grassroots tracking, and journalism, working as one system.",
    ctaLabel: "GET INVOLVED",
    slideCounterTotal: "/ 03",
    programmeLabelPrefix: "PROGRAMME",
    exploreLabel: "ALL PROGRAMMES",
    items: [
      {
        number: "01",
        slug: "bns-connect",
        title: "BNS Connect",
        tag: "Dialogue",
        description: "Puts citizens and budget makers in the same room.",
        bullets: ["Town halls", "Youth scorecards", "Petitions to Parliament"],
        image: "/images/bns/optimized/129A3912-hero.webp",
      },
      {
        number: "02",
        slug: "bns-mashinani",
        title: "BNS Mashinani",
        tag: "Grassroots",
        description: "Checks whether the money reached the ward.",
        bullets: ["Listening sessions", "Project site audits", "Vernacular barazas"],
        image: "/images/bns/optimized/129A3964-card.webp",
      },
      {
        number: "03",
        slug: "bns-wanahabari",
        title: "Wanahabari Lab",
        tag: "Journalism",
        description: "Trains the reporters who keep watch.",
        bullets: ["Quarterly training", "Reporting grants", "Data toolkits"],
        image: "/images/bns/media/129A4039.jpg",
      },
    ],
  },

  proof: {
    chapter: "03",
    eyebrow: "The record",
    headlineLead: "Already in the field.",
    headlineAccent: "In all 47 counties.",
    metrics: [
      { value: 47, prefix: "", suffix: " / 47", label: "Counties reached", detail: "" },
      { value: 50000, prefix: "", suffix: "+", label: "Young Kenyans engaged", detail: "Next goal: 200,000" },
      { value: 3, prefix: "", suffix: "", label: "Years in the field", detail: "" },
    ],
    avatars: [
      "/images/bns/optimized/nelly-avatar.webp",
      "/images/bns/optimized/latiff-avatar.webp",
      "/images/bns/optimized/james-avatar.webp",
      "/images/bns/optimized/calvina-avatar.webp",
    ],
    avatarAlt: "Citizen advocate",
    voicesLabel: "Voices from the convenings",
    partnersLabel: "TRUSTED BY",
    partnerLogos: [
      { name: "TISA", label: "The Institute for Social Accountability (TISA)", src: "/images/bns/partners/tisa.svg" },
      { name: "House of Fiscal Wisdom", label: "House of Fiscal Wisdom", src: "/images/bns/optimized/house-of-fiscal-wisdom.webp" },
      {
        name: "UON CFS",
        label: "University of Nairobi Committee on Fiscal Studies (UON CFS)",
        src: "/images/bns/optimized/committee-on-fiscal-studies.webp",
      },
    ],
  },

  recentProjects: {
    eyebrow: "Selected productions",
    heading: "Stories that followed the money.",
    allLinkLabelPrefix: "ALL (",
    allLinkLabelSuffix: ")",
    metaSeparator: "•",
    viewLabel: "Watch & read",
  },

  model: {
    chapter: "04",
    eyebrow: "How it's funded",
    headlineLead: "Every commission",
    headlineAccent: "funds citizen oversight.",
    studios: {
      label: "BNS Studios",
      role: "Paid work",
      points: ["Documentaries", "Podcasts", "Campaigns"],
    },
    foundation: {
      label: "BNS Foundation",
      role: "Civic work",
      points: ["Budget literacy", "Town halls", "Scorecards"],
    },
    flowValue: "≥ 40%",
    flowLabel: "of studio profit, every year",
    independenceNote: "Clients never control our civic work.",
    primaryCtaLabel: "BNS STUDIOS & RATES",
    secondaryCtaLabel: "WHITE PAPER",
  },
};
