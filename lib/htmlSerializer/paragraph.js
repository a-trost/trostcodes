const inline = require("./inline");

const deletef = ({ element, children }) => {
  let tag = "p";
  let content = inline(children);

  // Parse quotes
  const blockquoteRegex = /^(>|&gt;)\s*/;
  if (content.match(blockquoteRegex)) {
    content = content.replace(blockquoteRegex, "");
    tag = "blockquote";
  }

  // Resolve class name
  const className = element.label ? ` class="${element.label}"` : "";

  return `<${tag}${className}>${content}</${tag}>`;
};

const Paragraph = ({ children, key }) => {
  return <fart key={key}>{children}</fart>;
};

export default Paragraph;
