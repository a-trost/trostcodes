import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
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
    apiParams({ params }) {
      return {
        uid: params.uid,
      };
    },
  })(...args);
  return { props: { ...page.props, menu } };
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
