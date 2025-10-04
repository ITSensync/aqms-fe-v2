import React from "react";
import GaugeFixed from "./GaugeFixed";
// import GaugeMui from "./GaugeMui";

export default function Pm({
  pm10Value = 0,
  pm25Value = 0,
}: {
  pm10Value?: number;
  pm25Value: number;
}) {
  return (
    <div className="w-1/2 bg-zinc-900/50 shadow-2xl h-full flex flex-row items-center justify-center rounded-xl">
      <GaugeFixed name="PM10" unit="μg/m3" value={pm10Value} />
      <GaugeFixed name="PM25" unit="μg/m3" value={pm25Value}/>
      {/* <GaugeMui name="PM10" unit="μg/m3" value={110}/>
      <GaugeMui name="PM25" unit="μg/m3" value={85}/> */}
    </div>
  );
}
