import * as React from "react";
import { motion } from "framer-motion";
import { PrismicRichText } from "@prismicio/react";
import Link from "@components/Link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ label, link, index }) => {
  const style = { border: `2px solid ${colors[index]}` };
  return (
    <motion.li
      className="navigation__mobile-menu-item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link document={link}>
        <PrismicRichText
          field={label}
          components={{
            paragraph: ({ children, key }) => (
              <React.Fragment key={key}>{children}</React.Fragment>
            ),
          }}
        />
      </Link>
    </motion.li>
  );
};
