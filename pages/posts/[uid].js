import { Client } from "prismic-configuration";
import SliceZone from "next-slicezone";
import Blurb from "../../slices/BlogBlurb";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "sm-resolver.js";

const Page = ({ slices, data, ...props }) => {
  let blurb, remainingSlices;

  if (slices[0].slice_type === "blog_blurb") {
    blurb = slices[0];
    remainingSlices = slices.slice(1);
  } else {
    blurb = null;
    remainingSlices = slices;
  }

  return (
    <main className="layout-grid blog-post">
      <div className="bg-yellow place-full layout-grid">
        <h1>{data.title}</h1>
        {blurb && <Blurb slice={blurb} />}
      </div>
      <SliceZone {...props} resolver={resolver} slices={remainingSlices} />
    </main>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "repeat",
  type: "blog",
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "blog",
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default Page;
