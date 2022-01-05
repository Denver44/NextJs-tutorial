import { useRouter } from 'next/router';
import React from 'react';

function CatchAllPage() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>I will catch all Page inside product Page</h1>
      <h3>Path is {router.asPath}</h3>
    </div>
  );
}

export default CatchAllPage;
