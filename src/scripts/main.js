import { createPlan } from "./plan";
import { createAsparagus } from "./seeds/asparagus";


console.log("Welcome to the main module")
const yearlyPlan = createPlan();
console.log("Plan created:", yearlyPlan);

const asparagus = createAsparagus();
console.log("Asparagus created:", asparagus);