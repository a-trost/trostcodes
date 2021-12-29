import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "@/components/Link";
import { motion } from "framer-motion";
import { HiX, HiMenu } from "react-icons/hi";

export default function Navigation({ menu }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log("toggleMobileNav", mobileNavOpen);

  const toggleMobileNav = () => {
    console.log("toggleMobileNav", mobileNavOpen);
    setMobileNavOpen(!mobileNavOpen);
  };

  const menuData = {
    title: menu.data.title,
    links: menu.data.menu_links,
  };

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
      className="layout-grid"
    >
      <div className="navigation">
        <div className="navigation__title">
          <Link document={{ url: "/", link_type: "Document" }}>
            <PrismicRichText
              field={menuData.title}
              components={{
                paragraph: ({ children, key }) => (
                  <React.Fragment key={key}>{children}</React.Fragment>
                ),
              }}
            />
          </Link>
        </div>
        <NavigationList
          menu={menuData}
          screen="desktop"
          mobileNavOpen={mobileNavOpen}
        />
        <NavigationList
          menu={menuData}
          screen="mobile"
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <motion.button
          type="button"
          variants={hideNavItemsVariant}
          onClick={toggleMobileNav}
        >
          {mobileNavOpen ? <HiMenu /> : <HiX />}
        </motion.button>
      </div>
    </motion.nav>
  );
}

const NavigationList = ({ menu, screen = "desktop" }) => {
  return (
    <ul className={`navigation__list navigation__list--${screen}`}>
      {menu.links.map((link) => (
        <li key={link.label[0].text + screen}>
          <Link document={link.link}>
            <PrismicRichText
              field={link.label}
              components={{
                paragraph: ({ children, key }) => (
                  <React.Fragment key={key}>{children}</React.Fragment>
                ),
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
