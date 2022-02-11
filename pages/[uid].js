import { createClient } from "../prismicio";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import Layout from "@components/Layout";
import { getFooterAndMenu } from "@lib/api";
import Head from "next/head";

import resolver from "../sm-resolver.js";

const Page = ({ slices, data, menu, footer, ...props }) => {
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{data.meta_title} - Alex Trost</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <main className="layout-grid layout-grid--content">
        <SliceZone slices={slices} {...props} resolver={resolver} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async (...args) => {
  const { menu, footer } = await getFooterAndMenu();
  const page = await useGetStaticProps({
    client: createClient(),
    queryType: "repeat",
    type: "page",
    apiParams({ params }) {
      return {
        uid: params.uid,
      };
    },
  })(...args);
  return { props: { ...page.props, menu, footer } };
};

export const getStaticPaths = async (...args) => {
  const paths = await useGetStaticPaths({
    client: createClient(),
    type: "page",
    formatPath: (prismicDocument) => {
      if (prismicDocument.uid === "posts") {
        return null;
      }
      if (prismicDocument.uid === "til") {
        return null;
      }
      return {
        params: {
          uid: prismicDocument.uid,
        },
      };
    },
  })(...args);

  return { ...paths };
};

export default Page;
