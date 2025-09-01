import React from "react";
import Navbar from "../components/Navbar";
import ContentGraph from "../components/ContentGraph";

export default function GraphPage() {
  return (
    <div
      className={`bg-[url('/bg_clean.svg')] bg-cover bg-center bg-no-repeat h-screen`}
    >
      <Navbar />
      <ContentGraph/>
    </div>
  );
}
