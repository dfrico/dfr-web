import Image from 'next/image';
import Link from 'next/link';
import PostHeader from '@/components/postHeader';
import { Meta } from './post';

type Post = {
  link: string;
  module: { meta: Meta };
};

type Props = {
  post: Post;
};

function PostPreview({ post }: Props) {
  const {
    link,
    module: { meta },
  } = post;

  if (!meta) return null;
  return (
    <div className="rounded h-48 bg-gray-800 hover:bg-gray-700 transition-colors my-2">
      <Link href={`/blog${link}`} className="flex h-full">
        <div className="w-2/3 p-4 flex flex-col justify-between flex-grow">
          <PostHeader meta={meta} />
        </div>
        {meta.postImg && (
          <div className="overflow-hidden rounded-r hidden sm:block h-full w-1/3 flex-grow-0">
            <div className="object-cover h-full relative">
              <Image
                src={meta.postImg}
                alt={meta.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}

export default PostPreview;
