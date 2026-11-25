import { Analytics } from '@vercel/analytics/react';
import { IBM_Plex_Mono, Inter, Newsreader } from 'next/font/google';

import Highlight from '@/components/highlight';
import { siteMetadata } from '@/content/site';
import 'katex/dist/katex.min.css';
import '@/styles/site.css';

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

// The page follows the system scheme (see --bg and friends in site.css). This
// re-applies a choice from the toggle before first paint, and forgets it once
// the system agrees with it, so the page never stops following the system.
const themeScript = `try{var t=localStorage.getItem('theme'),s=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t===s){localStorage.removeItem('theme');t=null}if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

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
