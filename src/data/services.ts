import type { Service } from '../types';

// Copy rules (AGENTS.md): headline ≤ 8 words, one-liners ≤ 20 words,
// deliverable descriptions ≤ 12 words. Detail lives in FAQs and productions.
export const SERVICES: Service[] = [
  {
    id: 'bns-connect',
    slug: 'bns-connect',
    aliases: ['connect'],
    number: '01',
    title: 'BNS Connect',
    shortDescription: 'Town halls, scorecards, and hearings that put citizens in the room.',
    heroHeadline: 'Citizens and budget makers, in the same room.',
    heroSubhead: 'Public participation under the Constitution (Articles 10 & 232) and the PFM Act, made real.',
    problem: 'Participation is a legal duty, but budget documents are unreadable for most Kenyans.',
    solution: 'We run town halls at ward, sub-county, and county level, and keep the record.',
    deliverables: [
      { name: 'Budget town halls', description: 'Moderated, documented, with a written summary.' },
      { name: 'Youth budget scorecards', description: 'Promises tracked against actual spending.' },
      { name: 'Community budget surveys', description: 'Evidence on what citizens actually need.' },
      { name: 'Citizen memoranda', description: 'Submissions to Parliament and county assemblies.' },
      { name: 'Budget explainers', description: 'Official documents, translated for free.' },
    ],
    workflow: [
      { step: '01', title: 'Scope the issue', detail: 'Hear what communities are worried about.' },
      { step: '02', title: 'Check the numbers', detail: 'Match concerns to official budget data.' },
      { step: '03', title: 'Hold the town hall', detail: 'Citizens and officials, live and broadcast.' },
      { step: '04', title: 'Follow up', detail: 'Track whether commitments reach the budget.' },
    ],
    faqs: [
      {
        q: 'Who is BNS Connect designed for?',
        a: 'County governments, national MDAs, funders, civic foundations, and youth networks across Kenya.',
      },
      {
        q: 'Does it satisfy public participation requirements?',
        a: 'Yes. We document citizen engagement in a form that meets oversight and audit requirements under the PFM Act and Constitution Articles 10 & 232.',
      },
    ],
    image: '/images/bns/towwnhallmay/129A3912.jpg',
    video: 'https://www.youtube.com/watch?v=FkgRz4v2Llk',
  },
  {
    id: 'bns-mashinani',
    slug: 'bns-mashinani',
    aliases: ['mashinani'],
    number: '02',
    title: 'BNS Mashinani',
    shortDescription: 'Grassroots budget tracking: did the money reach the ward?',
    heroHeadline: 'Did the money reach the ward?',
    heroSubhead: 'Ward budgets, county plans, and devolved funds, checked on the ground in all 47 counties.',
    problem: "Devolution sent money to the grassroots, but citizens can't see where it went.",
    solution: 'Trained facilitators and simple ward budget maps let communities check projects themselves.',
    deliverables: [
      { name: 'Listening sessions', description: 'Community voices, recorded with consent.' },
      { name: 'County budget tracking', description: 'Toolkits for residents to follow spending.' },
      { name: 'Project site scorecards', description: 'Budget vs. reality: clinics, roads, water.' },
      { name: 'Vernacular barazas', description: 'Budgets explained in local languages.' },
      { name: 'Social audits', description: 'Ward funds, NG-CDF, health and education.' },
    ],
    workflow: [
      { step: '01', title: 'Meet the community', detail: 'Youth champions, women’s groups, residents.' },
      { step: '02', title: 'Pull the ward budget', detail: 'Approved projects from the county plan.' },
      { step: '03', title: 'Visit the sites', detail: 'Volunteers compare budget to reality.' },
      { step: '04', title: 'Present the scorecard', detail: 'To ward administrators and MCAs.' },
    ],
    faqs: [
      {
        q: 'How many people has BNS reached?',
        a: '50,000+ young Kenyans across all 47 counties, scaling beyond 200,000.',
      },
      {
        q: 'Do you work with county governments?',
        a: 'Yes. We help counties turn Annual Development Plans into public-friendly formats and design participatory budget sessions.',
      },
    ],
    image: '/images/bns/cohort1 groundworks/129A3964.jpg',
    video: 'https://www.youtube.com/watch?v=oHuImiQvvN0',
  },
  {
    id: 'bns-wanahabari',
    slug: 'bns-wanahabari',
    aliases: ['wanahabari-lab', 'wanahabari'],
    number: '03',
    title: 'Wanahabari Lab',
    shortDescription: 'Training, grants, and toolkits for journalists covering public money.',
    heroHeadline: 'Better reporting on public money.',
    heroSubhead: 'Fellowships, data toolkits, and investigative grants for Kenyan journalists and storytellers.',
    problem: 'Budget documents are hard to read, so coverage stays shallow.',
    solution: 'Quarterly training, toolkits, and grants so journalists can follow the money themselves.',
    deliverables: [
      { name: 'Quarterly training', description: 'Public finance and debt, for working journalists.' },
      { name: 'Fellowships & mentorship', description: 'Reporters paired with fiscal analysts.' },
      { name: 'Reporting grants', description: 'Funding to investigate debt and contracts.' },
      { name: 'Budget toolkits', description: 'How to read Treasury and Controller reports.' },
      { name: 'Radio syndication', description: 'Budget stories on regional and vernacular radio.' },
    ],
    workflow: [
      { step: '01', title: 'Open call', detail: 'Journalists pitch public finance stories.' },
      { step: '02', title: 'Mentorship', detail: 'Data and legal experts verify the facts.' },
      { step: '03', title: 'Reporting', detail: 'Supported fieldwork and official inquiries.' },
      { step: '04', title: 'Publish everywhere', detail: 'TV, digital news, and community radio.' },
    ],
    faqs: [
      {
        q: 'Who can apply?',
        a: 'Kenyan journalists, freelance investigative reporters, digital storytellers, and community radio broadcasters.',
      },
      {
        q: 'How often is training held?',
        a: 'Every quarter: public finance literacy, data analysis, and investigative budget reporting.',
      },
    ],
    image: '/images/bns/media/129A4039.jpg',
    video: 'https://www.youtube.com/watch?v=SfPwtqUFyj4',
  },
];
