"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { useRouter } from "next/navigation";
import { locationService } from "../data/actions";
import { Location } from "../types/Datatypes";

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
    <div className="navbar bg-blue-light/50 shadow-sm">
      <div className="w-full flex justify-between items-center mx-5 my-2">
        <div
          className="flex flex-row items-center gap-4 hover:cursor-pointer"
          onClick={handleHomeClick}
        >
          <Image src={"/klhk.png"} width={80} height={80} alt="klhk logo" />
          <div className="flex flex-col gap-1">
            <a className="text-3xl text-white font-extrabold font-sf-pro-rounded">
              SPKU - {process.env.AQMS_SITE}
            </a>
            <div className="flex flex-row gap-2 align-middle items-center">
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

              <a className="font-sf-pro-rounded text-lg text-blue-darkest">
                <span className="font-extrabold">{location.lat.toFixed(3)}</span>{" "}
                <span className="">&deg;LU</span>
              </a>
              <a className="font-sf-pro-rounded text-lg text-blue-darkest">,</a>
              <a className="font-sf-pro-rounded text-lg text-blue-darkest">
                <span className="font-extrabold">{location.long.toFixed(3)}</span>{" "}
                <span className="">&deg;LS</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="dropdown dropdown-end">
            <DigitalClock />
          </div>
          <div className="dropdown dropdown-end">
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
          </div>
        </div>
      </div>
    </div>
  );
}
