import { AdministratorRepository } from "@/src/repository/administratorRepository";
import { FindAdministratorByUsernameService } from "./findAdministratorByUsernameService";

const administratorRepository = new AdministratorRepository();

const findAdministratorByUsernameService =
  new FindAdministratorByUsernameService(administratorRepository);

export { findAdministratorByUsernameService };
