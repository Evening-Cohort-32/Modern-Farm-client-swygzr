export const harvestPlants = (plantArray) => {
  const harvested = [];

  for (const plant of plantArray) {
    let amount = plant.output;
    if (plant.type === "Corn") {
      amount = amount / 2;
    }

    for (let i = 0; i < amount; i++) {
      harvested.push({ ...plant });
    }
  }
  return harvested;
};
