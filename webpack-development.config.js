const merge = require('webpack-merge');
const shared = require('./webpack-shared.config.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(shared, {
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 4000,
    hot: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
