import PropTypes from 'prop-types';
import Link from 'next/link';
import PostHeader from '../postHeader';

const PostPreview = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <div className="rounded h-48 bg-gray-800 hover:bg-gray-700 my-2">
      <Link href={`/blog${link}`}>
        <a className="flex h-full">
          <div className="w-2/3 p-4 flex flex-col justify-between flex-grow">
            <PostHeader meta={meta} />
          </div>
          {meta.postImg ? (
            <div className="overflow-hidden rounded-r hidden sm:block h-full w-1/3 flex-grow-0">
              <img
                className="object-cover h-full"
                src={meta.postImg}
                alt={meta.title}
              />
            </div>
          ) : null}
        </a>
      </Link>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object,
};

export default PostPreview;
