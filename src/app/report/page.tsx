import React from "react";
import LayoutReportFixed from "../components/LayoutReportFixed";
import LayoutReportMini from "../components/LayoutReportMinit";

export default function ReportPage() {
  return (
    <>
      {process.env.AQMS_TYPE === "fixed" ? (
        <LayoutReportFixed />
      ) : (
        <LayoutReportMini />
      )}
    </>
  );
}
