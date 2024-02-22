import { TravelerRepository } from "@/src/repository/travelerRepository";
import { CreateTravelerService } from "./createTravelerService";

const travelerRepository = new TravelerRepository();

const createTravelerService = new CreateTravelerService(travelerRepository);

export { createTravelerService };
