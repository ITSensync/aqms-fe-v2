import React from "react";
import TextValue from "./GasTextValue";

export default function Gas({
  hc,
  co,
  so2,
  o3,
  no2,
}: {
  hc?: number;
  so2: number;
  no2: number;
  o3?: number;
  co?: number;
}) {
  return (
    <div className="flex flex-col gap-6 w-1/2  h-full items-center justify-between rounded-xl p-3 overflow-x-auto overflow-y-hidden">
      <div className="flex flex-row w-full gap-6">
        <TextValue param="HC" unit="μg/m3" value={hc} />
        <TextValue param="CO" unit="μg/m3" value={co} />
        <TextValue param="SO2" unit="μg/m3" value={so2} />
      </div>
      <div className="flex flex-row w-2/3 gap-6">
        <TextValue param="O3" unit="μg/m3" value={o3} />
        <TextValue param="NO2" unit="μg/m3" value={no2} />
      </div>
    </div>
  );
}
