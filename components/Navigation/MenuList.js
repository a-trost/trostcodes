import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2, delay: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MenuList = ({ menu }) => {
  console.log("🚀 ~ file: Nav.js ~ line 15 ~ Nav ~ menu", menu);

  return (
    <motion.ul variants={variants} className="navigation__mobile-menu-list">
      {menu.links.map((item, index) => (
        <MenuItem {...item} key={item.label[0].text} index={index} />
      ))}
    </motion.ul>
  );
};
