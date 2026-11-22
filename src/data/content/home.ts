/**
 * Home page content — Budget Ndio Story (v2 storytelling homepage)
 *
 * The homepage reads as one narrative, in chapters:
 *   Hero      → the promise   ("Follow the budget. Find the story.")
 *   01 Why    → the problem   (budgets are public but not readable)
 *   Bridge    → the stakes    (different counties, shared public money)
 *   02 What   → the work      (three flagship programmes)
 *   03 Proof  → the record    (reach, partners, productions)
 *   04 Model  → the engine    (Studios funds the Foundation, ≥ 40%)
 *   Footer    → the ask       (get involved)
 *
 * Every fact here is drawn from existing BNS copy (About, White Paper, Studio).
 */
export const HOME_CONTENT = {
  hero: {
    eyebrow: "Civic media & public finance • Kenya",
    headlineLead: "Follow the budget.",
    headlineAccent: "Find the story.",
    description:
      "A platform for budget literacy, civic accountability & impact storytelling. Making Kenya's public budgets readable, relatable, and responsive across all 47 counties.",
    primaryCtaLabel: "GET INVOLVED",
    secondaryCtaLabel: "EXPLORE WORK",
    heroImage: "/images/bns/optimized/129A3912-hero.webp",
    heroVideoUrl: "/images/bns/tiktoklanding.mp4",
    heroImageAlt: "Budget Ndio Story Civic Convening",
    playButtonAriaLabel: "Play documentary reel",
    playButtonLabel: "Watch Reel • 2026",
    metaLeft: "BNS FOUNDATION • BNS STUDIOS",
    metaRight: "ALL 47 COUNTIES ACROSS KENYA",
    scrollCue: "Scroll to follow the story",
  },

  why: {
    chapter: "01",
    eyebrow: "Why it matters",
    statement:
      "A public budget is a moral contract before it is a ledger. Kenyans have the right to read it.",
    highlightWords: ["moral", "contract", "right", "read"],
    problemLabel: "The gap",
    problemBody:
      "Participation is already written into the Constitution of 2010 and the Public Finance Management Act. What is missing is a form a person can actually use.",
    answerLabel: "Our answer",
    answerBody:
      "We translate national budgets, county allocations, and public debt into accessible stories, citizen barazas, and grassroots accountability tools.",
    ctaLabel: "More about us",
  },

  bridge: {
    image: "/images/bns/optimized/129A4248-media.webp",
    imageAlt: "Budget Ndio Story National Civic Convening",
    lineOne: "Different counties.",
    lineTwo: "Shared public money.",
    caption:
      "An independent civic media and public finance platform across all 47 counties.",
  },

  services: {
    chapter: "02",
    eyebrow: "What we do",
    headlineLead: "Good accountability starts with",
    headlineAccent: "good questions.",
    description:
      "From grassroots community barazas to high-impact media broadcasts, Budget Ndio Story delivers creative civic education, public finance tracking, and youth-led budget storytelling.",
    ctaLabel: "GET INVOLVED",
    swipeLabel: "SWIPE →",
    sliderLabel: "FLAGSHIP PROGRAMMES",
    slideCounterTotal: "/ 03",
    programmeLabelPrefix: "PROGRAMME",
    exploreLabel: "EXPLORE PROGRAMME",
    items: [
      {
        number: "01",
        slug: "bns-connect",
        title: "BNS Connect",
        tag: "CIVIC PROGRAMME PARTNERSHIPS",
        description:
          "Co-designing budget literacy programmes, national youth town halls, scorecards, and statutory public hearings to bridge the gap between citizens and budget makers under the PFM Act and Constitution 2010 Articles 10 & 232.",
        bullets: [
          "Budget Town Halls at ward, sub-county & county levels",
          "Youth Budget Scorecards tracking commitments vs expenditure",
          "Community Budget Surveys generating citizen evidence",
          "Citizen Legislative Memoranda to Parliamentary Committees",
          "Free Budget Explainer Content translating official documents",
        ],
        image: "/images/bns/optimized/129A3912-hero.webp",
      },
      {
        number: "02",
        slug: "bns-mashinani",
        title: "BNS Mashinani",
        tag: "GRASSROOTS 47 COUNTIES",
        description:
          "Grassroots budget organizing, community listening sessions, and ward-level expenditure tracking across all 47 counties to demystify Annual Development Plans (ADPs) and monitor local project delivery.",
        bullets: [
          "Community Listening Sessions with consent management",
          "County-level budget tracking & citizen monitoring",
          "Ward-level project ground scorecards (dispensaries, roads, water)",
          "Vernacular budget breakdowns & localized community barazas",
          "Devolved funds oversight & social audits (ADPs, CDF, county funds)",
        ],
        image: "/images/bns/optimized/129A3964-card.webp",
      },
      {
        number: "03",
        slug: "bns-wanahabari",
        title: "Wanahabari Lab",
        tag: "TRAINING & CAPACITY BUILDING",
        description:
          "Supporting Kenyan journalists and digital storytellers with quarterly capacity building training, investigative reporting grants, and data toolkits to report accurately and effectively on public finance.",
        bullets: [
          "Quarterly capacity building training on public finance",
          "Data journalism fellowships & expert mentorship",
          "Investigative public finance reporting grants",
          "Budget analysis toolkits & Controller of Budget guides",
          "Community radio & vernacular broadcast syndication",
        ],
        image: "/images/bns/media/129A4039.jpg",
      },
    ],
  },

  proof: {
    chapter: "03",
    eyebrow: "The record so far",
    headlineLead: "Already in the field.",
    headlineAccent: "In all 47 counties.",
    description:
      "Surveys, town halls, films, and localized community barazas. Paid production and dialogue mandates delivered for TISA, the House of Fiscal Wisdom, and the Committee on Fiscal Studies, among others.",
    metrics: [
      {
        value: 47,
        prefix: "",
        suffix: " / 47",
        label: "Counties engaged",
        detail:
          "Through surveys, town halls, digital storytelling, and community dialogues.",
      },
      {
        value: 50000,
        prefix: "",
        suffix: "+",
        label: "Young Kenyans engaged",
        detail: "Mobilized across all 47 counties, scaling beyond 200,000.",
      },
      {
        value: 3,
        prefix: "",
        suffix: "",
        label: "Years of field deployment",
        detail: "Now in the third year of active work with communities, newsrooms, and partners.",
      },
    ],
    avatars: [
      "/images/bns/optimized/nelly-avatar.webp",
      "/images/bns/optimized/latiff-avatar.webp",
      "/images/bns/optimized/james-avatar.webp",
      "/images/bns/optimized/calvina-avatar.webp",
    ],
    avatarAlt: "Citizen advocate",
    voicesLabel: "Voices from the convenings",
    partnersLabel: "PARTNERS & COLLABORATORS",
    partnerLogos: [
      {
        name: "TISA",
        label: "The Institute for Social Accountability (TISA)",
        src: "/images/bns/partners/tisa.svg",
      },
      {
        name: "House of Fiscal Wisdom",
        label: "House of Fiscal Wisdom",
        src: "/images/bns/optimized/house-of-fiscal-wisdom.webp",
      },
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
    allLinkLabelPrefix: "ALL PRODUCTIONS (",
    allLinkLabelSuffix: ")",
    metaSeparator: "•",
    viewLabel: "View production",
  },

  model: {
    chapter: "04",
    eyebrow: "How it's sustained",
    headlineLead: "Every commission",
    headlineAccent: "funds citizen oversight.",
    description:
      "The work is held by two legally separated bodies that do not perform the same function, joined by a binding fiduciary covenant.",
    foundation: {
      label: "BNS Foundation",
      role: "The civic mission",
      body: "Budget literacy, town halls, community scorecards, citizen surveys, and youth organising across all 47 counties. Funded by philanthropic grants, donations, and civic programme partnerships.",
    },
    studios: {
      label: "BNS Studios",
      role: "Commercial impact storytelling",
      body: "Podcasts, short animation, research documentaries, and multi-platform campaigns, commissioned by partners who need their evidence to land with real audiences.",
    },
    flowValue: "≥ 40%",
    flowLabel:
      "of BNS Studios net operational profits, transferred to BNS Foundation every year.",
    independenceNote:
      "Commercial commissions confer zero editorial control over BNS Foundation's civic work.",
    primaryCtaLabel: "DISCOVER BNS STUDIOS & RATE CARD",
    secondaryCtaLabel: "READ THE WHITE PAPER",
  },
};
