import { Provider, createClient } from 'urql';
import PropTypes from 'prop-types';
import '../styles/globals.css';

const client = createClient({
  url: 'https://api-euwest.graphcms.com/v1/ck0ns5hjv22o301cb1q61f3ng/master',
});

function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
