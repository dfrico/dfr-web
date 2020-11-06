import PropTypes from 'prop-types';
import PostHeader from '../postHeader';

function BlogPost({ children, meta }) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}

BlogPost.propTypes = {
  children: PropTypes.object,
  meta: PropTypes.object,
};

export default BlogPost;
