import { Animal } from "./animals";

export type AnimalGrid = Array<Array<number | undefined | null>>;
export const getEmptyAnimalGrid = (fillWithUndefined?: boolean): AnimalGrid => [
  Array(5).fill(fillWithUndefined ? undefined : null),
  Array(5).fill(fillWithUndefined ? undefined : null),
  Array(5).fill(fillWithUndefined ? undefined : null),
  Array(5).fill(fillWithUndefined ? undefined : null),
  Array(5).fill(fillWithUndefined ? undefined : null),
];

export type Probability = {
  value: number;
  animalValues: Array<number>;
};
export type ProbabilityGrid = Array<Array<Probability>>;
export const getEmptyProbabilityGrid = (
  animalCount: number
): ProbabilityGrid => [
  Array(5).fill({ value: 0, animalValues: Array(animalCount).fill(0) }),
  Array(5).fill({ value: 0, animalValues: Array(animalCount).fill(0) }),
  Array(5).fill({ value: 0, animalValues: Array(animalCount).fill(0) }),
  Array(5).fill({ value: 0, animalValues: Array(animalCount).fill(0) }),
  Array(5).fill({ value: 0, animalValues: Array(animalCount).fill(0) }),
];

export const getPossibleAnimalGrids = (
  animal: Animal,
  value: number,
  startingGrid?: AnimalGrid
): Array<AnimalGrid> => {
  const animalGrids: Array<AnimalGrid> = [];

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      let isGridValid = true;

      for (let coord of animal.coords) {
        if (row + coord[0] >= 5 || col + coord[1] >= 5) {
          isGridValid = false;
        } else if (
          startingGrid &&
          startingGrid[row + coord[0]][col + coord[1]] !== null
        ) {
          isGridValid = false;
        }
      }

      if (isGridValid) {
        const animalGrid = startingGrid
          ? structuredClone(startingGrid)
          : getEmptyAnimalGrid();

        for (let coord of animal.coords) {
          animalGrid[row + coord[0]][col + coord[1]] = value;
        }

        animalGrids.push(animalGrid);
      }
    }
  }

  return animalGrids;
};

export const getPossibleAnimalsGrids = (
  animals: Array<Animal | undefined>
): Array<AnimalGrid> => {
  let animalGrids: Array<AnimalGrid> = [];
  let firstNonUndefinedIndex = 0;

  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    console.log(animal, i);
    if (animal === undefined) {
      firstNonUndefinedIndex++;
    } else if (i === firstNonUndefinedIndex) {
      animalGrids = getPossibleAnimalGrids(animal, i);
    } else {
      const expandedAnimalGrids: Array<AnimalGrid> = [];
      for (let grid of animalGrids) {
        expandedAnimalGrids.push(...getPossibleAnimalGrids(animal, i, grid));
      }
      animalGrids = [...expandedAnimalGrids];
    }
  }

  return animalGrids;
};

export const getProbabilityGrid = (
  grids: Array<AnimalGrid>,
  animalCount: number
): ProbabilityGrid => {
  const L = grids.length;

  return grids.reduce(
    (acc, curr) =>
      acc.map((row, i) =>
        row.map((item, j) => {
          return {
            value: item.value + (curr[i][j] !== null ? 1 / L : 0),
            animalValues: item.animalValues.map(
              (av, animalIndex) =>
                (av ?? 0) + (curr[i][j] === animalIndex ? 1 / L : 0)
            ),
          };
        })
      ),
    getEmptyProbabilityGrid(animalCount)
  );
};

export const percent = (value: number) =>
  `${value ? Math.round(value * 100) : 0}%`;

export const indexOfIdentifiedAnimal = (probabilities: number[]) =>
  probabilities.map(percent).indexOf("100%");
