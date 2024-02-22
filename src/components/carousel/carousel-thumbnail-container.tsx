import { Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CarouselThumbnailContainerProps {
  children: ReactNode;
}

export default function CarouselThumbnailContainer({
  children,
}: CarouselThumbnailContainerProps) {
  return (
    <>
      <div className="flex gap-4 overflow-scroll">{children}</div>
    </>
  );
}
