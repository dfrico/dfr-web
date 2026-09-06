import PostHeader from '@/components/postHeader';

export type Meta = {
  title: string;
  description: string;
  date: string;
  readTime: number | string; // minutes
  postImg?: string;
};

type Props = {
  children: React.ReactNode;
  meta: Meta;
};

function BlogPost({ children, meta }: Props) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}

export default BlogPost;
