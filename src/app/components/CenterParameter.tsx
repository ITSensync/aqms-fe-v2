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
    <div className="flex flex-col justify-center h-full w-full">
      <div className="flex flex-row ">
        <div className="w-1/2">
          <GaugeDiagram name="PM10" unit="μg/m3" value={sensorData.pm10}/>
        </div>
        <div className="w-1/2">
          <GaugeDiagram name="PM25" unit="μg/m3" value={sensorData.pm25}/>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <GaugeDiagram name="HC" unit="μg/m3" value={sensorData.hc}/>
        </div>
        <div className="w-1/2">
          <GaugeDiagram name="SO2" unit="μg/m3" value={sensorData.so2}/>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <GaugeDiagram name="CO" unit="μg/m3" value={sensorData.co}/>
        </div>
        <div className="w-1/2">
          <GaugeDiagram name="O3" unit="μg/m3" value={sensorData.o3}/>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-1/2">
          <GaugeDiagram name="NO2" unit="μg/m3" value={sensorData.no2}/>
        </div>
      </div>
    </div>
  );
}
