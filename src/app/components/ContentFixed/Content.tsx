import React from "react";
import TopParameter from "./TopParameter";
import BottomParameter from "./BottomParameter";
import { AirQuality } from "@/app/types/Datatypes";

export default function Content({
  sensorData,
}: {
  sensorData: AirQuality
}) {
  

  return (
    <div className="flex flex-col">
      <TopParameter sensorData={sensorData} />
      <BottomParameter
        ws={sensorData.ws}
        wd={sensorData.wd}
        humd={sensorData.humidity}
        temp={sensorData.temperature}
        press={sensorData.pressure}
        rain={sensorData.rain_intensity}
        solar={sensorData.sr}
        uv={sensorData.uv}
      />
    </div>
  );
}
