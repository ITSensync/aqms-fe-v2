import React from "react";
import LineGraph from "./LineGraph";

export default function SlideGas() {
  return (
    <>
      <div className="grid grid-cols-5 gap-10 p-4 mt-4">
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          HC
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          SO2
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          NO3
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          O3
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          CO
        </div>
      </div>
      <div className="p-4">
        <div className="w-full bg-white opacity-85 p-2 rounded-box">
          <LineGraph height={120}/>
        </div>
      </div>
    </>
  );
}
