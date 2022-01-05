import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Aside = ({ slice }) => {
  return (
    <aside className={`aside aside--${slice.primary.type}`}>
      {slice.primary.heading && (
        <strong className="aside-heading">{slice.primary.heading}</strong>
      )}
      {slice.primary.body && <PrismicRichText field={slice.primary.body} />}
    </aside>
  );
};

export default Aside;
