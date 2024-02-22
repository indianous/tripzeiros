import { TourRepository } from "@/src/repository/tourRepository";
import { FindAllToursService } from "./findAllToursService";

const tourRepository = new TourRepository();

const findAllToursService = new FindAllToursService(tourRepository);

export { findAllToursService };
