import { Animal } from "@/assets/animals";
import {
  AnimalGrid,
  getEmptyAnimalGrid,
  getEmptyProbabilityGrid,
  getPossibleAnimalsGrids,
  getProbabilityGrid,
  indexOfIdentifiedAnimal,
  percent,
  ProbabilityGrid,
} from "@/assets/animalUtils";
import { Region } from "@/assets/regions";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import empty from "../app/sounds/empty.mp3";
import foundOne from "../app/sounds/foundOne.mp3";
import foundAll from "../app/sounds/foundAll.mp3";
import useSound from "use-sound";

const array5 = [0, 1, 2, 3, 4];

type Props = {
  region: Region;
  animals: Array<Animal>;
  animalCounts: number[];
  setAnimalCounts: Dispatch<SetStateAction<number[]>>;
};

export default function Grid({
  region,
  animals,
  animalCounts,
  setAnimalCounts,
}: Props) {
  const [animalGrid, setAnimalGrid] = useState<AnimalGrid>(
    getEmptyAnimalGrid(true)
  );
  const [possibleAnimalGrids, setPossibleAnimalGrids] = useState<AnimalGrid[]>(
    []
  );
  const [probabilityGrid, setProbabilityGrid] = useState<ProbabilityGrid>(
    getEmptyProbabilityGrid(0)
  );

  // Sounds
  const [playEmpty] = useSound(empty);
  const [playFoundOne] = useSound(foundOne);
  const [playFoundAll] = useSound(foundAll);

  // Functions
  const animalNames = useMemo(
    () => animals.map((a) => a.name).join(","),
    [animals]
  );
  useEffect(() => {
    if (animals.length > 0) {
      setAnimalGrid(getEmptyAnimalGrid(true));
      setAnimalCounts([0, 0, 0, 0]);
      setPossibleAnimalGrids(getPossibleAnimalsGrids(animals));
    }
  }, [animalNames]);

  useEffect(() => {
    if (animals.length === 0) {
      setAnimalGrid(getEmptyAnimalGrid(true));
      setAnimalCounts([0, 0, 0, 0]);
      setPossibleAnimalGrids([]);
    }
  }, [animals.length]);

  useEffect(() => {
    const filteredGrids = possibleAnimalGrids.filter((grid) =>
      animalGrid.every((row, i) =>
        row.every((value, j) => value === undefined || grid[i][j] === value)
      )
    );

    setProbabilityGrid(getProbabilityGrid(filteredGrids, animals.length));
  }, [possibleAnimalGrids, animalGrid]);

  const updateAnimalCounts = useCallback(
    (grid: AnimalGrid) => {
      const animalCounts = [0, 0, 0, 0];

      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          const value = grid[row][col];
          if (value === null) {
            animalCounts[3]++;
          } else if (value !== undefined) {
            animalCounts[value]++;
          }
        }
      }

      setAnimalCounts(animalCounts);
    },
    [setAnimalCounts]
  );

  const setAnimal = (row: number, col: number, value: number | null) => {
    const newAnimalGrid = structuredClone(animalGrid);
    newAnimalGrid[row][col] = value;

    if (value === null) {
      playEmpty();
    } else if (animalCounts[value] === animals[value].coords.length - 1) {
      playFoundAll();
    } else {
      playFoundOne();
    }

    setAnimalGrid(newAnimalGrid);
    updateAnimalCounts(newAnimalGrid);
  };

  return (
    <div className="flex flex-col h-fit shadow-md">
      {array5.map((_, row) => (
        <div key={`row-${row}`} className="flex flex-row">
          {array5.map((_, col) => (
            <div
              key={`col-${col}`}
              className="relative h-26 w-26 flex justify-center"
            >
              <img
                src={`/images/regions/${region.name}${
                  animalGrid[row][col] === undefined ? "" : "Empty"
                }.png`}
                className="absolute -top-[2%] -left-[2%] w-[104%] h-[104%] max-w-[104%] max-h-[104%] -z-10"
              />

              {!animals.length || animalGrid[row][col] === null ? (
                <></>
              ) : animalGrid[row][col] !== undefined ? (
                <>
                  <img
                    className="absolute top-[1px] left-0 w-full h-full p-[5%] z-10"
                    src={`/images/rarities/${
                      animals[animalGrid[row][col]].rarity.name
                    }.png`}
                  />
                  <img
                    className="w-[75%] h-[75%] m-auto z-20"
                    src={`/images/animals/${
                      animals[animalGrid[row][col]].name
                    }.png`}
                  />
                </>
              ) : /* Percentage */
              indexOfIdentifiedAnimal(probabilityGrid[row][col].animalValues) >=
                0 ? (
                <div
                  className="flex w-full h-full opacity-40 cursor-pointer"
                  onClick={() =>
                    setAnimal(
                      row,
                      col,
                      indexOfIdentifiedAnimal(
                        probabilityGrid[row][col].animalValues
                      )
                    )
                  }
                >
                  <img
                    className="absolute top-[1px] left-0 w-full h-full p-[5%] z-10"
                    src={`/images/rarities/${
                      animals[
                        indexOfIdentifiedAnimal(
                          probabilityGrid[row][col].animalValues
                        )
                      ].rarity.name
                    }.png`}
                  />
                  <img
                    className="relative w-[75%] h-[75%] m-auto z-20"
                    src={`/images/animals/${
                      animals[
                        indexOfIdentifiedAnimal(
                          probabilityGrid[row][col].animalValues
                        )
                      ].name
                    }.png`}
                  />
                </div>
              ) : (
                <div className="flex flex-col h-fit gap-0.5 m-auto text-center">
                  <div onClick={() => setAnimal(row, col, null)}>
                    {percent(probabilityGrid[row][col].value)}
                  </div>
                  {probabilityGrid[row][col].value > 0 && (
                    <div className="flex gap-1 m-auto">
                      {animals.map(
                        (a, aIndex) =>
                          probabilityGrid[row][col].animalValues[aIndex] >
                            0 && (
                            <button
                              key={`animal-percentage-${a.name}-${aIndex}`}
                              className="flex flex-col gap-0.5 group"
                              onClick={() => setAnimal(row, col, aIndex)}
                            >
                              <img
                                src={`/images/animals/${a.name}.png`}
                                className="h-7 w-7 group-hover:shadow-[0_2px_3px_#00000080]"
                              />
                              <p className="text-[0.65rem]">
                                {percent(
                                  probabilityGrid[row][col].animalValues[aIndex]
                                )}
                              </p>
                            </button>
                          )
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
