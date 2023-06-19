import type { AppProps } from "next/app";
import "./globals.css";
import Head from "next/head";

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