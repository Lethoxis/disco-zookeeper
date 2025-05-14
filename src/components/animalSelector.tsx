import { pets, Region } from "@/assets/regions";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Animal } from "@/assets/animals";
import validate from "../app/sounds/validate.mp3";
import useSound from "use-sound";
import AnimalTile from "./animalTile";

type Props = {
  region: Region;
  animals: (Animal | undefined)[];
  setAnimals: Dispatch<SetStateAction<(Animal | undefined)[]>>;
  animalCounts: Array<number>;
};

const POP_DELAY = 25; // ms

export default function AnimalSelector({
  region,
  animals,
  setAnimals,
  animalCounts,
}: Props) {
  const [open, setOpen] = useState<number | undefined>();
  const [showPets, setShowPets] = useState(false);
  const [playValidate] = useSound(validate);

  useEffect(() => {
    setAnimals([undefined, undefined, undefined]);
  }, [region]);

  const animalSelectorButton = (
    animal: Animal,
    aIndex: number,
    selectorIndex: number,
    show: boolean
  ) => (
    <button
      key={`regionAnimal-${animal.name}`}
      className={`flex h-full w-full transition-all duration-300 disabled:grayscale ${
        show && open === selectorIndex
          ? "opacity-100 scale-100"
          : "opacity-0 scale-70"
      }`}
      disabled={animals.map((a) => a?.name).includes(animal.name)}
      style={{
        transitionDelay: `${POP_DELAY * aIndex}ms`,
      }}
      onClick={() => {
        !animals.map((a) => a?.name).includes(animal.name) &&
          setAnimals((prev) => {
            const newAnimals = [...prev];
            newAnimals[selectorIndex] = animal;
            return newAnimals;
          });
        setOpen(undefined);
      }}
    >
      <AnimalTile animal={animal} bgClassName="!p-0" />
    </button>
  );

  return (
    <div className="flex mx-auto w-fit gap-10 relative">
      {[0, 1, 2].map((selectorIndex) => (
        <div
          key={`animalSelector-${selectorIndex}`}
          className="relative h-34 w-34 inline-block"
          onMouseEnter={() => setOpen(selectorIndex)}
          onMouseLeave={() => {
            setOpen(undefined);
            setShowPets(false);
          }}
        >
          <div
            className="relative inline-flex flex-col w-full h-full justify-center items-center text-center text-white text-sm font-semibold"
            onMouseEnter={() => setOpen(selectorIndex)}
          >
            <img
              className="absolute w-full h-full top-0 left-0 -z-10 shadow-md"
              src={`/images/regions/${region.name}Selector.png`}
            />

            {animals[selectorIndex]?.name ? (
              <>
                {/* Image and name */}
                <img
                  className={`flex-1 ${
                    animalCounts[selectorIndex] ===
                    animals[selectorIndex].coords.length
                      ? "wobble"
                      : ""
                  }`}
                  src={`/images/animals/${animals[selectorIndex].name}.png`}
                />

                <p className="flex flex-col font-Pixapp uppercase text-white font-thin tracking-wider leading-3 mb-5">
                  <span>
                    {animals[selectorIndex].displayName ??
                      animals[selectorIndex].name}
                  </span>
                  <span
                    className="text-xs leading-3"
                    style={{ color: animals[selectorIndex].rarity.color }}
                  >
                    {animals[selectorIndex].rarity.name}
                  </span>
                </p>

                {/* Completion dots */}
                <div className="flex gap-1 absolute bottom-1 translate-y-1/2 w-full justify-center">
                  {new Array(animals[selectorIndex].coords.length)
                    .fill(0)
                    .map((_, dotIndex) => (
                      <div
                        key={`dot-${animals[selectorIndex]?.name}-${dotIndex}`}
                        className="relative h-5 w-4.38"
                      >
                        <img
                          className="w-full h-full"
                          src="/images/ui/selectorDot.png"
                        />

                        {dotIndex < animalCounts[selectorIndex] && (
                          <div
                            className="absolute h-[7px] w-[7px] top-[5.4px] left-[5.4px]"
                            style={{
                              backgroundColor:
                                animals[selectorIndex]?.rarity.color,
                            }}
                          />
                        )}
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <p className="flex flex-col uppercase text-white font-thin">
                <span>Select</span>
                <span className="font-Pixapp text-sm leading-3">an animal</span>
              </p>
            )}
          </div>

          {/* Select */}
          <div className="absolute grid grid-cols-3 grid-rows-3 gap-0.5 top-0 left-0 z-50 h-full w-full p-2 py-3 pt-1">
            {/* Region animals */}
            {region.animals.map((animal, aIndex) =>
              animalSelectorButton(animal, aIndex, selectorIndex, !showPets)
            )}

            {/* Select a pet */}
            <button
              key={`regionAnimal-choosePet`}
              className={`flex h-full w-full transition-all duration-300 ${
                !showPets && open === selectorIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-70"
              }`}
              style={{
                transitionDelay: `${POP_DELAY * 7}ms`,
              }}
              onClick={() => setShowPets(true)}
            >
              <img
                className="absolute top-0 left-0 w-full h-full z-10"
                src="/images/rarities/Pet.png"
              />
              <p className="relative m-auto z-20 text-lg text-[#321E35]">?</p>
            </button>

            {/* Select null */}
            <button
              key={`regionAnimal-null`}
              className={`flex h-full w-full transition-all duration-300 disabled:grayscale ${
                !showPets && open === selectorIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-70"
              }`}
              disabled={animals[selectorIndex] === undefined}
              style={{
                transitionDelay: `${POP_DELAY * 8}ms`,
              }}
              onClick={() => {
                if (animals[selectorIndex] !== undefined) {
                  setAnimals((prev) => {
                    const newAnimals = [...prev];
                    newAnimals[selectorIndex] = undefined;
                    return newAnimals;
                  });
                }
                setOpen(undefined);
              }}
            >
              <img
                className="absolute top-0 left-0 w-full h-full z-10"
                src={`/images/ui/x.png`}
              />
              <p className="relative m-auto z-20 text-white text-shadow-md">
                X
              </p>
            </button>
          </div>

          {/* Pets */}
          <div
            className={`absolute grid grid-cols-3 grid-rows-3 gap-0.5 top-0 left-0 z-50 h-full w-full p-2 py-3 pt-1 ${
              !showPets && "pointer-events-none"
            }`}
          >
            {pets.map((pet, pIndex) =>
              animalSelectorButton(pet, pIndex, selectorIndex, showPets)
            )}

            {/* Back */}
            <button
              key={`regionAnimal-backFromPet`}
              className={`flex h-full w-full transition-all duration-300 ${
                showPets && open === selectorIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-70"
              }`}
              style={{
                transitionDelay: `${POP_DELAY * 8}ms`,
              }}
              onClick={() => setShowPets(false)}
            >
              <img
                className="absolute top-0 left-0 w-full h-full z-10"
                src="/images/ui/back.png"
              />
              <p className="relative m-auto z-20 text-white text-shadow-md">
                {"<"}
              </p>
            </button>
          </div>
        </div>
      ))}

      {/* Reset button */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full">
        <button
          className="pixel-corners px-5 py-2 text-white shadow-lg ml-10 transition-all duration-200 hover:not-disabled:bg-white/10 active:not-disabled:bg-white/20 text-sm/4 disabled:opacity-60"
          style={
            {
              "--pixel-corners-color": "#FFFFFFB0",
            } as React.CSSProperties
          }
          disabled={animals.every((a) => a === undefined)}
          onClick={() => {
            setAnimals([undefined, undefined, undefined]);
            playValidate();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
