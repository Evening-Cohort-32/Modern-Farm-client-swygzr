//Create a scripts/field.js module. COMPLETE
// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. ******* Do not export the array *******

const growingPlants = [];

//In the module, define and export a function named addPlant.The addPlant function must accept a seed object as input. The function will add the seed to the field (

export const addPlant = (seeds) => {
  for (const seed of seeds) {
    growingPlants.push(seed);
  }
  return growingPlants;
};

//Define and export a function named usePlants that returns a copy of the array of plants.

export const usePlants = () => {
  return structuredClone(growingPlants);
};

/*
Checking Your Logic
Write some temporary test code in the main module to check if your functions do their job correctly.

Create a seed object.
Invoke addPlant() and specify the seed object as the argument.
Invoke usePlants() and store its return value in a variable.
Use console.log() to make sure your seed object got added to the array of plants in the field.
 
*/
