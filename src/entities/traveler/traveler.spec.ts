import { expect, it } from "vitest";
import { faker } from "@faker-js/faker";
import { Traveler } from ".";
it("should be possible to create an traveler without an image", () => {
  const name = faker.person.firstName();
  const lastname = faker.person.lastName();
  const email = faker.internet.email().toLowerCase();
  const password = "12345678901234567890";
  const username = faker.internet.userName().toLowerCase();
  const data = {
    email,
    lastname,
    name,
    password,
    username,
  };
  const traveler = new Traveler(data);
  expect(traveler).toBeInstanceOf(Traveler);
  expect(traveler.email).toBe(email);
  expect(traveler.lastname).toBe(lastname);
  expect(traveler.name).toBe(name);
  expect(traveler.username).toBe(username);
  expect(traveler.avatar).toBe(null);
  expect(traveler.id.length).toBe(36);
});

it("shouldn't be possible to create travelers with these types of emails", () => {
  const name = faker.person.firstName();
  const lastname = faker.person.lastName();
  const providers = ["gmail", "tripzeiros.com.br"];
  const emails = [];
  const password = "12345678901234567890";
  const username = faker.internet.userName().toLowerCase();
  const datas = [];
  for (const provider of providers) {
    emails.push(faker.internet.email({ provider }).toLowerCase());
  }
  for (const email of emails) {
    datas.push({
      email,
      lastname,
      name,
      password,
      username,
    });
  }

  for (const data of datas) {
    expect(() => {
      new Traveler(data);
    }).toThrow();
  }
});
