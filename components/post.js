import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import PostHeader from 'components/postHeader';

function updateCodeSyntaxHighlighting() {
  document.querySelectorAll('pre code').forEach((block) => {
    // Chrome and Safari need re-highlighting on every post load
    hljs.highlightBlock(block);
  });
}

function BlogPost({ children, meta }) {
  useEffect(() => {
    updateCodeSyntaxHighlighting();
  }, [children]);

  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}

BlogPost.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  meta: PropTypes.object,
};

export default BlogPost;
