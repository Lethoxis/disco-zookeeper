import * as Rarity from "./animalRarities";

type AnimalCoord = Array<number>;

export type Animal = {
  name: string;
  displayName?: string;
  rarity: Rarity.AnimalRarity;
  coords: Array<AnimalCoord>;
};

//================== Farm ==================
export const Sheep: Animal = {
  name: "Sheep",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
};

export const Rabbit: Animal = {
  name: "Rabbit",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
};

export const Pig: Animal = {
  name: "Pig",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
};

export const Cow: Animal = {
  name: "Cow",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
};

export const Horse: Animal = {
  name: "Horse",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
};

export const Unicorn: Animal = {
  name: "Unicorn",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [1, 1],
    [1, 2],
  ],
};

export const Chicken: Animal = {
  name: "Chicken",
  rarity: Rarity.Timeless,
  coords: [
    [2, 0],
    [1, 1],
    [0, 2],
  ],
};

//================== Outback ==================
export const Kangaroo: Animal = {
  name: "Kangaroo",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
  ],
};

export const Platypus: Animal = {
  name: "Platypus",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
};

export const Crocodile: Animal = {
  name: "Crocodile",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
};

export const Koala: Animal = {
  name: "Koala",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
};

export const Cockatoo: Animal = {
  name: "Cockatoo",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 1],
    [2, 1],
  ],
};

export const Tiddalik: Animal = {
  name: "Tiddalik",
  rarity: Rarity.Mythical,
  coords: [
    [1, 0],
    [0, 1],
    [1, 2],
  ],
};

export const Echidna: Animal = {
  name: "Echidna",
  rarity: Rarity.Timeless,
  coords: [
    [1, 0],
    [1, 1],
    [0, 2],
  ],
};

//================== Savanna ==================
export const Zebra: Animal = {
  name: "Zebra",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 0],
    [2, 1],
    [1, 2],
  ],
};

export const Hippo: Animal = {
  name: "Hippo",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
  ],
};

export const Giraffe: Animal = {
  name: "Giraffe",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
};

export const Lion: Animal = {
  name: "Lion",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
};

export const Elephant: Animal = {
  name: "Elephant",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [1, 0],
  ],
};

export const Gryphon: Animal = {
  name: "Gryphon",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [1, 1],
    [0, 2],
  ],
};

export const Rhinoceros: Animal = {
  name: "Rhinoceros",
  rarity: Rarity.Timeless,
  coords: [
    [0, 1],
    [1, 0],
    [2, 1],
  ],
};

//================== Northern ==================
export const Bear: Animal = {
  name: "Bear",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
};

export const Skunk: Animal = {
  name: "Skunk",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [1, 1],
    [0, 1],
    [0, 2],
  ],
};

export const Beaver: Animal = {
  name: "Beaver",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [1, 1],
    [0, 2],
    [2, 2],
  ],
};

export const Moose: Animal = {
  name: "Moose",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 1],
    [0, 2],
  ],
};

export const Fox: Animal = {
  name: "Fox",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [1, 2],
  ],
};

export const Sasquatch: Animal = {
  name: "Sasquatch",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [1, 0],
  ],
};

export const Otter: Animal = {
  name: "Otter",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
};

//================== Polar ==================
export const Penguin: Animal = {
  name: "Penguin",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 1],
    [2, 0],
    [2, 2],
  ],
};

export const Muskox: Animal = {
  name: "Muskox",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
  ],
};

export const Seal: Animal = {
  name: "Seal",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [2, 2],
    [1, 3],
  ],
};

export const PolarBear: Animal = {
  name: "Polar Bear",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 2],
    [1, 2],
  ],
};

export const Walrus: Animal = {
  name: "Walrus",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 1],
    [1, 2],
  ],
};

export const Yeti: Animal = {
  name: "Yeti",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [2, 0],
  ],
};

export const SnowyOwl: Animal = {
  name: "Snowy Owl",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
};

//================== Jungle ==================
export const Monkey: Animal = {
  name: "Monkey",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [0, 2],
    [1, 3],
  ],
};

export const Toucan: Animal = {
  name: "Toucan",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 0],
    [2, 1],
    [3, 1],
  ],
};

export const Gorilla: Animal = {
  name: "Gorilla",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [0, 2],
    [1, 2],
  ],
};

export const Panda: Animal = {
  name: "Panda",
  rarity: Rarity.Rare,
  coords: [
    [1, 0],
    [0, 2],
    [2, 2],
  ],
};

export const Tiger: Animal = {
  name: "Tiger",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 2],
    [0, 3],
  ],
};

export const Phoenix: Animal = {
  name: "Phoenix",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [2, 2],
  ],
};

export const Lemur: Animal = {
  name: "Lemur",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [1, 1],
    [2, 0],
  ],
};

//================== Jurassic ==================
export const Diplodocus: Animal = {
  name: "Diplodocus",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [1, 2],
    [2, 1],
  ],
};

export const Stegosaurus: Animal = {
  name: "Stegosaurus",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [0, 1],
    [0, 2],
    [1, 3],
  ],
};

export const Raptor: Animal = {
  name: "Raptor",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 2],
  ],
};

export const TRex: Animal = {
  name: "T-Rex",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [2, 0],
    [2, 1],
  ],
};

export const Triceratops: Animal = {
  name: "Triceratops",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 2],
    [2, 0],
  ],
};

export const Dragon: Animal = {
  name: "Dragon",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [1, 2],
  ],
};

export const Ankylosaurus: Animal = {
  name: "Ankylosaurus",
  rarity: Rarity.Timeless,
  coords: [
    [1, 0],
    [0, 2],
    [1, 2],
  ],
};

//================== Ice Age ==================
export const WoolyRhino: Animal = {
  name: "Wooly Rhino",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [2, 1],
    [0, 2],
    [1, 3],
  ],
};

export const GiantSloth: Animal = {
  name: "Giant Sloth",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [2, 0],
    [1, 2],
    [2, 2],
  ],
};

export const DireWolf: Animal = {
  name: "Dire Wolf",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [0, 1],
    [2, 1],
    [1, 3],
  ],
};

export const SaberTooth: Animal = {
  name: "Saber Tooth",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 2],
    [2, 1],
  ],
};

export const Mammoth: Animal = {
  name: "Mammoth",
  rarity: Rarity.Rare,
  coords: [
    [0, 1],
    [1, 0],
    [2, 2],
  ],
};

export const Akhlut: Animal = {
  name: "Akhlut",
  rarity: Rarity.Mythical,
  coords: [
    [1, 0],
    [0, 2],
    [2, 2],
  ],
};

export const YukonCamel: Animal = {
  name: "Yukon Camel",
  rarity: Rarity.Timeless,
  coords: [
    [1, 0],
    [0, 2],
    [2, 3],
  ],
};

//================== City ==================
export const Raccoon: Animal = {
  name: "Raccoon",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [0, 2],
    [1, 3],
  ],
};

export const Pigeon: Animal = {
  name: "Pigeon",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ],
};

export const Rat: Animal = {
  name: "Rat",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 3],
  ],
};

export const Squirrel: Animal = {
  name: "Squirrel",
  rarity: Rarity.Rare,
  coords: [
    [1, 0],
    [2, 1],
    [0, 2],
  ],
};

export const Opossum: Animal = {
  name: "Opossum",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 0],
    [1, 2],
  ],
};

export const SewerTurtle: Animal = {
  name: "Sewer Turtle",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [0, 1],
  ],
};

export const Chipmunk: Animal = {
  name: "Chipmunk",
  rarity: Rarity.Timeless,
  coords: [
    [1, 0],
    [0, 1],
    [1, 3],
  ],
};

//================== Mountain ==================
export const Goat: Animal = {
  name: "Goat",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
};

export const Cougar: Animal = {
  name: "Cougar",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [2, 2],
    [2, 0],
  ],
};

export const Elk: Animal = {
  name: "Elk",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 1],
    [0, 2],
    [1, 2],
  ],
};

export const Eagle: Animal = {
  name: "Eagle",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 0],
    [2, 1],
  ],
};

export const Coyote: Animal = {
  name: "Coyote",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [1, 2],
  ],
};

export const Aatxe: Animal = {
  name: "Aatxe",
  rarity: Rarity.Mythical,
  coords: [
    [1, 0],
    [0, 2],
  ],
};

export const Pika: Animal = {
  name: "Pika",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [0, 2],
    [1, 2],
  ],
};

//================== Nocturnal ==================
export const Badger: Animal = {
  name: "Badger",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [2, 0],
    [0, 2],
    [1, 2],
  ],
};

export const Bat: Animal = {
  name: "Bat",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 1],
  ],
};

export const Kiwi: Animal = {
  name: "Kiwi",
  rarity: Rarity.Common,
  coords: [
    [1, 0],
    [0, 1],
    [1, 2],
    [2, 2],
  ],
};

export const FlyingSquirrel: Animal = {
  name: "Flying Squirrel",
  rarity: Rarity.Rare,
  coords: [
    [1, 0],
    [0, 2],
    [1, 3],
  ],
};

export const Kakapo: Animal = {
  name: "Kakapo",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [0, 1],
    [2, 1],
  ],
};

export const Ghost: Animal = {
  name: "Ghost",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [1, 1],
  ],
};

export const Firefly: Animal = {
  name: "Firefly",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [1, 0],
    [2, 2],
  ],
};

//================== Moon ==================
export const Moonkey: Animal = {
  name: "Moonkey",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [1, 2],
    [2, 2],
  ],
};

export const LunarTick: Animal = {
  name: "Lunar Tick",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [2, 1],
    [3, 0],
    [3, 2],
  ],
};

export const Tribble: Animal = {
  name: "Tribble",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
};

export const Moonicorn: Animal = {
  name: "Moonicorn",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
};

export const LunaMoth: Animal = {
  name: "Luna Moth",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [2, 1],
    [0, 2],
  ],
};

export const JadeRabbit: Animal = {
  name: "Jade Rabbit",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [2, 1],
  ],
};

export const Babmoon: Animal = {
  name: "Babmoon",
  rarity: Rarity.Timeless,
  coords: [
    [2, 0],
    [0, 1],
    [1, 2],
  ],
};

//================== Mars ==================
export const Rock: Animal = {
  name: "Rock",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
};

export const Marsmot: Animal = {
  name: "Marsmot",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 1],
    [2, 1],
    [2, 0],
  ],
};

export const Marsmoset: Animal = {
  name: "Marsmoset",
  rarity: Rarity.Common,
  coords: [
    [0, 0],
    [0, 2],
    [1, 2],
    [2, 1],
  ],
};

export const Rover: Animal = {
  name: "Rover",
  rarity: Rarity.Rare,
  coords: [
    [1, 0],
    [0, 1],
    [1, 2],
  ],
};

export const Martian: Animal = {
  name: "Martian",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 1],
    [0, 2],
  ],
};

export const Marsmallow: Animal = {
  name: "Marsmallow",
  rarity: Rarity.Mythical,
  coords: [
    [0, 0],
    [2, 0],
  ],
};

export const Marsten: Animal = {
  name: "Marsten",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [0, 2],
    [1, 3],
  ],
};

//================== Constellation ==================
export const Chamaeleon: Animal = {
  name: "Chamaeleon",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 0],
    [1, 1],
    [0, 3],
  ],
};

export const Corvus: Animal = {
  name: "Corvus",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [0, 2],
    [2, 0],
    [2, 2],
  ],
};

export const Lynx: Animal = {
  name: "Lynx",
  rarity: Rarity.Common,
  coords: [
    [0, 1],
    [1, 1],
    [1, 0],
    [2, 0],
  ],
};

export const Pisces: Animal = {
  name: "Pisces",
  rarity: Rarity.Rare,
  coords: [
    [2, 0],
    [0, 1],
    [1, 2],
  ],
};

export const Capricornus: Animal = {
  name: "Capricornus",
  rarity: Rarity.Rare,
  coords: [
    [0, 0],
    [1, 2],
    [0, 3],
  ],
};

export const Pegasus: Animal = {
  name: "Pegasus",
  rarity: Rarity.Mythical,
  coords: [
    [2, 0],
    [0, 2],
  ],
};

export const Horologium: Animal = {
  name: "Horologium",
  rarity: Rarity.Timeless,
  coords: [
    [0, 0],
    [1, 2],
    [2, 2],
  ],
};

//================== Pets ==================
export const RabbitPet: Animal = {
  name: "RabbitPet",
  displayName: "Rabbit",
  rarity: Rarity.Pet,
  coords: [
    [0, 0],
    [1, 0],
    [2, 1],
    [1, 2],
    [0, 2],
  ],
};
export const Bird: Animal = {
  name: "Bird",
  rarity: Rarity.Pet,
  coords: [
    [0, 0],
    [1, 1],
    [0, 2],
    [1, 3],
    [0, 4],
  ],
};
export const Dog: Animal = {
  name: "Dog",
  rarity: Rarity.Pet,
  coords: [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
    [2, 1],
  ],
};
export const Cat: Animal = {
  name: "Cat",
  rarity: Rarity.Pet,
  coords: [
    [0, 0],
    [0, 1],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
};
export const Fish: Animal = {
  name: "Fish",
  rarity: Rarity.Pet,
  coords: [
    [1, 0],
    [1, 1],
    [1, 2],
    [0, 3],
    [2, 3],
  ],
};
export const Turtle: Animal = {
  name: "Turtle",
  rarity: Rarity.Pet,
  coords: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
    [2, 1],
  ],
};
export const Lizard: Animal = {
  name: "Lizard",
  rarity: Rarity.Pet,
  coords: [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
};
export const Hamster: Animal = {
  name: "Hamster",
  rarity: Rarity.Pet,
  coords: [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
  ],
};
