import { Bed, Bus, Star, StarHalf } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TripsType } from "../../types/trips";

interface TripCardProps {
  data?: TripsType;
}

export default function TripCard({}: TripCardProps) {
  const data = {
    slug: "#",
    image: {
      alt: "Office",
      url: "/images/jm-2katanas-4-full-hd.jpg",
      width: 1920,
      height: 1080,
    },
    totalDays: "4 dias / 3 noites",
    title: "Tour para Viridian City",
    startDate: "Qui 10 de Ago",
    endDate: "Dom 13 de Ago",
    accommodation: { name: "Hotel do Giovanni", rating: "4,2" },
    pricing: { saving: "100", initalPrice: "200", finalPrice: "100" },
  };
  return (
    <Link
      href={data.slug}
      className="border rounded min-w-[300px] max-w-[400px] divide-y hover:shadow-lg hover:shadow-indigo-black bg-zinc-100"
    >
      <Image
        width={data.image.width}
        height={data.image.height}
        src={data.image.url}
        alt={data.image.alt}
        className="h-56 w-full object-cover rounded-t-lg"
      />
      <div className="p-4 relative">
        <span className="absolute start-2.5 top-0 font-bold -translate-y-1/2 whitespace-nowrap rounded bg-sky-100 px-2.5 py-0.5 text-sm text-sky-700">
          {data.totalDays}
        </span>
        <h3 className="text-xl font-bold text-zinc-700 mb-5">{data.title}</h3>
        <div className="flex gap-2 mb-5 flex-wrap">
          <span>
            A partir de <b>{data.startDate}</b>
          </span>
          <span>
            Até <b>{data.endDate}</b>
          </span>
        </div>
        <div className="flex gap-2 mb-5">
          <Bus size={20} />
          <span>Excursão terrestre</span>
        </div>
        <div className="flex gap-2 mb-5 justify-between flex-wrap">
          <div className="flex gap-2">
            <Bed size={20} />
            <span>{data.accommodation.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="whitespace-nowrap rounded bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">
              {data.accommodation.rating}
            </span>
            <span className="flex">
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <StarHalf size={20} weight="fill" />
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col relative mb-6 5">
        <span className="absolute start-2.5 top-0 -translate-y-1/2 whitespace-nowrap rounded bg-orange-100 px-2.5 py-0.5 text-sm text-orange-700">
          <b className="text-zinc-700">Economize</b> R$
          <span>{data.pricing.saving}</span>
        </span>
        <span>Preço por pessoa</span>
        <del className="text-sm text-zinc-400">
          R$<span>{data.pricing.initalPrice}</span>
        </del>
        <span className="text-sm">
          R$ <b className="text-2xl">{data.pricing.finalPrice}</b>
        </span>
      </div>
    </Link>
  );
}
