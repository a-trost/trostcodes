import { getAllTILs, getPageByUID, getFooterAndMenu } from "@lib/api";
import SliceZone from "next-slicezone";
import Layout from "@components/Layout";
import Head from "next/head";

import resolver from "/sm-resolver.js";

export default function TILs({ tils, page, menu, footer }) {
  const formattedTILs = tils.map((til) => {
    return {
      ...til,
      uid: til.uid,
      tags: til.tags,
      title: til.data.title,
    };
  });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>TIL - Alex Trost - Front End Web Developer</title>
        <meta
          name="description"
          content="Today I Learned - front end web development stuff"
        />
      </Head>
      <main className="layout-grid">
        <h1>{page?.data.title}</h1>
        {!!page.data.slices?.length && (
          <SliceZone {...page.data} resolver={resolver} />
        )}
        <ul role="list" className="til-grid">
          {formattedTILs.map((til) => (
            <li className="til-card" key={til.uid}>
              <div>
                <a href={`/til/${til.uid}`}>
                  <span className="til-card__title">{til.title}</span>
                </a>
                <div className="til-card__tag-container">
                  {til.tags.map((tag) => (
                    <span className="til-card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { menu, footer } = await getFooterAndMenu();
  const tils = await getAllTILs();
  const page = await getPageByUID("til");
  return {
    props: {
      tils,
      page,
      menu,
      footer,
    },
  };
}
