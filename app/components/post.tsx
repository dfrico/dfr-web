import PostHeader from '@/components/postHeader';

export type Meta = {
  title: string;
  description: string;
  date: string;
  readTime: number | string; // minutes
  postImg?: string;
  // Optional facts shown in the redesign's post meta strip.
  updated?: string;
  result?: string;
  stack?: string;
  code?: string;
};

type Props = {
  children: React.ReactNode;
  meta: Meta;
  // The redesign preview renders its own post header and wrapper around the
  // MDX content, so it asks for the content alone.
  bare?: boolean;
};

function BlogPost({ children, meta, bare }: Props) {
  if (bare) return <>{children}</>;
  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}

export default BlogPost;
