import { getAllNodes } from "next-mdx/server";
import { getPageByUID, getFooterAndMenu } from "@lib/api";

import SliceZone from "next-slicezone";
import Layout from "@components/Layout";
import Head from "next/head";

export default function Posts({ posts, page, menu, footer, ...props }) {
  // Sort posts by date "YYYY-MM-DD"
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
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
          {sortedPosts.map((post) => (
            <li className="card" key={post.url}>
              <div>
                <a href={`${post.url}`} key={post.url} className="card__title">
                  <span>{post.title}</span>
                </a>
                <div className="card__tag-container">
                  {post.tags.map((tag) => (
                    <span className="card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="card__blurb">{post.blurb}</p>
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
  const posts = await getAllNodes("post");

  const formattedPosts = posts.map((post) => {
    return {
      url: post.url,
      tags: post.frontMatter.tags || [],
      title: post.frontMatter.title,
      blurb: post.frontMatter.desc,
      date: post.frontMatter.date,
      draft: post.frontMatter.draft ?? false,
    };
  });

  const filteredPosts = formattedPosts.filter((post) => {
    return !post.draft;
  });

  const page = await getPageByUID("posts");
  return {
    props: {
      posts: filteredPosts,
      page,
      menu,
      footer,
    },
  };
}
