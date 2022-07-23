const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.config.renderer.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: ['react-hot-loader/patch', path.resolve(__dirname, '../src/renderer/index.tsx')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    port: 9091,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
});
