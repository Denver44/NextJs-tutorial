import { useRouter } from "next/router";
import React from "react";
function slug() {
    const route = useRouter()
  return (
    <div>
      <h1>Hey ia m slug of blog</h1>
      {route.query.slug}
    </div>
  );
}

export default slug;
