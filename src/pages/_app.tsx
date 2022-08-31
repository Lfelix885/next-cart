import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/globals.css";
import Head from "next/head";
import { Header } from "../components/Header";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

function NextCart({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />  
    </>
  );
}

export default NextCart;
