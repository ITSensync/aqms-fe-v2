import React from "react";

export default function TextValue({
  param = "-",
  value = "X",
  unit = "-/-",
  side = "left",
  icon,
}: {
  param?: string;
  value?: string;
  unit?: string;
  side?: string;
  icon?: React.ReactNode;
}) {
  return (
    <>
      <p
        className={`font-sf-pro text-xl text-blue-darkest font-bold flex items-center gap-2 ${
          side === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {side === "right" ? (
          <>
            {param}
            {icon && <span className="text-blue-darkest">{icon}</span>}
          </>
        ) : (
          <>
            {icon && <span className="text-blue-darkest">{icon}</span>}
            {param}
          </>
        )}
      </p>

      <p className="font-sf-pro text-4xl text-blue-darkest font-black text-center">
        {value}
      </p>
      <p
        className={`font-sf-pro text-xl text-blue-darkest font-bold -mt-3 ${
          side === "left" && "text-end"
        }`}
      >
        {unit}
      </p>
    </>
  );
}
