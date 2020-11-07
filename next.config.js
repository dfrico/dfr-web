const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const images = require('remark-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images],
  },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    },
  ],
  [optimizedImages],
  [withBundleAnalyzer, {}],
]);
