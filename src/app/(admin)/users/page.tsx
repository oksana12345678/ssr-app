import { getUsers } from '@/lib/app';
import getQueryClient from '@/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react';
import UsersList from '../../components/users/UsersList';

async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: () => getUsers({ cache: 'no-store' }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <UsersList />
    </HydrationBoundary>
  );
}

export default Page;
