import React from "react";
import LayoutGraphFixed from "../components/LayoutGraphFixed";
import LayoutGraphMini from "../components/LayoutGraphMini";

export default function GraphPage() {
  return (
    <>
      {process.env.AQMS_TYPE === "fixed" ? (
        <LayoutGraphFixed />
      ) : (
        <LayoutGraphMini />
      )}
    </>
  );
}
