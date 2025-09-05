import React, { useState } from "react";
import LineGraph from "./LineGraph";

export default function SlidePm() {
  const [buttonState, setPmState] = useState({
    pm10: process.env.AQMS_TYPE === "normal",
    pm25: process.env.AQMS_TYPE !== "normal",
  });

  const handleBtnPm10 = () => {
    setPmState({
      pm10: true,
      pm25: false,
    });
  };

  const handleBtnPm25 = () => {
    setPmState({
      pm10: false,
      pm25: true,
    });
  };

  return (
    <>
      <div
        className={`grid ${
          process.env.AQMS_TYPE === "normal" ? "grid-cols-2" : "grid-cols-1"
        } gap-10 p-4 mt-4`}
      >
        {process.env.AQMS_TYPE === "normal" && (
          <div
            onClick={handleBtnPm10}
            className={`${
              buttonState.pm10 ? "bg-blue-darkest" : "bg-blue-light opacity-85"
            } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
          >
            PM10
          </div>
        )}
        <div
          onClick={handleBtnPm25}
          className={`${
            buttonState.pm25 ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          PM25
        </div>
      </div>
      <div className="p-4">
        <div className="w-full bg-white opacity-85 p-2 rounded-box">
          <LineGraph
            param="pm"
            height={process.env.AQMS_TYPE === "supermini" ? 150 : 120}
            buttonStatePm={buttonState}
          />
        </div>
      </div>
    </>
  );
}
