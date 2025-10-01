import React from "react";
import Graph from "./ContentFixed/Graph";
import Navbar from "./ContentFixed/Navbar";

export default function LayoutGraphFixed() {
  return (
    <div className={`bg-zinc-900`}>
      <Navbar />
      <Graph />
    </div>
  );
}
