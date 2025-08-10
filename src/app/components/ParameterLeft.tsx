import React from "react";
import TextValue from "./TextValue";
import { AirQuality } from "../types/Datatypes";

export default function ParameterLeft({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col ml-3 w-1/2 gap-0 ">
        <TextValue param="Arah Angin"/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-0">
        <TextValue param="Kec. Angin" unit="mph"/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-0">
        <TextValue param="Suhu" unit="°C"/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-0">
        <TextValue param="Kelembapan" unit="%RH"/>
      </div>
    </div>
  );
}
