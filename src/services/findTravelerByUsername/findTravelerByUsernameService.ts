import { Traveler } from "@/src/entities/traveler";
import { TravelerRepository } from "@/src/repository/travelerRepository";

export class FindTravelerByUsernameService {
  constructor(private travelerRepository: TravelerRepository) {}

  async execute(usename: string): Promise<Traveler> {
    const traveler: Traveler = await this.travelerRepository.findByUsername(
      usename
    );
    return traveler;
  }
}
