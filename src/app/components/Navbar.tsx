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
    // Set initial status
    setIsOnline(navigator.onLine);

    // Define handlers for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="navbar bg-blue-light/50 shadow-sm">
      <div className="w-full flex justify-between items-center mx-5 my-2">
        <div className="flex flex-row items-center gap-4 hover:cursor-pointer" onClick={handleHomeClick}>
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
