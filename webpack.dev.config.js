const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.tsx'
  },
  devtool: 'inline-source-map',
  // dev server outputs bundled file in contentBase directory, but where you define in output property
  devServer: {
    contentBase: __dirname,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'CSS Experiment',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      template: 'src/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    mainFiles: ['index'],
    modules: ['node_modules'],
    extensions: [".ts", ".tsx", ".js", ".json"] 
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      /*,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'xml-loader'
        ]
      }*/
    ]
  },
  // exclude those library from bundling and use those as global variables for following reasons:
  // 1. reduce compilation time
  // 2. make those libaraies cachable in browser
  // caveat: when using this externals with dev server, don't specify contentBase to "dist" because
  // external's script tag like <script src=".node_modules/... can be found by dev server. instead,
  // define contentBase to root directory of your project 
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
