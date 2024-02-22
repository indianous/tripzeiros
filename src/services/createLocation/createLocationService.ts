import { LocationRepository } from "@/src/repository/locationRepository";
import { CreateLocationDTO } from "./createLocationDTO";
import { Location } from "@/src/entities/location";

export class CreateLocationService {
  constructor(private locationRepository: LocationRepository) {}

  async execute(createLocationDTO: CreateLocationDTO) {
    const location = new Location(createLocationDTO);
    this.locationRepository.create(location);
  }
}
