import { TourRepository } from "@/src/repository/tourRepository";
import { FindTourBySlugService } from "./findTourBySlugService";

const tourRepository = new TourRepository();

const findTourBySlugService = new FindTourBySlugService(tourRepository);

export { findTourBySlugService };
