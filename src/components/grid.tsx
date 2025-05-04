import { Animal, Rabbit, Sheep } from "@/assets/animals";
import {
  AnimalGrid,
  getEmptyAnimalGrid,
  getEmptyProbabilityGrid,
  getPossibleAnimalsGrids,
  getProbabilityGrid,
  percent,
  ProbabilityGrid,
} from "@/assets/animalUtils";
import { useEffect, useState } from "react";

const array5 = [0, 1, 2, 3, 4];

type Props = {
  animals: Array<Animal>;
};

export default function Grid({ animals }: Props) {
  const [hoveredTile, setHoveredTile] = useState<number[] | undefined>();
  const [animalGrid, setAnimalGrid] = useState<AnimalGrid>(
    getEmptyAnimalGrid(true)
  );
  const [possibleAnimalGrids, setPossibleAnimalGrids] = useState<AnimalGrid[]>(
    []
  );
  const [probabilityGrid, setProbabilityGrid] = useState<ProbabilityGrid>(
    getEmptyProbabilityGrid(0)
  );

  useEffect(() => {
    if (animals.length > 0) {
      setPossibleAnimalGrids(getPossibleAnimalsGrids(animals));
    }
  }, [animals]);

  useEffect(() => {
    const filteredGrids = possibleAnimalGrids.filter((grid) =>
      animalGrid.every((row, i) =>
        row.every((value, j) => value === undefined || grid[i][j] === value)
      )
    );

    setProbabilityGrid(getProbabilityGrid(filteredGrids, animals.length));
  }, [possibleAnimalGrids, animalGrid]);

  return (
    <div
      className="flex flex-col h-fit"
      onMouseLeave={() => setHoveredTile(undefined)}
    >
      {array5.map((_, row) => (
        <div key={`row-${row}`} className="flex flex-row">
          {array5.map((_, col) => (
            <div
              key={`col-${col}`}
              className="relative h-23 w-23 flex justify-center"
            >
              <img
                src={"/images/regions/Farm.png"}
                className="absolute -top-[2%] -left-[2%] w-[104%] h-[104%] max-w-[104%] max-h-[104%] -z-10"
              />

              {hoveredTile &&
              hoveredTile[0] === row &&
              hoveredTile[1] === col ? (
                /* Hover : select choices */
                <div className="w-full max-w-full grid grid-rows-[50%_50%] grid-cols-[50%_50%]">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={`presentAnimal-${i}`}
                      className="w-full h-full p-1 border"
                    >
                      {animals[i] ? (
                        <button
                          className="w-full h-full"
                          onClick={() => {
                            setHoveredTile(undefined);
                            setAnimalGrid((prev) => {
                              const newAnimalGrid = structuredClone(prev);
                              newAnimalGrid[row][col] = i;
                              return newAnimalGrid;
                            });
                          }}
                        >
                          {i}
                        </button>
                      ) : (
                        <div />
                      )}
                    </div>
                  ))}

                  <button
                    className="w-full h-full"
                    onClick={() => {
                      setHoveredTile(undefined);
                      setAnimalGrid((prev) => {
                        const newAnimalGrid = structuredClone(prev);
                        newAnimalGrid[row][col] = null;
                        return newAnimalGrid;
                      });
                    }}
                  >
                    X
                  </button>
                </div>
              ) : animalGrid[row][col] === null ? (
                <img className="h-fit m-auto" src={`/images/animals/X.png`} />
              ) : animalGrid[row][col] !== undefined ? (
                <img
                  className="h-fit m-auto"
                  src={`/images/animals/${
                    animals[animalGrid[row][col]].name
                  }.png`}
                />
              ) : (
                /* Percentage */
                <div className="flex flex-col h-fit gap-0.5 m-auto text-center">
                  {percent(probabilityGrid[row][col].value)}

                  <div className="flex gap-1 m-auto">
                    {animals.map((a, aIndex) => (
                      <button
                        key={`animal-percentage-${a.name}`}
                        className="flex flex-col gap-0.5 group"
                        onClick={() =>
                          setAnimalGrid((prev) => {
                            const newAnimalGrid = structuredClone(prev);
                            newAnimalGrid[row][col] = aIndex;
                            return newAnimalGrid;
                          })
                        }
                      >
                        <img
                          src={`/images/animals/${a.name}.png`}
                          className="h-6 w-6 group-hover:shadow-[0_5px_5px_#00000080]"
                        />
                        <p className="text-[0.6rem]">
                          {percent(
                            probabilityGrid[row][col].animalValues[aIndex]
                          )}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
