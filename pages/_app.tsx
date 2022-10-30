import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Caio Costa</title>
        <meta name="description" content="Site e blog pessoal sobre tecnologia" />
        <link rel="icon" href="/c.svg" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}