import { PrismicRichText } from "@prismicio/react";

const RichText = ({ slice }) => {
  const dummyData = {
    text: "lorem ipsum dolor sit amet",
    spans: [],
    type: "flark",
  };

  const field = slice.primary.text.map(({ spans, text, type }) => {
    console.log("🚀 ~ file: index.js ~ line 11 ~ field ~ text", spans);
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

  // console.log("🚀 ~ file: index.js ~ line 5 ~ RichText ~ slice", field);

  return (
    <section>
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
                <code key={key} className="codespan">
                  {children}
                </code>
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
