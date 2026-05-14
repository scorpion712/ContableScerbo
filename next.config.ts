import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO optimizations
  trailingSlash: true,
  
  // Image optimizations
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Security headers
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
};

export default nextConfig;