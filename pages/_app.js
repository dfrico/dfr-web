import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// highlight.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/vs2015.css';

import Layout from '../components/layout';
import '../styles/base.css';
import '../styles/fonts.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    // Chrome needs initial highlighting on window load (here)
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Daniel Fernandez</title>
        <meta name="title" content="Daniel Fernandez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
