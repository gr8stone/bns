import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'riviera-residence',
    title: 'County Budget: Where Does the Money Come From?',
    subtitle: 'Civic Docuseries / County Finance Investigation',
    location: 'Nairobi & 47 Counties, Kenya',
    year: '2026',
    client: 'TISA Kenya & County Civic Partners',
    architect: 'BNS Civic Research & Data Desk',
    category: 'BNS Mashinani',
    services: ['BNS Connect', 'BNS Studio', 'BNS Mashinani'],
    tags: ['All', 'Civic Tech', 'Counties', 'Public Finance', 'Docuseries', 'Community'],
    heroImage: '/images/bns/towwnhallmay/129A3863.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=oHuImiQvvN0',
    videoDuration: 'YouTube 3-Part Series',
    clientMaterial: 'County Allocation of Revenue Act (CARA), Controller of Budget reports & county treasury budgets',
    transformationPipeline: [
      'Devolved Revenue Data Auditing',
      'County Own-Source Revenue Breakdown',
      'Infographic Motion Design & Video Editing',
      'Grassroots Community Baraza Screening'
    ],
    summary: 'A 3-part investigative docuseries breaking down how Kenya\'s 47 counties are funded, covering national transfers, equitable shares, and own-source local revenue.',
    description: [
      'Counties provide the essential services citizens interact with every day: healthcare, early childhood education, local roads, clean water, community markets, and agriculture support.',
      'Through this 3-part series, Budget Ndio Story decodes the financial architecture of devolution, investigating where the funds come from, how revenue targets are set, and why fiscal absorption matters.',
      'Broadcasted across YouTube, TikTok, and screened at localized community listening sessions, the series reached over 150,000 citizens, sparking discussions on county revenue transparency.'
    ],
    stats: [
      { label: 'Counties Analyzed', value: '47 Counties' },
      { label: 'Episodes', value: '3 Part Series' },
      { label: 'Citizen Reach', value: '150,000+' },
      { label: 'Data Sources', value: 'COB, CRA & Treasury' }
    ],
    beforeAfter: {
      beforeImage: '/images/bns/studio productions/Before Budget.jpg',
      beforeLabel: 'BEFORE: DENSE FISCAL ESTIMATES',
      afterImage: '/images/bns/treasury/budget sasa ni delivery.jpg',
      afterLabel: 'AFTER: CITIZEN SERVICE DELIVERY',
      description: 'Demystifying dense parliamentary budget estimates into accessible visual explainers that empower citizen expenditure tracking.'
    },
    process: [
      {
        step: '01',
        title: 'Data Extraction & Audit',
        description: 'Analyzing the County Allocation of Revenue Act and Controller of Budget quarterly execution statements.',
        image: '/images/bns/survey/bnssurvey1.jpeg'
      },
      {
        step: '02',
        title: 'Scripting & Vernacular Adaptation',
        description: 'Translating fiscal jargon into relatable everyday economic realities for youth and community groups.',
        image: '/images/bns/cohort1 groundworks/129A3964.jpg'
      },
      {
        step: '03',
        title: 'Studio Production & Animation',
        description: 'Producing dynamic motion graphics, infographics, and presenter-led breakdowns in the BNS Studio.',
        image: '/images/bns/studio/studio_cinema_cam.jpg'
      },
      {
        step: '04',
        title: 'Public Distribution & Barazas',
        description: 'Distributing across social media and hosting community listening sessions across informal settlements.',
        image: '/images/bns/towwnhallmay/129A3912.jpg'
      }
    ],
    gallery: [
      {
        url: '/images/bns/towwnhallmay/129A3863.jpg',
        caption: 'Episode 3: Devolved Health & Water Budget Tracking',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/towwnhallmay/129A4056.jpg',
        caption: 'Episode 2: Own-Source Revenue & County Levies',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/bns/cohort1 groundworks/129A3964.jpg',
        caption: 'Episode 1: Where Does County Money Actually Come From?',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/cohort1 groundworks/129A3987.jpg',
        caption: 'Cohort 1 Groundworks: Grassroots civic youth listening session',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredOrder: 1,
    nextProjectSlug: 'bunker-37'
  },
  {
    slug: 'bunker-37',
    title: 'Inside Kenya’s National Infrastructure Fund',
    subtitle: 'Investigative Public Finance Report / 4-Part Special',
    location: 'National Assembly & Treasury, Nairobi',
    year: '2026',
    client: 'BNS Studios & Committee on Fiscal Studies',
    architect: 'BNS Fiscal Accountability Desk',
    category: 'BNS Connect',
    services: ['BNS Wanahabari', 'BNS Studio', 'BNS Connect'],
    tags: ['All', 'National Budget', 'Infrastructure', 'Public Debt', 'Docuseries', 'Investigation'],
    heroImage: '/images/bns/hall/129A4248.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=SfPwtqUFyj4',
    videoDuration: '4-Part Investigative Special',
    clientMaterial: 'National Infrastructure Fund Act, Sovereign Debt Schedules, and Parliament Hansard',
    transformationPipeline: [
      'Statutory Act Analysis & Legal Audit',
      'Megaproject Financing Traceability',
      'Investigative Video Production',
      'Citizen Accountability Briefings'
    ],
    summary: 'A deep-dive investigative series unpacking Kenya\'s National Infrastructure Fund law, highlighting citizen oversight, fiscal debt implications, and procurement red flags.',
    description: [
      'Kenya\'s National Infrastructure Fund is now law, establishing a new mechanism to finance mega-projects, highways, energy grids, and water dams.',
      'In this 4-part investigative series, Budget Ndio Story unpacks how the fund is structured, how public money is pledged, and why sovereign debt guarantees must remain transparent.',
      'By bringing fiscal lawyers, youth leaders, and economists to the microphone, the investigation raised pivotal accountability questions directly with policymakers and oversight bodies.'
    ],
    stats: [
      { label: 'Investigative Parts', value: '4 In-Depth Episodes' },
      { label: 'Legal Audit', value: 'Full Act Review' },
      { label: 'Document Views', value: '85,000+' },
      { label: 'Policy Impact', value: 'Parliamentary Brief' }
    ],
    beforeAfter: {
      beforeImage: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/red Flags in Government contacts .jpeg',
      beforeLabel: 'LEGAL DRAFT & COMPLEX CONTRACTS',
      afterImage: '/images/bns/media/main media image.jpg',
      afterLabel: 'PUBLIC ACCOUNTABILITY REPORTING',
      description: 'Transforming complex statutory financing mechanisms into clear public interest journalism that protects national wealth.'
    },
    process: [
      {
        step: '01',
        title: 'Statutory Review & Legal Audit',
        description: 'Analyzing statutory provisions, repayment clauses, and public liability under the new Act.',
        image: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/latiff.jpeg'
      },
      {
        step: '02',
        title: 'Expert Consultations & Roundtables',
        description: 'Convening fiscal policy experts, sovereign debt scholars, and legal practitioners.',
        image: '/images/bns/hall/129A4248.jpg'
      },
      {
        step: '03',
        title: 'Video Series Production',
        description: 'Filming a 4-part multimedia series with motion graphics explaining project off-balance liabilities.',
        image: '/images/bns/media/129A4039.jpg'
      }
    ],
    gallery: [
      {
        url: '/images/bns/hall/129A4248.jpg',
        caption: 'Part 4: Public Debt, Guarantees & Sovereign Risk',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/media/129A4039.jpg',
        caption: 'Part 3: Governance, Board Structures & Oversight',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/bns/media/main media image.jpg',
        caption: 'Part 1: Key Provisions of the Infrastructure Fund',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 2,
    nextProjectSlug: 'australia-residence'
  },
  {
    slug: 'australia-residence',
    title: 'Before Budget Day: This Is Where It Starts',
    subtitle: 'Budget Policy Statement (BPS) Civic Campaign',
    location: 'National Treasury & Public Hearings',
    year: '2026',
    client: 'House of Fiscal Wisdom & Civic Partners',
    architect: 'BNS Youth Engagement Hub',
    category: 'BNS Connect',
    services: ['BNS Connect', 'BNS Studio', 'BNS Wanahabari'],
    tags: ['All', 'National Budget', 'Public Policy', 'Youth', 'Civic Tech', 'BPS'],
    heroImage: '/images/bns/towwnhallmay/129A3912.jpg',
    heroVideo: 'https://www.youtube.com/watch?v=FkgRz4v2Llk',
    videoDuration: '3-Part BPS Explainer',
    clientMaterial: 'National Budget Policy Statement, Medium-Term Expenditure Framework (MTEF) & Public Submissions',
    transformationPipeline: [
      'BPS Macroeconomic Projection Synthesis',
      'Sectoral Allocation Visual Tracking',
      'Youth-Led Townhall Convening',
      'Citizen Memo to Parliament Submissions'
    ],
    summary: 'A nationwide campaign educating youth and civic champions on the Budget Policy Statement—the critical document where government priorities take shape before Budget Day.',
    description: [
      'Most citizens wait for National Budget Day in June, but by then 90% of spending choices have already been locked. The real battle for priorities happens months earlier during the Budget Policy Statement (BPS).',
      'Budget Ndio Story created this multi-episode campaign to mobilize young people, micro-entrepreneurs, and civic groups to participate in public hearings before decisions are cast in stone.',
      'The campaign produced accessible breakdowns of education spending, healthcare deficits, national debt servicing, and youth enterprise funds.'
    ],
    stats: [
      { label: 'Public Submissions', value: '1,200+ Citizen Memos' },
      { label: 'Youth Engagement', value: '42 Campus Hubs' },
      { label: 'Video Series', value: '3 Part BPS Guide' },
      { label: 'Budget Cycle Impact', value: 'Pre-Budget Phase' }
    ],
    beforeAfter: {
      beforeImage: '/images/bns/treasury/budget-reading-2026.jpg',
      beforeLabel: 'THE JUNE BUDGET DAY SPECTACLE',
      afterImage: '/images/bns/towwnhallmay/129A3863.jpg',
      afterLabel: 'EARLY CITIZEN PARTICIPATION (BPS)',
      description: 'Shifting the public spotlight from passive June budget speeches to early, impactful citizen participation during the Budget Policy Statement.'
    },
    process: [
      {
        step: '01',
        title: 'MTEF & Ceiling Analysis',
        description: 'Auditing sector ceilings for Education, Health, and Infrastructure in the BPS draft.',
        image: '/images/bns/towwnhallmay/129A4056.jpg'
      },
      {
        step: '02',
        title: 'Civic Explainer Production',
        description: 'Filming bite-sized episodes explaining why BPS ceilings determine tax and job policies.',
        image: '/images/bns/studio/studio_motion_vfx.jpg'
      }
    ],
    gallery: [
      {
        url: '/images/bns/towwnhallmay/129A3912.jpg',
        caption: 'BPS Part 3: Why Young People Must Care About Ceilings',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/towwnhallmay/129A3923.jpg',
        caption: 'BPS Part 2: Revenue Projections & Taxation Pressures',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredOrder: 3,
    nextProjectSlug: 'berliner-strasse-69'
  },
  {
    slug: 'berliner-strasse-69',
    aliases: ['red-flags-in-government-contracts', 'redflags', 'red-flags'],
    title: 'Red Flags in Government Contracts & Sovereign Debt',
    subtitle: 'AFRODAD Debt Conference & Book Launch Convening',
    location: 'Safari Park Hotel & Virtual Broadcast, Nairobi',
    year: '2026',
    client: 'AFRODAD, Committee on Fiscal Studies & Cents Governance Academy (CGA)',
    architect: 'Dr. Lyla Latif, PhD & James Maingi Mutinda (CGA)',
    category: 'Wanahabari Lab',
    services: ['BNS Connect', 'BNS Wanahabari'],
    tags: ['All', 'Sovereign Debt', 'AFRODAD', 'Procurement', 'Investigation', 'Policy', 'CGA'],
    heroImage: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/latiff.jpeg',
    videoDuration: 'Keynote & Conference Panels',
    clientMaterial: 'Public Procurement Records, Sovereign Loan Agreements, and Dr. Latif Research Archive',
    transformationPipeline: [
      'Forensic Contract Pattern Recognition',
      'High-Level Policy Convening Delivery',
      'Continental Deal-Making Capacity Analysis',
      'Published Investigative Policy Brief'
    ],
    summary: '“The most important decisions a state takes about its wealth and its future are increasingly taken in contracts rather than in chambers.” — Dr. Lyla Latif, PhD, Red Flags in Government Contracts',
    description: [
      '“The most important decisions a state takes about its wealth and its future are increasingly taken in contracts rather than in chambers.” In partnership with AFRODAD and the Committee on Fiscal Studies, Budget Ndio Story co-convened the 2026 Sovereign Debt Conference and the official launch of Dr. Lyla Latif\'s groundbreaking book Red Flags in Government Contracts.',
      'Reflecting on the findings, James Maingi Mutinda (Cents Governance Academy - CGA) highlighted that across Africa, investment figures are escalating rapidly: billions of dollars in the DRC around critical minerals, infrastructure, and strategic partnerships; hundreds of millions flowing into Angola\'s Lobito Corridor railway operated under a 30-year concession; more than $250M in new financing linked to the Lobito Economic Corridor in Zambia; tens of billions in Mozambique LNG; and proposed mega-deals in Kenya like the $1.2B JKIA expansion alongside sovereign debt refinancings.',
      'These are significant numbers, but the size of a deal is not the same thing as the value of a deal. Beyond the announcements, citizens and oversight bodies must interrogate: What has the country actually negotiated? Who carries the risk? What revenues or assets have been committed? What happens when circumstances change? What does it cost to renegotiate or exit? And most importantly: What public value remains after the billions have been announced?',
      'This is why Africa must invest not only in attracting capital, but in deal-making capacity: lawyers, economists, financial modellers, engineers, tax specialists, and public officials capable of interrogating and negotiating complex agreements. Mobilising billions is one capability; negotiating those billions in the public interest is another. The real measure of a successful deal is not what is announced when cameras are present, but what the public still gains 10, 20, or 30 years later.'
    ],
    stats: [
      { label: 'Continental Deals Audited', value: '5 Major Nations' },
      { label: 'Delegates & Auditors', value: '350+ Fiscal Experts' },
      { label: 'Countries Represented', value: '14 African Nations' },
      { label: 'Key Governance Partner', value: 'Cents Governance Academy' }
    ],
    beforeAfter: {
      beforeImage: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/red Flags in Government contacts .jpeg',
      beforeLabel: 'CLASSIFIED PROCUREMENT CLAUSES',
      afterImage: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/latiff.jpeg',
      afterLabel: 'PUBLIC DEBT TRANSPARENCY DEBATE',
      description: 'Bringing daylight to secretive sovereign loan covenants and contract indemnity clauses that impact generational public finances.'
    },
    process: [
      {
        step: '01',
        title: 'Forensic Contract Interrogation',
        description: 'Analyzing legal covenants, indemnity clauses, and sovereign revenue commitments behind mega-infrastructure deals across Africa.',
        image: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/red Flags in Government contacts .jpeg'
      },
      {
        step: '02',
        title: 'Deal-Making Capacity Synthesis',
        description: 'James Maingi Mutinda (CGA) and Dr. Lyla Latif articulating the 6 critical interrogation tests for African public investment.',
        image: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/James Maingi Mutinda.jpeg'
      }
    ],
    gallery: [
      {
        url: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/latiff.jpeg',
        caption: 'Dr. Lyla Latif, PhD presenting key findings from Red Flags in Government Contracts',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/James Maingi Mutinda.jpeg',
        caption: 'James Maingi Mutinda (Cents Governance Academy - CGA) on deal-making capacity vs deal size',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/red Flags in Government contacts .jpeg',
        caption: 'Official launch of Red Flags in Government Contracts with AFRODAD & Committee on Fiscal Studies',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/AFRODAD debt Conference 2026  also Dr LYLA Latiff Book Launch called Red Flags in Government contracts/wajakoyah.jpeg',
        caption: 'Plenary debate on African sovereign debt sovereignty and parliamentary oversight',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredOrder: 4,
    nextProjectSlug: 'marlow-on-mill'
  },
  {
    slug: 'marlow-on-mill',
    title: 'BNS Mashinani: Cohort 001 Groundworks',
    subtitle: 'Grassroots Community Budget Listening Sessions',
    location: 'Informal Settlements & Rural Wards, Kenya',
    year: '2026',
    client: 'BNS Foundation Grassroots Movement',
    architect: 'BNS Mashinani Field Coordinators',
    category: 'BNS Mashinani',
    services: ['BNS Mashinani', 'BNS Connect'],
    tags: ['All', 'Mashinani', 'Community', 'Devolution', 'Grassroots', 'Civic Tech'],
    heroImage: '/images/bns/cohort1 groundworks/129A3964.jpg',
    summary: 'Direct community listening tours equipping informal settlement residents with simplified ward budget maps to track clinics, water boreholes, and streetlighting.',
    description: [
      'National budget figures mean nothing if clean water does not reach taps or medicines remain unavailable in local dispensaries.',
      'Through Cohort 001 Groundworks, our field organizers engaged local barazas and youth groups across multiple counties to conduct participatory social audits.',
      'Residents mapped approved county projects against actual ground reality, creating grassroots scorecards presented directly to Ward Administrators.'
    ],
    stats: [
      { label: 'Wards Audited', value: '36 Wards' },
      { label: 'Ground Volunteers', value: '450 Champions' },
      { label: 'Projects Tracked', value: '112 Community Facilities' },
      { label: 'Resolution Rate', value: '48% Interventions' }
    ],
    gallery: [
      {
        url: '/images/bns/cohort1 groundworks/129A3964.jpg',
        caption: 'Cohort 001 field gathering and grassroots budget deconstruction',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/cohort1 groundworks/129A3987.jpg',
        caption: 'Community listening session and ward budget analysis',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/bns/survey/bnssurvey1.jpeg',
        caption: 'Ward budget tracking survey and civic petition collation',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Ward Allocation Mapping',
        description: 'Extracting ward development fund line items from county financial statements.',
        image: '/images/bns/survey/bnssurvey1.jpeg'
      }
    ],
    featured: false,
    featuredOrder: 5,
    nextProjectSlug: 'venetian-penthouse'
  },
  {
    slug: 'venetian-penthouse',
    title: 'Youth Economic Opportunities: Uwezo & Nyota Funds',
    subtitle: 'Animated Civic Explainer & Grant Application Guide',
    location: 'Nationwide Digital Campaign',
    year: '2026',
    client: 'BNS Studios Commissioned Mandate',
    architect: 'BNS Studio Motion Lab',
    category: 'BNS Studios',
    services: ['BNS Studio'],
    tags: ['All', 'Civic Tech', 'BNS Studio', 'Animation', 'Youth', 'Economic Inclusion'],
    heroImage: '/images/bns/reels/reel-05-opportunities.jpg',
    heroVideo: '/images/bns/reels/animation reel opportunities . Where do I start ( nyota programmes  uwezo fund) main landing page .mp4',
    summary: 'A viral animated explainer detailing public funding avenues for youth, demystifying the Uwezo Fund, NYOTA programs, and entrepreneurship seed grants.',
    description: [
      'Billions in public funds are annually allocated to affirmative action funds like Uwezo and NYOTA, yet complex paperwork and lack of awareness prevent target youth from accessing them.',
      'BNS Studio designed a rapid, engaging 2D animation breaking down eligibility criteria, group formation, and interest-free loan schedules.',
      'The explainer achieved viral circulation on WhatsApp and TikTok, driving record applications from youth enterprises across 18 counties.'
    ],
    stats: [
      { label: 'Reel Views', value: '320,000+' },
      { label: 'WhatsApp Shares', value: '45,000+' },
      { label: 'Funds Demystified', value: 'Uwezo & NYOTA' },
      { label: 'Helpdesk Calls', value: '2,400+ Inquiries' }
    ],
    gallery: [
      {
        url: '/images/bns/reels/reel-05-opportunities.jpg',
        caption: 'Animated step-by-step application walkthrough',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/reels/reel-04-myth-fact.jpg',
        caption: 'Public affirmative action funds: debunking misconceptions',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/bns/reels/reel-01-poster.jpg',
        caption: 'Seed fund eligibility criteria and vetting protocols',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Criteria Deconstruction',
        description: 'Analyzing legal fund guidelines to remove intimidating terminology.',
        image: '/images/bns/studio/studio_audio_mic.jpg'
      }
    ],
    featured: false,
    featuredOrder: 6,
    nextProjectSlug: 'papes-residences'
  },
  {
    slug: 'papes-residences',
    title: 'National Budget Day 2026: The People\'s Watch',
    subtitle: 'Live Analysis & Citizen Watchdog Broadcast',
    location: 'National Treasury & Parliament Grounds, Nairobi',
    year: '2026',
    client: 'Public Interest Coalition',
    architect: 'BNS Newsroom & Broadcast Desk',
    category: 'Wanahabari Lab',
    services: ['BNS Studio', 'BNS Wanahabari'],
    tags: ['All', 'National Budget', 'Treasury', 'Broadcast', 'Journalism', 'Citizen Action'],
    heroImage: '/images/bns/treasury/budget-reading-2026.jpg',
    heroVideo: '/images/bns/reels/Budget Day 2026  National treasury.mp4',
    summary: 'On-the-ground live reporting and real-time citizen fact-checking during the National Treasury\'s annual budget reading speech in Parliament.',
    description: [
      'As the Cabinet Secretary for the National Treasury presented the annual budget statement, BNS Wanahabari provided real-time data verification.',
      'Our team produced rapid-fire social graphics comparing ministerial promises with actual allocations in the printed budget books.',
      'Through live street vox pops and studio commentaries, we centered ordinary citizens\' voices during the national budget ritual.'
    ],
    stats: [
      { label: 'Live Broadcast', value: '6 Hours Continuous' },
      { label: 'Real-Time Fact Checks', value: '34 Fiscal Claims' },
      { label: 'Online Impressions', value: '1.2M Reach' },
      { label: 'Vox Pop Coverage', value: '7 Major Towns' }
    ],
    gallery: [
      {
        url: '/images/bns/treasury/budget-reading-2026.jpg',
        caption: 'National Treasury Budget Speech presentation',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/bns/treasury/budget sasa ni delivery.jpg',
        caption: 'Citizen budget tracking scorecard and delivery audit',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/bns/marketing newsletter subcribe/Nelly with The Mic.jpg',
        caption: 'Real-time citizen vox pops outside Parliament grounds',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Rapid Verification Lab',
        description: 'Auditing speech claims against printed parliamentary finance bills.',
        image: '/images/bns/marketing newsletter subcribe/Nelly with The Mic.jpg'
      }
    ],
    featured: false,
    featuredOrder: 7,
    nextProjectSlug: 'riviera-residence'
  }
];
