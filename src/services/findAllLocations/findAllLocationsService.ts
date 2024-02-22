import { Location } from "@/src/entities/location";
import { LocationRepository } from "@/src/repository/locationRepository";

export class FindAllLocationsService {
  constructor(private locationRepository: LocationRepository) {}

  async execute(): Promise<Location[]> {
    const locations = await this.locationRepository.findAll();

    return locations;
  }
}
