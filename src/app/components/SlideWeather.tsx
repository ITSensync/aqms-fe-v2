import React from "react";
import LineGraph from "./LineGraph";

export default function SlideWeather() {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 p-4 mt-4">
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          KECEPATAN ANGIN
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          ARAH ANGIN
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          SUHU
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          KELEMBAPAN
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 p-4">
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          SOLAR
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          TEKANAN
        </div>
        <div className="bg-blue-light opacity-85 text-white font-bold text-center w-full p-4 rounded-box">
          SOLAR RADIASI
        </div>
      </div>
      <div className="p-4">
        <div className="w-full bg-white opacity-85 p-2 rounded-box">
          <LineGraph height={100} />
        </div>
      </div>
    </>
  );
}
