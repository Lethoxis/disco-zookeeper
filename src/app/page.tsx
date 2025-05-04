"use client";
import { Animal, Cow, Sheep } from "@/assets/animals";
import { regions } from "@/assets/regions";
import AnimalSelector from "@/components/animalSelector";
import Grid from "@/components/grid";
import { useState } from "react";

export default function Home() {
  const [animals, setAnimals] = useState<Array<Animal | undefined>>([
    undefined,
    undefined,
    undefined,
  ]);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <AnimalSelector
        region={regions[0]}
        animals={animals}
        setAnimals={setAnimals}
      />

      <div className="flex justify-center m-auto mt-10">
        <Grid animals={animals.filter((a) => !!a)} />
      </div>
    </main>
  );
}
