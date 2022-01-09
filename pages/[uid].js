import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import Layout from "@components/Layout";
import { getFooterAndMenu } from "@lib/api";
import Head from "next/head";

import resolver from "../sm-resolver.js";

const Page = ({ slices, data, menu, footer, ...props }) => {
  console.log("🚀 ~ file: [uid].js ~ line 11 ~ Page ~ data", data);
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{data.meta_title} - Alex Trost</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <main className="layout-grid">
        <SliceZone slices={slices} {...props} resolver={resolver} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async (...args) => {
  const { menu, footer } = await getFooterAndMenu();
  const page = await useGetStaticProps({
    client: Client(),
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

  return { ...paths };
};

export default Page;
