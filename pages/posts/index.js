import { getAllPosts, getPageByUID, getMenu } from "@lib/api";
import { PrismicRichText } from "@prismicio/react";
import SliceZone from "next-slicezone";
import Layout from "@components/Layout";

import resolver from "/sm-resolver.js";

export default function Posts({ posts, page, ...props }) {
  console.log("🚀 ~ file: index.js ~ line 8 ~ Posts ~ props", props);
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
    <Layout menu={props.menu}>
      <main className="layout-grid">
        <h1>{page?.data.title}</h1>
        <SliceZone {...page.data} resolver={resolver} />
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
                    <span className="card__tag">{tag}</span>
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
  const menu = await getMenu();
  const posts = await getAllPosts();
  const page = await getPageByUID("posts");
  return {
    props: {
      posts,
      page,
      menu,
    },
  };
}
