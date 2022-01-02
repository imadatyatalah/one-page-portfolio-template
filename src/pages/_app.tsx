import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "next-seo.config";

import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
