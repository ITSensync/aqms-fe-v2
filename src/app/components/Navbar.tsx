"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DigitalClock from "./DigitalClock";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOnline, setIsOnline] = useState(true);
  const router = useRouter();

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
    const interval = setInterval(checkOnlineStatus, 10000);

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
          <a className="text-3xl text-white font-extrabold font-sf-pro-rounded">
            SPKUA - BANDUNG
          </a>
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
