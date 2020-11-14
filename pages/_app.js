import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import highlight from 'highlight.js/lib/core';
import 'highlight.js/styles/vs2015.css';
import javascript from 'highlight.js/lib/languages/javascript';

import Layout from '../components/layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    highlight.registerLanguage('javascript', javascript);
    highlight.initHighlightingOnLoad();
  }, [pageProps]);

  return (
    <>
      <Layout pageTitle="Blog" description="My Personal Blog">
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
