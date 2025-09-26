"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { useRouter } from "next/navigation";
import { locationService } from "../data/actions";
import { Location } from "../types/Datatypes";
import Link from "next/link";

export default function Navbar() {
  const [isOnline, setIsOnline] = useState(true);
  const [location, setLocation] = useState({
    lat: 0,
    long: 0,
  });
  const router = useRouter();

  const loadLocation = async () => {
    try {
      const locResponse = await locationService.getLocation();
      if (locResponse.data) {
        const locData: Location = locResponse.data;
        setLocation({
          lat: locData.lat,
          long: locData.long,
        });
      } else {
        throw {
          message: "Failed To Get Location",
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLocation();

    const interval = setInterval(loadLocation, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkOnlineStatus = async () => {
      try {
        const res = await fetch("/api/ping");
        const data = await res.json();
        setIsOnline(data.online);
      } catch {
        setIsOnline(false);
      }
    };

    // cek pertama kali
    checkOnlineStatus();

    // tambahkan event listener online/offline
    const handleOnline = () => checkOnlineStatus();
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // opsional: polling setiap beberapa detik
    const interval = setInterval(checkOnlineStatus, 300000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, []);

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="navbar bg-blue-light/80 shadow-sm w-full flex justify-center">
      <div className="h-full flex flex-col justify-between items-center my-2">
        <div className="flex flex-col items-center justify-center gap-2 my-2 hover:cursor-pointer ">
          <div className="flex flex-col items-center" onClick={handleHomeClick}>
            <Image src={"/klhk.png"} width={80} height={80} alt="klhk logo" />
            <div className="flex flex-col gap-1">
              <a className="text-2xl text-white text-center font-extrabold font-sf-pro-rounded">
                {process.env.AQMS_SITE}
              </a>

              <div className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-emerald-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="flex flex-col">
                  <a className="font-sf-pro-rounded text-sm text-blue-darkest">
                    <span className="font-extrabold">
                      {location.long.toFixed(2)}
                    </span>{" "}
                    <span className="">&deg;LS</span>
                  </a>
                  <a className="font-sf-pro-rounded text-sm text-blue-darkest">
                    <span className="font-extrabold">
                      {location.lat.toFixed(2)}
                    </span>{" "}
                    <span className="">&deg;LU</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-15 gap-12 flex flex-col">
            <Link
              href={"/report"}
              className="border-0  hover:bg-blue-darkest font-sf-pro-rounded font-black text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                  clipRule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>
            </Link>
            <Link
              href={"/graph"}
              className="border-0  hover:bg-blue-darkest font-sf-pro-rounded font-black text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 text-white"
              >
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white text-5xl"
          >
            {isOnline ? (
              <WifiIcon fontSize="inherit" />
            ) : (
              <WifiOffIcon fontSize="inherit" />
            )}
          </div>
          <DigitalClock />
        </div>
      </div>
    </div>
  );
}
