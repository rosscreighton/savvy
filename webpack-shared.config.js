/* eslint quote-props: "off" */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const babel = require('babel-core');

function extractRoutes() {
  const routes = [];
  babel.transformFileSync('./src/components/Router/Router.js')
    .code
    // not replacing anything. this is simpler that string.exec() + a while loop
    .replace(/ path: '\/(\w+)' /g, (match, route) => routes.push(route));
  return routes;
}

const routes = extractRoutes();

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
    new HTMLWebpackPlugin({ template: './src/index.template.html' }),
    //new CopyWebpackPlugin([{ from: './src/images', to: 'images' }]),
  ].concat(routes.map(route => (
    new HTMLWebpackPlugin({ template: './src/index.template.html', filename: `${route}/index.html` })
  ))),
};
