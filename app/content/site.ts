import type { Metadata } from 'next';

/** Metadata shared by the pages and the route handlers. */

export const description =
  'Senior Software Engineer based in Spain. Products I build, things I write, and work I have done.';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://dfrico.com'),
  title: 'Daniel Fernandez',
  description,
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.png', type: 'image/png' },
    ],
  },
};

export const homeMetadata: Metadata = {
  openGraph: {
    url: 'https://dfrico.com',
    siteName: 'Daniel Fernandez',
    title: 'Daniel Fernandez',
    description,
    images: '/img/logo.png',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@blayhem',
    creator: '@blayhem',
    title: 'Daniel Fernandez',
    description,
    images: '/img/logo.png',
  },
};
