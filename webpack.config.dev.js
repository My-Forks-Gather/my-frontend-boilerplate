const path = require('path')
const StylishPlugin = require('webpack-stylish')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractCSSPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'development',
  stats: 'none',
  devtool: 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [ExtractCSSPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|otf|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new StylishPlugin(),
    new ExtractCSSPlugin(),
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}

module.exports = config
