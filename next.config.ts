import type { NextConfig } from "next";

const basePath = "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    BASE_PATH: basePath,
  },
};

module.exports = {
  webpack: (config: any) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
