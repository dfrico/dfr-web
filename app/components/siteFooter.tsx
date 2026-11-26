import SiteLinks from './siteLinks';

/**
 * Phones only: there the rail is a top bar with no room for the links, so they
 * wait at the end of the page instead. CSS hides this wherever the rail shows
 * them, rather than repeating them on the same screen.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <SiteLinks />
    </footer>
  );
}
