/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true, // TODO: Remove after I type the whole app
  },
};

module.exports = nextConfig;
