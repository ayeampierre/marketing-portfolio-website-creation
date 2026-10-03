export const profile = {
  name: 'Your Name',
  title: 'Marketing Analytics Professional',
  email: 'hello@yourdomain.com',
  linkedin: 'https://www.linkedin.com/',
}

export const broadSkills = [
  'Brand Storytelling',
  'Broadcast & Audio',
  'E-commerce',
  'Customer Experience',
  'CRM & Inbound',
  'AI for Marketing',
  'Product Craft',
]

export const deepSkills = [
  'Campaign Performance Analysis',
  'Attribution & Funnel Metrics',
  'Dashboards & Reporting',
  'A/B Testing',
  'Customer Segmentation',
  'Data-Driven Recommendations',
]

export type Experience = {
  role: string
  org: string
  place: string
  summary: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Radio Professional',
    org: 'Broadcast Radio',
    place: 'Southern California',
    summary:
      'Worked in the fast-paced world of Southern California radio, where timing, voice and audience connection drive results.',
    highlights: [
      'Audience-first messaging',
      'On-air & promotional content',
      'Deadline-driven production',
    ],
  },
  {
    role: 'Founder',
    org: 'Online Drop Shipping Store',
    place: 'Self-built e-commerce',
    summary:
      'Designed and launched my own website and drop shipping storefront, owning everything from product selection to conversion.',
    highlights: [
      'Website build & merchandising',
      'Supplier & fulfillment workflow',
      'Traffic and conversion tracking',
    ],
  },
  {
    role: 'Certified Artisan',
    org: 'Coconut Craft Production',
    place: 'Certified with Fomento, Puerto Rico',
    summary:
      'Produce handcrafted artisan goods from coconut, officially certified as an artisan in Puerto Rico.',
    highlights: [
      'Product design & production',
      'Craft brand storytelling',
      'Local & cultural markets',
    ],
  },
  {
    role: 'Marketing Intern',
    org: 'HubSpot',
    place: 'Internship',
    summary:
      'Gained hands-on exposure to inbound methodology, CRM workflows and marketing automation at a category leader.',
    highlights: [
      'Inbound marketing',
      'CRM & lifecycle stages',
      'HubSpot certifications',
    ],
  },
  {
    role: 'Marketing Consultant',
    org: 'Parker Dewey',
    place: 'Micro-internship',
    summary:
      'Delivered consulting projects for real clients through Parker Dewey, translating research and data into recommendations.',
    highlights: [
      'Client-facing deliverables',
      'Research & analysis',
      'Actionable recommendations',
    ],
  },
  {
    role: 'Customer Service Professional',
    org: 'Multiple Organizations',
    place: 'Years of experience',
    summary:
      'Years spent on the front line with customers, building the empathy that now shapes how I read the data behind them.',
    highlights: [
      'Problem resolution',
      'Voice-of-customer insight',
      'Retention & loyalty',
    ],
  },
]

export const credentials = [
  {
    label: "Master's Degree",
    issuer: 'Western Governors University (WGU)',
    detail: 'Graduate-level training in marketing strategy and analytics.',
  },
  {
    label: 'HubSpot Certifications',
    issuer: 'HubSpot Academy',
    detail: 'Inbound marketing, CRM and marketing automation coursework.',
  },
  {
    label: 'AI for Marketing',
    issuer: 'Multiple certifications & trainings',
    detail: 'Applying generative AI to content, research and analytics workflows.',
  },
  {
    label: 'Certified Artisan',
    issuer: 'Fomento, Puerto Rico',
    detail: 'Recognized producer of handcrafted coconut artisan goods.',
  },
]
