import Link from 'next/link';
import posts from '@/utils/getAllPosts';
import { monthYear } from './posts';

export default function WritingList() {
  return (
    <ul className="writing">
      {posts.map(({ slug, module: { meta } }) => (
        <li key={slug}>
          <time className="meta" dateTime={slug.slice(0, 7)}>
            {monthYear(slug)}
          </time>
          <Link href={`/blog/${slug}`}>{meta.title}</Link>
        </li>
      ))}
    </ul>
  );
}
