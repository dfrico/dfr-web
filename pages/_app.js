import PropTypes from 'prop-types';
import Layout from '../components/layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
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
