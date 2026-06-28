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
    lede: 'Lumen is a consumer crypto app that pairs a clean investment experience with an AI companion that explains every move — turning anxiety into confidence for first-time and returning investors.',
    facts: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Platform', value: 'Hybrid · iOS & Android' },
      { label: 'Scope', value: 'End-to-end' },
      { label: 'Year', value: '2026' },
    ],
    coverImage: '/assets/lumen/home-dark.png',
    coverAlt: 'Lumen app home screen showing portfolio overview',
    nextSlug: 'pocial',
    nextTitle: 'Pocial',
    nextSub: 'AI MarTech SaaS',
  },
  {
    slug: 'pocial',
    number: '02',
    title: 'Pocial',
    tagline: 'AI MarTech · SaaS Platform',
    eyebrow: 'Pocial · Case Study · AI MarTech · SaaS',
    heroTitle: 'AI that writes, schedules, and learns — so your brand',
    heroTitleAccent: 'never misses a moment.',
    lede: 'Pocial is an AI-powered social media management platform that generates on-brand content, optimises posting schedules, and surfaces audience insights — giving lean marketing teams the leverage of an entire agency.',
    facts: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Platform', value: 'Web SaaS' },
      { label: 'Scope', value: 'End-to-end' },
      { label: 'Year', value: '2025' },
    ],
    coverImage: '/assets/pocial-home.png',
    coverAlt: 'Pocial dashboard showing content calendar and AI suggestions',
    nextSlug: 'ebinaa',
    nextTitle: 'eBinaa',
    nextSub: 'Oman PropTech Platform',
  },
  {
    slug: 'ebinaa',
    number: '03',
    title: 'eBinaa',
    tagline: 'PropTech · Contractor Portal · Bilingual RTL',
    eyebrow: 'eBinaa · Case Study · PropTech · Oman',
    heroTitle: `Connecting Oman's construction industry — in`,
    heroTitleAccent: 'Arabic and English.',
    lede: `eBinaa is a bilingual (Arabic/English) contractor marketplace and project management portal for Oman's construction sector — bridging property owners, contractors, and engineers on a single platform with full RTL support.`,
    facts: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Platform', value: 'Web · Mobile Web' },
      { label: 'Scope', value: 'End-to-end' },
      { label: 'Year', value: '2024' },
    ],
    coverImage: '/assets/ds-00-homepage.png',
    coverAlt: 'eBinaa contractor portal overview',
    nextSlug: 'lumen',
    nextTitle: 'Lumen',
    nextSub: 'Consumer Crypto iOS & Android',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
