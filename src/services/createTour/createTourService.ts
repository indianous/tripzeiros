import { Tour } from "@/src/entities/tour";
import { TourRepository } from "@/src/repository/tourRepository";

export class CreateTourService {
  constructor(private tourRepository: TourRepository) {}

  async execute(createTourDTO: CreateTourDTO) {
    const tour = new Tour(createTourDTO);
    this.tourRepository.create(tour);
  }
}
