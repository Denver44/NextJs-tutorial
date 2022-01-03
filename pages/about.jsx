import Image from 'next/image';
import React from 'react';

export const HeadingTag = ({ heading }) => {
  const color = Math.random() > 0.5 ? 'blue' : 'red';
  // Every file weill get either red or blue color whose over import this headinh
  return (
    <div>
      <h1>{heading}</h1>
      <style jsx>
        {`
          h1 {
            color: ${color};
            font-size: 64px;
            margin-top: 150px;
          }
        `}
      </style>
    </div>
  );
};

const about = () => {
  const colorText = Math.random() > 0.5 ? 'green' : 'yellow';
  return (
    <div className="about">
      <HeadingTag heading={'About Page'} />
      <Image
        src="https://images.unsplash.com/photo-1496217498873-087c9367db90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="photo-of-men"
        width="400"
        height="300"
      />
      <style jsx global>
        {`
          h1 {
            color: ${colorText};
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

// In styled js we can use variables also
// But don't use this because we want our html and CSS part to be in different file
// We can make it global by putting global so that means that styled jsx part will be global for that entire page only not for other page

// Global was in function declaration highest will be in function declaration priority
