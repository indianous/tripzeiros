import { Service } from "@/src/entities/service";
import { ServiceRepository } from "@/src/repository/serviceRepository";

export class FindAllServicesService {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(): Promise<Service[]> {
    const services = await this.serviceRepository.findAll();

    return services;
  }
}
