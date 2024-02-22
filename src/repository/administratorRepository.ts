import { PrismaClient } from "@prisma/client";
import { Administrator } from "../entities/administrator";

export class AdministratorRepository {
  constructor() {}

  async create(administrator: Administrator): Promise<Administrator> {
    const prisma = new PrismaClient();
    const { avatar, email, id, lastname, name, username } = administrator;
    const hash = administrator.getHash();
    if (avatar) {
      const { alt, id: avatarId, url } = avatar;
      await prisma.image.create({ data: { alt, id: avatarId, url } });
      await prisma.user.create({
        data: { email, id, lastname, name, username, avatarId, hash },
      });
    } else {
      await prisma.user.create({
        data: { email, hash, id, lastname, name, username },
      });
      await prisma.administrator.create({
        data: { id, userId: id },
      });
    }
    await prisma.$disconnect();
    return administrator;
  }
  async findByUsername(username: string): Promise<Administrator> {
    const prisma = new PrismaClient();
    const data = await prisma.user.findUniqueOrThrow({
      where: { username, active: true },
      include: { Administrator: true },
    });

    await prisma.$disconnect();
    if (!data.Administrator) {
      throw new Error("This user is not an administrator");
    }
    const { email, lastname, name, hash, id } = data;
    const administrator = new Administrator(
      {
        email,
        lastname,
        name,
        hash,
        username,
      },
      id
    );
    return administrator;
  }

  async findAll(): Promise<Administrator[]> {
    const prisma = new PrismaClient();
    const datas = await prisma.administrator.findMany({
      where: { active: true },
      include: { user: { include: { avatar: true } } },
    });

    const administrators: Administrator[] = [];

    for (const data of datas) {
      const {
        id,
        user: { email, hash, lastname, name, username },
      } = data;
      const administrator = new Administrator(
        { email, lastname, name, username, hash },
        id
      );
      administrators.push(administrator);
    }
    await prisma.$disconnect();
    return administrators;
  }
}
