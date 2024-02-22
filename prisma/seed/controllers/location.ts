import { createLocationService } from "@/src/services/createLocation";
import { CreateLocationDTO } from "@/src/services/createLocation/createLocationDTO";
import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";

export async function createLocation(count: number = 1) {
  const locations: CreateLocationDTO[] = [];
  for (let index = 0; index < count; index++) {
    const description = faker.lorem.paragraphs(5);
    const images: { alt: string; url: string }[] = [];
    for (let index = 0; index < randomInt(1, 4); index++) {
      const url = faker.image.url();
      const alt = faker.animal.bird();
      images.push({ alt, url });
    }
    const name = faker.animal.insect();
    locations.push({
      description,
      images,
      name,
    });
  }

  for (const local of locations) {
    console.log("Criando uma localização");
    try {
      await createLocationService.execute(local);
    } catch (error) {
      console.log("ocorreu um erro");
    }
  }
}
