import { PrismicRichText } from "@prismicio/react";
import React from "react";

const RichText = ({ slice, i }) => {
  const field = slice.primary.text.map(({ spans, text, type }) => {
    let output = {};
    const infoRegex = /^\[info\]/;
    if (infoRegex.test(text)) {
      let mutatedText = text.replace("[info] ", "");
      output = {
        spans,
        text: mutatedText,
        type: "info",
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
          info: ({ children, key }) => (
            <aside className="aside--info" key={key}>
              <p>{children}</p>
            </aside>
          ),
          paragraph: ({ node, children, key }) => {
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

export default RichText;
