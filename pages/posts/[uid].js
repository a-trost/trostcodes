import Head from "next/head";
import SliceZone from "next-slicezone";
import { PrismicRichText } from "@prismicio/react";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import { Client } from "prismic-configuration";
import { getMenu } from "@lib/api";

import resolver from "sm-resolver.js";
import Layout from "@components/Layout";

const Page = ({ slices, data, menu, ...props }) => {
  return (
    <Layout menu={menu}>
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
    </Layout>
  );
};

export const getStaticProps = async (...args) => {
  const menu = await getMenu();
  const page = await useGetStaticProps({
    client: Client(),
    queryType: "repeat",
    type: "blog",
    apiParams({ params }) {
      return {
        uid: params.uid,
      };
    },
  })(...args);
  return { props: { ...page.props, menu } };
};

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
