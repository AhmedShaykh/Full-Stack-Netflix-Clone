import type { AppProps } from "next/app";
import Head from "next/head";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Netflix
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  )
};