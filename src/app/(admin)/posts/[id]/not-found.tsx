import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p className="font-semibold text-2xl">Could not found post</p>
      <Link href="/posts" className="text-blue-500 text-2xl">
        ◁ Back to posts
      </Link>
    </div>
  );
}

export default NotFound;
