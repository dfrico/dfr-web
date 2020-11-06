import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../header';
import Cursor from '../cursor';
import Footer from '../footer';

function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Header />
        <div className="content">{children}</div>
        <Cursor />
        <Footer />
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  pageTitle: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
