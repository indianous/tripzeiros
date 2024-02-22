"use client";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import ButtonLeft from "./carousel-button-left";
import ButtonRight from "./carousel-button-right";
import Container from "./carousel-container";
import Item from "./carousel-item";
import { useState } from "react";
import ThumbnailContainer from "./carousel-thumbnail-container";
import ThumbnailItem from "./carousel-thumbnail-item";

interface CarouselProps {
  images: { alt: string; url: string }[];
}

export default function Carousel({ images }: CarouselProps) {
  const [slideIndex, setSlideIndex] = useState(1);
  showSlides();
  function plusSlides(value: number) {
    setSlideIndex(slideIndex + value);
  }
  function currentSlide(value: number) {
    setSlideIndex(value);
    showSlides();
  }
  function showSlides() {
    if (slideIndex > images.length) setSlideIndex(1);
    if (slideIndex < 1) setSlideIndex(images.length);
  }
  return (
    <>
      <Container>
        {images.map(({ alt, url }, index) => {
          if (index + 1 === slideIndex)
            return <Item alt={alt} src={url} key={index} className="block" />;
          return <Item alt={alt} src={url} key={index} className="hidden" />;
        })}
        <ButtonLeft icon={ArrowLeft} action={plusSlides} value={-1} />
        <ButtonRight icon={ArrowRight} action={plusSlides} value={1} />
      </Container>
      <div>
        <ThumbnailContainer>
          {images.map(({ alt, url: src }, index) => {
            const value = index + 1;
            if (value === slideIndex)
              return (
                <ThumbnailItem
                  image={{
                    src,
                    alt,
                    action: currentSlide,
                    value: value,
                  }}
                  className="border"
                  key={index}
                />
              );
            return (
              <ThumbnailItem
                image={{
                  src,
                  alt,
                  action: currentSlide,
                  value: value,
                }}
                className="border-0"
                key={index}
              />
            );
          })}
        </ThumbnailContainer>
      </div>
    </>
  );
}
