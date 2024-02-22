import { v4 } from "uuid";
import { Image } from "../image";

export class Location {
  readonly id: string;
  readonly description: Buffer | null = null;
  readonly name: string | null = null;
  readonly images: Image[] | null = null;

  constructor(
    props?: {
      description: string | Buffer;
      name: string;
      images: { url: string; alt: string; id?: string }[];
    },
    id?: string
  ) {
    if (id) {
      this.id = this.verifyId(id);
    } else {
      this.id = v4();
    }
    if (props) {
      this.images = [];
      this.description = this.verifyDescription(props.description);
      this.name = this.verifyName(props.name);
      props.images.forEach(({ alt, url, id }) => {
        if (this.images) {
          this.images.push(new Image({ alt, url }, id));
        }
      });
    }
  }

  private verifyId(id: string): string {
    return id;
  }
  private verifyDescription(description: string | Buffer): Buffer {
    if (typeof description === "string") {
      return Buffer.from(description, "utf-8");
    } else {
      return description;
    }
  }
  private verifyName(name: string): string {
    return name;
  }
}
