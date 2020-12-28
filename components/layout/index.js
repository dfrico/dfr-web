import PropTypes from 'prop-types';
import Header from '../header';
import Cursor from '../cursor';

function Layout({ children }) {
  return (
    <>
      <main className="h-screen max-w-3xl mx-auto p-8 md:py-0 flex flex-col justify-start">
        <Header />
        {children}
      </main>
      <Cursor />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
