/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable React Strict Mode in development
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Set to true for a 301 redirect, false for a 302 redirect
      },
    ];
  },
};

export default nextConfig;
