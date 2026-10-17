import type { NextConfig } from "next";

/**
 * The site is exported as plain static files and served from GitHub Pages.
 * When it is served from a sub-path (https://<user>.github.io/<repo>/),
 * NEXT_PUBLIC_BASE_PATH is set by the deploy workflow, e.g. "/fyntric-public-website".
 * Leave it empty for a custom domain or local development.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
