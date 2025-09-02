"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

// Dynamically import ApexCharts to prevent SSR issues
type StateGas = {
  hc: boolean;
  so2: boolean;
  no3: boolean;
  o3: boolean;
  co: boolean;
};

type StateWeather = {
  ws: boolean;
  wd: boolean;
  temp: boolean;
  hum: boolean;
  press: boolean;
  sr: boolean;
  rain: boolean;
};

export default function LineGraph({
  param,
  buttonStateGas = { hc: false, so2: false, no3: false, o3: false, co: false },
  buttonStateWeather = {
    ws: false,
    wd: false,
    temp: false,
    hum: false,
    press: false,
    sr: false,
    rain: false,
  },
  height = 100,
}: {
  param: string;
  buttonStateGas?: StateGas;
  buttonStateWeather?: StateWeather;
  height: number;
}) {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const generateColorGas = (state: StateGas) => {
    switch (true) {
      case state.hc:
        return "rgba(255, 138, 128, 0.8)"; // soft coral / merah pastel
      case state.so2:
        return "rgba(255, 183, 77, 0.8)"; // soft orange pastel
      case state.no3:
        return "rgba(129, 212, 250, 0.8)"; // soft sky blue pastel
      case state.o3:
        return "rgba(174, 213, 129, 0.8)"; // soft green pastel
      case state.co:
        return "rgba(186, 104, 200, 0.8)"; // soft purple pastel
      default:
        return "rgba(0, 0, 0, 1)"; // default hitam
    }
  };

  const generateColorWeather = (state: StateWeather) => {
    switch (true) {
      case state.ws:
        return "rgba(255, 0, 0, 1)"; // merah terang
      case state.wd:
        return "rgba(255, 165, 0, 1)"; // oranye
      case state.temp:
        return "rgba(0, 123, 255, 1)"; // biru
      case state.hum:
        return "rgba(0, 200, 83, 1)"; // hijau
      case state.press:
        return "rgba(156, 39, 176, 1)"; // ungu
      case state.rain:
        return "rgba(33, 150, 243, 1)"; // biru muda
      case state.sr:
        return "rgba(255, 193, 7, 1)"; // kuning emas
      default:
        return "rgba(0, 0, 0, 1)"; // hitam
    }
  };

  const generateTextGas = (state: StateGas) => {
    switch (true) {
      case state.hc:
        return "HC"; // soft coral / merah pastel
      case state.so2:
        return "SO2"; // soft orange pastel
      case state.no3:
        return "NO3"; // soft sky blue pastel
      case state.o3:
        return "O3"; // soft green pastel
      case state.co:
        return "CO"; // soft purple pastel
      default:
        return "-"; // default hitam
    }
  };

  const generateTextWeather = (state: StateWeather) => {
    switch (true) {
      case state.ws:
        return "Kecepatan Angin";
      case state.wd:
        return "Arah Angin";
      case state.temp:
        return "Suhu";
      case state.press:
        return "Tekanan";
      case state.hum:
        return "Kelembapan";
      case state.rain:
        return "Curah Hujan";
      case state.sr:
        return "Solar Radiasi";
      default:
        return "-";
    }
  };

  const data = {
    labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00"],
    datasets: [
      {
        label: "",
        data: [80, 30, 40, 50, 60, 70],
        borderColor:
          param === "gas"
            ? generateColorGas(buttonStateGas)
            : generateColorWeather(buttonStateWeather),
        backgroundColor:
          param === "gas"
            ? generateColorGas(buttonStateGas)
            : generateColorWeather(buttonStateWeather),
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${
          param === "gas"
            ? generateTextGas(buttonStateGas)
            : generateTextWeather(buttonStateWeather)
        } Data Chart`,
        font: { size: 20, family: "SF Pro Rounded" },
        color: param === "gas"
            ? generateColorGas(buttonStateGas)
            : generateColorWeather(buttonStateWeather),
      },
    },
  };

  return (
    <Line
      data={data}
      options={options}
      height={height}
      className="p-4 font-sf-pro"
    />
  );
}
