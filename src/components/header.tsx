import { Region } from "@/assets/regions";
import { useEffect, useState } from "react";

type Props = {
  region: Region;
};

export default function Header({ region }: Props) {
  const attempts = 10;

  return (
    <div
      className="relative flex justify-between items-center w-full h-10 transition-all duration-500 line-shadow shadow-sm border-b border-black/30 text-white px-4"
      style={{ backgroundColor: region.backgroundColor }}
    >
      {/* Whiter shade */}
      <div className="absolute top-0 left-0 bg-white/10 h-full w-full" />

      <p>Disco Zookeeper</p>

      <p>
        <strong>{attempts}</strong> attempt{attempts > 0 ? "s" : ""} left
      </p>
    </div>
  );
}
