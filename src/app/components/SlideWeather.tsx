"use client";
import React, { useState } from "react";
import LineGraph from "./LineGraph";
import { AirQuality } from "../types/Datatypes";

export default function SlideWeather({
  weatherData,
}: {
  weatherData: AirQuality[];
}) {
  const [buttonState, setWeatherState] = useState({
    ws: true,
    wd: false,
    temp: false,
    hum: false,
    press: false,
    sr: false,
    rain: false,
  });

  const handleBtnWS = () => {
    setWeatherState({
      ws: true,
      wd: false,
      temp: false,
      hum: false,
      press: false,
      sr: false,
      rain: false,
    });
  };

  const handleBtnWD = () => {
    setWeatherState({
      ws: false,
      wd: true,
      temp: false,
      hum: false,
      press: false,
      sr: false,
      rain: false,
    });
  };

  const handleBtnTemp = () => {
    setWeatherState({
      ws: false,
      wd: false,
      temp: true,
      hum: false,
      press: false,
      sr: false,
      rain: false,
    });
  };

  const handleBtnHum = () => {
    setWeatherState({
      ws: false,
      wd: false,
      temp: false,
      hum: true,
      press: false,
      sr: false,
      rain: false,
    });
  };

  const handleBtnPress = () => {
    setWeatherState({
      ws: false,
      wd: false,
      temp: false,
      hum: false,
      press: true,
      sr: false,
      rain: false,
    });
  };

  const handleBtnSR = () => {
    setWeatherState({
      ws: false,
      wd: false,
      temp: false,
      hum: false,
      press: false,
      sr: true,
      rain: false,
    });
  };

  const handleBtnRain = () => {
    setWeatherState({
      ws: false,
      wd: false,
      temp: false,
      hum: false,
      press: false,
      sr: false,
      rain: true,
    });
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-10 p-4 mt-4">
        <div
          onClick={handleBtnWS}
          className={`${
            buttonState.ws ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          KECEPATAN ANGIN
        </div>
        <div
          onClick={handleBtnWD}
          className={`${
            buttonState.wd ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          ARAH ANGIN
        </div>
        <div
          onClick={handleBtnTemp}
          className={`${
            buttonState.temp ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          SUHU
        </div>
        <div
          onClick={handleBtnHum}
          className={`${
            buttonState.hum ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          KELEMBAPAN
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 p-4">
        <div
          onClick={handleBtnRain}
          className={`${
            buttonState.rain ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          CURAH HUJAN
        </div>
        <div
          onClick={handleBtnPress}
          className={`${
            buttonState.press ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          TEKANAN
        </div>
        <div
          onClick={handleBtnSR}
          className={`${
            buttonState.sr ? "bg-blue-darkest" : "bg-blue-light opacity-85"
          } text-white font-bold text-center w-full p-4 rounded-box cursor-pointer active:transition active:scale-90 active:ease-in-out`}
        >
          SOLAR RADIASI
        </div>
      </div>
      <div className="p-4">
        <div className="w-full bg-white opacity-85 p-2 rounded-box">
          <LineGraph
            param="weather"
            sensorData={weatherData}
            height={process.env.AQMS_TYPE === "supermini" ? 150 : 100}
            buttonStateWeather={buttonState}
          />
        </div>
      </div>
    </>
  );
}
