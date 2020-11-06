import { Provider, createClient } from 'urql';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import '../styles/globals.css';

const client = createClient({
  url: 'https://api-euwest.graphcms.com/v1/ck0ns5hjv22o301cb1q61f3ng/master',
});

function App({ Component, pageProps }) {
  return (
    <>
      <Provider value={client}>
        <Layout pageTitle="Blog" description="My Personal Blog">
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
