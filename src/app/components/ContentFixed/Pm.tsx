import React from "react";
import GaugeFixed from "./GaugeFixed";

export default function Pm() {
  return (
    <div className="w-1/2 bg-zinc-900 shadow-2xl border border-neutral-800 h-full flex flex-row items-center justify-center rounded-xl p-3">
      <GaugeFixed />
      <GaugeFixed />
    </div>
  );
}
