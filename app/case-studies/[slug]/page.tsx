import { getAllSlugs } from '@/lib/cases';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ minHeight: '100vh', padding: '4rem 2rem' }}>
      <p style={{ fontFamily: 'var(--font-jetbrains-mono)', color: 'var(--dim)', fontSize: 13 }}>
        case study: {params.slug} — building soon
      </p>
    </div>
  );
}
