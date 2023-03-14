import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - the best top</title>
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
