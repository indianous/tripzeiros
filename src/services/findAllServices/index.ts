import { ServiceRepository } from "@/src/repository/serviceRepository";
import { FindAllServicesService } from "./findAllServicessService";

const serviceRepository = new ServiceRepository();

const findAllServicesService = new FindAllServicesService(serviceRepository);

export { findAllServicesService };
