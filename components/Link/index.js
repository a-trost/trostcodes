import NextLink from "next/link";
import { PrismicLink } from "@prismicio/react";

const NextLinkShim = ({ href, children }) => {
  if (!href) return null;
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

const CustomLink = ({ ...props }) => {
  return (
    <PrismicLink
      internalComponent={NextLinkShim}
      externalComponent={(props) => <a className="external" {...props} />}
      {...props}
    />
  );
};

export default CustomLink;
