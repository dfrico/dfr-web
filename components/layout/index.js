import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../header';
import Cursor from '../cursor';
import Footer from '../footer';
import styles from './layout.module.scss';

function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon.png" type="image/png" />
      </Head>
      <main>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
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
