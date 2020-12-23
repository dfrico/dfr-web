import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../header';
import Cursor from '../cursor';

function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
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
      <main className="h-screen max-w-3xl mx-auto p-8 text-center flex flex-col justify-start">
        <Header />
        {children}
      </main>
      <Cursor />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  pageTitle: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
