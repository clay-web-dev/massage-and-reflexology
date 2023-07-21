import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import MainNavigation from "@/components/Navigation/MainNavigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
