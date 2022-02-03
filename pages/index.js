import { Client } from "../prismicio";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Layout from "@components/Layout";
import { getFooterAndMenu } from "@lib/api";
import Head from "next/head";

import resolver from "../sm-resolver.js";
import HomeHero from "@components/HomeHero";

const Page = ({ slices, data, menu, footer, ...props }) => {
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>Alex Trost - Front End Web Developer</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <main className="layout-grid">
        <HomeHero />
        {!!slices?.length && (
          <SliceZone slices={slices} {...props} resolver={resolver} />
        )}
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
    apiParams: {
      uid: "home",
    },
  })(...args);
  return { props: { ...page.props, menu, footer } };
};

export default Page;
