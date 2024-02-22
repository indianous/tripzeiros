import { Administrator } from "@/src/entities/administrator";
import { AdministratorRepository } from "@/src/repository/administratorRepository";

export class FindAllAdministratorsService {
  constructor(private administratorRepository: AdministratorRepository) {}

  async execute(): Promise<Administrator[]> {
    const administrators = await this.administratorRepository.findAll();

    return administrators;
  }
}
