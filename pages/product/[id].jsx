import React from "react";
import { useRouter } from "next/router";

function productId() {
  const router = useRouter();
  console.log("The Router pathname is : ", router.pathname);
  console.log("The Router query is : ", router.query);
  console.log("The Router query is id : ", router.query.id);
  return (
    <div>
      <h1>Product page id</h1>
    </div>
  );
}

export default productId;
