import React from 'react';
import Preview from '../components/preview';
import { posts } from './blog/getAllPosts';

export default function Home() {
  return (
    <>
      {posts.map((post) => (
        <Preview key={post.link} post={post} />
      ))}
    </>
  );
}
