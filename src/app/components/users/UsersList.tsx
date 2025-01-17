import { getUsers } from '@/lib/app';
import React from 'react';
import Link from 'next/link';
import UserCard from './UserCard';

// export interface UsersListProps {}

async function UsersList() {
  const users = await getUsers();

  return (
    <div className=" px-4">
      <ul className="pt-20 pb-6 flex gap-7 flex-wrap w-full justify-center">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <UserCard
                  lastname={user.lastname}
                  firstname={user.firstname}
                  email={user.email}
                  companyName={user.company.name}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
