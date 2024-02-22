import { v4 } from "uuid";
import argon2 from "argon2";
import { Image } from "../image";

export class Administrator {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly lastname: string;
  readonly email: string;
  private hash: string = "";
  readonly avatar: Image | null;
  private password: string | null;
  constructor(
    props: {
      lastname: string;
      username: string;
      name: string;
      email: string;
      password?: string;
      hash?: string;
      avatar?: { url: string; alt: string };
    },
    id?: string
  ) {
    if (id) {
      this.id = this.validateId(id);
    } else {
      this.id = v4();
    }
    this.name = this.validateName(props.name);
    this.email = this.validateEmail(props.email);
    this.lastname = this.validateLastname(props.lastname);
    this.username = this.validateUsername(props.username);
    if (props.password) {
      this.password = this.validatePassword(props.password);
      this.hashedPassword(this.password).then(
        (response) => (this.hash = response)
      );
    } else {
      if (props.hash) {
        this.password = null;
        this.hash = props.hash;
      } else {
        throw new Error("the password must be provided");
      }
    }
    if (props.avatar) {
      this.avatar = new Image(props.avatar);
    } else {
      this.avatar = null;
    }
  }
  private validateEmail(email: string): string {
    const emailRegex = /^[a-z0-9._-]+@tripzeiros.com.br$/i;
    if (!emailRegex.test(email)) {
      throw new Error("This email is invalid");
    }
    return email;
  }
  private validateId(id: string): string {
    if (id === "") {
      throw new Error("This id is empty");
    }
    return id;
  }
  private validateName(name: string): string {
    if (name === "") {
      throw new Error("This name is empty");
    }
    return name;
  }
  private validateLastname(lastname: string): string {
    if (lastname === "") {
      throw new Error("This lastname is empty");
    }
    return lastname;
  }
  private validateUsername(username: string): string {
    if (username === "") {
      throw new Error("This username is empty");
    }
    return username;
  }
  private validatePassword(password: string): string {
    if (password.length < 16) {
      throw new Error("This password is very short");
    }
    return password;
  }
  private async hashedPassword(password: string): Promise<string> {
    const hash = await argon2.hash(password);
    return hash;
  }
  public getHash(): string {
    return this.hash;
  }
}
