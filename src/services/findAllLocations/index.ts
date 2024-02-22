import { LocationRepository } from "@/src/repository/locationRepository";
import { FindAllLocationsService } from "./findAllLocationsService";

const locationRepository = new LocationRepository();

const findAllLocationsService = new FindAllLocationsService(locationRepository);

export { findAllLocationsService };
