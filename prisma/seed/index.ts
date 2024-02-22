import { faker } from "@faker-js/faker";
import { createAdministrator } from "./controllers/administrator";
import { createTraveler } from "./controllers/traveler";
import { createLocation } from "./controllers/location";
import { createService } from "./controllers/service";
import { createTour } from "./controllers/tour";

async function start() {
  console.log("🚍 Start Seeding!!! 🚍");
  Promise.all([
    // await createAdministrator(),
    // await createTraveler(5),
    // await createLocation(5),
    // await createService(),
    await createTour(5),
  ]);
}

start();
