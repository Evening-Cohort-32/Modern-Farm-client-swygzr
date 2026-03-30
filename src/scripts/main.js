import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

// Create a yearly planting plan, plant the seeds, then harvest and show the catalog
const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const plantedSeeds = usePlants();
const harvestedFood = harvestPlants(plantedSeeds);
Catalog(harvestedFood);
