const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist_prod')
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(['dist_prod'])
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }  
  },
  module: {
    rules:[  
      { test: /\.tsx?$/, 
        loader: "awesome-typescript-loader",
        options: {
          useCache: true,
          transpileOnly: true,
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      }
    ]
  }

}); 

