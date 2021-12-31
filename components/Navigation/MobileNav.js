import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuList } from "./MenuList";

const sidebar = {
  open: {
    x: "2px",
    transition: {
      type: "spring",
      stiffness: 200,
      restDelta: 2,
      damping: 40,
    },
  },
  closed: {
    x: "110%",

    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = ({ menu }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      className="navigation__mobile-menu"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div
        className={`navigation__mobile-menu-background ${
          isOpen ? "" : "hidden"
        }`}
        variants={sidebar}
      />
      <MenuList menu={menu} isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
