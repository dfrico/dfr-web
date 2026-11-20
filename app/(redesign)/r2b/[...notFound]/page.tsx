import { notFound } from 'next/navigation';

// Keeps unknown /r2b URLs (e.g. a post slug that doesn't exist) in the
// redesign's not-found page instead of app/(pages)/[...notFound].
export default function CatchAll() {
  notFound();
}
