import { getPosts } from '@/lib/app';
import React from 'react';
import Link from 'next/link';
import PostCard from './PostCard';

async function PostsList() {
  const posts = await getPosts();

  return (
    <div className="px-4">
      <ul className="flex  flex-wrap justify-center gap-4 pb-7 pt-20">
        {posts.map((post) => (
          <li
            key={post.id}
            className="shadow-inner-glow shadow-transparent rounded-lg  hover:shadow-gray-800 transition-all duration-500 border border-gray-600 "
          >
            <Link href={`/posts/${post.id}`}>
              <PostCard
                title={post.title}
                image={post.image}
                category={post.category}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
