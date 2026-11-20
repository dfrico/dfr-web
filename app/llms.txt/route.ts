import { description } from '@/content/site';
import posts from '@/utils/getAllPosts';

/** /llms.txt (https://llmstxt.org): the main pages and every post. */

export const dynamic = 'force-static';

const SITE = 'https://dfrico.com';

export function GET() {
  const text = [
    '# Daniel Fernández',
    '',
    `> ${description}`,
    '',
    '## Pages',
    '',
    `- [Home](${SITE}/): about, work, lab projects and writing`,
    `- [About](${SITE}/about): background and a timeline by year`,
    `- [Blog](${SITE}/blog): all posts`,
    '',
    '## Posts',
    '',
    ...posts.map(
      ({ slug, module: { meta } }) =>
        `- [${meta.title}](${SITE}/blog/${slug}.md): ${meta.description}`,
    ),
    '',
  ].join('\n');

  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
