export interface CaseFact {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  eyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  lede: string;
  facts: CaseFact[];
  coverImage: string;
  coverAlt: string;
  nextSlug: string;
  nextTitle: string;
  nextSub: string;
  next2Slug: string;
  next2Title: string;
  next2Sub: string;
}

export const cases: CaseStudy[] = [
  {
    slug: 'lumen',
    number: '01',
    title: 'Lumen',
    tagline: 'Consumer Crypto · iOS & Android',
    eyebrow: 'Lumen · Case Study · Consumer Crypto · iOS & Android',
    heroTitle: 'Crypto, made calm — guided by',
    heroTitleAccent: 'AI you can trust.',
    lede: 'Lumen is a mobile crypto app for people who find crypto intimidating. An AI guide named Lumi explains every decision in plain language, shows the full cost of a trade before you tap buy, and keeps the whole journey — onboarding, verification, buying, and managing — honest and unhurried. Designed end to end as a complete product, in both light and dark.',
    facts: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Platform', value: 'Hybrid · iOS & Android' },
      { label: 'Scope', value: 'End-to-end product design' },
      { label: 'Year', value: '2026' },
    ],
    coverImage: '/assets/lumen/home-dark.png',
    coverAlt: 'Lumen app home screen showing portfolio overview',
    nextSlug: 'pocial',
    nextTitle: 'Pocial',
    nextSub: 'AI marketing automation · SaaS platform',
    next2Slug: 'ebinaa',
    next2Title: 'eBinaa',
    next2Sub: 'Construction marketplace · web platform',
  },
  {
    slug: 'pocial',
    number: '02',
    title: 'Pocial',
    tagline: 'AI Marketing · California, USA',
    eyebrow: 'Pocial · Case Study · AI Marketing · California, USA',
    heroTitle: 'You make it great. We make it',
    heroTitleAccent: 'found.',
    lede: 'Pocial is an AI marketing-automation platform that helps businesses show up where customers search. I designed the whole experience — a public marketing site that routes two very different audiences, and a 20+ tool dashboard organized into four color-coded hubs.',
    facts: [
      { label: 'Role', value: 'Principal UX Designer' },
      { label: 'Team', value: 'Solo · design end-to-end' },
      { label: 'Scope', value: 'Marketing site + platform' },
      { label: 'Shipped', value: '25 screens, one system' },
    ],
    coverImage: '/assets/pocial-home.png',
    coverAlt: 'Pocial dashboard showing content calendar and AI suggestions',
    nextSlug: 'ebinaa',
    nextTitle: 'eBinaa',
    nextSub: 'Construction marketplace · web platform',
    next2Slug: 'lumen',
    next2Title: 'Lumen',
    next2Sub: 'AI-guided crypto · consumer fintech',
  },
  {
    slug: 'ebinaa',
    number: '03',
    title: 'eBinaa',
    tagline: 'PropTech · Oman',
    eyebrow: 'eBinaa · Case Study · PropTech · Oman',
    heroTitle: 'The trusted way to design, build & buy a home in',
    heroTitleAccent: 'Oman.',
    lede: 'eBinaa connects Omani homeowners with verified architects, contractors and developers across three journeys — Design, Build and Buy. Bilingual (English / Arabic RTL), free for homeowners, integrated with Oman Housing Bank, and built on standardized contracts and stage-based payments. I led the end-to-end product experience.',
    facts: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Platform', value: 'Responsive web + Arabic RTL' },
      { label: 'Partner', value: 'Oman Housing Bank' },
      { label: 'Year', value: '2026' },
    ],
    coverImage: '/assets/ds-00-homepage.png',
    coverAlt: 'eBinaa contractor portal overview',
    nextSlug: 'lumen',
    nextTitle: 'Lumen',
    nextSub: 'AI-guided crypto · consumer fintech',
    next2Slug: 'pocial',
    next2Title: 'Pocial',
    next2Sub: 'AI marketing automation · SaaS platform',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
