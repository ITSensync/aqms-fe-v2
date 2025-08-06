import React from "react";
import GaugeDiagram from "./GaugeDiagram";

export default function CenterParameterMini() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-row">
        <GaugeDiagram />
      </div>
      <div className="flex flex-row">
        <GaugeDiagram />
      </div>
      <div className="flex flex-row">
        <GaugeDiagram />
      </div>
    </div>
  );
}
