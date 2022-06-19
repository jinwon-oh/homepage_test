import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextPageContext } from "next";

class MyDocument extends Document {
  static async getInitialProps(ctx: NextPageContext | any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:i,300,400,500,600,700,800|Montserrat:i,300,400,500,600,700,800|Roboto:i,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
