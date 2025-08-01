import React from "react";
import ParameterLeft from "./ParameterLeft";
import ParameterRight from "./ParameterRight";
import CenterParameter from "./CenterParameter";

export default function Content() {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/3 px-12 pt-12">
        <ParameterLeft />
      </div>
      <div className="w-1/3 px-12 pt-12">
        <CenterParameter/>
      </div>
      <div className="w-1/3 px-12 pt-11">
        <ParameterRight />
      </div>
    </div>
  );
}
