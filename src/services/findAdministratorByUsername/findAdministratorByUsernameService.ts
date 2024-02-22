import { Administrator } from "@/src/entities/administrator";
import { AdministratorRepository } from "@/src/repository/administratorRepository";

export class FindAdministratorByUsernameService {
  constructor(private administratorRepository: AdministratorRepository) {}

  async execute(usename: string): Promise<Administrator> {
    const administrator: Administrator =
      await this.administratorRepository.findByUsername(usename);
    return administrator;
  }
}
