import { PrismicRichText } from "@prismicio/react";

const RichText = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.text} />
  </section>
);

export default RichText;
