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

async function getFooter() {
  const data = await client.getSingle("footer");
  return data;
}

async function getFooterAndMenu() {
  const menu = await getMenu();
  const footer = await getFooter();
  return { menu, footer };
}

export { getAllPosts, getPageByUID, getMenu, getFooter, getFooterAndMenu };
