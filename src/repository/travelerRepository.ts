import { PrismaClient } from "@prisma/client";
import { Traveler } from "../entities/traveler";

export class TravelerRepository {
  constructor() {}

  async create(traveler: Traveler): Promise<Traveler> {
    const prisma = new PrismaClient();
    const { avatar, email, id, lastname, name, username } = traveler;
    const hash = traveler.getHash();
    if (avatar) {
      await prisma.traveler.create({
        data: {
          id,
          user: {
            create: {
              email,
              hash,
              id,
              lastname,
              name,
              username,
              avatar: {
                create: {
                  alt: avatar.alt,
                  id: avatar.id,
                  url: avatar.url,
                },
              },
            },
          },
        },
      });
    } else {
      await prisma.traveler.create({
        data: {
          id,
          user: {
            create: {
              email,
              hash,
              id,
              lastname,
              name,
              username,
            },
          },
        },
      });
    }
    await prisma.$disconnect();
    return traveler;
  }
  async findByUsername(username: string): Promise<Traveler> {
    const prisma = new PrismaClient();
    const { email, lastname, name, hash, administrator } =
      await prisma.user.findUniqueOrThrow({
        where: { active: true, username },
        include: { administrator: true },
      });
    await prisma.$disconnect();

    if (administrator) {
      const { id } = administrator;
      const traveler = new Traveler(
        { email, lastname, name, hash, username },
        id
      );
      return traveler;
    } else {
      throw new Error("This user is not a User");
    }
  }
  async findAll(): Promise<Traveler[]> {
    const prisma = new PrismaClient();
    const datas = await prisma.traveler.findMany({
      include: { user: { include: { avatar: true } } },
    });
    await prisma.$disconnect();

    const travelers: Traveler[] = [];
    datas.forEach(({ user: { email, lastname, name, username, hash }, id }) =>
      travelers.push(
        new Traveler({ email, lastname, name, username, hash }, id)
      )
    );

    return travelers;
  }
}
