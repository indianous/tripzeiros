import { LocationRepository } from "@/src/repository/locationRepository";
import { CreateLocationService } from "./createLocationService";

const locationRepository = new LocationRepository();

const createLocationService = new CreateLocationService(locationRepository);

export { createLocationService };
