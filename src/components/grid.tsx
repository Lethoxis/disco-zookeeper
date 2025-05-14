import { Animal } from "@/assets/animals";
import {
  AnimalGrid,
  getEmptyAnimalGrid,
  getEmptyProbabilityGrid,
  getMaxProbability,
  getPossibleAnimalsGrids,
  getProbabilityGrid,
  indexOfIdentifiedAnimal,
  isMax,
  percent,
  Probability,
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
import undo from "../app/sounds/undo.mp3";
import foundOne from "../app/sounds/foundOne.mp3";
import foundAll from "../app/sounds/foundAll.mp3";
import useSound from "use-sound";
import AnimalTile from "./animalTile";

const array5 = [0, 1, 2, 3, 4];

type GridAction = {
  row: number;
  col: number;
  animal: number | null;
};

type Props = {
  region: Region;
  animals: Array<Animal | undefined>;
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
  const [maxProbability, setMaxProbability] = useState<Probability>();
  const [actions, setActions] = useState<GridAction[]>([]);

  // Sounds
  const [playEmpty] = useSound(empty);
  const [playFoundOne] = useSound(foundOne);
  const [playFoundAll] = useSound(foundAll);
  const [playUndo] = useSound(undo);

  // Functions
  const animalNames = useMemo(
    () => animals.map((a) => a?.name ?? "").join("/"),
    [animals]
  );

  const resetGrid = () => {
    setAnimalGrid(getEmptyAnimalGrid(true));
    setAnimalCounts([0, 0, 0, 0]);
    setActions([]);

    // Reset
    if (animalNames === "//") {
      setPossibleAnimalGrids([]);
    }
    // Update possible animal grids
    else {
      setPossibleAnimalGrids(getPossibleAnimalsGrids(animals));
    }
  };

  useEffect(resetGrid, [animalNames]);

  useEffect(() => {
    const filteredGrids = possibleAnimalGrids.filter((grid) =>
      animalGrid.every((row, i) =>
        row.every((value, j) => value === undefined || grid[i][j] === value)
      )
    );

    const newProbabilityGrid = getProbabilityGrid(
      filteredGrids,
      animals.length
    );
    setProbabilityGrid(newProbabilityGrid);
    setMaxProbability(getMaxProbability(newProbabilityGrid));
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

  const setAnimal = (
    row: number,
    col: number,
    value: number | null | undefined
  ) => {
    const newAnimalGrid = structuredClone(animalGrid);
    newAnimalGrid[row][col] = value;

    if (value === undefined) {
    } else if (value === null) {
      playEmpty();
    } else if (
      animalCounts[value] ===
      (animals[value]?.coords.length ?? 0) - 1
    ) {
      playFoundAll();
    } else {
      playFoundOne();
    }

    if (value !== undefined) {
      setActions([
        ...actions,
        {
          row,
          col,
          animal: value,
        },
      ]);
    }

    setAnimalGrid(newAnimalGrid);
    updateAnimalCounts(newAnimalGrid);
  };

  const undoLastAction = () => {
    if (actions.length === 0) {
      return;
    }

    const lastAction = actions[actions.length - 1];
    const newAnimalGrid = structuredClone(animalGrid);
    newAnimalGrid[lastAction.row][lastAction.col] = undefined;

    playUndo();
    setActions(actions.splice(0, actions.length - 1));
    setAnimalGrid(newAnimalGrid);
    updateAnimalCounts(newAnimalGrid);
  };

  // Grid Tile ------------------------------------------------------------------------
  function GridTile({ row, col }: { row: number; col: number }) {
    const value = animalGrid[row][col];
    const pbty = probabilityGrid[row][col];

    // Nothing
    if (animalNames === "//" || value === null) {
      return <></>;
    }

    // Animal is selected
    if (value !== undefined) {
      const tileAnimal = animals[value];

      if (tileAnimal === undefined) {
        return <></>;
      } else {
        return <AnimalTile animal={tileAnimal} />;
      }
    }

    const identifiedAnimalIndex = indexOfIdentifiedAnimal(pbty.animalValues);

    // Animal is 100% identified
    if (identifiedAnimalIndex >= 0) {
      const identifiedTileAnimal = animals[identifiedAnimalIndex];

      if (identifiedTileAnimal === undefined) {
        return <></>;
      } else {
        return (
          <div
            className="flex w-full h-full opacity-40 cursor-pointer"
            onClick={() => setAnimal(row, col, identifiedAnimalIndex)}
          >
            <AnimalTile animal={identifiedTileAnimal} />
          </div>
        );
      }
    }

    // Display probabilities
    return (
      <div className="flex flex-col h-fit gap-0.5 m-auto text-center">
        <div className={isMax(pbty, maxProbability) ? "text-white" : ""}>
          {percent(pbty.value)}
        </div>

        {/* Set null */}
        <button
          className="absolute top-1 right-1 h-5 w-5"
          onClick={() => setAnimal(row, col, null)}
        >
          <img
            className="absolute top-0 left-0 w-full h-full z-10"
            src={`/images/ui/x.png`}
          />
          <p className="relative m-auto z-20 text-white text-[0.5rem] text-shadow-md">
            X
          </p>
        </button>

        {pbty.value > 0 && (
          <div className="flex m-auto">
            {/* Animals */}
            {animals.map(
              (a, aIndex) =>
                a &&
                pbty.animalValues[aIndex] > 0 && (
                  <button
                    key={`animal-percentage-${a.name}-${aIndex}`}
                    className="flex flex-col group"
                    onClick={() => setAnimal(row, col, aIndex)}
                  >
                    <div className="relative flex h-8 w-8">
                      <AnimalTile
                        animal={a}
                        percentage={pbty.animalValues[aIndex] * 100}
                        bgClassName={`${
                          isMax(pbty, maxProbability, aIndex)
                            ? " drop-shadow-white drop-shadow-lg/70 group-hover:drop-shadow-lg/100"
                            : "group-hover:drop-shadow-md/30"
                        }`}
                      />
                    </div>
                    <p
                      className={`font-Pixapp text-[0.7rem] ${
                        isMax(pbty, maxProbability, aIndex) ? "text-white" : ""
                      }`}
                    >
                      {percent(pbty.animalValues[aIndex])}
                    </p>
                  </button>
                )
            )}
          </div>
        )}
      </div>
    );
  }

  // Grid -----------------------------------------------------------------------------
  return (
    <div className="flex flex-col relative h-fit shadow-md">
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

              <GridTile row={row} col={col} />
            </div>
          ))}
        </div>
      ))}

      {/* Undo */}
      <div className="flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 left-full ml-10 text-sm/4">
        <button
          className="pixel-corners px-5 py-2 text-[#AAAAFF] shadow-lg transition-all duration-200 hover:not-disabled:bg-[#AAAAFF]/10 active:not-disabled:bg-[#AAAAFF]/20 disabled:opacity-60"
          style={
            {
              "--pixel-corners-color": "#AAAAFFB0",
            } as React.CSSProperties
          }
          disabled={actions.length === 0}
          onClick={undoLastAction}
        >
          Undo
        </button>
        <button
          className="pixel-corners px-5 py-2 text-white shadow-lg transition-all duration-200 hover:not-disabled:bg-white/10 active:not-disabled:bg-white/20 disabled:opacity-60"
          style={
            {
              "--pixel-corners-color": "#FFFFFFB0",
            } as React.CSSProperties
          }
          disabled={actions.length === 0}
          onClick={resetGrid}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
