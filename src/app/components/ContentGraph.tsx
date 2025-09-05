"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SlideGas from "./SlideGas";
import SlideWeather from "./SlideWeather";
import SlidePm from "./SlidePm";
import { sensorDataService } from "../data/actions";
import { AirQuality } from "../types/Datatypes";

export default function ContentGraph() {
  const [sensorData, setSensorData] = useState<AirQuality[]>([]);
  const fetchData = async () => {
    try {
      const response = await sensorDataService.get("2025-09-05");
      console.log(response);

      setSensorData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <SlidePm pmData={sensorData} />
        </SwiperSlide>
        {process.env.AQMS_TYPE !== "supermini" && (
          <SwiperSlide>
            <SlideGas gasData={sensorData} />
          </SwiperSlide>
        )}
        <SwiperSlide>
          <SlideWeather weatherData={sensorData} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
