import Head from "next/head";
import SliceZone from "next-slicezone";
import { PrismicRichText } from "@prismicio/react";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import { Client } from "prismic-configuration";

import resolver from "sm-resolver.js";

const Page = ({ slices, data, ...props }) => {
  return (
    <>
      <Head>
        <title>{`${data.meta_title} - Alex Trost`}</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <main className="layout-grid blog-post">
        <div className="place-full layout-grid">
          <h1>{data.title}</h1>
          <div className="blurb">
            <PrismicRichText field={data.blurb} />
          </div>
        </div>
        <SliceZone {...props} resolver={resolver} slices={slices} />
      </main>
    </>
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
