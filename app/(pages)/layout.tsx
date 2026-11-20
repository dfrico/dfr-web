import { Analytics } from '@vercel/analytics/react';

import Cursor from '@/components/cursor';
import Header from '@/components/header';
import Highlight from '@/components/highlight';
import '@/styles/base.css';
import '@/styles/fonts.css';
import 'highlight.js/styles/tokyo-night-dark.css';
import 'katex/dist/katex.min.css';
import { siteMetadata } from '@/content/site';

export const metadata = siteMetadata;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-50 font-inter m-0">
        <main className="min-h-screen max-w-3xl mx-auto p-8 md:py-0 flex flex-col justify-start">
          <Header />
          <Highlight />
          {children}
        </main>
        <Cursor />

        <Analytics />
      </body>
    </html>
  );
}
