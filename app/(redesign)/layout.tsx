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

// The page follows the system scheme (see --bg and friends in r2b.css); this
// re-applies an explicit choice from the toggle before first paint.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

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
