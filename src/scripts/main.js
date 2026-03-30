//imports
import { createPlan } from "./plan.js";
import { harvestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";
import { Catalog } from "./catalog.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { usePlants } from "./field.js";

//.scripts/seeds
createAsparagus();
createCorn();
createPotato();
createSoybean();
createSunflower();
createWheat();

//console.log(asparagusSeed);
//console.log(cornSeed);
//console.log(potatoSeed);
//console.log(soybeanSeed);
//console.log(sunflowerSeed);
//console.log(wheatSeed);

//field.js
//const addAsparagus = addPlant(asparagusSeed);
//console.log(addAsparagus);
//const usedPlants = usePlants();
//console.log(usedPlants);

//console.log("Welcome to the main module");
const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
//console.log("Plan created:", yearlyPlan);

// Plant all the seeds for the year and read back the planted seeds from the field

const plantedSeeds = usePlants();
//console.log("Planted seeds:", plantedSeeds);

const harvestedFood = harvestPlants(plantedSeeds);
Catalog(harvestedFood);
