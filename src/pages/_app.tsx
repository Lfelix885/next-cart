import "bootstrap/dist/css/bootstrap.css";
import "../../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

function NextCart({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default NextCart;
