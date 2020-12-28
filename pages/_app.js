import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// highlight.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/vs2015.css';

import Layout from '../components/layout';
import '../styles/base.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    // Chrome needs initial highlighting on window load (here)
    hljs.initHighlighting();
  }, []);

  return (
    <>
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
