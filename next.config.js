/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
