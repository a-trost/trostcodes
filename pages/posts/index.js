import { getAllPosts, getPageByUID } from "@/lib/api";
import SliceZone from "next-slicezone";

import resolver from "/sm-resolver.js";

export default function Posts({ posts, page }) {
  const formattedPosts = posts.map((post) => {
    return {
      ...post,
      uid: post.uid,
      tags: post.tags,
      title: post.data.title,
    };
  });

  return (
    <main className="layout-grid">
      <h1>{page?.data.title}</h1>
      <SliceZone {...page.data} resolver={resolver} />
      {formattedPosts.map((post) => (
        <a href={`/posts/${post.uid}`} key={post.uid}>
          <h2>{post.title}</h2>
        </a>
      ))}
    </main>
  );
}

// get static props
export async function getStaticProps() {
  const posts = await getAllPosts();
  const page = await getPageByUID("posts");
  return {
    props: {
      posts,
      page,
    },
  };
}
