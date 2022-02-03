import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { linkResolver, Client } from "prismicio";

export default async function handler(req, res) {
  const client = Client({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client, linkResolver });
}
