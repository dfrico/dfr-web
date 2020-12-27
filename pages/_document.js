import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
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
