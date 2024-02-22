import { expect, it } from "vitest";
import { Administrator } from ".";
import { faker } from "@faker-js/faker";
it("should be possible to create an administrator without an image", () => {
  const name = faker.person.firstName();
  const lastname = faker.person.lastName();
  const email = faker.internet
    .email({ provider: "tripzeiros.com.br" })
    .toLowerCase();
  const password = "12345678901234567890";
  const username = faker.internet.userName().toLowerCase();
  const data = {
    email,
    lastname,
    name,
    password,
    username,
  };
  const administrator = new Administrator(data);
  expect(administrator).toBeInstanceOf(Administrator);
  expect(administrator.email).toBe(email);
  expect(administrator.lastname).toBe(lastname);
  expect(administrator.name).toBe(name);
  expect(administrator.username).toBe(username);
  expect(administrator.avatar).toBe(null);
  expect(administrator.id.length).toBe(36);
});

it("shouldn't be possible to create administrators with these types of emails", () => {
  const name = faker.person.firstName();
  const lastname = faker.person.lastName();
  const providers = ["gmail", "hotmail.com", "tripzeiros.com"];
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
      new Administrator(data);
    }).toThrow();
  }
});
