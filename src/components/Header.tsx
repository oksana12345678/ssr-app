import React from 'react';
import Link from 'next/link';

// export interface HeaderProps {}

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex items-center justify-center gap-10">
          <li className="cursor-pointer">
            <Link href="/users">UserPage</Link>
          </li>
          <li>
            <Link href="/posts">PostPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
