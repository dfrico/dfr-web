import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

export type Meta = {
  title: string;
  description: string;
  date: string;
  readTime: number | string; // minutes
  postImg?: string;
};

export type Post = {
  link: string;
  module: { meta: Meta };
};

const BLOG_DIR = path.join(process.cwd(), 'app/(pages)/blog');
const IMAGE_EXT = /\.(jpe?g|png|gif|webp)$/i;

function extractMeta(source: string, slug: string): Meta | null {
  const metaBlock = source.match(
    /export\s+const\s+meta\s*=\s*(\{[\s\S]*?\n});/,
  );
  if (!metaBlock) return null;

  const imageImports = new Map<string, string>();
  const importPattern = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let match: RegExpExecArray | null;
  while ((match = importPattern.exec(source)) !== null) {
    const [, ident, file] = match;
    if (IMAGE_EXT.test(file)) {
      imageImports.set(ident, `/img/blog/${slug}/${path.basename(file)}`);
    }
  }

  let metaCode = metaBlock[1];
  for (const [ident, url] of imageImports) {
    metaCode = metaCode.replace(
      new RegExp(`\\b${ident}\\b`, 'g'),
      JSON.stringify(url),
    );
  }

  try {
    return new Function(`return (${metaCode});`)() as Meta;
  } catch {
    return null;
  }
}

const posts: Post[] = readdirSync(BLOG_DIR)
  .filter(
    (slug) =>
      !slug.includes('WIP') &&
      existsSync(path.join(BLOG_DIR, slug, 'page.mdx')),
  )
  .flatMap((slug) => {
    const source = readFileSync(path.join(BLOG_DIR, slug, 'page.mdx'), 'utf-8');
    const meta = extractMeta(source, slug);
    if (!meta) return [];
    return [{ link: `/${slug}`, module: { meta } }];
  })
  .sort((a, b) => b.link.localeCompare(a.link));

export default posts;
