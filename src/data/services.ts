import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'bns-connect',
    slug: 'bns-connect',
    aliases: ['connect'],
    number: '01',
    title: 'BNS Connect',
    shortDescription: 'Co-designing budget literacy programmes, national youth town halls, scorecards, and statutory public hearings.',
    heroHeadline: 'Public dialogue that bridges the gap between citizens and budget makers.',
    heroSubhead: 'Facilitating structured, credible public participation under Constitution 2010 Articles 10 & 232 and the Public Finance Management Act to ensure public expenditure reflects citizen priorities.',
    problem: 'Public participation is a constitutional obligation, but translating complex budget documents into formats citizens can engage with remains a persistent gap. Most budget publications are inaccessible to ordinary Kenyans, particularly the youth.',
    solution: 'BNS Connect bridges the communication gap between fiscal policy and public understanding without compromising accuracy or institutional dignity, convening town halls at ward, sub-county, and county levels.',
    deliverables: [
      {
        name: 'Budget Town Halls',
        description: 'Full-service public dialogue events at ward, sub-county, and county levels with moderation, documentation, and summary outputs.'
      },
      {
        name: 'Youth Budget Scorecards',
        description: 'Systematic tracking of government commitments and actual expenditure against community priorities across all 47 counties.'
      },
      {
        name: 'Community Budget Surveys',
        description: 'Rigorous evidence generation on citizen priorities, public perceptions, and service delivery realities for policy oversight.'
      },
      {
        name: 'Citizen Legislative Memoranda & Petitions',
        description: 'Data-driven citizen submissions delivered directly to parliamentary and county assembly budget committees during statutory review windows.'
      },
      {
        name: 'Budget Explainer Content',
        description: 'Free, publicly distributed translations of official budget documents, fiscal pressure points, and allocation matrices.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Issue Scoping & Community Audit',
        detail: 'Identifying critical fiscal concerns directly from grassroots community networks and statutory expenditure documents.'
      },
      {
        step: '02',
        title: 'Evidence Gathering & Analysis',
        detail: 'Harmonizing community demands with official budget data, Controller of Budget reports, and statutory ceilings.'
      },
      {
        step: '03',
        title: 'Town Hall Dialogue Convening',
        detail: 'Hosting structured public debates with policymakers, broadcast live across digital media channels and community radio.'
      },
      {
        step: '04',
        title: 'Resolution Tracking & Legislative Follow-up',
        detail: 'Tracking parliamentary and county assembly committee commitments against subsequent budget appropriations and project delivery.'
      }
    ],
    faqs: [
      {
        q: 'Who is BNS Connect designed for?',
        a: 'BNS Connect co-designs programmes with County Governments, National Government MDAs, bilateral funders, civic foundations, and youth networks across Kenya.'
      },
      {
        q: 'How does BNS Connect satisfy statutory public participation mandates?',
        a: 'We build a documented evidence base of citizen engagement that satisfies oversight and audit requirements under the PFM Act and Constitution 2010 Articles 10 & 232.'
      }
    ],
    image: '/images/bns/towwnhallmay/129A3912.jpg',
    video: 'https://www.youtube.com/watch?v=FkgRz4v2Llk'
  },
  {
    id: 'bns-mashinani',
    slug: 'bns-mashinani',
    aliases: ['mashinani'],
    number: '02',
    title: 'BNS Mashinani',
    shortDescription: 'Grassroots budget organizing, community listening sessions, and ward-level expenditure tracking across all 47 counties.',
    heroHeadline: 'Taking budget literacy directly to the grassroots across all 47 counties.',
    heroSubhead: 'Translating county Annual Development Plans, ward budgets, and devolved funds into community barazas and citizen monitoring scorecards.',
    problem: 'Devolution promised resources at the grassroots, but lack of access to ward-level financial data leaves citizens unable to track local project deliveries. Youth aged 18–35 make up over a third of Kenya’s population but hold little de facto influence over public expenditure.',
    solution: 'BNS Mashinani deploys field facilitators and simplified ward budget maps to equip communities to monitor dispensaries, local roads, and water kiosks, channeling civic energy into structured accountability.',
    deliverables: [
      {
        name: 'Community Listening Sessions',
        description: 'Participatory sessions with consent management, documentation, and storytelling outputs capturing grassroots voice.'
      },
      {
        name: 'County-Level Budget Tracking & Citizen Monitoring',
        description: 'Practical toolkits for residents to inspect public project implementation and capital expenditure in their wards.'
      },
      {
        name: 'Ward-Level Project Ground Scorecards',
        description: 'Comparing budgetary allocations with physical ground reality for dispensaries, rural access roads, and water kiosks.'
      },
      {
        name: 'Vernacular Budget Breakdowns & Local Barazas',
        description: 'Accessible civic materials translated into everyday languages and community dialogue formats that demystify fiscal choices.'
      },
      {
        name: 'Devolved Funds Oversight & Social Audits',
        description: 'Collaborative citizen audits tracking Ward Development Funds, NG-CDF, and county health and education allocations.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Community Mapping & Entry',
        detail: 'Connecting with local youth champions, women\'s groups, and resident associations across target county wards.'
      },
      {
        step: '02',
        title: 'Ward Budget Deconstruction',
        detail: 'Extracting approved ward projects and capital budget figures from county Annual Development Plans (ADPs).'
      },
      {
        step: '03',
        title: 'Groundwork Social Audit',
        detail: 'Community volunteers visit project sites to compare budgetary allocations with physical ground delivery.'
      },
      {
        step: '04',
        title: 'Community Scorecard Presentation',
        detail: 'Presenting community findings to Ward Administrators, MCAs, and County Assembly budget committees for action.'
      }
    ],
    faqs: [
      {
        q: 'How many Kenyans has BNS Mashinani engaged?',
        a: 'Since inception, BNS has engaged 50,000+ young Kenyans across all 47 counties through surveys, town halls, digital storytelling, and community dialogues, scaling beyond 200,000.'
      },
      {
        q: 'How does BNS Mashinani assist county governments?',
        a: 'We assist county governments in translating Annual Development Plans into accessible public formats, designing participatory budget sessions aligned with Open Government Partnership (OGP) commitments.'
      }
    ],
    image: '/images/bns/cohort1 groundworks/129A3964.jpg',
    video: 'https://www.youtube.com/watch?v=oHuImiQvvN0'
  },
  {
    id: 'bns-wanahabari',
    slug: 'bns-wanahabari',
    aliases: ['wanahabari-lab', 'wanahabari'],
    number: '03',
    title: 'Wanahabari Lab',
    shortDescription: 'Supporting journalists and digital storytellers with quarterly capacity building, data toolkits, and public finance fellowships.',
    heroHeadline: 'Empowering media and storytellers to report accurately on public finance.',
    heroSubhead: 'Bridging the gap between technical fiscal research and impactful news reporting through fellowships, data forensics, and investigative grants.',
    problem: 'Peer organisations, media houses, and journalists routinely encounter impenetrable budget documents, leading to superficial coverage rather than forensic accountability of public spending.',
    solution: 'Wanahabari Lab offers quarterly capacity building, investigative data toolkits, and production grants to help Kenyan journalists and digital storytellers report accurately and effectively on public finance.',
    deliverables: [
      {
        name: 'Quarterly Capacity Building Training',
        description: 'Comprehensive quarterly training for Kenyan journalists and digital storytellers to report accurately on public finance and debt.'
      },
      {
        name: 'Data Journalism Fellowships & Mentorship',
        description: 'Structured training programs pairing reporters with leading fiscal policy analysts and data engineers.'
      },
      {
        name: 'Investigative Public Finance Reporting Grants',
        description: 'Direct production grants enabling journalists to investigate sovereign debt, public contracts, and procurement red flags.'
      },
      {
        name: 'Budget Analysis Toolkits & Guides',
        description: 'Hands-on practical guides for interrogating Controller of Budget reports, Treasury releases, and procurement portals.'
      },
      {
        name: 'Community Radio & Vernacular Syndication',
        description: 'Syndicating audio explainers and budget stories across regional and vernacular broadcast networks.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Call for Investigative Proposals',
        detail: 'Inviting journalists and content creators to pitch high-impact public finance and procurement stories.'
      },
      {
        step: '02',
        title: 'Data & Legal Mentorship',
        detail: 'Pairing fellows with data scientists and public procurement lawyers to verify documents and fiscal data.'
      },
      {
        step: '03',
        title: 'Field Investigation & Reporting',
        detail: 'Supporting on-the-ground reporting, whistleblowing verification, and official inquiries with statutory institutions.'
      },
      {
        step: '04',
        title: 'Multi-Platform Syndication',
        detail: 'Publishing investigations across national television, digital news portals, and community radio networks.'
      }
    ],
    faqs: [
      {
        q: 'Who is eligible for Wanahabari Lab training and grants?',
        a: 'Kenyan journalists, freelance investigative reporters, digital storytellers, and community radio broadcasters are eligible.'
      },
      {
        q: 'How often are Wanahabari Lab training sessions held?',
        a: 'We conduct quarterly capacity building workshops on public finance literacy, data analysis, and investigative budget reporting.'
      }
    ],
    image: '/images/bns/media/129A4039.jpg',
    video: 'https://www.youtube.com/watch?v=SfPwtqUFyj4'
  }
];
