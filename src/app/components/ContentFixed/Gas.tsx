import React from "react";
import TextValue from "./GasTextValue";

export default function Gas() {
  return (
    <div className="flex flex-col gap-6 w-1/2  h-full items-center justify-between rounded-xl p-3">
      <div className="flex flex-row w-full gap-6">
        <TextValue param="HC" unit="μg/m3" value={40} />
        <TextValue param="CO" unit="μg/m3" value={150} />
        <TextValue param="SO2" unit="μg/m3" value={32} />
      </div>
      <div className="flex flex-row w-2/3 gap-6">
        <TextValue param="O3" unit="μg/m3" value={55} />
        <TextValue param="NO2" unit="μg/m3" value={120.5} />
      </div>
    </div>
  );
}
