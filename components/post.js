import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import hljs from 'highlight.js/lib/core';
import PostHeader from 'components/postHeader';

function updateCodeSyntaxHighlighting() {
  document.querySelectorAll('pre code').forEach((el) => {
    // Chrome and Safari need re-highlighting on every post load
    hljs.highlightElement(el);
  });
}

function BlogPost({ children, meta }) {
  useEffect(() => {
    updateCodeSyntaxHighlighting();
  }, [children]);

  return (
    <>
      <Head>
        <title>{meta.title} - Daniel Fernandez</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.postImg} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.postImg} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@blayhem" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`http://danielfernandez.dev${meta.postImg}`}
        />
      </Head>
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
