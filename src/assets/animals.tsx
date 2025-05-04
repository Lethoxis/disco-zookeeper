type AnimalCoord = Array<number>;

export type Animal = {
  name: string;
  coords: Array<AnimalCoord>;
};

export const Sheep = {
  name: "Sheep",
  coords: [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
};

export const Rabbit = {
  name: "Rabbit",
  coords: [
    [1, 0],
    [2, 0],
    [3, 0],
  ],
};

export const Pig = {
  name: "Pig",
  coords: [
    [1, 0],
    [0, 1],
    [1, 1],
  ],
};

export const Cow = {
  name: "Cow",
  coords: [
    [0, 1],
    [0, 2],
  ],
};

export const Horse = {
  name: "Horse",
  coords: [
    [1, 0],
    [2, 0],
  ],
};

export const Unicorn = {
  name: "Unicorn",
  coords: [
    [1, 1],
    [1, 2],
  ],
};

export const Bear = {
  name: "Bear",
  coords: [
    [0, 1],
    [1, 1],
    [1, 2],
  ],
};

export const Skunk = {
  name: "Skunk",
  coords: [
    [0, 1],
    [-1, 1],
    [-1, 2],
  ],
};

export const Beaver = {
  name: "Beaver",
  coords: [
    [0, 1],
    [-1, 2],
    [1, 2],
  ],
};

export const Moose = {
  name: "Moose",
  coords: [
    [1, 1],
    [0, 2],
  ],
};

export const Fox = {
  name: "Fox",
  coords: [
    [0, 1],
    [1, 2],
  ],
};

export const Sasquatch = {
  name: "Sasquatch",
  coords: [[1, 0]],
};
