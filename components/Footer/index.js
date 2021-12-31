import React from "react";
import IconLink from "@components/IconLink";

export default function Footer({ footer }) {
  console.log("🚀 ~ file: index.js ~ line 5 ~ Footer ~ data", footer);
  const { menu_links, socialLinks } = footer.data;

  return (
    <footer className="footer">
      <div className="footer__social-links">
        {socialLinks.map((item) => (item.link ? <IconLink {...item} /> : null))}
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()}, Alex Trost. All rights reserved.
      </div>
    </footer>
  );
}
