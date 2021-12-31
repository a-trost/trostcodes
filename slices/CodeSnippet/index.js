import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeSnippet = ({ slice }) => {
  return (
    <section>
      <SyntaxHighlighter
        language={slice.primary.language}
        style={atomOneDark}
        customStyle={{
          borderRadius: "var(--radius-2)",
          padding: "var(--size-5)",
          overflowX: "auto",
          width: "calc(100vw - 50px)",
        }}
      >
        {slice.primary.code[0].text}
      </SyntaxHighlighter>
    </section>
  );
};

export default CodeSnippet;
