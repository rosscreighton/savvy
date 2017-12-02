/* eslint quote-props: "off" */
const webpack = require('webpack');
const merge = require('webpack-merge');
const shared = require('./webpack-shared.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
});

module.exports = merge(shared, {
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          options: { quiet: true },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: extractCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[hash]',
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  // eslint-disable-next-line global-require
                  require('autoprefixer')(),
                ],
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NoEmitOnErrorsPlugin(),
    extractCSS,
    new UglifyJSPlugin(),
  ],
});
