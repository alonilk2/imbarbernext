/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/imbarbernext' : '',
  trailingSlash: true,
  assetPrefix: '/imbarbernext/',
};

export default nextConfig;
