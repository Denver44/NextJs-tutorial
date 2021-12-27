import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hulu</title>
        <link rel="icon" href="/hulu.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
