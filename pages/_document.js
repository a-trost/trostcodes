// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createResolver } from "next-slicezone/resolver";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();

    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('colorScheme')) {
        return window.localStorage.getItem('colorScheme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.firstElementChild.setAttribute("color-scheme", getUserPreference());
  `;
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
