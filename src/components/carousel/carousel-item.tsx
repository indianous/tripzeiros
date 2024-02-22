import { Image } from "@chakra-ui/react";
import { twMerge } from "tailwind-merge";

interface CarouselItemProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CarouselItem({
  src,
  alt,
  className,
}: CarouselItemProps) {
  return (
    <>
      <div className={twMerge("hidden", className)}>
        <Image className="w-full h-auto" alt={alt} src={src} />
      </div>
    </>
  );
}
