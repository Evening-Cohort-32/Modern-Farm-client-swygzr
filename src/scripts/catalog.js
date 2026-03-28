import { harvestPlants } from "./harvester.js";

export const Catalog = (harvestPlants) => {
  const content = document.querySelector("main"); //looks for main

  harvestPlants.forEach((food) => {
    //loops through every food object in the array
    content.innerHTML += ` <section class="plant>${food.type}</section>`; //for every plant it adds a html to the main section
  });
};
