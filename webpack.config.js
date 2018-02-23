const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const pkg = require('./package.json');
const path = require('path');

console.log(CommonsChunkPlugin);

//console.log(this);

// console.log("PATH: ", path.resolve("./dist"));

module.exports = {
  entry: {
    app: './src/scripts/app.js' ,
    settings: './src/scripts/settings.js' ,
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    filename: "./dist/[name].bundle.js"
  },
  // watch: true,
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
    })
  ]
}