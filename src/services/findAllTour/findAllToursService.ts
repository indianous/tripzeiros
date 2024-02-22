import { Tour } from "@/src/entities/tour";
import { TourRepository } from "@/src/repository/tourRepository";

export class FindAllToursService {
  constructor(private tourRepository: TourRepository) {}

  async execute() {
    const tours: Tour[] = await this.tourRepository.findAll();
    return tours;
  }
}
