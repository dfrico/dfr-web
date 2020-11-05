import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Cursor from '../components/cursor';
import Preview from '../components/main-preview';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>dfr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Preview />
        <Cursor />
        <Footer />
      </main>
    </>
  );
}
