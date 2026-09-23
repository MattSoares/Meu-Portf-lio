import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  devIndicators: false,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  turbopack: { root: projectRoot },
};

export default nextConfig;
