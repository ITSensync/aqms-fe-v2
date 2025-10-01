import React from "react";

export default function WeatherTextValue({
  param = "-",
  value = "X",
  unit = "",
  icon,
}: {
  param?: string;
  value?: string;
  unit?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-zinc-900 shadow-2xl border border-neutral-800 rounded-2xl h-full gap-5 items-center justify-center">
      <span className="">{icon}</span>
      <p className=" text-lg">{param}</p>
      <div className={`flex flex-row ${param === 'Arah Angin' ? 'items-start': 'items-end'}`}>
        <p className="text-3xl font-bold">{value}</p>
        <p className="font-normal text-sm">{unit}</p>
      </div>
    </div>
  );
}
