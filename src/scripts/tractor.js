import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { createAsparagus } from "./seeds/asparagus.js";

import { addPlant } from "./field.js";

export const plantSeeds = (plan) => {
  for (const row of plan) {
    for (const seedType of row) {
      let seed = null;
      switch (seedType) {
        case "Asparagus":
          seed = createAsparagus();
          break;
        case "Corn":
          seed = createCorn();
          break;
        case "Potato":
          seed = createPotato();
          break;
        case "Wheat":
          seed = createWheat();
          break;
        case "Sunflower":
          seed = createSunflower();
          break;
        case "Soybean":
          seed = createSoybean();
          break;
        default:
          break;
      }

      if (seed !== null) {
        addPlant(seed);
      }
    }
  }
};
