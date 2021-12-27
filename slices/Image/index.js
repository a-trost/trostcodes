import Image from "@/components/Image";
import { PrismicRichText } from "@prismicio/react";

const CustomImage = ({
  slice: { items, name, primary, slice_type, variation },
}) => {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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
