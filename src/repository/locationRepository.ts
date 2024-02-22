import { PrismaClient } from "@prisma/client";
import { Location } from "../entities/location";
import { Image } from "../entities/image";

export class LocationRepository {
  constructor() {}

  async create(location: Location): Promise<Location> {
    const { description, id, name, images } = location;
    const prisma = new PrismaClient();
    await prisma.location.create({ data: { description, id, name } });
    const locationId = id;
    for (const { alt, id, url } of images) {
      await prisma.image.create({ data: { alt, id, url, locationId } });
    }
    await prisma.$disconnect();
    return location;
  }

  async findAll(): Promise<Location[]> {
    const prisma = new PrismaClient();
    const datas = await prisma.location.findMany({ include: { images: true } });

    const locations: Location[] = [];
    for (const { description, id, name, images: arrImages } of datas) {
      const images = [];
      for (const { alt, id, url } of arrImages) {
        images.push({ alt, id, url });
      }
      locations.push(new Location({ description, images, name }, id));
    }
    await prisma.$disconnect();
    return locations;
  }
}
