import React from "react";
import TextValue from "./TextValue";

export default function ParameterLeft() {
  return (
  <div className="flex flex-col">
      <div className="flex flex-col ml-3 mb-16 w-1/2 gap-0 ">
        <TextValue/>
      </div>
      <div className="flex flex-col ml-3 mb-15 w-1/2 gap-0">
        <TextValue/>
      </div>
      <div className="flex flex-col ml-3 mb-15 w-1/2 gap-0">
        <TextValue/>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-0">
        <TextValue/>
      </div>
    </div>
  );
}
