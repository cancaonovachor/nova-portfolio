const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { merge } = require('webpack-merge');

const nextConfig = {
  distDir: './.next',
  env: {
    MICRO_CMS_HOST: process.env.MICRO_CMS_HOST,
    MICRO_CMS_API_KEY: process.env.MICRO_CMS_API_KEY,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' };
    }

    return merge(config, {
      resolve: {
        alias: {
          '': path.resolve(__dirname),
          firebaseui: 'firebaseui-ja',
        },
      },
    });
  },
};

module.exports = withBundleAnalyzer(nextConfig);
