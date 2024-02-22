import { Image } from "../entities/image";

export class ImageRepository {
  constructor() {}

  async create(image: Image): Promise<Image> {
    return image;
  }
}
