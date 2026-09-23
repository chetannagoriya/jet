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
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/favicon.svg',
      },
    ];
  },
};

export default nextConfig;

