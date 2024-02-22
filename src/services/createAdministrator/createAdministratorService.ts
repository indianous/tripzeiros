import { AdministratorRepository } from "@/src/repository/administratorRepository";
import { CreateAdministratorDTO } from "./createAdministratorDTO";
import { Administrator } from "@/src/entities/administrator";

export class CreateAdministratorService {
  constructor(private administratorRepository: AdministratorRepository) {}

  async execute(createAdministratorDTO: CreateAdministratorDTO) {
    const administrator = new Administrator(createAdministratorDTO);
    this.administratorRepository.create(administrator);
  }
}
