import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
          />
          <meta property="og:image" content="/img/logo.png" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://danielfernandez.dev/" />
          <meta property="og:title" content="Daniel Fernandez" />
          <meta
            property="og:description"
            content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
          />
          <meta property="og:image" content="/img/logo.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@blayhem" />
          <meta name="twitter:url" content="https://danielfernandez.dev" />
          <meta name="twitter:title" content="Daniel Fernandez" />
          <meta
            name="twitter:description"
            content="Frontend developer based in Madrid, Spain. Check out my site to learn more about me!"
          />
          <meta name="twitter:image" content="/img/logo.png" />

          {/* Google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Favicon */}
          <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon/favicon.png" type="image/png" />
        </Head>
        <body className="bg-black text-gray-50 font-rubik m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
