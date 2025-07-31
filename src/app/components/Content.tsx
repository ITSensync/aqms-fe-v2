import React from "react";
import ParameterLeft from "./ParameterLeft";
import ParameterRight from "./ParameterRight";

export default function Content() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/3 px-12 pt-12">
        <ParameterLeft />
      </div>
      <div className="bg-red-300 w-1/3">
        <p className="text-2xl">TES 2</p>
      </div>
      <div className="w-1/3 px-12 pt-11">
        <ParameterRight />
      </div>
    </div>
  );
}
