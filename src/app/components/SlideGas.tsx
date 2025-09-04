"use client";
import React, { useState } from "react";
import LineGraph from "./LineGraph";

export default function SlideGas() {
  const [buttonState, setButtonState] = useState({
    hc: true,
    so2: false,
    no3: false,
    o3: false,
    co: false,
  });

  const handleBtnHC = () => {
    const newState = {
      hc: true,
      so2: false,
      no3: false,
      o3: false,
      co: false,
    };

    setButtonState(newState);
  };

  const handleBtnSO2 = () => {
    const newState = {
      hc: false,
      so2: true,
      no3: false,
      o3: false,
      co: false,
    };

    setButtonState(newState);
  };

  const handleBtnNO3 = () => {
    const newState = {
      hc: false,
      so2: false,
      no3: true,
      o3: false,
      co: false,
    };

    setButtonState(newState);
  };

  const handleBtnO3 = () => {
    const newState = {
      hc: false,
      so2: false,
      no3: false,
      o3: true,
      co: false,
    };

    setButtonState(newState);
  };

  const handleBtnCO = () => {
    const newState = {
      hc: false,
      so2: false,
      no3: false,
      o3: false,
      co: true,
    };

    setButtonState(newState);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-10 p-4 mt-4">
        <div
          onClick={handleBtnHC}
          className={`${
            buttonState.hc ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          HC
        </div>
        <div
          onClick={handleBtnSO2}
          className={`${
            buttonState.so2 ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          SO2
        </div>
        <div
          onClick={handleBtnNO3}
          className={`${
            buttonState.no3 ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          NO3
        </div>
        <div
          onClick={handleBtnO3}
          className={`${
            buttonState.o3 ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          O3
        </div>
        <div
          onClick={handleBtnCO}
          className={`${
            buttonState.co ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          CO
        </div>
      </div>
      <div className="p-4">
        <div className="w-full bg-white opacity-85 p-2 rounded-box">
          <LineGraph
            param="gas"
            height={process.env.AQMS_TYPE === "supermini" ? 160 : 120}
            buttonStateGas={buttonState}
          />
        </div>
      </div>
    </>
  );
}
