import { getAllPosts, getPageByUID, getFooterAndMenu } from "@lib/api";
import { PrismicRichText } from "@prismicio/react";
import SliceZone from "next-slicezone";
import Layout from "@components/Layout";
import Head from "next/head";

import resolver from "/sm-resolver.js";

export default function Posts({ posts, page, menu, footer, ...props }) {
  const formattedPosts = posts.map((post) => {
    return {
      ...post,
      uid: post.uid,
      tags: post.tags,
      title: post.data.title,
      blurb: post.data.blurb,
    };
  });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>Blog Posts - Alex Trost - Front End Web Developer</title>
        <meta
          name="description"
          content="Blog posts on front end web development"
        />
      </Head>
      <main className="layout-grid">
        <h1>{page?.data.title}</h1>
        {!!page.data.slices?.length && (
          <SliceZone {...page.data} resolver={resolver} />
        )}
        <ul className="card-grid">
          {formattedPosts.map((post) => (
            <li className="card" key={post.uid}>
              <div>
                <a
                  href={`/posts/${post.uid}`}
                  key={post.uid}
                  className="card__title"
                >
                  <span>{post.title}</span>
                </a>
                <div className="card__tag-container">
                  {post.tags.map((tag) => (
                    <span className="card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <PrismicRichText
                  field={post.blurb}
                  components={{
                    paragraph: ({ children, key }) => (
                      <p className="card__blurb" key={key}>
                        {children}
                      </p>
                    ),
                  }}
                />
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
  const posts = await getAllPosts();
  const page = await getPageByUID("posts");
  return {
    props: {
      posts,
      page,
      menu,
      footer,
    },
  };
}
