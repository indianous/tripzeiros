import { v4 } from "uuid";

export class Image {
  readonly id: string;
  readonly url: string;
  readonly alt: string;
  constructor(props: { url: string; alt: string }, id?: string) {
    if (id) {
      this.id = this.verifyId(id);
    } else {
      this.id = v4();
    }
    this.url = this.verifyUrl(props.url);
    this.alt = this.verifyAlt(props.alt);
  }

  private verifyId(id: string): string {
    if (id === "") {
      throw new Error();
    }
    return id;
  }
  private verifyUrl(url: string): string {
    if (url === "") {
      throw new Error();
    }
    return url;
  }
  private verifyAlt(alt: string): string {
    if (alt === "") {
      throw new Error();
    }
    return alt;
  }
}
