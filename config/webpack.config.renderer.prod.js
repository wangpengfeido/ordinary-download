const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonWebpackConfig = require('./webpack.config.renderer.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isAnalyze = process.argv.includes('--analyze');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/',
    libraryTarget: 'umd',
    globalObject: 'window',
    jsonpFunction: 'webpackjsonp_net_component',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
  optimization: {
    runtimeChunk: true,
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: 5,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],
});
