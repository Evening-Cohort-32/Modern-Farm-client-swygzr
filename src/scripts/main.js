import { createPlan } from "./plan";
import { plantSeeds } from "./tractor.js";
import { Catalog } from "./catalog.js";
import { usePlants } from "./harvester.js";

console.log("Welcome to the main module");
const yearlyPlan = createPlan();
console.log("Plan created:", yearlyPlan);

// Plant all the seeds for the year and read back the planted seeds from the field
plantSeeds(yearlyPlan);
const plantedSeeds = usePlants();
console.log("Planted seeds:", plantedSeeds);

const allFood = usePlants();
Catalog(allFood);
