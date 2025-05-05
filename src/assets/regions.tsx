import * as A from "./animals";

export type Region = {
  name: string;
  backgroundColor: string;
  animals: Array<A.Animal>;
};

export const regions: Array<Region> = [
  {
    name: "Farm",
    backgroundColor: "#638E35",
    animals: [A.Sheep, A.Rabbit, A.Pig, A.Cow, A.Horse, A.Unicorn],
  },
  {
    name: "Outback",
    backgroundColor: "#C28F52",
    animals: [
      A.Kangaroo,
      A.Platypus,
      A.Crocodile,
      A.Koala,
      A.Cockatoo,
      A.Tiddalik,
    ],
  },
  {
    name: "Savanna",
    backgroundColor: "#A3884F",
    animals: [A.Zebra, A.Hippo, A.Giraffe, A.Lion, A.Elephant, A.Gryphon],
  },
  {
    name: "Northern",
    backgroundColor: "#59852D",
    animals: [A.Bear, A.Skunk, A.Beaver, A.Moose, A.Fox, A.Sasquatch],
  },
];
