import React from 'react';
import clsx from 'clsx';
import { UserTypes } from '@/types/main-types';

export interface UserProps extends Omit<UserTypes, 'company'> {
  className?: string;
  companyName?: string;
  companyCatchPhrase?: string;
  companyBs?: string;
  nameStyle?: string;
  avatarStyle?: string;
  contentStyle?: string;
  emailStyle?: string;
}

async function User({
  email,
  address,
  phone,
  website,
  companyName,
  className,
  firstname,
  lastname,
  companyBs,
  companyCatchPhrase,
  nameStyle,
  avatarStyle,
  contentStyle,
  emailStyle,
}: UserProps) {
  return (
    <div
      className={clsx(
        'rounded-lg p-5 max-w-3xl  mx-auto flex gap-4 items-start ',
        className
      )}
    >
      <div
        className={clsx(
          'w-16 h-16 rounded-full text-gray-500 font-bold  bg-gray-200 flex-shrink-0 flex items-center justify-center',
          avatarStyle
        )}
      >
        <span>
          {firstname?.[0]}
          {lastname?.[0]}
        </span>
      </div>

      <div className={clsx('', contentStyle)}>
        <div>
          <h2
            className={clsx(
              'text-xl font-bold text-gray-900 truncate',
              nameStyle
            )}
          >
            {firstname} {lastname}
          </h2>
          <p className={clsx('text-gray-600 text-sm  truncate', emailStyle)}>
            {email}
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          {phone && (
            <p className="flex items-center gap-2">
              <span className="font-semibold">📞 Phone:</span> {phone}
            </p>
          )}
          {website && (
            <p className="flex items-center gap-2">
              <span className="font-semibold">🌐 Website:</span>
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {website}
              </a>
            </p>
          )}
          {address && (
            <p className="flex items-start gap-2 mt-2">
              <span className="font-semibold ">📍 Address:</span>
              <span>
                {address.city}, {address.street} {address.suite} -{' '}
                {address.zipcode}
              </span>
            </p>
          )}
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-800">🏢 {companyName}</p>
          <p className="text-gray-600">{companyBs}</p>
          <p className="italic text-gray-600">{companyCatchPhrase}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
