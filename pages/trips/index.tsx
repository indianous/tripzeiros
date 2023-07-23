import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

interface TripsProps {}

export default function Trips({}: TripsProps) {
  return (
    <>
      <Head>
        <title>Trips</title>
      </Head>
      <Layout>
        <h1>Trips</h1>
      </Layout>
    </>
  );
}
