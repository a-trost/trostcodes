import { getAllNodes } from "next-mdx/server";
import { getPageByUID, getFooterAndMenu } from "@lib/api";

import SliceZone from "next-slicezone";
import Layout from "@components/Layout";
import Head from "next/head";

export default function BookNotes({ booknotes, page, menu, footer, ...props }) {
  console.log("🚀 ~ file: index.js ~ line 9 ~ BookNotes ~ page", page);
  // Sort book notes by date "YYYY-MM-DD"
  const sortedBookNotes = booknotes.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>Book Notes - Alex Trost - Front End Web Developer</title>
        <meta name="description" content="Notes on books I've read." />
      </Head>
      <main className="layout-grid">
        <h1>{page?.data.title}</h1>
        {!!page.data.slices?.length && (
          <SliceZone {...page.data} resolver={resolver} />
        )}
        <ul className="card-grid">
          {sortedBookNotes.map((booknote) => (
            <li className="card" key={booknote.url}>
              <div>
                <a
                  href={`${booknote.url}`}
                  key={booknote.url}
                  className="card__title"
                >
                  <span>{booknote.title}</span>
                </a>
                <div className="card__tag-container">
                  {booknote.tags.map((tag) => (
                    <span className="card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {!!booknote.blurb && (
                  <p className="card__blurb">{note.blurb}</p>
                )}
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
  const booknotes = await getAllNodes("booknote");

  const formattedNotes = booknotes.map((booknote) => {
    return {
      url: booknote.url,
      tags: booknote.frontMatter.tags ?? [],
      title: booknote.frontMatter.title ?? "",
      blurb: booknote.frontMatter.desc ?? "",
      date: booknote.frontMatter.date ?? "2022-01-01",
    };
  });

  const page = await getPageByUID("book-notes");
  return {
    props: {
      booknotes: formattedNotes,
      page,
      menu,
      footer,
    },
  };
}
