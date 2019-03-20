const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'vocabs',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      template: 'src/index.html',
      inject: true
    }),
  ],
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
        }
      },
      { test: /\.tsx?$/, 
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
                outputPath: 'images',
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader'
        ]
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'file-loader'
        ]
      }
    //]
      //{
        //test: /\.(csv|tsv)$/,
        //include: path.resolve(__dirname, 'src'),
        //use: [
          //'csv-loader'
        //]
      //},
      //{
        //test: /\.xml$/,
        //include: path.resolve(__dirname, 'src'),
        //use: [
          //'xml-loader'
        //]
      //}
    ]
  }
  // exclude those library from bundling and use those as global variables for following reasons:
  // 1. reduce compilation time
  // 2. make those libaraies cachable in browser
  // caveat: when using this externals with dev server, don't specify contentBase to "dist" because
  // external's script tag like <script src=".node_modules/... can be found by dev server. instead,
  // define contentBase to root directory of your project
  // **** stop using this because of inconsistency of public directory
  // this property need to set script tag and path to node_modules umd path for react. however, usually we don't include node modules directory in public directory so it is difficult manage.
  //externals: {
    //"react": "React",
    //"react-dom": "ReactDOM"
  //}
};

