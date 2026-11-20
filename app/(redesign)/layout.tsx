import { Analytics } from '@vercel/analytics/react';
import { IBM_Plex_Mono, Inter, Newsreader } from 'next/font/google';

import Highlight from '@/components/highlight';
import { siteMetadata } from '@/content/site';
import 'katex/dist/katex.min.css';
import '@/styles/r2b.css';

/**
 * Root layout of the redesign preview (R2b). Its routes live under /r2b and
 * are reached through the ?redesign=true flag (see proxy.ts).
 */

const serif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif',
});

const sans = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-mono',
});

export const metadata = siteMetadata;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Applies the saved theme before first paint (see components/r2b/themeToggle).
const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
        <Highlight />
        <Analytics />
      </body>
    </html>
  );
}
