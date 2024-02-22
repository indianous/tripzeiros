import { TravelerRepository } from "@/src/repository/travelerRepository";
import { CreateTravelerDTO } from "./createTravelerDTO";
import { Traveler } from "@/src/entities/traveler";

export class CreateTravelerService {
  constructor(private travelerRepository: TravelerRepository) {}

  async execute(createTravelerDTO: CreateTravelerDTO) {
    const traveler = new Traveler(createTravelerDTO);
    this.travelerRepository.create(traveler);
  }
}
