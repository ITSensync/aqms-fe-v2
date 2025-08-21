import React from "react";
import TextValue from "./TextValue";
import { AirQuality } from "../types/Datatypes";

export default function ParameterRight({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col justify-end items-end gap-16">
      {/* PM10 */}
      <div className="flex flex-col mr-3 w-1/2 gap-0 ">
        <TextValue side="right" param="Curah Hujan" unit="mm/jam" value={sensorData.rain_intensity}/>
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-0">
        <TextValue side="right" param="Tekanan" unit="mBar" value={sensorData.pressure}/>
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-0">
        <TextValue side="right" param="Solar Radiasi" unit="w/m2" value={sensorData.sr}/>
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-0">
        <TextValue side="right" />
      </div>
    </div>
  );
}
