/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ytimg.com',
        //   port: '',
        //   pathname: '/account123/**',
        },
      ],
    },
  }
