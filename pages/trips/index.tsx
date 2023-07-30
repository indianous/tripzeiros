import React from "react";
import Layout from "../../src/components/layout";
import Head from "next/head";
import TripCard from "../../src/components/trip-card";
import Container from "../../src/components/container";
import LocalBadge from "../../src/components/local-badge";

interface TripsProps {}

export default function Trips({}: TripsProps) {
  return (
    <>
      <Head>
        <title>Excursões</title>
      </Head>
      <Layout>
        <Container>
          <h1 className="py-8 text-4xl font-bold">Excursões</h1>
          <div className="bg-purple-200 p-4 mb-4 rounded overflow-hidden md:flex md:gap-8">
            <h2 className="text-3xl font-bold mb-8 md:my-auto">
              Conheça as nossas Excursões
            </h2>
            <div className="mb-4 flex gap-8">
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
            </div>
          </div>
          <div className="bg-purple-200 p-4 rounded mb-4 overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">
              Nosso locais de Excursão
            </h2>
            <div className="flex gap-4 border">
              <LocalBadge />
              <LocalBadge />
              <LocalBadge />
              <LocalBadge />
              <LocalBadge />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
