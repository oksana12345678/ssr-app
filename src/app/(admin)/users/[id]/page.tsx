import { notFound } from 'next/navigation';
import { getPostsByUserId, getUserById } from '@/lib/app';
import React, { Suspense } from 'react';
import UserDetails from '@/app/components/users/UserDetails';
import PostDetails from '@/app/components/posts/PostDetails';

export interface PageProps {
  params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
  const id = (await params).id;
  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  const post = await getPostsByUserId(user.id!);

  return (
    <Suspense
      fallback={<p className="pt-[400px] pl-[650px] text-2xl">Loading...</p>}
    >
      <div className="bg-gray-100 h-full flex flex-col justify-center pb-6 pt-20 gap-3">
        <UserDetails
          lastname={user.lastname}
          firstname={user.firstname}
          email={user.email}
          companyName={user.company.name}
          companyCatchPhrase={user.company.catchPhrase}
          companyBs={user.company.bs}
          address={user.address}
          phone={user.phone}
          website={user.website}
        />
        <PostDetails
          title={post.title}
          image={post.image}
          content={post.content}
          publishedAt={post.publishedAt}
          status={post.status}
        />
      </div>
    </Suspense>
  );
}

export default Page;
