const merge = require('webpack-merge');
const shared = require('./webpack-production.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(shared, {
  plugins: [new BundleAnalyzerPlugin()],
});
