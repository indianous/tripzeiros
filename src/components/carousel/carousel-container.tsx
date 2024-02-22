import { ReactNode } from "react";
import { Container } from "../container";
import { twMerge } from "tailwind-merge";

interface CarouselContainerProps {
  children?: ReactNode;
  className?: string;
}

export default function CarouselContainer({
  children,
  className,
}: CarouselContainerProps) {
  return (
    <>
      <Container
        className={twMerge("max-w-[1000px] relative m-auto", className)}
      >
        {children}
      </Container>
    </>
  );
}
