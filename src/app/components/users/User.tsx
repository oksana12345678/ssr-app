import React from 'react';
import { UserTypes } from '../../../lib/app';
import clsx from 'clsx';

export interface UserByIdTypes extends UserTypes {
  className?: string;
}

async function User({
  name,
  email,
  address,
  phone,
  website,
  company,
  className,
}: UserByIdTypes) {
  return (
    <div className={clsx('flex  gap-2 text-black p-4', className)}>
      <div>
        <p className="text-base font-bold whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </p>
        <p className="text-xs font-medium text-gray-900 flex flex-col">
          Email:
          <span className="text-sm font-medium font-serif whitespace-nowrap text-ellipsis overflow-hidden">
            {email}
          </span>
        </p>{' '}
        {phone && <p>Phone: {phone}</p>}
        {website && <p>Website: {website}</p>}
        {address && (
          <div className="flex flex-col gap-2">
            <p>City: {address?.city}</p>
            <p>
              Street: {address?.street} {address?.suite}
            </p>

            <p>Zipcode: {address?.zipcode}</p>
          </div>
        )}
      </div>

      {company && (
        <div>
          <p>Company</p>
          <p className="text-gray-900 font-serif text-base font-medium">
            {company?.name}
          </p>{' '}
          <p className="text-gray-900 font-serif text-base font-medium">
            {company?.catchPhrase}
          </p>{' '}
          <p className="text-gray-900 font-serif text-base font-medium">
            {company?.bs}
          </p>
        </div>
      )}
    </div>
  );
}

export default User;
