import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO.tsx";
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO title={"Home"} />
      <GoogleTagManager gtmId="G-RKX93HS47R" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
