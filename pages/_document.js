// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createResolver } from "next-slicezone/resolver";
import Layout from "@/components/Layout";
import { Client } from "prismic-configuration";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    const menu = (await Client().getSingle("menu")) || {};
    return { ...initialProps, menu };
  }

  render() {
    const { menu } = this.props;

    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,100..900,0..100,0..1&family=Fraunces:ital,opsz,wght,SOFT,WONK@1,9..144,100..900,0..100,0..1&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Layout menu={menu}>
          <Main />
          <NextScript />
        </Layout>
      </Html>
    );
  }
}

export default MyDocument;
