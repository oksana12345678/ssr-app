import React from 'react';
import User, { UserProps } from './User';

const UserDetails: React.FC<UserProps> = (props) => (
  <div>
    <User
      {...props}
      className="flex-row text bg-white shadow-md p-8"
      nameStyle="text-2xl"
      avatarStyle="w-40 h-40 text-3xl absolute z-[10]"
      contentStyle="ml-[186px] mt-[80px]"
    />
  </div>
);

export default UserDetails;
