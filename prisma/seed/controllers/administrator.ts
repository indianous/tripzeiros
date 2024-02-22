import { createAdministratorService } from "@/src/services/createAdministrator";
import { CreateAdministratorDTO } from "@/src/services/createAdministrator/createAdministratorDTO";
import { faker } from "@faker-js/faker";

export async function createAdministrator(count: number = 1) {
  const arr: CreateAdministratorDTO[] = [];
  for (let i = 0; i < count; i++) {
    const name = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet
      .email({ provider: "tripzeiros.com.br" })
      .toLowerCase();
    const password = "12345678901234567890";
    const username = faker.internet.userName().toLowerCase();
    const data: CreateAdministratorDTO = {
      email,
      lastname,
      name,
      password,
      username,
    };
    arr.push(data);
  }

  for (const item of arr) {
    console.log("Criando um administrador");
    try {
      await createAdministratorService.execute(item);
    } catch (error) {
      console.log("ocorreu um erro");
    }
  }
}
