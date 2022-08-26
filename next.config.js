/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/portals',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
