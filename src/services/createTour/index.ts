import { TourRepository } from "@/src/repository/tourRepository";
import { CreateTourService } from "./createTourService";

const tourRepository = new TourRepository();

const createTourService = new CreateTourService(tourRepository);

export { createTourService };
