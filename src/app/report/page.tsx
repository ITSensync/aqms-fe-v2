import React from "react";
import Navbar from "../components/Navbar";
import ContentReport from "../components/ContentReport";

export default function ReportPage() {
  return (
    <div
      className={`bg-[url('/bg_clean.svg')] bg-cover bg-center bg-no-repeat h-screen`}
    >
      <Navbar />
      <ContentReport/>
    </div>
  );
}
