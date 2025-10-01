import React from "react";
import Navbar from "./Navbar";
import ContentGraph from "./ContentGraph";

export default function LayoutGraphMini() {
  return (
    <div
      className={`bg-[url('/bg_clean.svg')] bg-cover bg-center bg-no-repeat h-screen flex`}
    >
      <Navbar />
      <ContentGraph />
    </div>
  );
}
