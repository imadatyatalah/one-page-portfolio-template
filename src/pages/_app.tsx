import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "next-seo.config";

import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <ThemeProvider defaultTheme="system" attribute="class">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default MyApp;
