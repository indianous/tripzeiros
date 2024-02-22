import { createTravelerService } from "@/src/services/createTraveler";
import { CreateTravelerDTO } from "@/src/services/createTraveler/createTravelerDTO";
import { faker } from "@faker-js/faker";

export async function createTraveler(count: number = 1) {
  const arr: CreateTravelerDTO[] = [];
  for (let i = 0; i < count; i++) {
    const name = faker.person.firstName();
    const lastname = faker.person.lastName();
    const email = faker.internet.email().toLowerCase();
    const password = "12345678901234567890";
    const username = faker.internet.userName().toLowerCase();
    const data: CreateTravelerDTO = {
      email,
      lastname,
      name,
      password,
      username,
    };
    arr.push(data);
  }

  for (const item of arr) {
    console.log("Criando um viajante");
    try {
      await createTravelerService.execute(item);
    } catch (error) {
      console.log(error);
    }
  }
}
