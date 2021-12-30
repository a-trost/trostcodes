import Image from "@components/Image";
import { PrismicRichText } from "@prismicio/react";

const CustomImage = ({
  slice: { items, name, primary, slice_type, variation },
}) => {
  if (!primary.image) return null;
  return (
    <section>
      <figure>
        <Image
          src={primary.image.url}
          alt={primary.image.alt}
          width={primary.image.dimensions.width}
          height={primary.image.dimensions.height}
        />
        {(variation === "withCaption" || variation === "fullWidthCaption") && (
          <PrismicRichText
            components={{
              paragraph: ({ children, key }) => (
                <figcaption key={key}>{children}</figcaption>
              ),
            }}
            component
            field={primary.caption || primary.image.alt}
          />
        )}
      </figure>
    </section>
  );
};

export default CustomImage;
