import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { polyfill } from "smoothscroll-polyfill";
import smoothscroll from "smoothscroll-polyfill";
import Head from "next/head";
declare global {
  interface Window {
    __forceSmoothScrollPolyfill__: boolean;
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    polyfill();
    window.__forceSmoothScrollPolyfill__ = true;
  }, []);
  return (
    <>
      <Head>
        <title>SUPREME BLOCKCHAIN PLATFORM | BLOCK S</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="description"
          content="블록체인, NFT 거래소, NFT 프로젝트. 믿을 수 있는 기업을 찾고 계신가요? (주)블록에스는 국내에 위치한 법인 회사로 믿을 수 있고, 최고의 기술력을 갖춘 개발진과 블록체인 전문 기획자로 구성 되어 있습니다. 귀사의 첫 블록체인, NFT 프로젝트. (주)블록에스와 함께라면 믿을 수 있습니다."
        />
        <meta
          property="og:title"
          name="title"
          content="SUPREME BLOCKCHAIN PLATFORM | BLOCK S"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
