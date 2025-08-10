"use client";
import React from "react";
import GaugeDiagram from "./GaugeDiagram";
import { AirQuality } from "../types/Datatypes";

export default function CenterParameter({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-row">
        <div className="w-1/2 -ml-1">
          <GaugeDiagram />
        </div>
        <div className="w-1/2 -ml-6">
          <GaugeDiagram />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 -ml-1">
          <GaugeDiagram />
        </div>
        <div className="w-1/2 -ml-6">
          <GaugeDiagram />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 -ml-1">
          <GaugeDiagram />
        </div>
        <div className="w-1/2 -ml-6">
          <GaugeDiagram />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 -ml-1">
          <GaugeDiagram />
        </div>
        <div className="w-1/2 -ml-6">
          <GaugeDiagram />
        </div>
      </div>
    </div>
  );
}
