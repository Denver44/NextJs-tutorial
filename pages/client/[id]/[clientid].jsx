import { useRouter } from 'next/router';
import React from 'react';

function index() {
  const route = useRouter();
  return (
    <div>
      <div>
        <h1>I am inside client {route.query.id}</h1>
      </div>
      <div>
        <h2> clientId : {route.query.clientid}</h2>
      </div>
      <div>
        <h3> Path Name : {route.pathname}</h3>
      </div>
    </div>
  );
}

export default index;
