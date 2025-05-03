import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mmp.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

module.exports = {
  output: 'export', // 强制静态导出
};
