import { ServiceRepository } from "@/src/repository/serviceRepository";
import { CreateServiceDTO } from "./createServiceDTO";
import { Service } from "@/src/entities/service";

export class Create2Service {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(createServiceDTO: CreateServiceDTO) {
    const service = new Service(createServiceDTO);
    this.serviceRepository.create(service);
  }
}
