const Webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const autoprefixer = require("autoprefixer");


module.exports = merge(common, {
  mode: 'production',
  stats: 'errors-only',
  bail: true,
  output: {
    // filename: 'js/[name].[chunkhash:8].js',
    // chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
    filename: 'js/[name].js',
    // chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // {
      //   test: /\.js$/,
      //   exclude: /src\/scripts\/custom.js/,
      //   use: 'babel-loader'
      // },
      {
        test: /\.s?css/i,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  }
});
