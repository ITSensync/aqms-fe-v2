import React from "react";
import Pm from "./Pm";
import Gas from "./Gas";

export default function TopParameter() {
  return (
    <div className="text-cyan-500 h-[calc(100vh-400px)] flex flex-row p-3 gap-4">
      <Pm />
      <Gas />
    </div>
  );
}
