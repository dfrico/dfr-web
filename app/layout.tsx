import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import Cursor from '@/components/cursor';
import Header from '@/components/header';
import Highlight from '@/components/highlight';
import '@/styles/base.css';
import '@/styles/fonts.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Daniel Fernandez</title>
        <meta name="title" content="Daniel Fernandez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
        />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>

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
