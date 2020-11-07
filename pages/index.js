import React from 'react';
import Preview from '../components/preview';
import postList from '../utils/getAllPosts';

export default function Home() {
  // TODO: move to /blog, create home
  return (
    <>
      <br />
      {postList.map((post) => (
        <Preview key={post.link} post={post} />
      ))}
    </>
  );
}
