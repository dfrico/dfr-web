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
          {/* eslint-disable-next-line react/no-invalid-html-attribute */}
          <a rel="me" href="https://mastodon.social/@dfr">
            Mastodon
          </a>

          {/* Google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Favicon */}
          <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon/favicon.png" type="image/png" />
        </Head>
        <body className="bg-black text-gray-50 font-inter m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
