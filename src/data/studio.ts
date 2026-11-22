export interface StudioRateItem {
  code: string;
  format: string;
  scope: string;
  startingRate: string;
  unit: string;
}

export interface StudioModel {
  track: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface AudienceAlignment {
  category: string;
  tag: string;
  challenge: string;
  solution: string;
  engagement: string;
}

export const STUDIO_RATE_CARD: StudioRateItem[] = [
  {
    code: 'SRV-POD01',
    format: 'Podcast & Audio',
    scope: 'Research-informed episode — expert interviews, field recordings, sound design. Broadcast WAV/MP3, Spotify/Apple-ready, WhatsApp audiogram & full transcript.',
    startingRate: 'USD 3,500',
    unit: '/ episode',
  },
  {
    code: 'SRV-ANI02',
    format: 'Animated Explainer',
    scope: '60–90 sec kinetic 2D/3D translating one empirical finding. Dual format: 9:16 vertical (Reels/TikTok) + 16:9 widescreen — voiceover & sound design.',
    startingRate: 'USD 2,000',
    unit: '/ video',
  },
  {
    code: 'SRV-DOC03',
    format: 'Research Documentary',
    scope: '8–12 min cinematic short — researchers, data visualisations, citizen voice. 4K DCI master, colour grade, broadcast audio mix, 30s/60s cutdowns.',
    startingRate: 'USD 8,000 – 15,000',
    unit: '/ production',
  },
  {
    code: 'SRV-SOC04',
    format: 'Digital Campaign',
    scope: 'Multi-platform rollout — Reels, infographics, data cards, quote carousels. Scheduled deployment over 4–6 weeks across owned & earned channels.',
    startingRate: 'USD 5,000 – 8,000',
    unit: '/ campaign',
  },
  {
    code: 'SRV-TWN05',
    format: 'Town Hall & Public Dialogue',
    scope: 'End-to-end statutory convening — format design, independent moderation, multi-camera documentation, live stream, policy memorandum.',
    startingRate: 'USD 4,000 – 7,000',
    unit: '/ convening',
  },
  {
    code: 'SRV-LST06',
    format: 'Community Listening Sessions',
    scope: 'Participatory field sessions — consent management, raw audio repository, edited community narratives, thematic brief, ward scorecard integration.',
    startingRate: 'USD 2,500 – 4,500',
    unit: '/ session',
  },
];

export const STUDIO_MODELS: StudioModel[] = [
  {
    track: '01',
    title: 'One-off commission',
    badge: 'PROJECT',
    description: 'One report, one launch date, one standout film, podcast, or campaign.',
    deliverables: ['Dedicated producer', 'Fact-checked script', 'Social cutdowns included'],
    idealFor: 'Donors, think tanks, research institutes',
  },
  {
    track: '02',
    title: 'Embedded retainer',
    badge: 'MULTI-YEAR',
    description: 'Write us into your grant as the content partner, year-round.',
    deliverables: ['Quarterly explainers & podcasts', 'Media liaison', 'Preferential rates'],
    idealFor: '1–3 year funded programmes',
  },
  {
    track: '03',
    title: 'Masterclasses',
    badge: 'TRAINING',
    description: 'Teach your team to turn budget reports into stories.',
    deliverables: ['Report-to-story workshops', 'Video & audio workflows', 'Reaching 18–35s'],
    idealFor: 'Ministries, counties, CSOs',
  },
];

export const AUDIENCE_ALIGNMENTS: AudienceAlignment[] = [
  {
    category: 'Donors & development partners',
    tag: 'FUNDERS',
    challenge: 'Research reports that sit unread.',
    solution: 'We turn findings into films and podcasts the public actually sees.',
    engagement: 'Video spotlights, podcast series, grant retainers.',
  },
  {
    category: 'Ministries & county governments',
    tag: 'PUBLIC SECTOR',
    challenge: 'Participation duties with no citizen-friendly materials.',
    solution: 'We turn county plans into barazas, town halls, and simple summaries.',
    engagement: 'Town halls, listening sessions, citizen budgets.',
  },
  {
    category: 'CSOs & watchdogs',
    tag: 'CIVIL SOCIETY',
    challenge: 'Agencies that are costly and don’t know public finance.',
    solution: 'Broadcast-grade production at mission rates, independence protected.',
    engagement: 'Campaigns, data co-productions, investigative podcasts.',
  },
];
