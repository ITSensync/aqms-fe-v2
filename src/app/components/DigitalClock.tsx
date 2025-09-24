"use client";
import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  const [dateTime, setDateTime] = useState({
    time: "",
    date: "",
  });

  useEffect(() => {
    // Function to update time and date
    const updateDateTime = () => {
      const now = new Date();

      // Format time
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Format date
      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });

      setDateTime({
        time: formattedTime,
        date: formattedDate,
      });
    };

    // Initial call and set interval
    updateDateTime();
    const timerId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex flex-col items-center font-sf-pro-rounded text-white">
      <div className="text-lg font-extrabold">{dateTime.date}</div>
      <div className="text-lg font-medium ">{dateTime.time}</div>
    </div>
  );
}
