import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Daniel Fernández - Frontend developer based in Madrid, Spain. Check my site to learn more about me!"
          />
          <meta
            property="og:image"
            content="https://example.com/images/image.jpg"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dfr.now.sh/" />
          <meta property="og:title" content="dfr-web" />
          <meta
            property="og:description"
            content="Daniel Fernández - Frontend developer based in Madrid, Spain. Check my site to learn more about me!"
          />
          <meta property="og:image" content="/img/logo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dfr.now.sh" />
          <meta property="twitter:title" content="dfr-web" />
          <meta
            property="twitter:description"
            content="Daniel Fernández - Frontend developer based in Madrid, Spain. Check my site to learn more about me!"
          />
          <meta property="twitter:image" content="/img/logo.png" />

          {/* Google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
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
