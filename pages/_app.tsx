import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Caio Costa</title>
        <link rel="icon" href="/c.svg" />
        <meta name="description" content="Site e blog pessoal sobre tecnologia" />
        <meta property="og:title" content="Caio Costa" />
        <meta property="og:description" content="Site e blog pessoal sobre tecnologia" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://caio-costa.vercel.app/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/62410044/198860813-fe4dbc85-5947-42ad-be3a-5375f1398a17.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}