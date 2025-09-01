'use client';
import React from "react";
import LineGraph from "./LineGraph";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SlideGas from "./SlideGas";
import SlideWeather from "./SlideWeather";

export default function ContentGraph() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <SlideGas/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideWeather/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
