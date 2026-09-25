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
    title: 'Content Commission',
    badge: 'MANDATE',
    description: 'Commission BNS Studios for discrete, high-production storytelling deliverables tailored to your policy report, evaluation findings, or civic campaign.',
    deliverables: [
      'Bespoke production sprint with dedicated producer',
      'Forensic data verification against primary documents',
      'Dual-format master delivery with social cutdowns',
      'Guaranteed distribution across BNS verified network',
    ],
    idealFor: 'Development partners, bilateral agencies, think tanks, and research institutes with discrete report publication dates.',
  },
  {
    track: '02',
    title: 'Embedded Studio Retainer',
    badge: 'GRANT EMBEDDED',
    description: 'Partner with BNS Studios from inception by writing our studio as a designated "Content & Engagement Partner" budget line into your multiannual donor applications.',
    deliverables: [
      'Year-round communications & dissemination architecture',
      'Quarterly animated explainers, podcasts & field documentaries',
      'Continuous media liaison and parliamentary submission packaging',
      'Preferential tariff schedule and dedicated creative team',
    ],
    idealFor: 'Organisations holding 1–3 year institutional funding requiring continuous civic dissemination and donor visibility.',
  },
  {
    track: '03',
    title: 'Executive Masterclasses & Capacity',
    badge: 'TRAINING',
    description: 'Specialised workshops for government communications units, CSO advocacy officers, and donor media teams on public finance storytelling and civic engagement design.',
    deliverables: [
      'Translating Controller of Budget & Treasury reports into story',
      'Audio & video production workflows for policy advocacy',
      'Social media distribution tactics for youth audiences (18–35)',
      'Statutory public participation design under the PFM Act',
    ],
    idealFor: 'Ministries, county executive communications teams, watchdog coalitions, and bilateral technical assistance teams.',
  },
];

export const AUDIENCE_ALIGNMENTS: AudienceAlignment[] = [
  {
    category: 'Development Partners & Donors',
    tag: 'BILATERAL & MULTILATERAL',
    challenge: 'Costly evaluation and research reports that sit unread in PDFs, failing to influence policy debates or public discourse.',
    solution: 'We convert technical evaluation findings into high-retention audio, kinetic animation, and documentary media distributed directly to the people they describe.',
    engagement: 'Commissioned video spotlights, podcast series, or embedded grant engagement lines.',
  },
  {
    category: 'National MDAs & County Governments',
    tag: 'PUBLIC SECTOR & COUNCILS',
    challenge: 'Fulfilling constitutional public participation duties (Articles 10, 201 & 232) without accessible citizen communication materials.',
    solution: 'We deconstruct Annual Development Plans and county fiscal strategy papers into vernacular baraza materials and neutral town hall hearings.',
    engagement: 'Statutory town hall convening, listening sessions, and simplified citizen budget summaries.',
  },
  {
    category: 'CSOs & Accountability Networks',
    tag: 'CIVIC SECTOR & WATCHDOGS',
    challenge: 'High commercial production costs and agencies that lack familiarity with public finance law and governance realities.',
    solution: 'Access broadcast-grade production at mission-aligned rates with a team that respects empirical rigour and protects editorial independence.',
    engagement: 'Advocacy campaign production, data journalism co-productions, and investigative podcasts.',
  },
];
