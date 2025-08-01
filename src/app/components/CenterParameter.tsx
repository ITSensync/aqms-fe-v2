"use client";
import React from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function CenterParameter() {
  return (
    <div className="w-1/2">
      <GaugeComponent
        className="w-[16vw] -mt-10"
        // type="radial"
        arc={{ width: 0.2 }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => value + " W/m3",
            style: {
              fontSize: 24,
              fill: "#0F67B1",
              fontWeight: "bold",
              textShadow: "",
            },
          },
          tickLabels: {
            type: 'outer',
            defaultTickValueConfig: {
              formatTextValue: (value) => value,
              style: {
                fill: "#0F67B1",
                fontSize: 8,
              }
            },
            defaultTickLineConfig: {
              length: 5,
              color: "#0567B1"
            }
          }
        }}
      />
      <p className="font-sf-pro text-blue-darkest font-bold text-center ml-10 -mt-2">Solar Radiasi</p>
    </div>
  );
}
