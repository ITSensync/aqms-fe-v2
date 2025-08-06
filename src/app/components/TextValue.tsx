import React from "react";

export default function TextValue({
  param = "Tes",
  value = "X",
  unit = "μg/m3",
  side = "left",
}: {
  param?: string;
  value?: string;
  unit?: string;
  side?: string;
}) {
  return (
    <>
      <p className={`font-sf-pro text-2xl text-blue-darkest font-bold ${side === 'right' && 'text-end'}`}>
        {param}
      </p>
      <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">
        {value}
      </p>
      <p className={`font-sf-pro text-xl text-blue-darkest font-bold -mt-3 ${side === 'left' && 'text-end'}`}>
        {unit}
      </p>
    </>
  );
}
