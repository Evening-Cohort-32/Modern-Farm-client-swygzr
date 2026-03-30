//Create a scripts/field.js module. - COMPLETE
// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. ******* Do not export the array ******* - COMPLETE

const growingPlants = [];

//In the module, define and export a function named addPlant.The addPlant function must accept a seed object as input. The function will add the seed to the field - COMPLETE

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    for (const s of seed) {
      growingPlants.push(s);
    }
  } else {
    growingPlants.push(seed);
  }
};

//Define and export a function named usePlants that returns a copy of the array of plants. - COMPLETE

export const usePlants = () => {
  return structuredClone(growingPlants);
};

/*
Checking Your Logic
Write some temporary test code in the main module to check if your functions do their job correctly.

Create a seed object.
Invoke addPlant() and specify the seed object as the argument. COMPLETE
Invoke usePlants() and store its return value in a variable. COMPLETE
Use console.log() to make sure your seed object got added to the array of plants in the field. COMPLETE
 
*/
