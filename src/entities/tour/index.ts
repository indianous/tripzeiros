import { v4 } from "uuid";
import { Image } from "../image";
import { Location } from "../location";
import { Service } from "../service";

export class Tour {
  readonly description: Buffer;
  readonly duration: number;
  readonly id: string;
  readonly price: number;
  readonly rating: number;
  readonly slug: string;
  readonly title: string;
  readonly images: Image[];
  readonly locations: Location[];
  readonly services: Service[];
  constructor(
    props: {
      description: Buffer | string;
      duration: number;
      price: number;
      rating: number;
      slug: string;
      title: string;
      images: { alt: string; url: string; id?: string }[];
      locations: {
        props?: {
          description: string | Buffer;
          images: { alt: string; url: string; id?: string }[];
          name: string;
        };
        id: string;
      }[];
      services: { content?: string; id: string }[];
    },
    id?: string
  ) {
    if (id) {
      this.id = this.validateId(id);
    } else {
      this.id = v4();
    }

    this.description = this.validateDescription(props.description);
    this.duration = this.validateDuration(props.duration);
    this.price = this.validatePrice(props.price);
    this.rating = this.validateRating(props.rating);
    this.slug = this.validateSlug(props.slug);
    this.title = this.validateTitle(props.title);
    this.images = [];
    this.locations = [];
    this.services = [];
    props.images.forEach(({ alt, url, id }) =>
      this.images.push(new Image({ alt, url }, id))
    );

    props.locations.forEach((local) => {
      if (local.props) {
        this.locations.push(new Location(local.props, local.id));
      } else {
        this.locations.push(new Location(undefined, local.id));
      }
    });
    props.services.forEach((service) => {
      if (service.content) {
        this.services.push(
          new Service({ content: service.content }, service.id)
        );
      } else {
        this.services.push(new Service(undefined, service.id));
      }
    });
  }

  validateDescription(description: Buffer | string): Buffer {
    if (typeof description === "string") {
      return Buffer.from(description, "utf-8");
    }
    return description;
  }
  validateDuration(duration: number): number {
    return duration;
  }
  validatePrice(price: number): number {
    return price;
  }
  validateRating(rating: number): number {
    return rating;
  }
  validateSlug(slug: string): string {
    return slug;
  }
  validateTitle(title: string): string {
    return title;
  }
  validateId(id: string): string {
    return id;
  }
}
