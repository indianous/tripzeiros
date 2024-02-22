import { PrismaClient } from "@prisma/client";
import { Tour } from "../entities/tour";

export class TourRepository {
  constructor() {}

  async create(tour: Tour): Promise<Tour> {
    const {
      description,
      duration,
      id,
      price,
      rating,
      slug,
      title,
      images,
      locations,
      services,
    } = tour;

    const prisma = new PrismaClient();

    await prisma.tour.create({
      data: {
        description,
        duration,
        id,
        price,
        rating,
        slug,
        title,
        images: {
          create: images.map((image) => ({
            alt: image.alt,
            id: image.id,
            url: image.url,
          })),
        },
        services: {
          create: services.map(({ id }) => ({
            service: { connect: { id } },
          })),
        },
        locations: {
          create: locations.map(({ id }) => ({
            location: { connect: { id } },
          })),
        },
      },
    });

    await prisma.$disconnect();
    return tour;
  }

  async findBySlug(slug: string): Promise<Tour> {
    const prisma = new PrismaClient();
    const data = await prisma.tour.findUniqueOrThrow({
      where: { slug },
      include: {
        comments: true,
        images: true,
        locations: { include: { location: { include: { images: true } } } },
        services: { include: { service: true } },
      },
    });
    await prisma.$disconnect();
    const {
      description,
      duration,
      images,
      locations,
      price,
      rating,
      services,
      title,
      id,
    } = data;
    const tour = new Tour(
      {
        description,
        duration,
        images: images.map(({ alt, url, id }) => ({ alt, url, id })),
        locations: locations.map(
          ({ location: { id, description, images, name } }) => ({
            id,
            props: {
              description,
              images: images.map(({ alt, url, id }) => ({ alt, url, id })),
              name,
            },
          })
        ),
        price: price.toNumber(),
        rating: rating.toNumber(),
        services: services.map(({ service: { id, content } }) => ({
          id,
          content,
        })),
        slug,
        title,
      },
      id
    );
    return tour;
  }

  async findAll(): Promise<Tour[]> {
    const prisma = new PrismaClient();
    const datas = await prisma.tour.findMany({
      include: {
        images: true,
        locations: { include: { location: { include: { images: true } } } },
        services: { include: { service: true } },
      },
    });
    await prisma.$disconnect();
    const tours: Tour[] = [];
    datas.forEach(
      ({
        description,
        duration,
        images,
        locations,
        price,
        rating,
        services,
        title,
        id,
        slug,
      }) => {
        const tour: Tour = new Tour(
          {
            description,
            duration,
            images: images.map(({ alt, id, url }) => ({ alt, id, url })),
            locations: locations.map(
              ({ location: { description, id, name, images } }) => ({
                description,
                images: images.map(({ alt, id, url }) => ({ alt, id, url })),
                name,
                id,
              })
            ),
            price: price.toNumber(),
            rating: rating.toNumber(),
            services: services.map(({ service: { content, id } }) => ({
              content,
              id,
            })),
            slug,
            title,
          },
          id
        );
        tours.push(tour);
      }
    );
    return tours;
  }
}
