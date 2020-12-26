import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../header';
import Cursor from '../cursor';

function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
      </Head>
      <main className="h-screen max-w-3xl mx-auto p-8 md:px-8 md:py-0 flex flex-col justify-start">
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
