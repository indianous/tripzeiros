import { createTourService } from "@/src/services/createTour";
import { findAllLocationsService } from "@/src/services/findAllLocations";
import { findAllServicesService } from "@/src/services/findAllServices";
import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";

export async function createTour(count: number = 1) {
  const tours: CreateTourDTO[] = [];
  const locations: { id: string }[] = [];
  const services: { id: string }[] = [];

  for (let index = 0; index < 2; index++) {
    const data = {
      locations: await findAllLocationsService.execute(),
      services: await findAllServicesService.execute(),
    };
    locations.push({
      id: data.locations[randomInt(1, data.locations.length)].id,
    });
    services.push({ id: data.services[randomInt(1, data.services.length)].id });
  }

  for (let index = 0; index < count; index++) {
    const description = faker.lorem.paragraphs(randomInt(1, 5));
    const duration = randomInt(5, 360);
    const price = faker.number.float({ min: 100, max: 500 });
    const rating = faker.number.float({ min: 1, max: 5 });
    const slug = faker.lorem.slug();
    const title = faker.animal.cat();
    const images: { alt: string; url: string }[] = [];
    for (let index = 0; index < randomInt(1, 15); index++) {
      images.push({ alt: faker.animal.dog(), url: faker.image.url() });
    }
    tours.push({
      description,
      duration,
      images,
      locations,
      price,
      rating,
      services,
      slug,
      title,
    });
  }

  for (const tour of tours) {
    console.log("Criando uma viagem");

    try {
      await createTourService.execute(tour);
    } catch (error) {
      console.log("ococreu um erro");
    }
  }
}
