import { Region } from "@/assets/regions";

type Props = {
  region: Region;
  attempts: number;
};

export default function Header({ region, attempts }: Props) {
  return (
    <div
      className="relative flex justify-between items-center w-full h-10 transition-all duration-500 line-shadow shadow-sm border-b border-black/30 text-white px-4 text-lg uppercase"
      style={{ backgroundColor: region.headerColor }}
    >
      <p className="font-Pixapp">Disco Zookeeper</p>

      <p className="flex gap-1 items-center">
        <strong className="text-xl">{Math.max(attempts, 0)}</strong>
        <span className="font-Pixapp">
          attempt
          {attempts > 1 ? "s" : ""} left
        </span>
      </p>
    </div>
  );
}
