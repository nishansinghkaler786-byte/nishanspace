import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontSize: 'clamp(4rem, 12vw, 14rem)',
          fontWeight: 300,
          color: 'var(--faint)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          margin: 0,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          color: 'var(--dim)',
          fontSize: 13,
          letterSpacing: '0.06em',
        }}
      >
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-inter-tight)',
          fontSize: 13,
          color: 'var(--accent)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--accent)',
          paddingBottom: 2,
        }}
      >
        Back to Index
      </Link>
    </div>
  );
}
