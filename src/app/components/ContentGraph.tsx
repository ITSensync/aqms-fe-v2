"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SlideGas from "./SlideGas";
import SlideWeather from "./SlideWeather";
import SlidePm from "./SlidePm";

export default function ContentGraph() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <SlidePm />
        </SwiperSlide>
        {process.env.AQMS_TYPE !== "supermini" && (
          <SwiperSlide>
            <SlideGas />
          </SwiperSlide>
        )}
        <SwiperSlide>
          <SlideWeather />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
