import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Public Data Ingestion & Audit',
    subtitle: 'Extracting and verifying official Treasury, COB, and Parliamentary records.',
    description: 'We ingest statutory budget estimates, auditor reports, and public debt prospectuses, auditing allocations against previous fiscal performance and constitutional thresholds.',
    deliverables: [
      'Statutory Data Audit Checklist',
      'Fiscal Discrepancy Matrix',
      'Baseline Expenditure Analysis'
    ],
    duration: '2–3 Days'
  },
  {
    number: '02',
    title: 'Investigative Hypothesis & Legal Review',
    subtitle: 'Framing public interest questions with fiscal law experts and economists.',
    description: 'We collaborate with researchers, economists, and legal scholars to assess public debt sustainability, procurement red flags, and constitutional compliance with public participation mandates.',
    deliverables: [
      'Investigative Briefing Note',
      'Legal & Statutory Risk Assessment',
      'Accountability Questionnaire'
    ],
    duration: '3–5 Days'
  },
  {
    number: '03',
    title: 'Grassroots Groundwork & Barazas',
    subtitle: 'Connecting fiscal policies directly to citizen realities in informal settlements and counties.',
    description: 'BNS Mashinani field teams host community listening tours and localized barazas, documenting the real-world impact of healthcare deficits, stalled school facilities, and water projects.',
    deliverables: [
      'Community Lived Experience Testimonies',
      'Ward-Level Project Ground Scorecards',
      'Vernacular Insight Recordings'
    ],
    duration: '5–7 Days'
  },
  {
    number: '04',
    title: 'Plain-Language Translation & Scripting',
    subtitle: 'Converting impenetrable budget jargon into compelling civic storytelling.',
    description: 'We deconstruct complex fiscal jargon into accessible narratives, relatable metaphors, and youth-centered scripts that resonate with citizens across diverse social backgrounds.',
    deliverables: [
      'Docuseries Script Drafts',
      'Infographic Data Storyboards',
      'Social Media Hook Strategy'
    ],
    duration: '3–4 Days'
  },
  {
    number: '05',
    title: 'Multimedia Production & Animation',
    subtitle: 'Crafting high-impact explainer reels, podcasts, and data visualizations in BNS Studio.',
    description: 'Our creative lab produces 2D animations, host-led investigative video explainers, motion data charts, and audio podcast episodes calibrated for maximum digital engagement.',
    deliverables: [
      'Studio Production Master Footage',
      'Dynamic Motion Graphics & Infographics',
      'Multi-Format Video Cuts (16:9 & 9:16)'
    ],
    duration: '5–7 Days'
  },
  {
    number: '06',
    title: 'Fact-Checking & Expert Review',
    subtitle: 'Rigorous data verification to maintain absolute credibility and truth.',
    description: 'Before any episode or graphic is published, our data desk and external fiscal advisors conduct strict source-checking, ensuring every number traces to verifiable public documents.',
    deliverables: [
      'Verification Sign-off Dossier',
      'Source Citation Appendix',
      'Legal Clearance Note'
    ],
    duration: '2–3 Days'
  },
  {
    number: '07',
    title: 'Distribution, Town Halls & Advocacy',
    subtitle: 'Amplifying findings across digital media, community radio, and parliamentary hearings.',
    description: 'We release the findings through coordinated YouTube episodes, viral TikTok/WhatsApp campaigns, town hall dialogues (BNS Connect), and formal petitions to Parliamentary oversight committees.',
    deliverables: [
      'YouTube & Social Media Campaign Rollout',
      'Community Radio Audio Syndication',
      'Citizen Petition & Policy Memo to Parliament'
    ],
    duration: 'Ongoing'
  }
];
