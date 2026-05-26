'use client';

import { useThemeStore } from '@/lib/theme-store';
import { useCursorStore } from '@/lib/cursor-store';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const setVariant = useCursorStore((s) => s.setVariant);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onMouseEnter={() => setVariant('hover')}
      onMouseLeave={() => setVariant('default')}
      className="flex items-center gap-1.5 font-mono-style text-xs text-[var(--dim)] hover:text-[var(--ink)] transition-colors duration-200"
    >
      <span
        style={{
          display: 'inline-block',
          width: 32,
          height: 18,
          borderRadius: 9,
          background: theme === 'dark' ? 'var(--faint)' : 'var(--accent)',
          position: 'relative',
          transition: 'background 0.3s ease',
        }}
      >
        <span
          style={{
            display: 'block',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            top: 3,
            left: theme === 'dark' ? 3 : 17,
            transition: 'left 0.3s ease',
          }}
        />
      </span>
      <span className="uppercase tracking-widest" style={{ fontSize: 10 }}>
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
