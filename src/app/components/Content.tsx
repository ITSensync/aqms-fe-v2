"use client";
import React, { useEffect, useState } from "react";
import ParameterLeft from "./ParameterLeft";
import ParameterRight from "./ParameterRight";
import CenterParameter from "./CenterParameter";
import CenterParameterMini from "./CenterParameterMini";
// import { sensorDataService } from "../data/actions";
import { AirQuality } from "../types/Datatypes";
import ParameterLeftMini from "./ParameterLeftMini";
import ParameterRightMini from "./ParameterRightMini";
import CenterParameterSuperMini from "./CenterParameterSuperMini";

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
    uv: "",
    rain_intensity: "",
    stat_conn: "",
    feedback: "",
    feedback2: "",
  });

  const wsFetch = () => {
    const ws = new WebSocket(`${process.env.WS_URL as string}`);

    ws.onopen = () => {
      console.log("Websocket Connected");
      ws.send('');
    };

    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      const particulateResult: AirQuality = receivedData;
      setSensorData(particulateResult);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.close();
    };
  };

  /* const fetchData = async () => {
    const dummy = {
      id: "272",
      tanggal: "2025-08-07",
      jam: "14:20:00",
      hc: "20",
      o3: "10.5",
      co: "80.4",
      no2: "20",
      so2: "23",
      pm25: "6",
      pm10: "40",
      ws: "140",
      wd: "21",
      humidity: "20",
      temperature: "27",
      pressure: "4",
      sr: "5",
      rain_intensity: "10",
      stat_conn: "ada",
      feedback: '{"status":"success","inserted":1,"failed":0}',
      feedback2: '{"status":"received","inserted":1,"failed":0}',
    };

    // const responseData = await sensorDataService.getlatest();
    setSensorData(dummy);
  }; */

  useEffect(() => {
    // fetchData();
    wsFetch();
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/3 px-12 pt-12">
        {process.env.AQMS_TYPE === "mini" ||
        process.env.AQMS_TYPE === "supermini" ? (
          <ParameterLeftMini sensorData={sensorData} />
        ) : (
          <ParameterLeft sensorData={sensorData} />
        )}
      </div>
      <div className="w-1/3 px-12 pt-12">
        {process.env.AQMS_TYPE === "mini" ? (
          <CenterParameterMini sensorData={sensorData} />
        ) : process.env.AQMS_TYPE === "supermini" ? (
          <CenterParameterSuperMini sensorData={sensorData} />
        ) : (
          <CenterParameter sensorData={sensorData} />
        )}
      </div>
      <div className="w-1/3 px-12 pt-12">
        {process.env.AQMS_TYPE === "mini" ||
        process.env.AQMS_TYPE === "supermini" ? (
          <ParameterRightMini sensorData={sensorData} />
        ) : (
          <ParameterRight sensorData={sensorData} />
        )}
      </div>
    </div>
  );
}
