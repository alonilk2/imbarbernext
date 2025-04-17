/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/imbarbernext',
  assetPrefix: process.env.NODE_ENV === "production" ? "/imbarbernext/" : undefined,
};

export default nextConfig;
