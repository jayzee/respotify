const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: './src/index.js',
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    javascript: PATHS.app
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist
  }
};
