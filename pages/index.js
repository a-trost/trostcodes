import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Layout from "@components/Layout";
import { getFooterAndMenu } from "@lib/api";

import resolver from "../sm-resolver.js";
import HomeHero from "@components/HomeHero";

const Page = ({ slices, data, menu, footer, ...props }) => {
  return (
    <Layout menu={menu} footer={footer}>
      <main className="layout-grid">
        <HomeHero />
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
    apiParams: {
      uid: "home",
    },
  })(...args);
  return { props: { ...page.props, menu, footer } };
};

export default Page;
