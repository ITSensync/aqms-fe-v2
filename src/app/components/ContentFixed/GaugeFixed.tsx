"use client";
import React from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function GaugeFixed({
  value = 1000.2,
  unit = "W/m3",
  name = "Lorem",
}: {
  value?: number;
  unit?: string;
  name?: string;
}) {
  const generateColorPM10 = () => {
    switch (true) {
      case value >= 0 && value <= 50:
        return ["#85ec83"];
      case value > 50 && value <= 150:
        return ["#0070C0"];
      case value > 100 && value <= 350:
        return ["#faff77"];
      case value > 350:
        return ["#EA4228"];
      default:
        return ["#06b6d4"];
    }
  };

  const generateColorPM25 = () => {
    switch (true) {
      case value >= 0 && value <= 15.5:
        return ["#85ec83"];
      case value > 15.5 && value <= 55.4:
        return ["#0070C0"];
      case value > 55.4 && value <= 150.44:
        return ["#faff77"];
      case value > 150.44:
        return ["#EA4228"];
      default:
        return ["#06b6d4"];
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      {/* Container untuk gauge + value di tengah */}
      <div className="relative flex items-center justify-center w-full">
        <GaugeComponent
          value={Number(value)}
          className="-mb-10 w-full"
          type="radial"
          arc={{
            gradient: false,
            width: 0.05,
            colorArray:
              name === "PM10" ? generateColorPM10() : generateColorPM25(),
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
        <p className=" font-sf-pro-rounded absolute text-6xl font-extrabold text-cyan-500 pt-16">
          {value}
        </p>
      </div>

      {/* Name dan Unit tetap di bawah */}
      <div className="font-sf-pro-rounded text-cyan-500 flex flex-col items-center mt-2">
        <p className="text-4xl font-semibold">{name}</p>
        <p className="text-2xl">{unit}</p>
      </div>
    </div>
  );
}
