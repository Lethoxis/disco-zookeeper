import { Radio, RadioGroup } from "@headlessui/react";
import { Region, regions } from "@/assets/regions";
import { Dispatch, SetStateAction } from "react";

type Props = {
  region: Region;
  setRegion: Dispatch<SetStateAction<Region>>;
};

export default function RegionSelector({ region, setRegion }: Props) {
  return (
    <RadioGroup
      value={region}
      onChange={setRegion}
      className="flex flex-col m-auto w-fit h-fit gap-1"
    >
      {regions.map((r) => {
        const style = {
          "--pixel-corners-color": r.backgroundColor,
        } as React.CSSProperties;
        return (
          <div
            key={r.name}
            style={style}
            className={`relative pixel-corners after:brightness-50 transition-all duration-400 hover:translate-x-4 ease-out ${
              region.name === r.name ? "my-4 hover:!translate-x-0" : ""
            }`}
          >
            <Radio
              value={r}
              className="relative flex cursor-pointer px-5 py-2 text-white shadow-lg active:opacity-70 line-shadow-50"
              style={{
                backgroundColor: r.backgroundColor,
              }}
            >
              <p className="text-xs/4 text-white z-20">{r.name}</p>
            </Radio>
          </div>
        );
      })}
    </RadioGroup>
  );
}
