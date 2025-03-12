import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const basePath = "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    BASE_PATH: basePath,
  },
  webpack: (config) => {
    config.resolve.alias = { ...(config.resolve.alias || {}), canvas: false };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
