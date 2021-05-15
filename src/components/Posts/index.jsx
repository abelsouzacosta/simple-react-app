import React from 'react';
import { PostCard } from '../PostCard';
import './styles.css';

import P from 'prop-types';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} cover={post.cover} id={post.id} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: P.array.isRequired,
};
