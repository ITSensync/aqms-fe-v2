import React from "react";
import TextValue from "./TextValue";
import { AirQuality } from "../types/Datatypes";
import Link from "next/link";
import { IoRainyOutline } from "react-icons/io5";
import { GiSpeedometer } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";

export default function ParameterRight({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col justify-between items-end h-fit gap-16">
      {/* PM10 */}
      <div className="w-full h-full  mt-4">
        <TextValue
          icon={<IoRainyOutline size={30}/>}
          side="right"
          param="Curah Hujan"
          unit="mm/jam"
          value={sensorData.rain_intensity}
        />
      </div>
      <div className="w-full h-full  mt-4">
        <TextValue
          icon={<GiSpeedometer size={30}/>}
          side="right"
          param="Tekanan"
          unit="mBar"
          value={sensorData.pressure}
        />
      </div>
      <div className="w-full h-full mt-6">
        <TextValue
          icon={<MdOutlineWbSunny size={30}/>}
          side="right"
          param="Solar Radiasi"
          unit="w/m2"
          value={sensorData.sr}
        />
      </div>
      <div className="w-full h-full  mt-6">
        <TextValue
          icon={<TbUvIndex size={30}/>}
          side="right"
          param="UV"
          unit="-"
          value={sensorData.uv}
        />
      </div>
    </div>
  );
}
