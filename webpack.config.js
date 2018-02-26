const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');
const path = require('path');

module.exports = {
  entry: {
    app: './src/scripts/app.js' ,
    settings: './src/scripts/settings.js' ,
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    filename: "./dist/[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.(s)*css$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'shared',
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      filename: "./dist/index.app.html",
      title: "Wepack Learning",
      hash: true,
      chunks: ['vendor', 'shared', 'app']
    }),
    new HtmlWebpackPlugin({
      filename: "./dist/index.settings.html",
      title: "Wepack Learning",
      hash: true,
      chunks: ['vendor', 'shared', 'settings']
    }),
    new ExtractTextWebpackPlugin(
      'dist/app.bundle.css'
    )
  ]
}