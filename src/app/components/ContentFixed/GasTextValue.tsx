import React from "react";

export default function TextValue({
  param,
  value = 100,
  unit,
}: {
  param: string;
  value: number;
  unit: string;
}) {
  return (
    <div className="flex flex-col font-sf-pro-rounded items-center justify-center border border-neutral-800 gap-2 p-5 rounded-xl w-full">
      <p className="font-bold text-2xl">{param}</p>
      <p className="font-extrabold text-6xl">{value}</p>
      <p className="font-bold text-lg">{unit}</p>
    </div>
  );
}
