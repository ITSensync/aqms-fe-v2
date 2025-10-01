import React from "react";
import GaugeFixed from "./GaugeFixed";
// import GaugeMui from "./GaugeMui";

export default function Pm() {
  return (
    <div className="w-1/2 bg-zinc-900 shadow-2xl border border-neutral-800 h-full flex flex-row items-center justify-center rounded-xl">
      <GaugeFixed name="PM10" unit="μg/m3" value={10.44}/>
      <GaugeFixed name="PM25" unit="μg/m3" />
      {/* <GaugeMui name="PM10" unit="μg/m3" value={110}/>
      <GaugeMui name="PM25" unit="μg/m3" value={85}/> */}
    </div>
  );
}
