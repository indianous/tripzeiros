import { AdministratorRepository } from "@/src/repository/administratorRepository";
import { CreateAdministratorService } from "./createAdministratorService";

const administratorRepository = new AdministratorRepository();

const createAdministratorService = new CreateAdministratorService(
  administratorRepository
);

export { createAdministratorService };
