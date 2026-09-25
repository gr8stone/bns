export interface DetailedFAQItem {
  id: string;
  category: 'model' | 'studio' | 'programmes' | 'partnerships' | 'data';
  categoryLabel: string;
  question: string;
  answer: string;
  sourceDoc?: string;
  relatedLinks?: { label: string; url: string }[];
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Topics' },
  { id: 'model', label: 'Two-Entity Model & Governance' },
  { id: 'studio', label: 'BNS Studios & Rate Card' },
  { id: 'programmes', label: 'Civic Programmes & Operations' },
  { id: 'partnerships', label: 'Partnerships & Grants' },
  { id: 'data', label: 'Data Integrity & Legal Anchors' },
] as const;

export const COMPREHENSIVE_FAQS: DetailedFAQItem[] = [
  // ==========================================
  // 1. TWO-ENTITY MODEL & GOVERNANCE
  // ==========================================
  {
    id: 'gov-01',
    category: 'model',
    categoryLabel: 'Two-Entity Model & Governance',
    question: 'What is Budget Ndio Story and how is the organization structured?',
    answer: 'Budget Ndio Story (BNS) is a public finance accountability platform operating under a Two-Entity Model: BNS Foundation is our public-interest civic entity dedicated to youth budget literacy, grassroots scorecards, county listening sessions, and media training. BNS Studios is our commercial impact production studio executing commissioned research storytelling, documentary films, podcasts, animations, and civic campaigns for development partners, MDAs, and think tanks.',
    sourceDoc: 'Prospectus 2026, Section 03 & Whitepaper Section 03',
    relatedLinks: [{ label: 'Read Whitepaper', url: '/whitepaper#two-entities' }],
  },
  {
    id: 'gov-02',
    category: 'model',
    categoryLabel: 'Two-Entity Model & Governance',
    question: 'How does the ≥ 40% profit endowment covenant work?',
    answer: 'Under a legally binding institutional covenant, BNS Studios transfers a minimum of forty percent (≥ 40%) of its annual net operational profits directly to BNS Foundation. This cross-subsidy structure creates a self-sustaining financial foundation, allowing our grassroots budget literacy and citizen monitoring to operate across all 47 counties without complete reliance on short-term donor cycles.',
    sourceDoc: 'Terms of Service, Section 08.2',
    relatedLinks: [{ label: 'Read Terms of Service', url: '/terms#fiduciary' }],
  },
  {
    id: 'gov-03',
    category: 'model',
    categoryLabel: 'Two-Entity Model & Governance',
    question: 'What are the Arm’s Length standards between the Foundation and the Studio?',
    answer: 'All inter-entity transactions, facility sharing, equipment usage, and staff apportionments between BNS Foundation and BNS Studios are governed by strict arm\'s length transfer pricing protocols. These arrangements are documented in writing, audited annually, and subject to oversight by an independent governance adviser to prevent conflicts of interest or improper subsidization.',
    sourceDoc: 'Terms of Service, Section 08.3 & Prospectus Page 05',
    relatedLinks: [{ label: 'Governance Terms', url: '/terms#fiduciary' }],
  },
  {
    id: 'gov-04',
    category: 'model',
    categoryLabel: 'Two-Entity Model & Governance',
    question: 'How does BNS preserve its non-partisan editorial firewall?',
    answer: 'BNS maintains complete editorial independence. We do not endorse political parties, electoral candidates, or commercial products. Commercial commissions awarded to BNS Studios purchase production capacity and multi-channel dissemination; they grant the client zero authority, influence, or veto over BNS Foundation\'s civic analyses, citizen scorecards, or town hall resolutions.',
    sourceDoc: 'Terms of Service, Section 08.4',
    relatedLinks: [{ label: 'Editorial Policy in Terms', url: '/terms#fiduciary' }],
  },
  {
    id: 'gov-05',
    category: 'model',
    categoryLabel: 'Two-Entity Model & Governance',
    question: 'Does BNS produce audited financial statements?',
    answer: 'Yes. BNS Studios produces annual audited financial statements prepared by certified independent public accountants. Inter-entity endowment transfers to BNS Foundation and statutory tax compliance records are reported transparently each year in the BNS Annual Public Impact Dossier.',
    sourceDoc: 'Prospectus 2026, Fiduciary Charter',
  },

  // ==========================================
  // 2. BNS STUDIOS & RATE CARD
  // ==========================================
  {
    id: 'stu-01',
    category: 'studio',
    categoryLabel: 'BNS Studios & Rate Card',
    question: 'What formats and products does BNS Studios produce?',
    answer: 'BNS Studios specializes in translating complex institutional research, evaluations, and macroeconomic reports into accessible public culture. We produce: (1) Research Podcasts & Broadcast Audio; (2) 60–90s Kinetic 2D/3D Animated Explainers; (3) 8–12 min Research Spotlight Documentaries; (4) Multi-Platform Social Media Campaigns; (5) Statutory Town Hall Dialogues; and (6) Grassroots Community Listening Sessions.',
    sourceDoc: 'Prospectus 2026, Page 04 Rate Card',
    relatedLinks: [{ label: 'View Studio Rate Card', url: '/studio' }],
  },
  {
    id: 'stu-02',
    category: 'studio',
    categoryLabel: 'BNS Studios & Rate Card',
    question: 'What are the official starting rates for commissions?',
    answer: 'Our published pro-forma tariffs (FY2026) are: Podcast & Audio from USD 3,500/episode; Short Animated Explainers from USD 2,000/video; Research Spotlight Documentaries between USD 8,000–15,000; Multi-Platform Social Series between USD 5,000–8,000; Town Hall Design & Facilitation between USD 4,000–7,000; and Community Listening Sessions between USD 2,500–4,500.',
    sourceDoc: 'Rate Card Ref: BNS-STUDIO-2026-V1',
    relatedLinks: [{ label: 'Explore Studio Tariffs', url: '/studio' }],
  },
  {
    id: 'stu-03',
    category: 'studio',
    categoryLabel: 'BNS Studios & Rate Card',
    question: 'What are the commercial payment terms and billing currency?',
    answer: 'Our standard settlement protocol is Net 30 with 50% mobilization advance upon contract execution and 50% final settlement upon sign-off and delivery of all masters. Tariffs are quoted in USD and can be invoiced in Kenyan Shillings (KES) calculated at the Central Bank of Kenya (CBK) mean exchange rate on the date of invoicing.',
    sourceDoc: 'Terms of Service, Section 06',
  },
  {
    id: 'stu-04',
    category: 'studio',
    categoryLabel: 'BNS Studios & Rate Card',
    question: 'What is included in the base fee and what constitutes disbursements?',
    answer: 'Base tariffs cover end-to-end creative direction, scriptwriting, voiceover, animation, sound design, color grading, and format mastering. Disbursements—such as air/ground travel, lodging, specialized venue rental, and simultaneous translation outside metropolitan Nairobi—are budgeted separately and invoiced at verified net cost.',
    sourceDoc: 'Prospectus 2026, Schedule Notes',
  },
  {
    id: 'stu-05',
    category: 'studio',
    categoryLabel: 'BNS Studios & Rate Card',
    question: 'Can BNS Studios decline a commercial commission?',
    answer: 'Yes. BNS Studios screens all incoming commissions through an ethical and civic-alignment protocol. We decline mandates that promote partisan political lobbying, predatory financial schemes, deceptive corporate propaganda, or messages that contradict constitutional principles of public finance (Article 201).',
    sourceDoc: 'Terms of Service, Section 09',
  },

  // ==========================================
  // 3. CIVIC PROGRAMMES & OPERATIONS
  // ==========================================
  {
    id: 'prog-01',
    category: 'programmes',
    categoryLabel: 'Civic Programmes & Operations',
    question: 'What are the 3 flagship civic programmes of BNS Foundation?',
    answer: 'BNS Foundation executes three distinct civic pillars: (1) BNS Connect: Convening structured budget town halls, public hearings, and citizen legislative petitions at ward, sub-county, and county levels; (2) BNS Mashinani: Grassroots budget organizing and expenditure tracking across all 47 counties; and (3) Wanahabari Lab: Capacity building fellowships, data forensics toolkits, and reporting grants for journalists covering public finance.',
    sourceDoc: 'Prospectus 2026, Section 02',
    relatedLinks: [{ label: 'Explore Programmes', url: '/programmes' }],
  },
  {
    id: 'prog-02',
    category: 'programmes',
    categoryLabel: 'Civic Programmes & Operations',
    question: 'How does BNS Connect support statutory public participation?',
    answer: 'Public participation is a mandatory constitutional duty under Articles 10, 201, and 232 and the Public Finance Management Act (PFM 2012/2015). BNS Connect assists county governments and national MDAs by designing, facilitating, and documenting public hearings that translate technical Budget Policy Statements into accessible dialogue, generating documented evidence that satisfies statutory oversight requirements.',
    sourceDoc: 'BNS Connect Programme Dossier',
    relatedLinks: [{ label: 'BNS Connect Dossier', url: '/programmes/bns-connect' }],
  },
  {
    id: 'prog-03',
    category: 'programmes',
    categoryLabel: 'Civic Programmes & Operations',
    question: 'What does BNS Mashinani do at the ward level in the 47 counties?',
    answer: 'BNS Mashinani equips grassroots youth champions and community groups to inspect local projects funded under County Annual Development Plans (ADPs), Ward Development Funds, and NG-CDF. Volunteers use ground scorecards to verify whether allocated funds correspond to physical realities for local dispensaries, rural access roads, and water kiosks.',
    sourceDoc: 'BNS Mashinani Programme Dossier',
    relatedLinks: [{ label: 'BNS Mashinani Dossier', url: '/programmes/bns-mashinani' }],
  },
  {
    id: 'prog-04',
    category: 'programmes',
    categoryLabel: 'Civic Programmes & Operations',
    question: 'What is Wanahabari Lab and who can participate?',
    answer: 'Wanahabari Lab is our media training and investigative journalism incubator. It runs quarterly capacity-building workshops, pairs reporters with data scientists and public finance attorneys, and issues reporting grants to Kenyan journalists, freelance storytellers, and community radio broadcasters investigating sovereign debt, procurement, and public audits.',
    sourceDoc: 'Wanahabari Lab Programme Dossier',
    relatedLinks: [{ label: 'Wanahabari Lab Dossier', url: '/programmes/bns-wanahabari' }],
  },
  {
    id: 'prog-05',
    category: 'programmes',
    categoryLabel: 'Civic Programmes & Operations',
    question: 'What is BNS\'s track record and how many citizens have been engaged?',
    answer: 'Over three years of operational deployment, BNS has engaged over 50,000 young Kenyans across all 47 counties through town halls, youth budget surveys, digital explainers, and localized community barazas, with a verified trajectory scaling toward 200,000+ active participants.',
    sourceDoc: 'Prospectus 2026, Section 04',
  },

  // ==========================================
  // 4. PARTNERSHIPS & GRANTS
  // ==========================================
  {
    id: 'part-01',
    category: 'partnerships',
    categoryLabel: 'Partnerships & Grants',
    question: 'Can development partners embed BNS Studios into grant proposals from inception?',
    answer: 'Yes. We encourage bilateral agencies, foundations, and think tanks to write BNS Studios directly into their multi-year grant applications as a designated "Content & Engagement Partner" budget line. Partnering from inception ensures that research findings are visually documented, disseminated, and communicated throughout project delivery rather than as an afterthought.',
    sourceDoc: 'Prospectus 2026, Embedded Studio Track',
    relatedLinks: [{ label: 'Commissioning Models', url: '/studio' }],
  },
  {
    id: 'part-02',
    category: 'partnerships',
    categoryLabel: 'Partnerships & Grants',
    question: 'What are the three main partnership pathways with BNS?',
    answer: 'Partners can engage in three ways: (1) Programme Partner: Co-designing and co-funding civic programmes (e.g. County Town Halls, Youth Scorecards); (2) Content Commission: Commissioning BNS Studios for discrete podcasts, documentaries, or animation packages; and (3) Foundational Partner: Multi-year core institutional funding supporting BNS Foundation’s long-term operations.',
    sourceDoc: 'Whitepaper Section 04',
    relatedLinks: [{ label: 'Partner With Us', url: '/contact' }],
  },
  {
    id: 'part-03',
    category: 'partnerships',
    categoryLabel: 'Partnerships & Grants',
    question: 'Which organizations have commissioned or partnered with BNS?',
    answer: 'BNS has successfully delivered commissioned content and civic convenings for leading governance organizations, including The Institute for Social Accountability (TISA Kenya), the House of Fiscal Wisdom (HFW), and the Committee on Fiscal Studies (CFS), alongside collaborative initiatives with county civil society networks.',
    sourceDoc: 'Prospectus 2026, Track Record',
  },

  // ==========================================
  // 5. DATA INTEGRITY & LEGAL ANCHORS
  // ==========================================
  {
    id: 'data-01',
    category: 'data',
    categoryLabel: 'Data Integrity & Legal Anchors',
    question: 'Where does BNS source and verify its budget data?',
    answer: 'BNS relies exclusively on primary statutory publications: National Treasury Budget Policy Statements, Controller of Budget Quarterly Budget Implementation Review Reports (BIRRs), Auditor-General audit reports, Commission on Revenue Allocation (CRA) equitable share matrices, and Parliamentary and County Assembly Hansard records. Where a number cannot be verified against official primary sources, it is not published as fact.',
    sourceDoc: 'Whitepaper Section 06 & Editorial Policy',
  },
  {
    id: 'data-02',
    category: 'data',
    categoryLabel: 'Data Integrity & Legal Anchors',
    question: 'Which legal frameworks anchor BNS’s civic work in Kenya?',
    answer: 'All our civic programmes are anchored in the Constitution of Kenya 2010: Article 10 (National Values and Principles of Governance), Article 35 (Access to Information), Article 201 (Principles of Public Finance: openness, accountability, public participation), and Article 232 (Values of Public Service), alongside the Public Finance Management Act (PFM Act 2012) and County Governments Act 2012.',
    sourceDoc: 'Constitution of Kenya 2010 & PFM Act',
  },
  {
    id: 'data-03',
    category: 'data',
    categoryLabel: 'Data Integrity & Legal Anchors',
    question: 'Does BNS protect whistleblowers and community monitors?',
    answer: 'Yes. BNS enforces strict source protection and confidentiality protocols for citizens, public officers, and community volunteers reporting procurement fraud or expenditure anomalies. Consent management is mandatory for all field audio and video documentation.',
    sourceDoc: 'Terms of Service, Section 04',
    relatedLinks: [{ label: 'Terms on Whistleblowing', url: '/terms' }],
  },
];

export const STUDIO_FAQS = COMPREHENSIVE_FAQS.filter(
  (f) => f.category === 'studio' || f.category === 'model'
);
