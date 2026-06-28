import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nishan.space'),
  title: {
    default: 'Nishan Singh — Senior UX Designer',
    template: '%s · nishan.space',
  },
  description:
    'Senior UX Designer with 13 years helping teams turn complex enterprise systems into products people actually love. Based in Dubai, UAE.',
  keywords: [
    'UX Designer',
    'Senior UX Designer',
    'Enterprise UX',
    'Design Systems',
    'Product Design',
    'Nishan Singh',
    'Dubai UX Designer',
  ],
  authors: [{ name: 'Nishan Singh', url: 'https://nishan.space' }],
  creator: 'Nishan Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nishan.space',
    siteName: 'nishan.space',
    title: 'Nishan Singh — Senior UX Designer',
    description:
      'Senior UX Designer with 13 years helping teams turn complex enterprise systems into products people actually love.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nishan Singh — Senior UX Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishan Singh — Senior UX Designer',
    description: 'Senior UX Designer with 13 years helping teams turn complex enterprise systems into products people actually love.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
