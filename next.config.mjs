import path from 'node:path';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm', 'remark-math'],
    // Local plugin by absolute path: Turbopack needs plugins as strings, and
    // resolves relative ones from each .mdx file.
    rehypePlugins: [path.join(import.meta.dirname, 'lib/rehype-tikz.mjs'), 'rehype-katex'],
    // U+FE0E keeps ↩ as a text glyph instead of an emoji on Apple platforms.
    remarkRehypeOptions: { footnoteBackContent: '↩︎' },
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'app/styles')],
  },
};

export default withMDX(nextConfig);