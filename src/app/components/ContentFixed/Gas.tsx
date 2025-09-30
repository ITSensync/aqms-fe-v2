import React from "react";

export default function Gas() {
  return (
    <div className="grid grid-cols-3 gap-4 w-1/2 bg-zinc-900 shadow-2xl border border-neutral-800 h-full items-center justify-center rounded-xl p-3">
      <div className="flex flex-col items-center justify-center border border-neutral-800 gap-4 p-5 rounded-xl">
        <p>HC</p>
        <p>100</p>
        <p>μg/m3</p>
      </div>
      <div className="flex flex-col items-center justify-center border border-neutral-800 gap-4 p-5 rounded-xl">
        <p>HC</p>
        <p>100</p>
        <p>μg/m3</p>
      </div>
      <div className="flex flex-col items-center justify-center border border-neutral-800 gap-4 p-5 rounded-xl">
        <p>HC</p>
        <p>100</p>
        <p>μg/m3</p>
      </div>
    </div>
  );
}
