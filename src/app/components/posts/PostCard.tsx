import React from 'react';
import Post, { PostsProps } from './Post';

const PostCard: React.FC<PostsProps> = (props) => (
  <div>
    <Post
      {...props}
      titleStyle="text-white max-h-20 line-clamp-3"
      contentStyle="w-48 text-lg font-base"
    />
  </div>
);

export default PostCard;
