import { PrismicRichText } from "@prismicio/react";
import Paragraph from "@/lib/htmlSerializer/paragraph";

const RichText = ({ slice }) => (
  <section>
    <PrismicRichText
      field={slice.primary.text}
      components={{
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

export default RichText;
