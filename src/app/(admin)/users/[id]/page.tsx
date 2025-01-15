import User from '@/app/components/users/User';
import { getUser } from '@/lib/app';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

async function Page({ params }: PageProps) {
  const user = await getUser(params.id);

  return (
    <div className="bg-gray-100 h-full">
      <div>
        <User
          name={user.name}
          email={user.email}
          company={user.company}
          address={user.address}
          phone={user.phone}
          website={user.website}
          className="flex-row"
        />
      </div>
    </div>
  );
}

export default Page;
