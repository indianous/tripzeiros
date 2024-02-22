import { PrismaClient } from "@prisma/client";
import { Service } from "../entities/service";

export class ServiceRepository {
  constructor() {}

  async create(service: Service): Promise<Service> {
    const { content, id } = service;
    const prisma = new PrismaClient();
    await prisma.service.create({
      data: { content, id },
    });
    await prisma.$disconnect();
    return service;
  }

  async findAll(): Promise<Service[]> {
    const prisma = new PrismaClient();
    const datas = await prisma.service.findMany();
    await prisma.$disconnect();
    const services: Service[] = [];
    datas.forEach(({ id, content }) =>
      services.push(new Service({ content }, id))
    );
    return services;
  }
}
