import React from "react";
import { PrismicRichText } from "@prismicio/react";

const BlockQuote = ({ slice }) => {
  const { attribution, text } = slice.primary;
  console.log(
    "🚀 ~ file: index.js ~ line 6 ~ BlockQuote ~ attribution",
    attribution
  );
  return (
    <figure>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <PrismicRichText field={text} />
      </blockquote>
      {!!attribution.length && (
        <figcaption>
          —
          <PrismicRichText
            field={attribution}
            components={{
              paragraph: ({ children, key }) => (
                <React.Fragment key={key}>{children}</React.Fragment>
              ),
            }}
          />
        </figcaption>
      )}
    </figure>
  );
};

export default BlockQuote;
