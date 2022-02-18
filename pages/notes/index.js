import { getAllNodes } from "next-mdx/server";
import { getPageByUID, getFooterAndMenu } from "@lib/api";

import SliceZone from "next-slicezone";
import Layout from "@components/Layout";
import Head from "next/head";

export default function Notes({ notes, page, menu, footer, ...props }) {
  // Sort notes by date "YYYY-MM-DD"
  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>Notes - Alex Trost - Front End Web Developer</title>
        <meta
          name="description"
          content="Notes taken on a multitude of topics."
        />
      </Head>
      <main className="layout-grid">
        <h1>{page?.data.title}</h1>
        {!!page.data.slices?.length && (
          <SliceZone {...page.data} resolver={resolver} />
        )}
        <ul className="card-grid">
          {sortedNotes.map((note) => (
            <li className="card" key={note.url}>
              <div>
                <a href={`${note.url}`} key={note.url} className="card__title">
                  <span>{note.title}</span>
                </a>
                <div className="card__tag-container">
                  {note.tags.map((tag) => (
                    <span className="card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {!!note.blurb && <p className="card__blurb">{note.blurb}</p>}
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
  const notes = await getAllNodes("note");

  const formattedNotes = notes.map((note) => {
    return {
      url: note.url,
      tags: note.frontMatter.tags ?? [],
      title: note.frontMatter.title ?? "",
      blurb: note.frontMatter.desc ?? "",
      date: note.frontMatter.date ?? "2022-01-01",
    };
  });

  const page = await getPageByUID("notes");
  return {
    props: {
      notes: formattedNotes,
      page,
      menu,
      footer,
    },
  };
}
