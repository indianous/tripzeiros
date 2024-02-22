import { Tour } from "@/src/entities/tour";
import { TourRepository } from "@/src/repository/tourRepository";

export class FindTourBySlugService {
  constructor(private tourRepository: TourRepository) {}

  async execute(slug: string): Promise<Tour> {
    const tour: Tour = await this.tourRepository.findBySlug(slug);
    return tour;
  }
}
