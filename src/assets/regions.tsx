import {
  Animal,
  Cow,
  Horse,
  Pig,
  Rabbit,
  Sheep,
  Unicorn,
  Bear,
  Skunk,
  Beaver,
  Moose,
  Fox,
  Sasquatch,
} from "./animals";

export type Region = {
  name: string;
  animals: Array<Animal>;
};

export const regions: Array<Region> = [
  {
    name: "Farm",
    animals: [Sheep, Rabbit, Pig, Cow, Horse, Unicorn],
  },
  {
    name: "Northern",
    animals: [Bear, Skunk, Beaver, Moose, Fox, Sasquatch],
  },
];
