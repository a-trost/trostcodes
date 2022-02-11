import Head from "next/head";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import { createClient } from "prismicio";
import { getFooterAndMenu } from "@lib/api";

import resolver from "sm-resolver.js";
import Layout from "@components/Layout";

const Page = ({ slices, data, menu, footer, ...props }) => {
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{`${data.meta_title} - Alex Trost`}</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <main className="blog-post">
        <div className=" ">
          <h1>{data.title}</h1>
        </div>
        <SliceZone {...props} resolver={resolver} slices={slices} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async (...args) => {
  const { menu, footer } = await getFooterAndMenu();
  const page = await useGetStaticProps({
    client: createClient(),
    queryType: "repeat",
    type: "til",
    apiParams({ params }) {
      return {
        uid: params.uid,
      };
    },
  })(...args);
  return { props: { ...page.props, menu, footer } };
};

export const getStaticPaths = useGetStaticPaths({
  client: createClient(),
  type: "til",
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default Page;
