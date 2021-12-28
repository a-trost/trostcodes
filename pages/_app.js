import { PrismicPreview } from "@prismicio/next";
import hljs from "highlight.js/lib/core"; // Code highlighting
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import "highlight.js/styles/github.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicPreview repositoryName={"trostcodes"}>
      <Component {...pageProps} />
    </PrismicPreview>
  );
}

export default MyApp;
