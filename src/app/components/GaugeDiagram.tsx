"use client";
import React from "react";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function GaugeDiagram({
  value = "30",
  unit = "W/m3",
  name = "Lorem",
}: {
  value?: string;
  unit?: string;
  name?: string;
}) {
  return (
    <>
      <GaugeComponent
        className={`${
          process.env.AQMS_TYPE === "mini"
            ? "w-[14vw] ml-6"
            : "w-[10vw] ml-10 -mt-9"
        }`}
        type="radial"
        arc={{
          gradient: true,
          width: 0.25,
          colorArray: ["#5BE12C", "#EA4228"],
          subArcs: [
            {
              color: "#EA4228",
              // showTick: true,
            },
            {},
            {},
            // {
            //   // limit: 37,
            //   // color: "#F5CD19",
            //   // showTick: true,
            // },
            // {
            //   // limit: 58,
            //   // color: "#5BE12C",
            //   // showTick: true,
            // },
            // {
            //   // limit: 75,
            //   // color: "#F5CD19",
            //   // showTick: true,
            // },
            { color: "#EA4228" },
          ],
        }}
        pointer={{
          length: 0.65,
          color: "#001e2d",
          elastic: true,
          animationDelay: 0,
          width: 15,
        }}
        labels={{
          valueLabel: {
            formatTextValue: () => "",
            style: {
              fontSize: 24,
              fill: "#0F67B1",
              fontWeight: "bold",
              textShadow: "",
            },
          },
          tickLabels: {
            hideMinMax: true,
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value) => value,
              style: {
                fill: "#0F67B1",
                fontSize: 8,
              },
            },
            defaultTickLineConfig: {
              length: 5,
              color: "#0567B1",
            },
          },
        }}
      />
      {process.env.AQMS_TYPE === "mini" ? (
        <div className="font-sf-pro-rounded text-blue-darkest flex flex-col justify-center items-center gap-2">
          <div className="flex flex-row items-end gap-0.5">
            <p className="font-black text-5xl">{value}</p>
            <p className="text-xl">{unit}</p>
          </div>
          <p className="text-2xl font-semibold text-center">{name}</p>
        </div>
      ) : (
        <div className="font-sf-pro-rounded text-blue-darkest flex flex-col justify-center items-center ml-6 -mt-6">
          <div className="flex flex-row items-end gap-0.5">
            <p className="font-black text-md">{value}</p>
            <p className="text-xs">{unit}</p>
          </div>
          <p className="text-md font-semibold text-center">{name}</p>
        </div>
      )}
    </>
  );
}
