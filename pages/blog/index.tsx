import React from "react";
import Layout from "../../src/components/layout";
import Head from "next/head";

interface BlogProps {}

export default function Blog({}: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <h1>Blog</h1>
      </Layout>
    </>
  );
}
