/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
