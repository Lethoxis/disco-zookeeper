import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Region } from "@/assets/regions";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Animal } from "@/assets/animals";

type Props = {
  region: Region;
  animals: (Animal | undefined)[];
  setAnimals: Dispatch<SetStateAction<(Animal | undefined)[]>>;
};

export default function AnimalSelector({ region, animals, setAnimals }: Props) {
  const [open, setOpen] = useState<number | undefined>();

  return (
    <div className="flex m-auto w-fit gap-10 mt-10">
      {[0, 1, 2].map((animalIndex) => (
        <Menu
          as="div"
          key={`animalSelector-${animalIndex}`}
          className="relative h-30 w-30 border inline-block text-left"
        >
          {() => (
            <>
              <MenuButton
                className="inline-flex w-full h-full justify-center text-center py-2 text-sm font-semibold"
                onMouseEnter={() => setOpen(animalIndex)}
              >
                {animals[animalIndex]?.name ? (
                  <img
                    src={`/images/animals/${animals[animalIndex].name}.png`}
                  />
                ) : (
                  "Select"
                )}
              </MenuButton>

              {open === animalIndex && (
                <MenuItems
                  static
                  anchor="bottom"
                  className="absolute right-0 z-50 w-fit bg-white origin-top-right shadow-lg ring-1 ring-black/5"
                  onMouseLeave={() => setOpen(undefined)}
                >
                  <div className="flex flex-col">
                    {region.animals.map((animal) => (
                      <MenuItem
                        key={`regionAnimal-${animal.name}`}
                        as="button"
                        className="text-left hover:cursor-pointer"
                        onClick={() => {
                          setAnimals((prev) => {
                            const newAnimals = [...prev];
                            newAnimals[animalIndex] = animal;
                            return newAnimals;
                          });
                          setOpen(undefined);
                        }}
                      >
                        <img src={`/images/animals/${animal.name}.png`} />
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              )}
            </>
          )}
        </Menu>
      ))}
    </div>
  );
}
