import type { Metadata } from 'next';
import { Fraunces, Instrument_Serif, JetBrains_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';
import ThemeProvider from '@/components/providers/ThemeProvider';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nishanspace.com'),
  title: {
    default: 'Nishan Singh — Senior UX Designer',
    template: '%s · nishan space',
  },
  description:
    'Senior UX Designer with 13 years designing enterprise products at scale. Specialized in psychometric assessment platforms, healthcare EMR systems, and blockchain applications. Based in Dubai, UAE.',
  keywords: [
    'UX Designer',
    'Senior UX Designer',
    'Enterprise UX',
    'Healthcare UX',
    'Design Systems',
    'Nishan Singh',
    'Dubai UX Designer',
  ],
  authors: [{ name: 'Nishan Singh', url: 'https://nishanspace.com' }],
  creator: 'Nishan Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nishanspace.com',
    siteName: 'nishan space',
    title: 'Nishan Singh — Senior UX Designer',
    description:
      'Senior UX Designer with 13 years designing enterprise products at scale. Psychometrics, healthcare EMR, blockchain, and AI/ML interfaces.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nishan Singh — Senior UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishan Singh — Senior UX Designer',
    description:
      'Senior UX Designer with 13 years designing enterprise products at scale.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${interTight.variable}`}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <Cursor />
            <Nav />
            <main id="main-content" style={{ paddingTop: 64 }}>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
