import React from "react";
import { PrismicRichText } from "@prismicio/react";

const BlockQuote = ({ slice }) => {
  const { attribution, text } = slice.primary;
  return null;
  return (
    <figure className="block-quote">
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
