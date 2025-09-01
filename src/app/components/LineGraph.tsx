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

export default function LineGraph({ height = 100 }: { height: number }) {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00"],
    datasets: [
      {
        label: "",
        data: [80, 30, 40, 50, 60, 70],
        borderColor: "rgba(67, 206, 162, 1)",
        backgroundColor: "rgba(67, 206, 162, 1)",
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
        text: `Gas Data Chart`,
        font: { size: 15, family: "SF Pro Rounded" },
        color: "rgba(67, 206, 162, 1)",
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
