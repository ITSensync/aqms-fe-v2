import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    AQMS_TYPE: process.env.AQMS_TYPE,
  }
};

export default nextConfig;
