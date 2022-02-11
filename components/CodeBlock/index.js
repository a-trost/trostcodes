import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function index({ children }) {
  return (
    <SyntaxHighlighter
      {...children.props}
      // language={slice.primary.language}
      style={atomOneDarkReasonable}
      customStyle={{
        borderRadius: "var(--radius-2)",
        padding: "var(--size-5)",
        overflowX: "auto",
        width: "calc(100vw - 50px)",
      }}
    >
      {children.props.children}
    </SyntaxHighlighter>
  );
}
