import React from "react";
import TextValue from "./TextValue";
import { AirQuality } from "../types/Datatypes";
import Link from "next/link";

export default function ParameterRightMini({
  sensorData,
}: {
  sensorData: AirQuality;
}) {
  return (
    <div className="flex flex-col justify-end items-end gap-16">
      {/* PM10 */}
      <div className="flex flex-col mr-3 w-1/2 gap-4">
        <TextValue
          side="right"
          param="Curah Hujan"
          unit="mm/jam"
          value={sensorData.rain_intensity}
        />
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-4">
        <TextValue
          side="right"
          param="Tekanan"
          unit="mBar"
          value={sensorData.pressure}
        />
      </div>
      <div className="flex flex-col mr-3 w-1/2 gap-5">
        <TextValue
          side="right"
          param="Solar Radiasi"
          unit="w/m2"
          value={sensorData.sr}
        />
      </div>
      {/* <div className="flex flex-col mr-3 w-1/2 gap-4">
        <TextValue side="right" />
      </div> */}
      <div className="flex flex-col gap-4">
        <Link href={"/report"}>
          <button className="btn btn-xl bg-blue-darkest border-0 hover:bg-blue-950 font-sf-pro-rounded font-black">
            Lihat Laporan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                clipRule="evenodd"
              />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
          </button>
        </Link>
        <Link href={"/graph"}>
          <button className="btn btn-xl bg-blue-darkest border-0 hover:bg-blue-950 font-sf-pro-rounded font-black">
            Grafik / Trend{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
