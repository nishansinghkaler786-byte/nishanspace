import { notFound } from 'next/navigation';
import { getCaseBySlug, getAllSlugs } from '@/lib/cases';
import CaseStudyClient from './CaseStudyClient';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.title} — Case Study`,
    description: c.lede,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();
  return <CaseStudyClient caseStudy={c} />;
}
