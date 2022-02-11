import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

import Link from "next/link";

import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  );
}

export const apiEndpoint = smConfig.apiEndpoint;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    if (doc.uid === "home") {
      return "/";
    }
    return `/${doc.uid}`;
  }
  if (doc.type === "blog") {
    return `/posts/${doc.uid}`;
  }
  if (doc.type === "til") {
    return `/til/${doc.uid}`;
  }
  return "/";
};

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

export const Router = {
  routes: [
    { type: "page", path: "/:uid" },
    { type: "blog", path: "/posts/:uid" },
    { type: "til", path: "/til/:uid" },
  ],
  // href: (type) => {
  //   const route = Router.routes.find((r) => r.type === type);
  //   return route && route.href;
  // },
};

export const createClient = (config) => {
  const client = prismic.createClient(apiEndpoint, {
    routes: Router.routes,
  });

  if (config) {
    enableAutoPreviews({
      client,
      context: config.context,
      req: config.req,
    });
  }

  return client;
};
