/* eslint quote-props: "off" */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'normalize.css',
      'regenerator-runtime/runtime',
      './src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.template.html', inject: false, }),
    //new CopyWebpackPlugin([{ from: './src/images', to: 'images' }]),
  ],
};
