import { useRouter } from "next/router";
import React from "react";

function index() {
  const route = useRouter();
  return (
    <div>
      <h1>I am inside client id Index.js {route.pathname}</h1>
      <h1>Id is {route.query.id}</h1>
    </div>
  );
}

export default index;
