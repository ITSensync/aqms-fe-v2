import React from "react";
import GaugeDiagram from "./GaugeDiagram";
import { AirQuality } from "../types/Datatypes";

export default function CenterParameterMini({
  sensorData,
}: {
  sensorData: AirQuality
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-row gap-4">
        <GaugeDiagram name="PM2.5" unit="μg/m3" value={sensorData.pm25}/>
      </div>
      <div className="flex flex-row gap-4">
        <GaugeDiagram name="SO2" unit="μg/m3" value={sensorData.so2}/>
      </div>
      <div className="flex flex-row -mt-4 gap-4">
        <GaugeDiagram name="NO2"unit="μg/m3" value={sensorData.no2}/>
      </div>
    </div>
  );
}
