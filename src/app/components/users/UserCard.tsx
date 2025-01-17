import React from 'react';
import User, { UserProps } from './User';

const UserCard: React.FC<UserProps> = (props) => (
  <div>
    <User
      {...props}
      className="flex-col bg-gray-100 rounded-xl w-52 shadow-inner-glow  hover:shadow-gray-400 transition-all duration-500 "
      avatarStyle="text-lg"
      emailStyle="w-[168px]"
      nameStyle="w-[168px]"
    />
  </div>
);

export default UserCard;
