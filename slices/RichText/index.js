import { PrismicRichText } from "@prismicio/react";
import React from "react";

const RichText = ({ slice }) => {
  const field = slice.primary.text.map(({ spans, text, type }) => {
    let output = {};
    const asideRegex = /^\[aside\]/;
    if (asideRegex.test(text)) {
      let mutatedText = text.replace("[aside] ", "");
      output = {
        spans,
        text: mutatedText,
        type: "aside",
      };
    } else {
      output = {
        text,
        spans,
        type,
      };
    }

    return output;
  });

  return (
    <section className="rich-text">
      <PrismicRichText
        field={field}
        components={{
          aside: ({ children, key }) => (
            <aside className="aside" key={key}>
              <p>{children}</p>
            </aside>
          ),
          paragraph: ({ node, children, key }) => {
            // console.log(
            //   "🚀 ~ file: index.js ~ line 12 ~ RichText ~ node, children",
            //   node,
            //   children
            // );
            return <p key={key}>{children}</p>;
          },
          label: ({ node, children, key }) => {
            if (node.data.label === "codesnippet") {
              return (
                <React.Fragment key={key}>
                  <code key={key} className="codespan">
                    {children}
                  </code>{" "}
                </React.Fragment>
              );
            }
          },
        }}
      />
    </section>
  );
};

// React.createElement("code", { className: "codespan" }, "code");

export default RichText;
