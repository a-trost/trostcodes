import Head from "next/head";
import Image from "next/image";
import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { getFooterAndMenu } from "@lib/api";
import readingTime from "reading-time";

import Layout from "@components/Layout";
import CodePen from "@components/CodePen";
import CodeBlock from "@components/CodeBlock";
import CenterContent from "@components/CenterContent";
import Unfinished from "@components/Unfinished";

import "highlight.js/styles/atom-one-dark.css";

const mdxComponents = {
  pre: CodeBlock,
  CodePen,
  Image,
  CenterContent,
  Unfinished,
};

export default function NotePage({ note, menu, footer, readingTime }) {
  const content = useHydrate(note, { components: mdxComponents });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{`${note.frontMatter.title} - Alex Trost`}</title>
        <meta name="description" content={note.frontMatter.excerpt} />
      </Head>
      <main className="blog-post">
        <article className="blog-post__article">
          <h1>{note.frontMatter.title}</h1>
          {!!note.frontMatter.source && (
            <a href={note.frontMatter.source}>Source Material</a>
          )}
          {!!note.frontMatter.excerpt && <p>{note.frontMatter.excerpt}</p>}
          {content}
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("note"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { menu, footer } = await getFooterAndMenu();
  const note = await getMdxNode("note", context, {
    components: mdxComponents,
  });

  if (!note) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      note,
      readingTime: readingTime(note.content),
      menu,
      footer,
    },
  };
}
