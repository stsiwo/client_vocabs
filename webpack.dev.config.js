const path = require('path');
const merge = require('webpack-merge');
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const common = require('./webpack.common.config.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // dev server outputs bundled file in contentBase directory, but where you define in output property
  devServer: {
    contentBase: __dirname,
    hot: true,
    historyApiFallback: true,
    port: 8080
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist_dev'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist_dev'])
  ],
  module: {
    rules:[  
      { test: /\.tsx?$/, 
        loader: "awesome-typescript-loader",
        options: {
          // when include 'transpileOnly', compiler start ignore all type error so remove when dev
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      }
    ]
  }
}); 
