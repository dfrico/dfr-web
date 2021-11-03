import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import PostHeader from 'components/postHeader';

const PostPreview = ({ post }) => {
  const [mounted, setMounted] = useState(false);
  const {
    link,
    module: { meta },
  } = post;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!meta || !mounted) return null;
  return (
    <div className="rounded h-48 bg-gray-800 hover:bg-gray-700 transition-colors my-2">
      <Link href={`/blog${link}`}>
        <a className="flex h-full">
          <div className="w-2/3 p-4 flex flex-col justify-between flex-grow">
            <PostHeader meta={meta} />
          </div>
          {meta.postImg && (
            <div className="overflow-hidden rounded-r hidden sm:block h-full w-1/3 flex-grow-0">
              <div className="object-cover h-full relative">
                <Image src={meta.postImg.src} alt={meta.title} layout="fill" />
              </div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object,
};

export default PostPreview;
