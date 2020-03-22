const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ANALYZE_BUILD = process.env.ANALYZE_BUILD === '1';

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.ts'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        oneOf: [
          {
            test: /\.(ts)$/,
            use: [
              {
                loader: 'ts-loader',
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: ANALYZE_BUILD ? 'static' : 'disabled',
    }),
  ],
  devtool: false,
  stats: {
    assets: true,
    children: false,
    entrypoints: false,
    chunks: false,
    colors: true,
    performance: false,
    usedExports: false,
    modules: false,
  },
};
