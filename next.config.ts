import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/request',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/request-a-quote',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

