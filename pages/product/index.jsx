import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function product() {
  const [random, setRandom] = useState(3);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100));
  }, []);
  return (
    <div>
      <h1>I am product page</h1>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
      <div>
        <Link href="/product/1">
          <a>Go to Product 1</a>
        </Link>
      </div>
      <div>
        <Link href="/product/2">
          <a>Go to Product 2</a>
        </Link>
      </div>
      <div>
        <Link href="/product/top-5-cheap/high-average">
          <a>Catch all pages</a>
        </Link>
      </div>
      <div>
        <Link href={`/product/${random}`}>
          <a>Go to Random Product ${random}</a>
        </Link>
      </div>
    </div>
  );
}

export default product;
