import type { Metadata } from 'next';
import type { ComponentType } from 'react';

import type { Meta } from '@/components/post';
import { H2, postHeadings, postSection } from '@/components/r2b/posts';
import Rail from '@/components/r2b/rail';
import ToTop from '@/components/r2b/toTop';
import posts, { postSource } from '@/utils/getAllPosts';

type PostModule = {
  default: ComponentType<{ bare?: boolean; components?: object }>;
  meta: Meta;
  metadata: Metadata;
};

type Props = { params: Promise<{ slug: string }> };

// The posts live in app/(pages)/blog/<slug>/page.mdx, which is also the
// current site's route; here they're rendered without their own header.
function loadPost(slug: string): Promise<PostModule> {
  return import(`@/(pages)/blog/${slug}/page.mdx`);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await loadPost(slug);
  return {
    ...metadata,
    alternates: { types: { 'text/markdown': `/blog/${slug}.md` } },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { default: Content, meta } = await loadPost(slug);
  const section = postSection(slug);
  const headings = postHeadings(postSource(slug));

  const facts = [
    meta.result && { label: 'Result', value: meta.result },
    meta.stack && { label: 'Stack', value: meta.stack },
    { label: 'Reading time', value: `${meta.readTime} min` },
    meta.code && {
      label: 'Code',
      value: <a href={meta.code}>{meta.code.replace(/^https:\/\//, '')}</a>,
    },
    {
      label: 'Markdown',
      value: <a href={`/blog/${slug}.md`}>{slug}.md</a>,
    },
  ].filter(Boolean) as { label: string; value: React.ReactNode }[];

  return (
    <div className="shell">
      <Rail
        active={section}
        footer={
          headings.length > 0 ? (
            <nav aria-labelledby="toc-label">
              <p id="toc-label" className="toc-label">
                On this page
              </p>
              <ul>
                {headings.map(({ id, text }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : undefined
        }
      />
      <main id="content" className="main">
        <article className="content">
          <header>
            <p className="kicker mono">
              {section === 'lab' ? 'Lab' : 'Writing'} · {meta.date}
              {meta.updated && ` · Updated ${meta.updated}`}
            </p>
            <h1 className="post-title">{meta.title}</h1>
            <p className="dek">{meta.description}</p>
            <dl className="meta-strip">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </header>
          <div className="prose">
            <Content bare components={{ h2: H2 }} />
          </div>
        </article>
      </main>
      <ToTop />
    </div>
  );
}
