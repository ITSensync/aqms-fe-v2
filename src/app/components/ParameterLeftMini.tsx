import React from "react";
import TextValue from "./TextValue";
import { AirQuality } from "../types/Datatypes";
import { generateWindDirection } from "../utils/windDirection";

export default function ParameterLeftMini({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col ml-3 w-1/2 gap-4 ">
        <TextValue param="Arah Angin" value={sensorData.wd} unit={generateWindDirection(Number(sensorData.wd))}/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-4">
        <TextValue param="Kec. Angin" unit="mph" value={sensorData.ws}/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-4">
        <TextValue param="Suhu" unit="°C" value={sensorData.temperature}/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-5">
        <TextValue param="Kelembapan" unit="%RH" value={sensorData.humidity}/>
      </div>
    </div>
  );
}
