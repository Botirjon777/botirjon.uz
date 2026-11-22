/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Old per-repository pages are gone; the showcase lives on /projects.
  async redirects() {
    return [
      { source: "/projects/:slug", destination: "/projects", permanent: true },
      { source: "/:locale(en|ru|uz)/projects/:slug", destination: "/:locale/projects", permanent: true },
    ];
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
