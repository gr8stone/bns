import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Public Data Ingestion & Statutory Audit',
    subtitle: 'Extracting and verifying official Treasury, COB, and Parliamentary records.',
    description: 'We ingest statutory budget estimates, auditor reports, and public debt prospectuses, auditing allocations against previous fiscal performance under Constitution 2010 Articles 10 & 232 and the PFM Act 2015.',
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
    title: 'Grassroots Groundwork & Community Listening',
    subtitle: 'Connecting fiscal policies directly to citizen realities in informal settlements and counties.',
    description: 'BNS Mashinani field teams host community listening sessions with rigorous consent management, documenting the real-world impact of healthcare deficits, stalled school facilities, and water projects.',
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
    title: 'Multimedia Production & Animation in BNS Studios',
    subtitle: 'Crafting high-impact explainer reels, podcasts, and research spotlights.',
    description: 'BNS Studios produces 60–90s 2D animated explainers, 8–10 min research spotlight documentaries, audio podcasts, and multi-platform social media series calibrated for maximum civic engagement.',
    deliverables: [
      'Studio Production Master Footage',
      '60–90s Animated Video Explainers',
      'Research Spotlight Documentaries',
      'Podcast Episodes & Audio Masters'
    ],
    duration: '5–7 Days'
  },
  {
    number: '06',
    title: 'Fact-Checking & Non-Partisan Editorial Review',
    subtitle: 'Rigorous data verification to maintain absolute credibility and truth.',
    description: 'Before any episode or graphic is published, our data desk and external fiscal advisors conduct strict source-checking under our non-partisan Editorial Policy, ensuring every number traces to verifiable public documents.',
    deliverables: [
      'Verification Sign-off Report',
      'Source Citation Appendix',
      'Editorial Clearance Note'
    ],
    duration: '2–3 Days'
  },
  {
    number: '07',
    title: 'Distribution, Town Halls & Policy Advocacy',
    subtitle: 'Amplifying findings across digital media, community radio, and parliamentary hearings.',
    description: 'We release findings through coordinated multi-platform campaigns, community radio syndication, BNS Connect town halls at ward/sub-county/county level, and formal citizen petitions to parliamentary committees.',
    deliverables: [
      'Multi-Platform Campaign Rollout',
      'Community Radio Audio Syndication',
      'Town Hall Dialogue Outputs',
      'Citizen Petition & Policy Memo to Parliament'
    ],
    duration: 'Ongoing'
  }
];
