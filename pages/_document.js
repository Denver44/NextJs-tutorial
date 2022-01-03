import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    console.log('Hello');
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// Here we can add the material Ui CDN link or google analytics links
// Here the hooks ands event listener will not work
// This file on execute at server side not on client side.
// THis is many for attaching any scripts and google analytics and CDN link only
// Don't mess with this file too much because this document is declared GLobally.
