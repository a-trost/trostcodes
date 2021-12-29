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

async function getMenu() {
  const data = await client.getSingle("menu");
  return data;
}

export { getAllPosts, getPageByUID, getMenu };
