/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-shared-components'],
  // Add empty turbopack config to silence the error
  turbopack: {},
}

module.exports = nextConfig