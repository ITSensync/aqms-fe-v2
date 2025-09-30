import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function LayoutMini() {
  return (
    <div
      className={`${
        process.env.AQMS_TYPE === "mini"
          ? `bg-[url('/bg-alt.svg')]`
          : process.env.AQMS_TYPE === "supermini"
          ? `bg-[url('/bg_super_mini_v2.svg')]`
          : `bg-[url('/bg-alt.svg')]`
      } bg-cover bg-center bg-no-repeat h-screen flex`}
    >
      <Navbar />
      <Content />
    </div>
  );
}
