import * as prismicH from "@prismicio/helpers";
import { linkResolver, createClient } from "../../prismicio";

export default async function handler(req, res) {
  console.log(
    "🚀 ~ file: revalidate.js ~ line 13 ~ handler ~ req.body",
    req.body
  );
  if (req.body.type === "api-update" && req.body.documents.length > 0) {
    const client = createClient();

    // Get a list of URLs for any new, updated, or deleted documents
    const documents = await client.getAllByIDs(req.body.documents);
    const urls = documents.map((doc) => prismicH.asLink(doc, linkResolver));
    console.log("🚀 ~ file: revalidate.js ~ line 18 ~ handler ~ urls", urls);

    try {
      // Revalidate the URLs for those documents
      await Promise.all(
        urls.map(async (url) => await res.unstable_revalidate(url))
      );

      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue to show
      // the last successfully generated page
      return res.status(500).send("Error revalidating");
    }
  }

  // If the request's body is unknown, tell the requester
  return res.status(400).json({ message: "Invalid body" });
}
