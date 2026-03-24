// Internal array to store planted seeds (not exported)
const plants = []

// addPlant accepts a seed object or an array (for corn) and adds each seed to plants
export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    for (const s of seed) {
      plants.push(s)
    }
  } else {
    plants.push(seed)
  }
}

// usePlants returns a copy of the plants array
export const usePlants = () => {
  return plants.slice()
}
