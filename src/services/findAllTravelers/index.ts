import { TravelerRepository } from "@/src/repository/travelerRepository";
import { FindAllTravelersService } from "./findAllTravelersService";

const travelerRepository = new TravelerRepository();

const findAllTravelersService = new FindAllTravelersService(travelerRepository);

export { findAllTravelersService };
