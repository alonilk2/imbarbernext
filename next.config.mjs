const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const BASE_URL = 'https://alonilk2.github.io';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/imbarbernext' : '',
  assetPrefix: isProd ? `${BASE_URL}/imbarbernext/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/imbarbernext' : '',
    NEXT_PUBLIC_BASE_URL: BASE_URL,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
