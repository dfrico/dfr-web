import path from 'node:path';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'app/styles')],
  },
};

export default withMDX(nextConfig);