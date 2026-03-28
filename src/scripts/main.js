import { createPlan } from "./plan";
import { harvestPlants } from "./harvester.js"; 



console.log("Welcome to the main module")
const yearlyPlan = createPlan();
console.log("Plan created:", yearlyPlan);