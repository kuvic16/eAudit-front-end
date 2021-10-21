const Path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');


module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     name: false
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' },
      { from: Path.resolve(__dirname, '../src/images'), to: 'src/images' },
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/annual-audit-plan-new-form.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'annual-audit-plan-form.html',
      template: Path.resolve(__dirname, '../src/annual-audit-plan-form.html'),
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'schedule-step1.html',
      template: Path.resolve(__dirname, '../src/schedule-step1.html'),
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'schedule-step2.html',
      template: Path.resolve(__dirname, '../src/schedule-step2.html'),
      inject: true,
    }),
    
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),

    // new AddAssetHtmlPlugin({ 
    //   filepath: require.resolve('../src/scripts/custom.js'), 
    //   // outputPath:  "js"
    // }),
  
    // new HtmlWebpackPlugin({
    //   filename: 'dashboard-home.html',
    //   template: Path.resolve(__dirname, '../src/dashboard.html'),
    //   inject: true,
    // }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
