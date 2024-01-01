const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
};

module.exports = withMDX(nextConfig);
