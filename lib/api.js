import * as prismic from "@prismicio/client";

import { Client } from "prismic-configuration";

const client = Client();

async function getAllPosts() {
  const data = await client.getAllByType("blog");
  return data;
}

async function getPageByUID(uid) {
  const data = await client.getByUID("page", uid);
  return data;
}

export { getAllPosts, getPageByUID };
