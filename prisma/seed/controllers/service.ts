import { create2Service } from "@/src/services/createService";
import { CreateServiceDTO } from "@/src/services/createService/createServiceDTO";
import { faker } from "@faker-js/faker";
import { randomInt } from "crypto";

export async function createService(count: number = 1) {
  const services: CreateServiceDTO[] = [];

  for (let index = 0; index < count; index++) {
    const content = faker.word.verb();
    services.push({ content });
  }

  for (const service of services) {
    console.log("Criando um serviço");

    try {
      await create2Service.execute(service);
    } catch (error) {
      console.log("ocorreu um erro");
    }
  }
}
