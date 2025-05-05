"use client";
import { Animal, Cow, Sheep } from "@/assets/animals";
import { regions } from "@/assets/regions";
import AnimalSelector from "@/components/animalSelector";
import Grid from "@/components/grid";
import RegionSelector from "@/components/regionSelector";
import { useState } from "react";

export default function Home() {
  const [region, setRegion] = useState(regions[0]);
  const [animals, setAnimals] = useState<Array<Animal | undefined>>([
    undefined,
    undefined,
    undefined,
  ]);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-screen h-screen -z-50 transition-all duration-500"
        style={{ backgroundColor: region.backgroundColor }}
      />

      <AnimalSelector
        region={region}
        animals={animals}
        setAnimals={setAnimals}
      />

      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <RegionSelector region={region} setRegion={setRegion} />
      </div>

      <div className="flex justify-center m-auto mt-10">
        <Grid region={region} animals={animals.filter((a) => !!a)} />
      </div>
    </main>
  );
}
