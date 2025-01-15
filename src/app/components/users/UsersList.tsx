import { getUsers } from '@/lib/app';
import React from 'react';
import User from './User';
import Link from 'next/link';

// export interface UsersListProps {}

async function UsersList() {
  const users = await getUsers();

  return (
    <ul className="py-6 flex gap-6 flex-wrap w-full justify-center">
      {users.map((user) => (
        <li key={user.id} className="bg-gray-100 rounded-xl w-52 ">
          <Link href={`/users/${user.id}`}>
            <User
              name={user.name}
              email={user.email}
              company={user.company}
              id={user.id}
              className="flex-col"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
