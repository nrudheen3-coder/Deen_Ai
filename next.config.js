'use strict';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  env: {
    CUSTOM_ENV_VARIABLE: 'your_value_here',
  },
  exportTrailingSlash: true,
};

module.exports = nextConfig;