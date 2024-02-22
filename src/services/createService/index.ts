import { ServiceRepository } from "@/src/repository/serviceRepository";
import { Create2Service } from "./create2Service";

const serviceRepository = new ServiceRepository();

const create2Service = new Create2Service(serviceRepository);

export { create2Service };
