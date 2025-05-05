import { Radio, RadioGroup } from "@headlessui/react";
import { Region, regions } from "@/assets/regions";
import { Dispatch, SetStateAction } from "react";

type Props = {
  region: Region;
  setRegion: Dispatch<SetStateAction<Region>>;
};

export default function RegionSelector({ region, setRegion }: Props) {
  return (
    <div className="flex m-auto w-fit gap-10">
      <RadioGroup value={region} onChange={setRegion} className="space-y-2">
        {regions.map((r) => (
          <Radio
            key={r.name}
            value={r}
            className="group relative flex cursor-pointer rounded-lg bg-white/5 px-5 py-2 text-white shadow-md transition focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
          >
            <div className="flex w-full items-center justify-between">
              <div className="text-sm/6">
                <p className="font-semibold text-white">{r.name}</p>
              </div>
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
