import PropTypes from 'prop-types';
import Link from 'next/link';
import PostHeader from '../postHeader';

const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <PostHeader meta={meta} />
      <Link href={`/blog${link}`}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
