import posts, { postSource } from '@/utils/getAllPosts';

/**
 * Markdown copy of a post, served at /blog/<slug>.md (rewrite in
 * next.config.mjs). It's the MDX source without the import/export header, so
 * JSX such as <Image> stays as written.
 */

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { meta } = posts.find((post) => post.slug === slug)!.module;

  // Every post starts with imports, `meta`, `metadata` and the default export
  // (the layout); the content begins after that export.
  const source = postSource(slug);
  const header = source.match(/^export default .*$/m);
  const body = header
    ? source.slice(header.index! + header[0].length).trim()
    : source;

  const markdown = [
    `# ${meta.title}`,
    '',
    `> ${meta.description}`,
    '',
    `Daniel Fernández · ${meta.date}${meta.updated ? ` · updated ${meta.updated}` : ''} · https://dfrico.com/blog/${slug}`,
    '',
    body,
    '',
  ].join('\n');

  return new Response(markdown, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
