import React from 'react';
import Link from 'next/link';
function index() {
  return (
    <div>
      <h1>The Home page</h1>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/product',
              // query: "/product",
            }}
          >
            Product
          </Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
