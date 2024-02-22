import { expect, it } from "vitest";
import { faker } from "@faker-js/faker";
import { Image } from ".";

it("is possible create an Image", () => {
  const { alt, url } = { url: faker.image.url(), alt: faker.animal.bird() };
  const image = new Image({ alt, url });
  expect(image).toBeInstanceOf(Image);
  expect(image.alt).toBe(alt);
  expect(image.url).toBe(url);
  expect(image.id.length).toBe(36);
});

it("may not be possible to create an image with empty values", () => {
  const { alt, url } = { url: "", alt: "" };

  expect(() => {
    new Image({ alt, url });
  }).toThrow();
});
