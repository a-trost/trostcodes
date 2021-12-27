import { PrismicRichText } from "@prismicio/react";
import Link from "@/components/Link";
import React from "react";

export default function Navigation({ menu }) {
  const menuData = {
    title: menu.data.title,
    links: menu.data.menu_links,
  };
  console.log(menuData.links[0].link);
  return (
    <nav className="layout-grid bg-yellow">
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
        <ul className="navigation__list">
          {menuData.links.map((link) => (
            <li key={link.id}>
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
        </ul>{" "}
      </div>
    </nav>
  );
}