interface SectionHeaderProps {
  chapter: string;
  label: string;
  title: string;
  italicTitle?: string;
  meta?: string;
}

export default function SectionHeader({ chapter, label, title, italicTitle, meta }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div
        className="font-mono-style"
        style={{
          fontSize: 11,
          color: 'var(--dim)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span>—</span>
        <span>{chapter}</span>
        <span>/</span>
        <span>{label}</span>
      </div>

      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 7rem)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          margin: 0,
        }}
      >
        {title}{' '}
        {italicTitle && (
          <em
            className="font-accent"
            style={{ fontStyle: 'italic', color: 'var(--accent)' }}
          >
            {italicTitle}
          </em>
        )}
      </h2>

      {meta && (
        <p
          className="font-mono-style"
          style={{
            fontSize: 12,
            color: 'var(--dim)',
            marginTop: '1rem',
            letterSpacing: '0.06em',
          }}
        >
          {meta}
        </p>
      )}
    </div>
  );
}
