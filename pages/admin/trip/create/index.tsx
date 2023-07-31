import React from "react";
import Head from "next/head";
import Layout from "../../../../src/components/layout";
import Container from "../../../../src/components/container";

interface CreateTripProps {}

export default function CreateTrip({}: CreateTripProps) {
  return (
    <>
      <Head>
        <title>Criar Excursão</title>
      </Head>
      <Layout>
        <Container>
          <h1 className="text-3xl py-4">Criar uma Excursão</h1>
          <form>
            <label
              htmlFor="name"
              className="relative block border rounded focus-within:ring-1 m-auto py-2 px-4 mb-4"
            >
              <input
                type="text"
                name="name"
                id="name"
                className="peer border-none bg-transparent w-full placeholder-transparent focus:border-transparent focus:outline-none"
                placeholder="Nome"
              />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Nome
              </span>
            </label>
            <div className="flex">
              <label
                htmlFor="name"
                className="relative block border rounded focus-within:ring-1 m-auto py-2 px-4 mb-4"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer border-none bg-transparent w-full placeholder-transparent focus:border-transparent focus:outline-none"
                  placeholder="Nome"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Nome
                </span>
              </label>
              <label
                htmlFor="name"
                className="relative block border rounded focus-within:ring-1 m-auto py-2 px-4 mb-4"
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer border-none bg-transparent w-full placeholder-transparent focus:border-transparent focus:outline-none"
                  placeholder="Nome"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Nome
                </span>
              </label>
            </div>
          </form>
        </Container>
      </Layout>
    </>
  );
}
