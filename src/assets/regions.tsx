import * as A from "./animals";

export type Region = {
  name: string;
  backgroundColor: string;
  headerColor: string;
  animals: Array<A.Animal>;
};

export const regions: Array<Region> = [
  {
    name: "Farm",
    backgroundColor: "#638E35",
    headerColor: "#76B822",
    animals: [A.Sheep, A.Rabbit, A.Pig, A.Cow, A.Horse, A.Unicorn, A.Chicken],
  },
  {
    name: "Outback",
    backgroundColor: "#C28F52",
    headerColor: "#D29065",
    animals: [
      A.Kangaroo,
      A.Platypus,
      A.Crocodile,
      A.Koala,
      A.Cockatoo,
      A.Tiddalik,
      A.Echidna,
    ],
  },
  {
    name: "Savanna",
    backgroundColor: "#A3884F",
    headerColor: "#D9AC45",
    animals: [
      A.Zebra,
      A.Hippo,
      A.Giraffe,
      A.Lion,
      A.Elephant,
      A.Gryphon,
      A.Rhinoceros,
    ],
  },
  {
    name: "Northern",
    backgroundColor: "#59852D",
    headerColor: "#68974D",
    animals: [A.Bear, A.Skunk, A.Beaver, A.Moose, A.Fox, A.Sasquatch, A.Otter],
  },
  {
    name: "Polar",
    backgroundColor: "#8FC6CB",
    headerColor: "#83C0C0",
    animals: [
      A.Penguin,
      A.Muskox,
      A.Seal,
      A.PolarBear,
      A.Walrus,
      A.Yeti,
      A.SnowyOwl,
    ],
  },
  {
    name: "Jungle",
    backgroundColor: "#1E4F11",
    headerColor: "#459250",
    animals: [
      A.Monkey,
      A.Toucan,
      A.Gorilla,
      A.Panda,
      A.Tiger,
      A.Phoenix,
      A.Lemur,
    ],
  },
  {
    name: "Jurassic",
    backgroundColor: "#321104",
    headerColor: "#874E37",
    animals: [
      A.Diplodocus,
      A.Stegosaurus,
      A.Raptor,
      A.TRex,
      A.Triceratops,
      A.Dragon,
      A.Ankylosaurus,
    ],
  },
  {
    name: "Ice Age",
    backgroundColor: "#91A19B",
    headerColor: "#A3BBB0",
    animals: [
      A.WoolyRhino,
      A.GiantSloth,
      A.DireWolf,
      A.SaberTooth,
      A.Mammoth,
      A.Akhlut,
      A.YukonCamel,
    ],
  },
  {
    name: "City",
    backgroundColor: "#505253",
    headerColor: "#6E7072",
    animals: [
      A.Raccoon,
      A.Pigeon,
      A.Rat,
      A.Squirrel,
      A.Opossum,
      A.SewerTurtle,
      A.Chipmunk,
    ],
  },
  {
    name: "Mountain",
    backgroundColor: "#6B7D7B",
    headerColor: "#84998F",
    animals: [A.Goat, A.Cougar, A.Elk, A.Eagle, A.Coyote, A.Aatxe, A.Pika],
  },
  {
    name: "Nocturnal",
    backgroundColor: "#5C7576",
    headerColor: "#5C7576",
    animals: [
      A.Badger,
      A.Bat,
      A.Kiwi,
      A.FlyingSquirrel,
      A.Kakapo,
      A.Ghost,
      A.Firefly,
    ],
  },
  {
    name: "Moon",
    backgroundColor: "#64605E",
    headerColor: "#7D7573",
    animals: [
      A.Moonkey,
      A.LunarTick,
      A.Tribble,
      A.Moonicorn,
      A.LunaMoth,
      A.JadeRabbit,
      A.Babmoon,
    ],
  },
  {
    name: "Mars",
    backgroundColor: "#9F6659",
    headerColor: "#D47E6D",
    animals: [
      A.Marsmot,
      A.Marsmoset,
      A.Rock,
      A.Rover,
      A.Martian,
      A.Marsmallow,
      A.Marsten,
    ],
  },
  {
    name: "Constellation",
    backgroundColor: "#112338",
    headerColor: "#4E5E6B",
    animals: [
      A.Chamaeleon,
      A.Corvus,
      A.Lynx,
      A.Pisces,
      A.Capricornus,
      A.Pegasus,
      A.Horologium,
    ],
  },
];

export const pets: Array<A.Animal> = [
  A.RabbitPet,
  A.Bird,
  A.Dog,
  A.Cat,
  A.Fish,
  A.Turtle,
  A.Lizard,
  A.Hamster,
];
