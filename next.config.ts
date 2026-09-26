import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/diagnosis": ["./src/machines/*/manual.md"],
  },
};

export default nextConfig;
