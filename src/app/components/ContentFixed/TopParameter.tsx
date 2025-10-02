import React from "react";
import Pm from "./Pm";
import Gas from "./Gas";
import { AirQuality } from "@/app/types/Datatypes";

export default function TopParameter({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="text-cyan-500 h-[calc(100vh-375px)] flex flex-row p-3 gap-4">
      <Pm
        pm10Value={sensorData.pm10}
        pm25Value={sensorData.pm25}
      />
      <Gas
        hc={sensorData.hc}
        co={sensorData.co}
        no2={sensorData.no2}
        o3={sensorData.o3}
        so2={sensorData.so2}
      />
    </div>
  );
}
