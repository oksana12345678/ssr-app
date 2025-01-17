import React from 'react';
import Post, { PostsProps } from './Post';

const PostDetails: React.FC<PostsProps> = (props) => (
  <div>
    <Post
      {...props}
      className="flex-row text bg-white shadow-md p-8 items-end"
      titleStyle="text-2xl text-gray-900"
      imageStyle="w-full justify-center flex"
      contentStyle=""
    />
  </div>
);

export default PostDetails;
