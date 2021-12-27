import Image from 'next/image';
import React from 'react';

const about = () => {
  return (
    <div className="about">
      <h1>About page</h1>
      <Image
        src="https://images.unsplash.com/photo-1496217498873-087c9367db90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="photo-of-men"
        width="400"
        height="300"
      />
      <style jsx>
        {`
          h1 {
            color: #14213d;
            font-size: 64px;
            margin-top: 150px;
          }
          .about {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default about;
