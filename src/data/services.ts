import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'bns-connect',
    slug: 'bns-connect',
    aliases: ['connect'],
    number: '01',
    title: 'BNS Connect',
    shortDescription: 'Convening citizens, youth advocates, and fiscal policymakers through high-impact town halls and public hearings.',
    heroHeadline: 'Bridging the gap between the people and public budget makers.',
    heroSubhead: 'We bring citizens and community leaders into direct dialogue with national and county budget committees to ensure public spending reflects real community needs.',
    problem: 'Public participation in budgeting is too often treated as a rubber-stamp exercise, held in inaccessible venues with dense jargon that locks ordinary citizens out.',
    solution: 'BNS Connect organizes dynamic, participatory town halls, legislative hearings, and youth forums that demystify fiscal choices and turn public feedback into actionable policy briefs.',
    deliverables: [
      {
        name: 'Town Hall Convenings & National Dialogues',
        description: 'Large-scale citizen gatherings connecting community advocates with parliamentarians and treasury officials.'
      },
      {
        name: 'Citizen Participation in Legislative Hearings',
        description: 'Mobilizing youth and civic groups to present formal petitions during statutory public hearing windows.'
      },
      {
        name: 'Multi-Stakeholder Fiscal Accountability Roundtables',
        description: 'Targeted policy sessions bringing together civil society, academia, and state oversight institutions.'
      },
      {
        name: 'Youth & Civil Society Budget Forums',
        description: 'Interactive civic workshops in universities and community hubs breaking down national spending priorities.'
      },
      {
        name: 'Policy Advocacy Briefs & Memoranda',
        description: 'Data-driven citizen submissions delivered directly to parliamentary budget committees.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Issue Scoping & Community Audit',
        detail: 'Identifying critical fiscal concerns directly from grassroots community networks.'
      },
      {
        step: '02',
        title: 'Evidence Gathering & Analysis',
        detail: 'Harmonizing community demands with official budget data and statutory ceilings.'
      },
      {
        step: '03',
        title: 'Town Hall Dialogue Convening',
        detail: 'Hosting structured public debates with policymakers broadcast live across media channels.'
      },
      {
        step: '04',
        title: 'Resolution Tracking & Legislative Follow-up',
        detail: 'Tracking parliamentary committee commitments against subsequent budget appropriations.'
      }
    ],
    faqs: [
      {
        q: 'Who can attend BNS Connect town halls?',
        a: 'All BNS Connect sessions are free and open to the public, youth advocates, community leaders, and civil society partners.'
      },
      {
        q: 'How do town hall resolutions reach Parliament?',
        a: 'We synthesize citizen testimonies and data into formal memoranda submitted directly to Parliamentary Committee Clerks during statutory review periods.'
      }
    ],
    image: '/images/bns/towwnhallmay/129A3912.jpg'
  },
  {
    id: 'bns-mashinani',
    slug: 'bns-mashinani',
    aliases: ['mashinani'],
    number: '02',
    title: 'BNS Mashinani',
    shortDescription: 'Taking budget literacy directly to the grassroots, informal settlements, and county communities.',
    heroHeadline: 'Budget literacy where it matters most: at the grassroots.',
    heroSubhead: 'We translate national and county fiscal decisions into community barazas, ward-level project audits, and citizen expenditure tracking.',
    problem: 'Devolution promised resources at the grassroots, but lack of access to ward-level financial data leaves citizens unable to track local project deliveries.',
    solution: 'BNS Mashinani deploys field facilitators and simplified ward budget maps to equip communities to monitor dispensaries, local roads, and water kiosks.',
    deliverables: [
      {
        name: 'Grassroots Civic Education & Budget Literacy',
        description: 'Community-based training on how county budgets are collected, allocated, and spent.'
      },
      {
        name: 'County-Level Budget Tracking & Citizen Monitoring',
        description: 'Practical toolkits for residents to inspect public project implementation in their wards.'
      },
      {
        name: 'Community Listening Tours & Ward Surveys',
        description: 'Documenting lived realities and public service delivery gaps in rural wards and informal settlements.'
      },
      {
        name: 'Vernacular Budget Breakdowns & Local Barazas',
        description: 'Accessible civic materials translated into everyday languages and community dialogue formats.'
      },
      {
        name: 'Devolved Funds Oversight & Social Audits',
        description: 'Collaborative citizen audits tracking Ward Development Funds and County Health allocations.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Community Mapping & Entry',
        detail: 'Connecting with local youth champions, women\'s groups, and resident associations in target wards.'
      },
      {
        step: '02',
        title: 'Ward Budget Deconstruction',
        detail: 'Extracting approved ward projects and capital budget figures from county financial statements.'
      },
      {
        step: '03',
        title: 'Groundwork Social Audit',
        detail: 'Community volunteers visit project sites to compare budgetary allocations with physical ground reality.'
      },
      {
        step: '04',
        title: 'Community Scorecard Presentation',
        detail: 'Presenting community findings to Ward Administrators and County Assembly members for action.'
      }
    ],
    faqs: [
      {
        q: 'Which counties does BNS Mashinani operate in?',
        a: 'We have run field groundworks across Nairobi, Kisumu, Mombasa, Nakuru, and are continuously expanding our county network.'
      },
      {
        q: 'How can a community request a BNS Mashinani workshop?',
        a: 'Community leaders and youth groups can reach out via our contact page to request field toolkits and facilitators.'
      }
    ],
    image: '/images/bns/cohort1 groundworks/129A3964.jpg'
  },
  {
    id: 'bns-wanahabari',
    slug: 'bns-wanahabari',
    aliases: ['wanahabari-lab', 'wanahabari'],
    number: '03',
    title: 'Wanahabari Lab',
    shortDescription: 'Empowering journalists, community media, and storytellers with data tools and investigative reporting grants.',
    heroHeadline: 'Investigative public finance journalism that demands answers.',
    heroSubhead: 'We train and resource media practitioners to uncover procurement irregularities, follow public money trails, and report with data rigor.',
    problem: 'Public finance stories are frequently covered with sensational political quotes rather than forensic data analysis, leaving citizens uninformed about actual spending.',
    solution: 'BNS Wanahabari provides investigative data toolkits, expert mentoring, and reporting grants that enable newsrooms and community radio to produce impactful public interest journalism.',
    deliverables: [
      {
        name: 'Data Journalism Fellowships & Mentorship',
        description: 'Structured training programs pairing reporters with leading fiscal policy analysts and data engineers.'
      },
      {
        name: 'Investigative Public Finance Reporting Grants',
        description: 'Direct production grants enabling journalists to investigate sovereign debt and public contracts.'
      },
      {
        name: 'Budget Analysis Workshops & Data Toolkits',
        description: 'Hands-on practical guides for interrogating Controller of Budget reports and procurement portals.'
      },
      {
        name: 'Community Radio Syndication & Newsroom Partnerships',
        description: 'Syndicating audio explainers and budget stories across regional and vernacular broadcast networks.'
      },
      {
        name: 'Fiscal Transparency & Procurement Investigations',
        description: 'Collaborative cross-newsroom investigations probing public expenditure and contract execution.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Call for Investigative Proposals',
        detail: 'Inviting journalists to pitch high-impact public finance and procurement stories.'
      },
      {
        step: '02',
        title: 'Data & Legal Mentorship',
        detail: 'Pairing fellows with data scientists and public procurement lawyers to verify documents.'
      },
      {
        step: '03',
        title: 'Field Investigation & Reporting',
        detail: 'Supporting on-the-ground reporting, whistleblowing verification, and official inquiries.'
      },
      {
        step: '04',
        title: 'Multi-Platform Syndication',
        detail: 'Publishing investigations across national television, digital news portals, and community radio.'
      }
    ],
    faqs: [
      {
        q: 'Who is eligible for BNS Wanahabari fellowships?',
        a: 'Practicing journalists, freelance investigative reporters, and community radio producers across East Africa are eligible.'
      },
      {
        q: 'Are the training materials open-source?',
        a: 'Yes, our budget journalism guides and data toolkits are published under open licenses for free public use.'
      }
    ],
    image: '/images/bns/media/129A4039.jpg'
  },
  {
    id: 'bns-studio',
    slug: 'bns-studio',
    aliases: ['studios', 'bns-studios'],
    number: '04',
    title: 'BNS Studios',
    shortDescription: 'Our creative multimedia hub producing viral video explainers, animated reels, podcasts, and infographics.',
    heroHeadline: 'Making national budget numbers impossible to ignore.',
    heroSubhead: 'We combine data journalism with viral creative storytelling to transform intimidating fiscal figures into engaging digital media.',
    problem: 'Budget reports and economic policy documents are notoriously dry, dense, and unengaging, preventing mass civic awareness.',
    solution: 'BNS Studio produces broadcast-quality motion graphics, fast-paced TikTok/Instagram reels, and insightful podcasts that make public finance relatable to millions.',
    deliverables: [
      {
        name: 'Viral Short-Form Explainer Reels & Campaigns',
        description: 'Bite-sized vertical videos optimized for TikTok, Instagram, and WhatsApp civic distribution.'
      },
      {
        name: 'Civic Podcasts & Expert Dialogue Broadcasts',
        description: 'In-depth audio interviews interrogating macroeconomic shifts and government spending choices.'
      },
      {
        name: 'Interactive Infographics & Fiscal Data Visualizations',
        description: 'Clear, shareable visual charts that illustrate where public tax money goes.'
      },
      {
        name: 'National Budget Day Live Analysis & Coverage',
        description: 'Real-time broadcast fact-checking during the National Treasury\'s annual budget speech.'
      },
      {
        name: 'Creative Digital Storytelling & Youth Outreach',
        description: 'Engaging animations explaining sovereign debt, affirmative funds, and public welfare.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Story Ideation & Angle Identification',
        detail: 'Translating newly released public data into high-relevance everyday civic angles.'
      },
      {
        step: '02',
        title: 'Data Verification & Scripting',
        detail: 'Drafting snappy scripts with 100% verified numbers vetted by our research desk.'
      },
      {
        step: '03',
        title: 'Production, Motion Design & Edit',
        detail: 'Filming in the studio, animating infographics, and editing high-retention video sequences.'
      },
      {
        step: '04',
        title: 'Distribution & Community Engagement',
        detail: 'Launching coordinated digital rollouts and engaging directly with audience questions.'
      }
    ],
    faqs: [
      {
        q: 'Where can I watch BNS Studio productions?',
        a: 'Our productions are published on YouTube (@budgetndiostory), TikTok, Instagram, X, and our official platform.'
      },
      {
        q: 'Can external organizations commission or co-produce content?',
        a: 'We collaborate with civic partners, universities, and public interest entities on aligned transparency campaigns.'
      }
    ],
    image: '/images/bns/studio/studio_cinema_cam.jpg',
    video: '/images/bns/reels/animation reel opportunities . Where do I start ( nyota programmes  uwezo fund) main landing page .mp4'
  }
];
