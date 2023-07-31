import React from "react";
import Head from "next/head";
import Layout from "../../src/components/layout";
import Container from "../../src/components/container";
import { Calendar, MapPin, ShoppingCart } from "@phosphor-icons/react";

interface TripProps {}

export default function Trip({}: TripProps) {
  return (
    <>
      <Head>
        <title>Trip</title>
      </Head>
      <Layout>
        <Container>
          {/* galeria de imagens */}
          <article className="grid grid-cols-3">
            <div className="divide-y col-span-3 md:col-span-2 md:me-4">
              <div className="px-4">
                <h1 className="text-4xl py-4 font-bold">Título da Excursão</h1>
                <div className="flex gap-2 mb-4">
                  <Calendar size={24} />
                  <span>
                    De: <b>16 de setembro de 2023. (Sáb) 09h00min</b>
                  </span>
                  <span>
                    Até: <b>16 de setembro de 2023. (Sáb) 18h00min</b>
                  </span>
                </div>
                <div className="flex gap-2 mb-4">
                  <MapPin size={24} />
                  <span>
                    Local: <b>Expo São Paulo</b>
                  </span>
                </div>
              </div>
              <div className="px-4 mb-4">
                <h2 className="text-2xl py-4">Descrição</h2>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  ab unde tempore pariatur labore nesciunt ipsa iusto vero nisi!
                  Error at non perferendis rem quae ad provident suscipit minima
                  eos?
                </p>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 md:ms-4">
              <div className="border rounded my-4 flex flex-col p-4">
                <h2 className="text-2xl mb-4">Adicionar ao Carrinho</h2>
                <span className="flex justify-between text-xl font-bold mb-4">
                  <ShoppingCart size={24} className="my-auto" />
                  R$ 250,00
                </span>
                <button className="bg-emerald-500 rounded py-2 px-4">
                  Comprar
                </button>
              </div>
            </div>
          </article>
        </Container>
      </Layout>
    </>
  );
}
