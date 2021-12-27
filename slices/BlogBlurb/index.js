import React from "react";
import { PrismicRichText } from "@prismicio/react";

const BlogBlurb = ({ slice }) => {
  return (
    <div className="blurb">
      <PrismicRichText field={slice.primary.text} />
    </div>
  );
};

export default BlogBlurb;
