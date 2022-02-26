import Head from "next/head";
import Image from "next/image";
import { useHydrate } from "next-mdx/client";
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { getFooterAndMenu } from "@lib/api";
import readingTime from "reading-time";

import Layout from "@components/Layout";
import CodePen from "@components/CodePen";
import CodeBlock from "@components/CodeBlock";
import CenterContent from "@components/mdx/CenterContent";
import Unfinished from "@components/Unfinished";
import SimpleCard from "@components/mdx/SimpleCard";

import "highlight.js/styles/atom-one-dark.css";

const mdxComponents = {
  pre: CodeBlock,
  CodePen,
  Image,
  CenterContent,
  Unfinished,
  SimpleCard,
};

export default function NotePage({ booknote, menu, footer, readingTime }) {
  const content = useHydrate(booknote, { components: mdxComponents });

  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{`${booknote.frontMatter.title} - Alex Trost`}</title>
        <meta name="description" content={booknote.frontMatter.excerpt} />
      </Head>
      <main className="blog-post">
        <article className="blog-post__article">
          <h1>{booknote.frontMatter.title}</h1>
          {!!booknote.frontMatter.source && (
            <a href={booknote.frontMatter.source}>Source Material</a>
          )}
          {!!booknote.frontMatter.excerpt && (
            <p>{booknote.frontMatter.excerpt}</p>
          )}
          {content}
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("booknote"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { menu, footer } = await getFooterAndMenu();
  const booknote = await getMdxNode("booknote", context, {
    components: mdxComponents,
  });

  if (!booknote) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      booknote,
      readingTime: readingTime(booknote.content),
      menu,
      footer,
    },
  };
}
