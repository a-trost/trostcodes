import Head from "next/head";
import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { getFooterAndMenu } from "@lib/api";

import Layout from "@components/Layout";
import CodePen from "@components/CodePen";
import CodeBlock from "@components/CodeBlock";

import "highlight.js/styles/atom-one-dark.css";

const mdxComponents = {
  pre: CodeBlock,
  CodePen,
};

export default function PostPage({ post, menu, footer }) {
  const content = useHydrate(post, { components: mdxComponents });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{`${post.frontMatter.title} - Alex Trost`}</title>
        <meta name="description" content={post.frontMatter.excerpt} />
      </Head>
      <main className="blog-post">
        <article className="blog-post__article">
          <h1>{post.frontMatter.title}</h1>
          {post.frontMatter.excerpt ? <p>{post.frontMatter.excerpt}</p> : null}
          {content}
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { menu, footer } = await getFooterAndMenu();
  const post = await getMdxNode("post", context, {
    components: mdxComponents,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      menu,
      footer,
    },
  };
}
