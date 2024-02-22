import { Image } from "@chakra-ui/react";
import { twMerge } from "tailwind-merge";

interface CarouselThumbnailItemProps {
  image: {
    alt: string;
    src: string;
    action: (value: number) => void;
    value: number;
  };
  className: string;
}

export default function CarouselThumbnailItem({
  image: { action, alt, src, value },
  className,
}: CarouselThumbnailItemProps) {
  return (
    <>
      <button
        onClick={() => {
          action(value);
        }}
        className={twMerge("border-0 p-1 w-1/6", className)}
      >
        <Image alt={alt} src={src} />
      </button>
    </>
  );
}
