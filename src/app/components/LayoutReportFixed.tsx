import React from "react";
import Navbar from "./ContentFixed/Navbar";
import Report from "./ContentFixed/Report";

export default function LayoutReportFixed() {
  return (
    <div
      className={`h-screen bg-zinc-900`}
    >
      <Navbar />
      <Report />
    </div>
  );
}
