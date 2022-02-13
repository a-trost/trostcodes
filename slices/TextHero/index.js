import { PrismicRichText } from "@prismicio/react";

const TextHero = ({ slice }) => {
  const { heading, subheading, body } = slice.primary;
  return (
    <section className="text-hero">
      <PrismicRichText
        field={heading}
        components={{
          paragraph: ({ children }) => (
            <p className="text-hero__heading">{children}</p>
          ),
        }}
      />
      <PrismicRichText
        field={subheading}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-hero__subheading">{children}</h1>
          ),
        }}
      />
      <div className="text-hero__body">
        <PrismicRichText field={body} />
      </div>
    </section>
  );
};

export default TextHero;
