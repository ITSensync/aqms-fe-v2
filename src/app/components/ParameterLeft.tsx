import React from "react";

export default function ParameterLeft() {
  return (
  <div className="flex flex-col">
      {/* PM10 */}
      <div className="flex flex-col ml-3 mb-16 w-1/2 gap-0 ">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold">PM10</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold text-end -mt-3">μg/m3</p>
      </div>
      <div className="flex flex-col ml-3 mb-15 w-1/2 gap-0">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold">PM2.5</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold text-end -mt-3">μg/m3</p>
      </div>
      <div className="flex flex-col ml-3 mb-15 w-1/2 gap-0">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold">SO2</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold text-end -mt-3">μg/m3</p>
      </div>
      <div className="flex flex-col ml-3 w-1/2 gap-0">
        <p className="font-sf-pro text-2xl text-blue-darkest font-bold">O3</p>
        <p className="font-sf-pro text-7xl text-blue-darkest font-black text-center">X</p>
        <p className="font-sf-pro text-xl text-blue-darkest font-bold text-end -mt-3">μg/m3</p>
      </div>
    </div>
  );
}
