import PostDetails from '@/app/components/posts/PostDetails';
import { getPostById } from '@/lib/app';
import React from 'react';
import { PageProps } from '../../users/[id]/page';
import { notFound } from 'next/navigation';

async function Page({ params }: PageProps) {
  const id = (await params).id;

  const post = await getPostById(id);

  if (!post || Object.keys(post).length === 0) {
    console.log('not - found');
    notFound();
    return null;
  }

  return (
    <div className="pb-6 pt-20">
      <PostDetails
        title={post.title}
        image={post.image}
        content={post.content}
        publishedAt={post.publishedAt}
        status={post.status}
      />
    </div>
  );
}

export default Page;
