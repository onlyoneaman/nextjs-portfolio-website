import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO.tsx";
import GoogleAnalytics from "@/scripts/GoogleAnalytics.tsx";
import {ThemeProvider} from "@/components/ThemeProvider.tsx";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO title={"Home"} />
      <GoogleAnalytics />
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
