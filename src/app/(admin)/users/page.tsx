import { getUsers } from '@/lib/app';
import getQueryClient from '@/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import UsersList from '../../components/users/UsersList';

async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: () => getUsers({ cache: 'no-store' }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Suspense
      fallback={<p className="pt-[400px] pl-[650px] text-2xl">Loading...</p>}
    >
      <HydrationBoundary state={dehydratedState}>
        <UsersList />
      </HydrationBoundary>
    </Suspense>
  );
}

export default Page;
