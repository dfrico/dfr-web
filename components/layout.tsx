import PropTypes from 'prop-types';
import Header from 'components/header';
import Cursor from 'components/cursor';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen max-w-3xl mx-auto p-8 md:py-0 flex flex-col justify-start">
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
