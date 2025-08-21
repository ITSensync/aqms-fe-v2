"use client";
import React, { useEffect, useState } from "react";
import ParameterLeft from "./ParameterLeft";
import ParameterRight from "./ParameterRight";
import CenterParameter from "./CenterParameter";
import CenterParameterMini from "./CenterParameterMini";
import { sensorDataService } from "../data/actions";
import { AirQuality } from "../types/Datatypes";
import ParameterLeftMini from "./ParameterLeftMini";
import ParameterRightMini from "./ParameterRightMini";

export default function Content() {
  const [sensorData, setSensorData] = useState<AirQuality>({
    id: "",
    tanggal: "",
    jam: "",
    no2: "",
    so2: "",
    pm25: "",
    ws: "",
    wd: "",
    humidity: "",
    temperature: "",
    pressure: "",
    sr: "",
    rain_intensity: "",
    stat_conn: "",
    feedback: "",
    feedback2: "",
  });

  const fetchData = async () => {
    const dummy = {
      id: "272",
      tanggal: "2025-08-07",
      jam: "14:20:00",
      no2: "20",
      so2: "23",
      pm25: "6",
      ws: "0",
      wd: "0",
      humidity: "0",
      temperature: "0",
      pressure: "0",
      sr: "0",
      rain_intensity: "0",
      stat_conn: "ada",
      feedback: '{"status":"success","inserted":1,"failed":0}',
      feedback2: '{"status":"received","inserted":1,"failed":0}',
    };

    const responseData = await sensorDataService.getlatest();
    setSensorData(responseData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/3 px-12 pt-12">
        {process.env.AQMS_TYPE === "mini" ? (
          <ParameterLeftMini sensorData={sensorData} />
        ) : (
          <ParameterLeft sensorData={sensorData} />
        )}
      </div>
      <div className="w-1/3 px-12 pt-12">
        {process.env.AQMS_TYPE === "mini" ? (
          <CenterParameterMini sensorData={sensorData} />
        ) : (
          <CenterParameter sensorData={sensorData} />
        )}
      </div>
      <div className="w-1/3 px-12 pt-11">
        {process.env.AQMS_TYPE === "mini" ? (
          <ParameterRightMini sensorData={sensorData} />
        ) : (
          <ParameterRight sensorData={sensorData} />
        )}
      </div>
    </div>
  );
}
