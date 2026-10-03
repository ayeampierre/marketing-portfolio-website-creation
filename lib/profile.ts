export const profile = {
  name: 'Andre Yeampierre',
  initials: 'AY',
  title: 'Digital Strategist & Marketing Analyst',
  location: 'Cabo Rojo, Puerto Rico',
  email: 'ayeampierre1@gmail.com',
  phone: '939-269-2195',
  phoneHref: 'tel:+19392692195',
  linkedin: 'https://www.linkedin.com/in/andreyeampierre',
  linkedinLabel: 'linkedin.com/in/andreyeampierre',
  website: 'https://artesanobonafide.com',
  websiteLabel: 'ArtesanoBonafide.com',
}

export const stats = [
  { value: '4.0', label: 'GPA, WGU Marketing' },
  { value: '15K+', label: 'LinkedIn impressions tracked' },
  { value: '14M+', label: 'Google Maps photo views' },
  { value: '17+ yrs', label: 'Running social platforms' },
]

export const broadSkills = [
  'Brand & Cultural Storytelling',
  'Radio DJ & Production',
  'E-commerce Operations',
  'Product & Graphic Design',
  'Social Media Management',
  'Photography',
  'Customer Service',
  'Bilingual Outreach',
  'Sustainable Artisan Innovation',
]

export const deepSkills = [
  'HubSpot CRM & Funnels',
  'KPI Dashboards & Reporting',
  'A/B Testing & Experimentation',
  'Audience Segmentation',
  'CTR & Conversion Analysis',
  'AI-Assisted Data Analysis',
]

export type Experience = {
  role: string
  org: string
  period: string
  place: string
  summary: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Marketing AI Micro-Intern',
    org: 'HubSpot × WGU',
    period: 'Sept – Oct 2024',
    place: 'Remote',
    summary:
      'Mastered HubSpot CRM for lead-gen campaigns, audience segmentation, A/B testing and KPI dashboards while working with real HubSpot clients in a bootcamp-style program.',
    highlights: ['Lead generation', 'A/B testing', 'KPI dashboards'],
  },
  {
    role: 'Independent Consultant',
    org: 'Parker Dewey',
    period: 'May – Jul 2025',
    place: 'Remote',
    summary:
      'Built and optimized HubSpot funnels, including emails, landing pages and automations, with real-time CTR and conversion reporting and ongoing experimentation.',
    highlights: ['Funnel optimization', 'Marketing automation', 'CTR reporting'],
  },
  {
    role: 'VP Promotions & Advertising',
    org: 'AMA WGU Student Chapter',
    period: 'Mar – Nov 2025',
    place: 'Remote',
    summary:
      'Managed multi-channel campaigns and built content calendars and shortlists to juggle deadlines, with cross-team coordination and clear written and verbal communication.',
    highlights: ['Multi-channel campaigns', 'Content calendars', 'Student leadership'],
  },
  {
    role: 'Founder',
    org: 'ArtesanoBonafide.com (CocoBling)',
    period: '2020 – Present',
    place: 'Cabo Rojo, PR',
    summary:
      'I run a Fomento-certified artisan brand that turns coconut into handcrafted goods. I secured a YouTube creator partnership (3K+ subscribers) that drove 215 site visits, and I track LinkedIn metrics (15K+ impressions, 550 followers, 85 newsletter subscribers) to refine content.',
    highlights: ['Creator partnerships', 'Influencer shortlists', 'Certified artisan'],
  },
  {
    role: 'Radio DJ & Production Manager',
    org: 'KCAL · KKUU · KCDZ',
    period: 'Early 2000s',
    place: 'Southern California',
    summary:
      'Worked on air and behind the board at Southern California stations, learning broadcast production, advertising sales and campaign management early in my career.',
    highlights: ['On-air talent', 'Audio production', 'Ad campaigns'],
  },
  {
    role: 'Customer Service & Field Work',
    org: 'Multiple Organizations',
    period: 'Many years',
    place: 'California & Puerto Rico',
    summary:
      'Years of hands-on, customer-facing work in food service, delivery and home maintenance built the empathy I now bring to reading the data behind every customer.',
    highlights: ['Problem resolution', 'Voice of the customer', 'Reliability'],
  },
]

export type Education = {
  label: string
  issuer: string
  date: string
}

export const education: Education[] = [
  { label: 'M.S. Marketing', issuer: 'Western Governors University', date: 'Aug 2026' },
  { label: 'B.S. Marketing (4.0 GPA)', issuer: 'Western Governors University', date: 'Nov 2025' },
  { label: 'Certified Artisan', issuer: 'Fomento, Puerto Rico', date: 'Coconut crafts' },
  { label: 'Graphic Design Certification', issuer: 'Universidad Ana G. Méndez', date: '2015' },
  { label: 'R.O.P. Broadcasting', issuer: 'KCDZ Radio', date: '2001' },
]

export type Certification = {
  name: string
  issuer: string
  date: string
  url?: string
}

export type CertificationGroup = {
  title: string
  items: Certification[]
}

export const certificationGroups: CertificationGroup[] = [
  {
    title: 'AI & Data',
    items: [
      {
        name: 'ChatGPT Advanced Data Analysis',
        issuer: 'Vanderbilt University',
        date: 'Jul 2024',
        url: 'https://coursera.org/account/accomplishments/records/868CHPBDLM6A',
      },
      {
        name: 'Prompt Engineering for ChatGPT',
        issuer: 'Vanderbilt University',
        date: 'Jul 2024',
        url: 'https://coursera.org/account/accomplishments/records/XKHCQ6YELTVH',
      },
      {
        name: 'Innovative Teaching with ChatGPT',
        issuer: 'Vanderbilt University',
        date: 'Jul 2024',
        url: 'https://coursera.org/account/accomplishments/records/K3YGGF8KBHJ3',
      },
      {
        name: 'Generative AI for Digital Marketers',
        issuer: 'LinkedIn Learning',
        date: 'Jun 2024',
        url: 'https://linkedin.com/learning/certificates/03930e4632ca7a569af464d5d000fed4e4e22ce48d76568cef4032b3a53a847c',
      },
    ],
  },
  {
    title: 'Marketing & Strategy',
    items: [
      {
        name: 'HubSpot Inbound Certified',
        issuer: 'HubSpot Academy',
        date: 'Valid through 2027',
      },
      {
        name: 'WGU Certificate: Marketing',
        issuer: 'Western Governors University',
        date: 'Jul 2024',
        url: 'https://api.badgr.io/public/assertions/wlgD3R_nS2Wnj6JQ2eP_wA',
      },
      {
        name: 'WGU Certificate: Strategic Thinking and Innovation',
        issuer: 'Western Governors University',
        date: 'Jul 2024',
        url: 'https://api.badgr.io/public/assertions/bKtAbR0uSJ2TaGB1KvPnkQ',
      },
      {
        name: 'Augmented Reality Marketing',
        issuer: 'LinkedIn Learning',
        date: 'Jun 2024',
        url: 'https://linkedin.com/learning/certificates/b98e48b225dac87b8aa9ef8e1a65679c00d22e356c63c9aa5ddd934d495db8b2',
      },
      {
        name: 'Learning Cultural Strategy for Design',
        issuer: 'LinkedIn Learning',
        date: 'Jul 2024',
        url: 'https://linkedin.com/learning/certificates/2453b6d48db4a7b0b5a15a2c2d7b7d75e357e3a47876a7ac50255e55e15ff2bf',
      },
    ],
  },
  {
    title: 'Leadership',
    items: [
      {
        name: 'Leading Projects',
        issuer: 'LinkedIn Learning',
        date: 'Jul 2024',
        url: 'https://linkedin.com/learning/certificates/a26243448009dd87f92e409c646a0477d4383eb0aaa1d3de3922bc3cc2abf5df',
      },
      {
        name: 'Risk-Taking for Leaders',
        issuer: 'LinkedIn Learning',
        date: 'Jul 2024',
        url: 'https://linkedin.com/learning/certificates/088dc777685c30971a460f32a4274b4c75ad610cff0c5010c9fa1d27adcba7b0',
      },
    ],
  },
]
