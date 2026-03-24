const growingPlants = []

export const addPlant = (seeds) => {
    for (const seed of seeds) {
        growingPlants += seed;
    }
    return growingPlants;

}

export const usePlants = () => {
    return structuredClone(growingPlants);
};