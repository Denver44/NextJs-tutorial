import { useRouter } from "next/router";
import React from "react";

function index() {
  const route = useRouter();
  return (
    <div>
      <h1>I am inside client {route.query.id}</h1>
      <h1> clientid Dynamicpage {route.query.clientid}</h1>
      <h1> {route.pathname}</h1>
    </div>
  );
}

export default index;
