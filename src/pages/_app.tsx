import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO.tsx";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO title={"Home"} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
