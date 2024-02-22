import { Traveler } from "@/src/entities/traveler";
import { TravelerRepository } from "@/src/repository/travelerRepository";

export class FindAllTravelersService {
  constructor(private travelerRepository: TravelerRepository) {}

  async execute(): Promise<Traveler[]> {
    const travelers = await this.travelerRepository.findAll();

    return travelers;
  }
}
