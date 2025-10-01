import React from "react";
import Navbar from "../components/Navbar";
import ContentReport from "../components/ContentReport";

export default function LayoutReportMini() {
  return (
    <div
      className={`bg-[url('/bg_clean.svg')] bg-cover bg-center bg-no-repeat h-screen flex w-screen`}
    >
      <Navbar />
      <ContentReport/>
    </div>
  );
}
