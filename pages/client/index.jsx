import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function index() {
  const route = useRouter();
  const client = [
    { id: "max", name: "Max" },
    { id: "thor", name: "Thor" },
    { id: "thor1", name: "Thor1" },
    { id: "thor15", name: "Thor5" },
  ];
  function route_handler() {
    // route.replace("/client/max/projects");
    // route.push("/client/max/projects");
    // OR
    route.push({
      pathname: "/client/max/projects",
      query: {
        id: "max",
        clientid: "projects",
      },
    });
  }
  return (
    <div>
      <h1>I am inside client Index.js</h1>
      <ul>
        {client.map((e) => (
          <li key={e.id}>
            {/* <Link href={`/client/${e.id}`}>{e.name}</Link> */}

            {/* OR  */}
            {/* Rather than giving string we can use object to set path */}
            <Link
              href={{
                pathname: "/client/[id]",
                query: { id: e.id },
              }}
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={route_handler}> Load Project [clientid ]</button>
    </div>
  );
}

export default index;
