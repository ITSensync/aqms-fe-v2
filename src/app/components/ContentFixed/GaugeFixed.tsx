"use client";
import React from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function GaugeFixed({
  value = "1000.20",
  unit = "W/m3",
  name = "Lorem",
}: {
  value?: string;
  unit?: string;
  name?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Container untuk gauge + value di tengah */}
      <div className="relative flex items-center justify-center w-full">
        <GaugeComponent
          value={Number(value)}
          className="-mb-10 w-full"
          type="radial"
          arc={{
            gradient: true,
            width: 0.25,
            colorArray: ["#5BE12C", "#EA4228"],
          }}
          pointer={{ hide: true }}
          labels={{
            valueLabel: {
              formatTextValue: () => "", // sembunyikan value bawaan
            },
            tickLabels: {
              hideMinMax: true,
            },
          }}
        />
        {/* Value custom ditaruh absolute di tengah */}
        <p className=" font-sf-pro-rounded absolute text-4xl font-extrabold text-cyan-500 pt-16">
          {value}
        </p>
      </div>

      {/* Name dan Unit tetap di bawah */}
      <div className="font-sf-pro-rounded text-cyan-500 flex flex-col items-center mt-2">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-xl">{unit}</p>
      </div>
    </div>
  );
}
