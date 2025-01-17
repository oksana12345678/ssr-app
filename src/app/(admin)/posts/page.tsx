import PostsList from '@/app/components/posts/PostsList';
import React, { Suspense } from 'react';

function Page() {
  return (
    <Suspense
      fallback={<p className="pt-[400px] pl-[650px] text-2xl">Loading...</p>}
    >
      <PostsList />
    </Suspense>
  );
}

export default Page;
