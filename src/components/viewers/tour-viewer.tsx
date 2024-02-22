"use client";
import { Container } from "@/src/components/container";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Check, Clock } from "@phosphor-icons/react";
import durationConverter from "../../utils/durationConverter";
import brlConverter from "../../utils/brlConverter";
import Carousel from "../carousel";

interface TourViewerProps {
  tour: {
    title: string;
    description: string;
    rating: number;
    price: number;
    duration: number;
    images: { alt: string; url: string }[];
    services: { content: string }[];
    comments: {}[];
  };
}

export default function TourViewer({ tour }: TourViewerProps) {
  return (
    <>
      <header className="relative">
        <Container>
          <Carousel
            images={tour.images.map(({ alt, url }) => ({
              alt,
              url,
            }))}
          />
        </Container>
        <div className="grid gap-4 grid-cols-7">
          <div className="col-span-4">
            <Container>
              <Heading>{tour.title}</Heading>
            </Container>
            <Container>
              <Badge>
                {tour.rating.toLocaleString("pt-BR", {
                  style: "decimal",
                  maximumFractionDigits: 2,
                })}
              </Badge>
            </Container>
            <Container className="flex gap-x-2">
              <Clock size={24} />
              <Text>Duração:{durationConverter(tour.duration)}</Text>
            </Container>
            <Container>
              <ul className="flex">
                {tour.services.map((service, index) => (
                  <li key={index} className="flex py-4 px-8 gap-x-2">
                    <Check size={24} className="text-lime-600" />
                    <p>{service.content}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
          <div className="col-span-3 flex align-center justify-center">
            <Card className="m-auto">
              <CardBody>
                <Text>Preço por adulto a partir de:</Text>
                <Text className="text-xl font-bold">
                  {brlConverter(tour.price)}
                </Text>
              </CardBody>
              <CardFooter>
                <Button className="w-full">Comprar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </header>
      <main className="divide-y">
        <div className="p-4 gap-4 flex flex-col">
          <div>
            <span className="rounded bg-emerald-700 text-white font-bold text-xl p-2">
              {tour.rating.toLocaleString("pt-BR", {
                style: "decimal",
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <p>{`Pontuação baseada em ${tour.comments.length} comentários.`}</p>
        </div>
        <article className="mt-4">
          <Container>
            <Heading className="mb-4">Descrição</Heading>
            <p>{tour.description}</p>
          </Container>
        </article>
      </main>
    </>
  );
}
