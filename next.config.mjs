const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const BASE_URL = 'https://imbarber.com';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? `${BASE_URL}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '' : '',
    NEXT_PUBLIC_BASE_URL: BASE_URL,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
