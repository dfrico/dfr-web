const optimizedImages = require('next-optimized-images');
// https://github.com/cyrilwanner/next-optimized-images#optimization-packages
// used with [webp-loader](https://www.npmjs.com/package/webp-loader)

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = optimizedImages(
  withBundleAnalyzer(
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    })
  )
);
