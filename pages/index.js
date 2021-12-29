import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Layout from "@/components/Layout";
import { getMenu } from "@/lib/api";

import resolver from "../sm-resolver.js";

const Page = ({ slices, data, menu, ...props }) => {
  return (
    <Layout menu={menu}>
      <main className="layout-grid">
        <SliceZone slices={slices} {...props} resolver={resolver} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async (...args) => {
  const menu = await getMenu();
  const page = await useGetStaticProps({
    client: Client(),
    queryType: "repeat",
    type: "page",
    apiParams: {
      uid: "home",
    },
  })(...args);
  return { props: { ...page.props, menu } };
};

export default Page;
