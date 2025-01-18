import PostsList from '@/app/components/posts/PostsList';
import { getPosts } from '@/lib/app';
import getQueryClient from '@/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';

async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <Suspense
      fallback={<p className="pt-[400px] pl-[650px] text-2xl">Loading...</p>}
    >
      <HydrationBoundary state={dehydratedState}>
        <PostsList />
      </HydrationBoundary>
    </Suspense>
  );
}

export default Page;
