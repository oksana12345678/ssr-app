import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-800 w-full text-white p-4 fixed z-20">
      <nav>
        <ul className="flex items-center justify-center gap-10">
          <li className="cursor-pointer hover:text-gray-400 transition-text duration-500">
            <Link href="/users">UserPage</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400 transition-text duration-500">
            <Link href="/posts">PostPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
