import React from "react";
import TextValue from "./TextValue";

export default function ParameterRight() {
  return (
    <div className="flex flex-col justify-end items-end">
      {/* PM10 */}
      <div className="flex flex-col mr-3 mb-15 w-1/2 gap-0 ">
        <TextValue side="right" />
      </div>
      <div className="flex flex-col mr-3 mb-15 w-1/2 gap-0">
        <TextValue side="right" />
      </div>
      <div className="flex flex-col mr-3 mb-15 w-1/2 gap-0">
        <TextValue side="right" />
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-0">
        <TextValue side="right" />
      </div>
    </div>
  );
}
