import { Animal } from "@/assets/animals";

type Props = {
  animal: Animal;
  bgClassName?: string;
  imgClassName?: string;
  percentage?: number;
};

export default function AnimalTile({
  animal,
  bgClassName,
  imgClassName,
  percentage,
}: Props) {
  return (
    <>
      {/* Background */}
      <img
        className={`absolute left-0 w-full h-full p-[5%] z-10 ${bgClassName}`}
        src={`/images/rarities/${animal.rarity.name}.png`}
      />

      {/* Grayscaled part when percentage is given */}
      {percentage && (
        <img
          className={`absolute left-0 w-full h-full p-[5%] z-15 grayscale brightness-85`}
          src={`/images/rarities/${animal.rarity.name}.png`}
          style={{
            clipPath: `inset(0 0 ${percentage}% 0)`,
          }}
        />
      )}

      {/* Animal */}
      <img
        className={`relative w-[75%] h-[75%] m-auto z-20 ${imgClassName}`}
        src={`/images/animals/${animal.name}.png`}
      />
    </>
  );
}
