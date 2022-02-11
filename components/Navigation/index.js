import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import Link from "@components/Link";

import { MobileNav } from "./MobileNav";

export default function Navigation({ menu }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const SCREENOPTIONS = {
    DESKTOP: "desktop",
    MOBILE: "mobile",
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const menuData = {
    title: menu.data.title,
    links: menu.data.menu_links,
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
        <NavigationList menu={menuData} screen={SCREENOPTIONS.DESKTOP} />
        <MobileNav menu={menuData} />
      </div>
    </motion.nav>
  );
}

const MotionNavList = motion((props) => <NavigationList {...props} />);

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
