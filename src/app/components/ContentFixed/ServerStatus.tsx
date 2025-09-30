import React from "react";

export default function ServerStatus() {
  return (
    <div className="flex flex-col font-sf-pro-rounded text-center">
      <p className="text-cyan-500 font-bold text-2xl">
        Update: <span className="font-black">24/09/25 09:05</span>
      </p>
      <div className="text-cyan-500 font-bold text-2xl">
        <span className="">
          <div className="badge badge-success"><span className="text-lg">Server Connected</span></div>
        </span>
      </div>
    </div>
  );
}
