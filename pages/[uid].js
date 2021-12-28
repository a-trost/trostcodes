import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <main className="layout-grid">
      <SliceZone {...props} resolver={resolver} />
    </main>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "repeat",
  type: "page",
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = async (...args) => {
  const paths = await useGetStaticPaths({
    client: Client(),
    type: "page",
    formatPath: (prismicDocument) => {
      if (prismicDocument.uid === "posts") {
        return null;
      }
      return {
        params: {
          uid: prismicDocument.uid,
        },
      };
    },
  })(...args);
  console.log(
    "🚀 ~ file: [uid].js ~ line 39 ~ getStaticPaths ~ paths",
    paths.paths[0].params
  );
  return { ...paths };
};

export default Page;
