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
    <div className="flex flex-col justify-between h-[77vh]">
      <div className="flex flex-col ml-3 w-1/2 gap-4">
        <TextValue
          icon={<FaCompass />}
          param="Arah Angin"
          value={sensorData.wd}
          unit={generateWindDirection(Number(sensorData.wd))}
        />
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-4">
        <TextValue
          icon={<GiWindsock />}
          param="Kec. Angin"
          unit="mph"
          value={sensorData.ws}
        />
      </div>
      <div className="flex flex-col ml-3 w-1/2gap-4">
        <TextValue
          icon={<FaTemperatureHalf />}
          param="Suhu"
          unit="°C"
          value={sensorData.temperature}
        />
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-4">
        <TextValue
          icon={<RiWaterPercentFill />}
          param="Kelembapan"
          unit="%RH"
          value={sensorData.humidity}
        />
      </div>
    </div>
  );
}
