"use client";
import { Animal } from "@/assets/animals";
import { regions } from "@/assets/regions";
import AnimalSelector from "@/components/animalSelector";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Header from "@/components/header";
import RegionSelector from "@/components/regionSelector";
import { useEffect, useMemo, useState } from "react";
import end from "../app/sounds/end.mp3";
import useSound from "use-sound";

export default function Home() {
  const [region, setRegion] = useState(regions[0]);
  const [animals, setAnimals] = useState<Array<Animal | undefined>>([
    undefined,
    undefined,
    undefined,
  ]);
  const [animalCounts, setAnimalCounts] = useState([0, 0, 0, 0]);

  const [playEnd] = useSound(end);

  const attempts = useMemo(
    () => 10 - animalCounts.reduce((a, b) => a + b),
    [animalCounts]
  );
  useEffect(() => {
    if (
      attempts === 0 &&
      !animals.every(
        (a, i) => a === undefined || a.coords.length === animalCounts[i]
      )
    ) {
      playEnd();
    }
  }, [attempts]);

  return (
    <main className="flex flex-col relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-screen h-screen -z-50 transition-all duration-500"
        style={{ backgroundColor: region.backgroundColor }}
      />

      <Header region={region} attempts={attempts} />

      <AnimalSelector
        region={region}
        animals={animals}
        setAnimals={setAnimals}
        animalCounts={animalCounts}
      />

      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <RegionSelector region={region} setRegion={setRegion} />
      </div>

      <div className="flex justify-center m-auto">
        <Grid
          region={region}
          animals={animals}
          animalCounts={animalCounts}
          setAnimalCounts={setAnimalCounts}
        />
      </div>

      <Footer />
    </main>
  );
}
