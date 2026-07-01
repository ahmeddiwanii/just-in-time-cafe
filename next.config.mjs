import path from 'path'
import { fileURLToPath } from 'url'

const projectDir = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingRoot: projectDir,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Required when testing on phone/tablet via LAN IP — otherwise /_next/* JS returns 403
  allowedDevOrigins: [
    '192.168.1.16',
    '192.168.1.16:3000',
    'localhost',
    '127.0.0.1',
  ],
  turbopack: {
    resolveAlias: {
      'tw-animate-css': path.join(projectDir, 'node_modules/tw-animate-css/dist/tw-animate.css'),
    },
  },
}

export default nextConfig
