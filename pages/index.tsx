import React from "react";
import Layout from "../src/components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface IndexProps {}

export default function Index({}: IndexProps) {
  return (
    <>
      <Head>
        <title>Tripzeiros</title>
      </Head>
      <Layout>
        <section className="bg-gray-50 px-5 mb-4">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-red-700 sm:block">
                  Increase Conversion.
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <article className="overflow-hidden rounded-lg shadow transition px-5 mb-4 hover:shadow-lg">
          <Image
            width={1920}
            height={1080}
            src="/images/jm-2katanas-4-full-hd.jpg"
            alt="Office"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            {/* <time datetime="2022-10-10" className="block text-xs text-gray-500">
      10th Oct 2022
    </time>*/}

            <Link href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </Link>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </Layout>
    </>
  );
}
