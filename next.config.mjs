// next.config.mjs
import path from 'path';

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      crypto: path.resolve('node_modules/crypto-browserify'), // Use a browser-friendly polyfill
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: path.resolve('node_modules/crypto-browserify'), // Ensure Webpack handles `node:crypto`
    };

    return config;
  },
};

export default nextConfig;
