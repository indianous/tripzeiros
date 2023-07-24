import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LocalBadgeProps {
  data?: {};
}

export default function LocalBadge({}: LocalBadgeProps) {
  const data = {
    slug: "#",
    image: {
      width: 1920,
      height: 1080,
      url: "/images/jm-2katanas-222-full-hd.jpg",
      alt: "Office",
    },
    title: "São Paulo",
  };
  return (
    <Link href={data.slug} className="text-center p-2">
      <Image
        width={data.image.width}
        height={data.image.height}
        src={data.image.url}
        alt={data.image.alt}
        className="min-h-[75px] min-w-[75px] max-h-[75px] max-w-[75px] object-cover rounded-full ring"
      />
      <small>{data.title}</small>
    </Link>
  );
}
