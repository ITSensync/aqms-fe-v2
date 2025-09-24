import React from "react";
import TextValue from "./TextValue";
import { AirQuality } from "../types/Datatypes";
import { generateWindDirection } from "../utils/windDirection";
import { FaCompass } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { GiWindsock } from "react-icons/gi";
import { RiWaterPercentFill } from "react-icons/ri";

export default function ParameterLeft({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col justify-between h-fit  gap-16">
      <div className="w-full h-full  mt-4">
        <TextValue
          icon={<FaCompass size={30}/>}
          param="Arah Angin"
          value={sensorData.wd}
          unit={generateWindDirection(Number(sensorData.wd))}
        />
      </div>
      <div className="w-full h-full  mt-4">
        <TextValue
          icon={<GiWindsock size={30}/>}
          param="Kec. Angin"
          unit="mph"
          value={sensorData.ws}
        />
      </div>
      <div className="w-full h-full  mt-6">
        <TextValue
          icon={<FaTemperatureHalf size={30}/>}
          param="Suhu"
          unit="°C"
          value={sensorData.temperature}
        />
      </div>
      <div className="w-full h-full  mt-6">
        <TextValue
          icon={<RiWaterPercentFill size={30}/>}
          param="Kelembapan"
          unit="%RH"
          value={sensorData.humidity}
        />
      </div>
    </div>
  );
}
