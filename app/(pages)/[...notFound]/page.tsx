import { notFound } from 'next/navigation';

// The app has two root layouts ((pages) and (redesign)), so unmatched URLs
// have no layout to render a 404 in. This catch-all sends them to
// notFound() inside the (pages) layout, keeping the site's header and style.
export default function CatchAll() {
  notFound();
}
